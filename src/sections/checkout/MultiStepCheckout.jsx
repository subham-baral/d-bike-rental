"use client";

import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import SignaturePad from './SignaturePad';
import UpiPayButton from './UpiPayButton';

// Dummy vehicle inventory simulating Laravel backend database
export const DUMMY_VEHICLES = [
  {
    registrationNumber: "OD-13-AK-4582",
    model: "Honda Activa 6G (110cc)",
    category: "Scooty",
    ratePerHour: 50,
    ratePerDay: 400,
    deposit: 500,
    fuel: "Petrol",
    color: "Pearl Siren Blue",
    engine: "109.51 cc",
    available: true
  },
  {
    registrationNumber: "OD-13-BK-9120",
    model: "TVS Jupiter 125 (125cc)",
    category: "Scooty",
    ratePerHour: 60,
    ratePerDay: 450,
    deposit: 500,
    fuel: "Petrol",
    color: "Titanium Grey",
    engine: "124.8 cc",
    available: true
  },
  {
    registrationNumber: "OD-13-CL-3319",
    model: "Royal Enfield Classic 350",
    category: "Cruiser Bike",
    ratePerHour: 120,
    ratePerDay: 900,
    deposit: 1500,
    fuel: "Petrol",
    color: "Stealth Black",
    engine: "349 cc",
    available: true
  },
  {
    registrationNumber: "OD-02-DM-7804",
    model: "Yamaha FZ-S V4 FI (150cc)",
    category: "Sports Bike",
    ratePerHour: 90,
    ratePerDay: 700,
    deposit: 1000,
    fuel: "Petrol",
    color: "Racing Blue",
    engine: "149 cc",
    available: true
  },
  {
    registrationNumber: "OD-13-EP-1155",
    model: "Suzuki Access 125 BT",
    category: "Scooty",
    ratePerHour: 55,
    ratePerDay: 450,
    deposit: 500,
    fuel: "Petrol",
    color: "Matte Platinum Silver",
    engine: "124 cc",
    available: true
  },
  {
    registrationNumber: "OD-13-FR-6298",
    model: "Bajaj Pulsar 150 Neon",
    category: "Standard Bike",
    ratePerHour: 80,
    ratePerDay: 650,
    deposit: 1000,
    fuel: "Petrol",
    color: "Neon Lime Green",
    engine: "149.5 cc",
    available: true
  }
];

// Document ID validator helper
const validateDocumentId = (docType, docId) => {
  if (!docId || docId.trim() === '') return false;
  const cleanId = docId.trim();

  switch (docType) {
    case 'aadhaar':
      // Aadhaar: Exactly 12 digits (spaces removed)
      return /^\d{12}$/.test(cleanId.replace(/\s+/g, ''));
    case 'pan':
      // PAN: 5 letters, 4 numbers, 1 letter
      return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i.test(cleanId);
    case 'dl':
      // Driving Licence: typically 10 to 18 alphanumeric chars
      return /^[A-Z0-9-]{8,20}$/i.test(cleanId);
    case 'passport':
      // Passport: 1 letter followed by 7 digits or standard 8 alphanumeric
      return /^[A-Z][0-9]{7,8}$/i.test(cleanId);
    case 'visa':
      // Visa number
      return /^[A-Z0-9]{6,15}$/i.test(cleanId);
    case 'other':
      return cleanId.length >= 4;
    default:
      return cleanId.length >= 4;
  }
};

// Zod Schema
const checkoutSchema = z.object({
  // Step 1: Identity & KYC
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  fatherName: z.string().min(2, "Father's name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  address: z.string().min(5, "Please enter your detailed address"),
  district: z.string().min(2, "District is required"),
  state: z.string().min(2, "State is required"),
  country: z.string().min(2, "Country is required"),
  pincode: z.string().regex(/^\d{6}$/, "Pin code must be exactly 6 digits"),
  documentType: z.enum(['aadhaar', 'pan', 'dl', 'visa', 'passport', 'other'], {
    required_error: "Please select a document type",
  }),
  documentId: z.string().min(1, "Document number is required"),

  // Step 2: Vehicle & Rental Duration
  vehicleRegistration: z.string().min(1, "Please select a vehicle registration number"),
  pickupDateTime: z.string().min(1, "Pickup execution date and time is required"),
  returnDateTime: z.string().min(1, "Expected return date and time is required"),

  // Step 3: Terms & Conditions
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms & conditions to proceed" }),
  }),

  // Step 4: E-Signature
  signature: z.string().min(10, "Please draw your electronic signature before submitting"),
}).superRefine((data, ctx) => {
  // Validate Document ID based on Document Type
  if (!validateDocumentId(data.documentType, data.documentId)) {
    let msg = "Invalid document number format";
    if (data.documentType === 'aadhaar') msg = "Aadhaar number must be exactly 12 digits";
    if (data.documentType === 'pan') msg = "PAN must be in valid format (e.g. ABCDE1234F)";
    if (data.documentType === 'dl') msg = "Driving licence must be 8-20 characters";
    if (data.documentType === 'passport') msg = "Passport must start with letter followed by 7 digits";
    if (data.documentType === 'visa') msg = "Visa number must be 6-15 alphanumeric characters";

    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['documentId'],
      message: msg,
    });
  }

  // Validate dates
  if (data.pickupDateTime && data.returnDateTime) {
    const pickup = new Date(data.pickupDateTime);
    const drop = new Date(data.returnDateTime);
    if (drop <= pickup) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['returnDateTime'],
        message: "Expected return time must be after the execution pickup time",
      });
    }
  }
});

const MultiStepCheckout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [vehicles, setVehicles] = useState(DUMMY_VEHICLES);
  const [loadingVehicles, setLoadingVehicles] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [bookingResult, setBookingResult] = useState(null);

  // Default default date-times: pickup = now rounded to next hour, return = +24h
  const getDefaultDateTime = (addHours = 1) => {
    const now = new Date();
    now.setHours(now.getHours() + addHours);
    now.setMinutes(0, 0, 0);
    // Format YYYY-MM-DDTHH:mm
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    trigger,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      fatherName: "",
      email: "",
      phone: "",
      address: "",
      district: "Puri",
      state: "Odisha",
      country: "India",
      pincode: "",
      documentType: "aadhaar",
      documentId: "",
      vehicleRegistration: DUMMY_VEHICLES[0].registrationNumber,
      pickupDateTime: getDefaultDateTime(1),
      returnDateTime: getDefaultDateTime(25),
      agreeTerms: false,
      signature: ""
    }
  });

  const selectedDocType = watch("documentType");
  const selectedReg = watch("vehicleRegistration");
  const pickupTime = watch("pickupDateTime");
  const returnTime = watch("returnDateTime");
  const capturedSignature = watch("signature");

  const selectedVehicle = vehicles.find(v => v.registrationNumber === selectedReg) || vehicles[0];

  // Try fetching vehicle registration numbers from backend API if available, fallback to dummy
  useEffect(() => {
    const fetchVehiclesFromBackend = async () => {
      try {
        setLoadingVehicles(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL || ''}/api/vehicles/active-fleet`, {
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setVehicles(data);
            setValue("vehicleRegistration", data[0].registrationNumber);
          }
        }
      } catch (err) {
        // Fallback to dummy data
        console.log("Using local vehicle fleet data:", err.message);
      } finally {
        setLoadingVehicles(false);
      }
    };
    fetchVehiclesFromBackend();
  }, [setValue]);

  // Calculate rental duration & estimate
  const calculateFare = () => {
    if (!pickupTime || !returnTime) return { hours: 0, days: 0, rentalCost: 0, deposit: 0, total: 0 };
    const start = new Date(pickupTime);
    const end = new Date(returnTime);
    const diffMs = end - start;
    if (diffMs <= 0) return { hours: 0, days: 0, rentalCost: 0, deposit: 0, total: 0 };

    const diffHours = Math.ceil(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffHours / 24);
    const remainingHours = diffHours % 24;

    const rateDay = selectedVehicle?.ratePerDay || 400;
    const rateHour = selectedVehicle?.ratePerHour || 50;
    const deposit = selectedVehicle?.deposit || 500;

    let rentalCost = 0;
    if (days >= 1) {
      rentalCost = (days * rateDay) + (remainingHours * rateHour);
    } else {
      rentalCost = Math.min(diffHours * rateHour, rateDay);
    }

    return {
      hours: diffHours,
      daysDisplay: days,
      remainingHoursDisplay: remainingHours,
      rentalCost,
      deposit,
      total: rentalCost + deposit
    };
  };

  const fareInfo = calculateFare();

  // Step 1 field list for partial validation
  const step1Fields = [
    'fullName', 'fatherName', 'email', 'phone',
    'address', 'district', 'state', 'country', 'pincode',
    'documentType', 'documentId'
  ];

  // Step 2 field list
  const step2Fields = ['vehicleRegistration', 'pickupDateTime', 'returnDateTime'];

  // Handle navigation to next step
  const handleNext = async () => {
    let isValid = false;
    if (currentStep === 1) {
      isValid = await trigger(step1Fields);
    } else if (currentStep === 2) {
      isValid = await trigger(step2Fields);
    } else if (currentStep === 3) {
      isValid = await trigger(['agreeTerms']);
    }

    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API submission to backend (e.g. Laravel /api/rental-contract)
      await new Promise(resolve => setTimeout(resolve, 1400));
      
      const referenceId = `DBR-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingResult({
        ...data,
        referenceId,
        vehicle: selectedVehicle,
        fare: fareInfo,
        bookingDate: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      });
      setSubmissionComplete(true);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    } catch (err) {
      alert("Submission error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper for document placeholder & hint
  const getDocumentDetails = () => {
    switch (selectedDocType) {
      case 'aadhaar':
        return {
          label: "Aadhaar Number",
          placeholder: "e.g. 5489 1234 5678",
          hint: "Enter 12-digit UIDAI Aadhaar number (spaces allowed)"
        };
      case 'pan':
        return {
          label: "PAN Card Number",
          placeholder: "e.g. ABCDE1234F",
          hint: "10-character alphanumeric PAN format"
        };
      case 'dl':
        return {
          label: "Driving Licence Number",
          placeholder: "e.g. OD02-20210012345",
          hint: "Valid Indian Driving Licence number"
        };
      case 'passport':
        return {
          label: "Passport Number",
          placeholder: "e.g. Z1234567",
          hint: "1 letter followed by 7 digits"
        };
      case 'visa':
        return {
          label: "Visa Number",
          placeholder: "e.g. V12345678",
          hint: "Valid tourist / entry visa ID"
        };
      case 'other':
      default:
        return {
          label: "Government ID Number",
          placeholder: "Enter official ID number",
          hint: "Any valid government issued photo ID"
        };
    }
  };

  const docDetails = getDocumentDetails();

  // If successfully booked, render booking confirmation screen
  if (submissionComplete && bookingResult) {
    const whatsappMessage = encodeURIComponent(
      `Hello D Bike Rental Puri!\nI have submitted my rental booking.\n\nBooking ID: ${bookingResult.referenceId}\nName: ${bookingResult.fullName}\nVehicle: ${bookingResult.vehicle?.model} (${bookingResult.vehicle?.registrationNumber})\nPickup: ${bookingResult.pickupDateTime}\nReturn: ${bookingResult.returnDateTime}\nTotal Estimate: Rs. ${bookingResult.fare?.total}/-\n\nPlease confirm availability for pickup.`
    );

    return (
      <section className="checkout-success-section">
        <div className="container">
          <div className="success-card">
            <div className="success-icon-wrap">
              <i className="fas fa-check"></i>
            </div>
            <span className="success-tag">Rental Agreement Executed</span>
            <h2 className="success-heading">Booking Confirmed!</h2>
            <p className="success-subtitle">
              Thank you, <strong>{bookingResult.fullName}</strong>. Your rental contract has been digitally signed and registered.
            </p>

            <div className="reference-badge">
              <span className="ref-label">Booking Reference ID:</span>
              <span className="ref-code">{bookingResult.referenceId}</span>
            </div>

            {/* Contract Summary Box */}
            <div className="contract-summary-box">
              <div className="summary-header">
                <h4><i className="fas fa-file-contract"></i> Rental Agreement Summary</h4>
                <span className="stamp-badge">Digitally E-Signed</span>
              </div>
              
              <div className="summary-grid">
                <div className="summary-item">
                  <span className="item-label">Renter Name</span>
                  <span className="item-val">{bookingResult.fullName}</span>
                </div>
                <div className="summary-item">
                  <span className="item-label">Father&apos;s Name</span>
                  <span className="item-val">{bookingResult.fatherName}</span>
                </div>
                <div className="summary-item">
                  <span className="item-label">Contact Phone</span>
                  <span className="item-val">+91 {bookingResult.phone}</span>
                </div>
                <div className="summary-item">
                  <span className="item-label">Document ID</span>
                  <span className="item-val uppercase">{bookingResult.documentType.toUpperCase()}: {bookingResult.documentId}</span>
                </div>
                <div className="summary-item">
                  <span className="item-label">Vehicle Selected</span>
                  <span className="item-val">{bookingResult.vehicle?.model}</span>
                </div>
                <div className="summary-item">
                  <span className="item-label">Registration No.</span>
                  <span className="item-val hsrp-pill">{bookingResult.vehicle?.registrationNumber}</span>
                </div>
                <div className="summary-item">
                  <span className="item-label">Pickup Time</span>
                  <span className="item-val">{new Date(bookingResult.pickupDateTime).toLocaleString('en-IN')}</span>
                </div>
                <div className="summary-item">
                  <span className="item-label">Expected Return</span>
                  <span className="item-val">{new Date(bookingResult.returnDateTime).toLocaleString('en-IN')}</span>
                </div>
                <div className="summary-item">
                  <span className="item-label">Duration</span>
                  <span className="item-val">{bookingResult.fare?.hours} Hours ({bookingResult.fare?.daysDisplay}d {bookingResult.fare?.remainingHoursDisplay}h)</span>
                </div>
                <div className="summary-item">
                  <span className="item-label">Security Deposit</span>
                  <span className="item-val text-success">₹{bookingResult.fare?.deposit} (Refundable)</span>
                </div>
              </div>

              {/* Signature Preview */}
              <div className="signature-preview-box">
                <div className="sig-meta">
                  <span className="sig-title">Renter&apos;s E-Signature:</span>
                  <span className="sig-date">{bookingResult.bookingDate}</span>
                </div>
                <div className="sig-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={bookingResult.signature} alt="Renter Signature" className="signed-canvas-img" />
                </div>
              </div>
            </div>

            {/* UPI Payment Button */}
            <UpiPayButton
              amount={bookingResult.fare?.total || 500}
              upiId="9937958910-6@ybl"
              businessName="D Bike Rental"
              orderId={bookingResult.referenceId}
              phone={bookingResult.phone}
              name={bookingResult.fullName}
            />

            {/* Action Buttons */}
            <div className="success-action-buttons">
              <a
                href={`https://wa.me/9937958910?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action btn-whatsapp"
              >
                <i className="fab fa-whatsapp"></i> Confirm on WhatsApp
              </a>
              <button
                type="button"
                onClick={() => window.print()}
                className="btn-action btn-print"
              >
                <i className="fas fa-print"></i> Print Agreement
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubmissionComplete(false);
                  setBookingResult(null);
                  setCurrentStep(1);
                }}
                className="btn-action btn-new"
              >
                <i className="fas fa-plus-circle"></i> New Booking
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          .checkout-success-section {
            padding: 60px 0 90px;
            background: #f8fafc;
          }
          .success-card {
            background: #ffffff;
            border-radius: 20px;
            padding: 40px 30px;
            max-width: 820px;
            margin: 0 auto;
            box-shadow: 0 10px 40px rgba(14, 66, 106, 0.08);
            text-align: center;
          }
          .success-icon-wrap {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            background: #ecfdf5;
            color: #10b981;
            font-size: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 16px;
            box-shadow: 0 0 0 10px rgba(16, 185, 129, 0.1);
          }
          .success-tag {
            display: inline-block;
            background: #e0f2fe;
            color: #0369a1;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 4px 14px;
            border-radius: 20px;
            margin-bottom: 12px;
          }
          .success-heading {
            font-size: 32px;
            font-weight: 800;
            color: #0e426a;
            margin-bottom: 8px;
          }
          .success-subtitle {
            color: #64748b;
            font-size: 16px;
            margin-bottom: 24px;
          }
          .reference-badge {
            background: #f1f5f9;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 20px;
            border-radius: 30px;
            margin-bottom: 30px;
            border: 1px dashed #cbd5e1;
          }
          .ref-label {
            color: #64748b;
            font-size: 14px;
            font-weight: 500;
          }
          .ref-code {
            color: #ee4325;
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 1px;
          }
          .contract-summary-box {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            padding: 24px;
            text-align: left;
            margin-bottom: 30px;
          }
          .summary-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #f1f5f9;
            padding-bottom: 14px;
            margin-bottom: 18px;
          }
          .summary-header h4 {
            margin: 0;
            font-size: 18px;
            color: #0e426a;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .stamp-badge {
            background: #ecfdf5;
            color: #059669;
            font-size: 12px;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 6px;
            border: 1px solid #a7f3d0;
          }
          .summary-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          @media (max-width: 600px) {
            .summary-grid {
              grid-template-columns: 1fr;
            }
          }
          .summary-item {
            display: flex;
            flex-direction: column;
            gap: 3px;
          }
          .item-label {
            font-size: 12px;
            color: #94a3b8;
            font-weight: 500;
            text-transform: uppercase;
          }
          .item-val {
            font-size: 14.5px;
            font-weight: 600;
            color: #1e293b;
          }
          .hsrp-pill {
            display: inline-block;
            background: #fef3c7;
            color: #92400e;
            padding: 2px 8px;
            border-radius: 4px;
            font-family: monospace;
            font-size: 13px;
            font-weight: 700;
            border: 1px solid #fcd34d;
            width: fit-content;
          }
          .signature-preview-box {
            margin-top: 20px;
            padding-top: 16px;
            border-top: 1px dashed #e2e8f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
          }
          .sig-meta {
            display: flex;
            flex-direction: column;
          }
          .sig-title {
            font-size: 13px;
            font-weight: 600;
            color: #334155;
          }
          .sig-date {
            font-size: 12px;
            color: #94a3b8;
          }
          .sig-img-wrap {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 6px 14px;
          }
          .signed-canvas-img {
            height: 50px;
            max-width: 180px;
            object-fit: contain;
          }
          .success-action-buttons {
            display: flex;
            justify-content: center;
            gap: 14px;
            flex-wrap: wrap;
          }
          .btn-action {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            border-radius: 10px;
            font-weight: 600;
            font-size: 15px;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.25s ease;
            border: none;
          }
          .btn-whatsapp {
            background: #25d366;
            color: #ffffff;
          }
          .btn-whatsapp:hover {
            background: #20ba59;
            transform: translateY(-2px);
            color: #ffffff;
          }
          .btn-print {
            background: #0e426a;
            color: #ffffff;
          }
          .btn-print:hover {
            background: #092f4c;
            transform: translateY(-2px);
          }
          .btn-new {
            background: #e2e8f0;
            color: #334155;
          }
          .btn-new:hover {
            background: #cbd5e1;
          }
        `}</style>
      </section>
    );
  }

  return (
    <section className="checkout-main-section">
      <div className="container">
        {/* Form Container */}
        <div className="checkout-card">
          {/* Stepper Progress Bar */}
          <div className="stepper-wrapper">
            <div className="stepper-progress">
              <div
                className="stepper-progress-fill"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              ></div>
            </div>

            <div className="stepper-steps">
              {[
                { step: 1, title: "Identity & KYC", icon: "fa-id-card" },
                { step: 2, title: "Vehicle & Duration", icon: "fa-motorcycle" },
                { step: 3, title: "Terms & Agreement", icon: "fa-file-signature" },
                { step: 4, title: "E-Signature", icon: "fa-signature" }
              ].map((s) => {
                const isActive = currentStep === s.step;
                const isPassed = currentStep > s.step;
                return (
                  <div
                    key={s.step}
                    className={`step-item ${isActive ? 'active' : ''} ${isPassed ? 'completed' : ''}`}
                    onClick={() => {
                      // Allow going back to previous completed steps
                      if (isPassed) setCurrentStep(s.step);
                    }}
                  >
                    <div className="step-circle">
                      {isPassed ? (
                        <i className="fas fa-check"></i>
                      ) : (
                        <i className={`fas ${s.icon}`}></i>
                      )}
                    </div>
                    <div className="step-content">
                      <span className="step-num">Step {s.step}</span>
                      <span className="step-name">{s.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Current Step Tag */}
          <div className="mobile-step-indicator">
            <span className="mobile-step-badge">Step {currentStep} of 4</span>
            <span className="mobile-step-title">
              {currentStep === 1 && "Identity & KYC Details"}
              {currentStep === 2 && "Vehicle & Rental Duration"}
              {currentStep === 3 && "Terms & Conditions Agreement"}
              {currentStep === 4 && "E-Signature & Confirmation"}
            </span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="checkout-form" noValidate>
            {/* ================= STEP 1: IDENTITY & KYC ================= */}
            {currentStep === 1 && (
              <div className="step-pane step-fade">
                <div className="section-head">
                  <div className="head-badge">
                    <i className="fas fa-user-shield"></i> Step 1 of 4
                  </div>
                  <h3 className="section-title">Identity & KYC Verification</h3>
                  <p className="section-desc">
                    Enter the renter demographic details and government identity proof as per tourist vehicle rental regulations.
                  </p>
                </div>

                <div className="form-grid">
                  {/* Full Name */}
                  <div className="field-group">
                    <label className="form-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <i className="field-icon fas fa-user"></i>
                      <input
                        type="text"
                        placeholder="Renter's full name"
                        className={`form-input ${errors.fullName ? 'is-invalid' : ''}`}
                        {...register("fullName")}
                      />
                    </div>
                    {errors.fullName && (
                      <span className="error-text">{errors.fullName.message}</span>
                    )}
                  </div>

                  {/* Father's Name */}
                  <div className="field-group">
                    <label className="form-label">
                      Father&apos;s Name <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <i className="field-icon fas fa-user-friends"></i>
                      <input
                        type="text"
                        placeholder="Father's full name"
                        className={`form-input ${errors.fatherName ? 'is-invalid' : ''}`}
                        {...register("fatherName")}
                      />
                    </div>
                    {errors.fatherName && (
                      <span className="error-text">{errors.fatherName.message}</span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="field-group">
                    <label className="form-label">
                      Mobile Number <span className="req">*</span>
                    </label>
                    <div className="input-wrap phone-wrap">
                      <span className="prefix-badge">+91</span>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        className={`form-input has-prefix ${errors.phone ? 'is-invalid' : ''}`}
                        {...register("phone")}
                      />
                    </div>
                    {errors.phone && (
                      <span className="error-text">{errors.phone.message}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="field-group">
                    <label className="form-label">
                      Email Address <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <i className="field-icon fas fa-envelope"></i>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        className={`form-input ${errors.email ? 'is-invalid' : ''}`}
                        {...register("email")}
                      />
                    </div>
                    {errors.email && (
                      <span className="error-text">{errors.email.message}</span>
                    )}
                  </div>

                  {/* Street Address - spans full width */}
                  <div className="field-group col-span-2">
                    <label className="form-label">
                      Permanent / Residential Address <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <i className="field-icon fas fa-map-marker-alt"></i>
                      <input
                        type="text"
                        placeholder="House no., street, locality, landmark"
                        className={`form-input ${errors.address ? 'is-invalid' : ''}`}
                        {...register("address")}
                      />
                    </div>
                    {errors.address && (
                      <span className="error-text">{errors.address.message}</span>
                    )}
                  </div>

                  {/* District */}
                  <div className="field-group">
                    <label className="form-label">
                      District <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <i className="field-icon fas fa-city"></i>
                      <input
                        type="text"
                        placeholder="e.g. Puri"
                        className={`form-input ${errors.district ? 'is-invalid' : ''}`}
                        {...register("district")}
                      />
                    </div>
                    {errors.district && (
                      <span className="error-text">{errors.district.message}</span>
                    )}
                  </div>

                  {/* State */}
                  <div className="field-group">
                    <label className="form-label">
                      State <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <i className="field-icon fas fa-landmark"></i>
                      <input
                        type="text"
                        placeholder="e.g. Odisha"
                        className={`form-input ${errors.state ? 'is-invalid' : ''}`}
                        {...register("state")}
                      />
                    </div>
                    {errors.state && (
                      <span className="error-text">{errors.state.message}</span>
                    )}
                  </div>

                  {/* Country */}
                  <div className="field-group">
                    <label className="form-label">
                      Country <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <i className="field-icon fas fa-globe"></i>
                      <input
                        type="text"
                        placeholder="e.g. India"
                        className={`form-input ${errors.country ? 'is-invalid' : ''}`}
                        {...register("country")}
                      />
                    </div>
                    {errors.country && (
                      <span className="error-text">{errors.country.message}</span>
                    )}
                  </div>

                  {/* Pin Code */}
                  <div className="field-group">
                    <label className="form-label">
                      PIN Code <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <i className="field-icon fas fa-thumbtack"></i>
                      <input
                        type="text"
                        maxLength={6}
                        placeholder="6-digit PIN code"
                        className={`form-input ${errors.pincode ? 'is-invalid' : ''}`}
                        {...register("pincode")}
                      />
                    </div>
                    {errors.pincode && (
                      <span className="error-text">{errors.pincode.message}</span>
                    )}
                  </div>
                </div>

                {/* KYC Document Card */}
                <div className="kyc-doc-card">
                  <div className="kyc-doc-head">
                    <span className="kyc-badge">KYC Proof</span>
                    <h4>Government Identity Document</h4>
                    <p>Select your identity document and provide valid ID credentials.</p>
                  </div>

                  <div className="form-grid">
                    {/* Document Type Selection */}
                    <div className="field-group">
                      <label className="form-label">
                        Document Type <span className="req">*</span>
                      </label>
                      <div className="input-wrap">
                        <i className="field-icon fas fa-id-badge"></i>
                        <select
                          className={`form-input select-styled ${errors.documentType ? 'is-invalid' : ''}`}
                          {...register("documentType")}
                        >
                          <option value="aadhaar">Aadhaar Card (12 Digits)</option>
                          <option value="pan">PAN Card (10 Characters)</option>
                          <option value="dl">Driving Licence (DL)</option>
                          <option value="passport">Passport</option>
                          <option value="visa">Visa (Foreign Nationals)</option>
                          <option value="other">Other Official Govt ID</option>
                        </select>
                      </div>
                      {errors.documentType && (
                        <span className="error-text">{errors.documentType.message}</span>
                      )}
                    </div>

                    {/* Dynamic Document ID */}
                    <div className="field-group">
                      <label className="form-label">
                        {docDetails.label} <span className="req">*</span>
                      </label>
                      <div className="input-wrap">
                        <i className="field-icon fas fa-fingerprint"></i>
                        <input
                          type="text"
                          placeholder={docDetails.placeholder}
                          className={`form-input ${selectedDocType === 'pan' ? 'uppercase' : ''} ${errors.documentId ? 'is-invalid' : ''}`}
                          {...register("documentId")}
                        />
                      </div>
                      <span className="field-hint">
                        <i className="fas fa-info-circle"></i> {docDetails.hint}
                      </span>
                      {errors.documentId && (
                        <span className="error-text">{errors.documentId.message}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Step 1 Actions */}
                <div className="step-actions">
                  <div></div>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-step btn-next"
                  >
                    <span>Proceed to Vehicle Selection</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 2: VEHICLE & DURATION ================= */}
            {currentStep === 2 && (
              <div className="step-pane step-fade">
                <div className="section-head">
                  <div className="head-badge">
                    <i className="fas fa-motorcycle"></i> Step 2 of 4
                  </div>
                  <h3 className="section-title">Select Vehicle & Rental Duration</h3>
                  <p className="section-desc">
                    Choose the vehicle registration number and set your pickup execution and expected return schedules.
                  </p>
                </div>

                <div className="form-grid">
                  {/* Vehicle Registration Dropdown */}
                  <div className="field-group col-span-2">
                    <label className="form-label">
                      Select Vehicle Registration Number <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <i className="field-icon fas fa-list"></i>
                      <select
                        className={`form-input select-styled ${errors.vehicleRegistration ? 'is-invalid' : ''}`}
                        {...register("vehicleRegistration")}
                      >
                        {vehicles.map((v) => (
                          <option key={v.registrationNumber} value={v.registrationNumber}>
                            {v.registrationNumber} — {v.model} ({v.category}) — ₹{v.ratePerDay}/day
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.vehicleRegistration && (
                      <span className="error-text">{errors.vehicleRegistration.message}</span>
                    )}
                  </div>
                </div>

                {/* Selected Vehicle Card Preview */}
                {selectedVehicle && (
                  <div className="vehicle-preview-card">
                    <div className="vehicle-card-left">
                      <div className="hsrp-plate">
                        <div className="plate-ind">
                          <span className="ind-flag">🇮🇳</span>
                          <span className="ind-text">IND</span>
                        </div>
                        <span className="plate-num">{selectedVehicle.registrationNumber}</span>
                      </div>
                      <div className="vehicle-info-block">
                        <h4 className="vehicle-model">{selectedVehicle.model}</h4>
                        <div className="vehicle-tags">
                          <span className="vtag"><i className="fas fa-tag"></i> {selectedVehicle.category}</span>
                          <span className="vtag"><i className="fas fa-gas-pump"></i> {selectedVehicle.fuel}</span>
                          <span className="vtag"><i className="fas fa-palette"></i> {selectedVehicle.color}</span>
                        </div>
                      </div>
                    </div>

                    <div className="vehicle-card-right">
                      <div className="price-item">
                        <span className="p-label">Daily Tariff</span>
                        <span className="p-val">₹{selectedVehicle.ratePerDay}<small>/day</small></span>
                      </div>
                      <div className="price-item">
                        <span className="p-label">Hourly Tariff</span>
                        <span className="p-val">₹{selectedVehicle.ratePerHour}<small>/hr</small></span>
                      </div>
                      <div className="price-item">
                        <span className="p-label">Refundable Deposit</span>
                        <span className="p-val text-deposit">₹{selectedVehicle.deposit}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Date & Time Pickers */}
                <div className="form-grid mt-4">
                  {/* Execution Time */}
                  <div className="field-group">
                    <label className="form-label">
                      Execution Time (Pickup Date & Time) <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <i className="field-icon fas fa-calendar-alt"></i>
                      <input
                        type="datetime-local"
                        className={`form-input ${errors.pickupDateTime ? 'is-invalid' : ''}`}
                        {...register("pickupDateTime")}
                      />
                    </div>
                    <span className="field-hint">Rental clock begins from this execution timestamp</span>
                    {errors.pickupDateTime && (
                      <span className="error-text">{errors.pickupDateTime.message}</span>
                    )}
                  </div>

                  {/* Expected Return Time */}
                  <div className="field-group">
                    <label className="form-label">
                      Expected Return Time <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <i className="field-icon fas fa-calendar-check"></i>
                      <input
                        type="datetime-local"
                        className={`form-input ${errors.returnDateTime ? 'is-invalid' : ''}`}
                        {...register("returnDateTime")}
                      />
                    </div>
                    <span className="field-hint">Note: Penalty of ₹200/hr applies for unreturned delays</span>
                    {errors.returnDateTime && (
                      <span className="error-text">{errors.returnDateTime.message}</span>
                    )}
                  </div>
                </div>

                {/* Fare & Duration Estimate Summary */}
                {fareInfo.hours > 0 && (
                  <div className="fare-calc-card">
                    <div className="fare-head">
                      <h5><i className="fas fa-calculator"></i> Estimated Rental Breakdown</h5>
                      <span className="duration-pill">
                        {fareInfo.daysDisplay > 0 ? `${fareInfo.daysDisplay} Day(s) ` : ''}
                        {fareInfo.remainingHoursDisplay} Hour(s) ({fareInfo.hours} total hrs)
                      </span>
                    </div>

                    <div className="fare-items">
                      <div className="fare-row">
                        <span>Calculated Rental Tariff</span>
                        <strong>₹{fareInfo.rentalCost}</strong>
                      </div>
                      <div className="fare-row">
                        <span>Refundable Security Deposit</span>
                        <strong>₹{fareInfo.deposit}</strong>
                      </div>
                      <div className="fare-divider"></div>
                      <div className="fare-row fare-total">
                        <span>Estimated Payable at Pickup</span>
                        <strong className="text-total">₹{fareInfo.total}</strong>
                      </div>
                    </div>
                    <p className="fare-note">
                      * Fuel costs, minor repairs, and traffic fines are to be borne by the renter. Security deposit is refunded upon safe return.
                    </p>
                  </div>
                )}

                {/* Step 2 Actions */}
                <div className="step-actions">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="btn-step btn-prev"
                  >
                    <i className="fas fa-arrow-left"></i>
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-step btn-next"
                  >
                    <span>Proceed to Terms Agreement</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 3: TERMS & CONDITIONS ================= */}
            {currentStep === 3 && (
              <div className="step-pane step-fade">
                <div className="section-head">
                  <div className="head-badge">
                    <i className="fas fa-file-contract"></i> Step 3 of 4
                  </div>
                  <h3 className="section-title">Terms & Conditions Agreement</h3>
                  <p className="section-desc">
                    Please review all rental contract covenants carefully. Compliance is legally binding for both parties.
                  </p>
                </div>

                {/* Terms Covenants Card */}
                <div className="terms-container">
                  <div className="terms-header-banner">
                    <div className="banner-title">
                      <i className="fas fa-shield-alt"></i>
                      <span>Official Rental Rules — D Bike Rental Puri</span>
                    </div>
                    <span className="jurisdiction-tag">Jurisdiction: Puri District</span>
                  </div>

                  <div className="terms-list">
                    {[
                      {
                        num: 1,
                        text: "The vehicle is strictly for visiting tourist places within Puri district.",
                        icon: "fa-map-marked-alt",
                        badge: "Geographical Limit"
                      },
                      {
                        num: 2,
                        text: "Travel outside the district is strictly prohibited.",
                        icon: "fa-ban",
                        badge: "Prohibited",
                        warning: true
                      },
                      {
                        num: 3,
                        text: "The renter must bear fuel costs and minor repairs.",
                        icon: "fa-gas-pump",
                        badge: "Renter Responsibility"
                      },
                      {
                        num: 4,
                        text: "The vehicle cannot be used for illegal or criminal purposes.",
                        icon: "fa-gavel",
                        badge: "Legal Compliance",
                        warning: true
                      },
                      {
                        num: 5,
                        text: "The renter is fully responsible for paying fines related to traffic violations.",
                        icon: "fa-receipt",
                        badge: "Traffic Violations"
                      },
                      {
                        num: 6,
                        text: "Any disputes will be decided exclusively in the court of law in Puri district.",
                        icon: "fa-balance-scale",
                        badge: "Exclusive Jurisdiction"
                      },
                      {
                        num: 7,
                        text: "Violations of the agreement will make the 1st party liable for legal punishment.",
                        icon: "fa-exclamation-triangle",
                        badge: "Liability",
                        warning: true
                      },
                      {
                        num: 8,
                        text: "A penalty of Rs. 200/- per hour applies if the vehicle is not returned on time.",
                        icon: "fa-clock",
                        badge: "Rs. 200/hr Late Fee",
                        highlight: true
                      },
                      {
                        num: 9,
                        text: "The rider must maintain a speed limit of 50 to 60 Km per hour.",
                        icon: "fa-tachometer-alt",
                        badge: "Speed: 50-60 km/h"
                      }
                    ].map((item) => (
                      <div
                        key={item.num}
                        className={`term-card ${item.warning ? 'term-warning' : ''} ${item.highlight ? 'term-highlight' : ''}`}
                      >
                        <div className="term-num-badge">{item.num}</div>
                        <div className="term-icon">
                          <i className={`fas ${item.icon}`}></i>
                        </div>
                        <div className="term-body">
                          <div className="term-top">
                            <span className="term-badge">{item.badge}</span>
                          </div>
                          <p className="term-text">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Acceptance Checkbox */}
                  <div className="terms-agree-box">
                    <label className="agree-checkbox-label">
                      <input
                        type="checkbox"
                        className="agree-checkbox"
                        {...register("agreeTerms")}
                      />
                      <span className="checkbox-custom"></span>
                      <span className="agree-text">
                        I hereby declare that I have carefully read, fully understood, and explicitly agree to all 9 terms & conditions listed above. I accept legal liability under Puri district jurisdiction.
                        <span className="req"> *</span>
                      </span>
                    </label>
                    {errors.agreeTerms && (
                      <div className="agree-error-msg">
                        <i className="fas fa-exclamation-circle"></i> {errors.agreeTerms.message}
                      </div>
                    )}
                  </div>
                </div>

                {/* Step 3 Actions */}
                <div className="step-actions">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="btn-step btn-prev"
                  >
                    <i className="fas fa-arrow-left"></i>
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-step btn-next"
                  >
                    <span>Proceed to E-Signature</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 4: E-SIGNATURES & REVIEW ================= */}
            {currentStep === 4 && (
              <div className="step-pane step-fade">
                <div className="section-head">
                  <div className="head-badge">
                    <i className="fas fa-signature"></i> Step 4 of 4
                  </div>
                  <h3 className="section-title">Electronic Signature & Final Confirmation</h3>
                  <p className="section-desc">
                    Affix your digital signature on the pad below to execute the electronic rental contract.
                  </p>
                </div>

                {/* Pre-submission Summary Preview */}
                <div className="review-card">
                  <div className="review-card-head">
                    <h5><i className="fas fa-clipboard-check"></i> Contract Overview</h5>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="edit-details-btn"
                    >
                      <i className="fas fa-edit"></i> Edit Details
                    </button>
                  </div>

                  <div className="review-grid">
                    <div className="rev-item">
                      <span className="rev-k">Renter Name</span>
                      <span className="rev-v">{watch("fullName") || "—"}</span>
                    </div>
                    <div className="rev-item">
                      <span className="rev-k">Father&apos;s Name</span>
                      <span className="rev-v">{watch("fatherName") || "—"}</span>
                    </div>
                    <div className="rev-item">
                      <span className="rev-k">Contact</span>
                      <span className="rev-v">+91 {watch("phone") || "—"}</span>
                    </div>
                    <div className="rev-item">
                      <span className="rev-k">Identity Proof</span>
                      <span className="rev-v uppercase">{watch("documentType")?.toUpperCase()}: {watch("documentId")}</span>
                    </div>
                    <div className="rev-item">
                      <span className="rev-k">Vehicle</span>
                      <span className="rev-v">{selectedVehicle?.model}</span>
                    </div>
                    <div className="rev-item">
                      <span className="rev-k">Registration No.</span>
                      <span className="rev-v hsrp-mini">{selectedVehicle?.registrationNumber}</span>
                    </div>
                    <div className="rev-item">
                      <span className="rev-k">Execution Time</span>
                      <span className="rev-v">{pickupTime ? new Date(pickupTime).toLocaleString('en-IN') : '—'}</span>
                    </div>
                    <div className="rev-item">
                      <span className="rev-k">Expected Return</span>
                      <span className="rev-v">{returnTime ? new Date(returnTime).toLocaleString('en-IN') : '—'}</span>
                    </div>
                  </div>
                </div>

                {/* E-Signature Pad */}
                <div className="signature-section-block">
                  <Controller
                    name="signature"
                    control={control}
                    render={({ field }) => (
                      <SignaturePad
                        value={field.value}
                        onChange={(dataUrl) => field.onChange(dataUrl)}
                        onClear={() => field.onChange("")}
                        error={errors.signature?.message}
                      />
                    )}
                  />

                  <div className="signature-legal-note">
                    <i className="fas fa-info-circle"></i>
                    <span>
                      By signing electronically, you certify that all information provided is accurate and you legally enter into this vehicle rental contract under the Information Technology Act, 2000.
                    </span>
                  </div>
                </div>

                {/* Step 4 Actions */}
                <div className="step-actions">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="btn-step btn-prev"
                    disabled={isSubmitting}
                  >
                    <i className="fas fa-arrow-left"></i>
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    className="btn-step btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span>Executing Contract...</span>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-check-circle"></i>
                        <span>Confirm & Complete Booking</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        .checkout-main-section {
          padding: 60px 0 90px;
          background: #f8fafc;
          min-height: calc(100vh - 200px);
        }
        .checkout-card {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(14, 66, 106, 0.08);
          padding: 40px;
          max-width: 960px;
          margin: 0 auto;
          border: 1px solid #eef2f6;
        }

        /* Stepper Desktop */
        .stepper-wrapper {
          position: relative;
          margin-bottom: 40px;
        }
        .stepper-progress {
          position: absolute;
          top: 24px;
          left: 5%;
          right: 5%;
          height: 4px;
          background: #e2e8f0;
          z-index: 1;
          border-radius: 4px;
        }
        .stepper-progress-fill {
          height: 100%;
          background: #0e426a;
          transition: width 0.35s ease;
          border-radius: 4px;
        }
        .stepper-steps {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
        }
        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          user-select: none;
        }
        .step-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #cbd5e1;
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        .step-item.active .step-circle {
          border-color: #0e426a;
          background: #0e426a;
          color: #ffffff;
          transform: scale(1.1);
          box-shadow: 0 0 0 6px rgba(14, 66, 106, 0.15);
        }
        .step-item.completed .step-circle {
          border-color: #10b981;
          background: #10b981;
          color: #ffffff;
        }
        .step-content {
          text-align: center;
          margin-top: 10px;
        }
        .step-num {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: #94a3b8;
        }
        .step-name {
          display: block;
          font-size: 13.5px;
          font-weight: 600;
          color: #475569;
          margin-top: 2px;
        }
        .step-item.active .step-name {
          color: #0e426a;
          font-weight: 700;
        }
        .step-item.completed .step-name {
          color: #1e293b;
        }

        /* Mobile Stepper Indicator */
        .mobile-step-indicator {
          display: none;
          background: #f1f5f9;
          padding: 10px 16px;
          border-radius: 10px;
          margin-bottom: 24px;
          align-items: center;
          gap: 10px;
        }
        .mobile-step-badge {
          background: #0e426a;
          color: white;
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 4px;
          white-space: nowrap;
        }
        .mobile-step-title {
          font-size: 13.5px;
          font-weight: 600;
          color: #1e293b;
        }

        /* Section Header */
        .section-head {
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid #f1f5f9;
        }
        .head-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #e0f2fe;
          color: #0369a1;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 10px;
        }
        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #0e426a;
          margin: 0 0 6px;
        }
        .section-desc {
          color: #64748b;
          font-size: 14px;
          margin: 0;
        }

        /* Form Grid */
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .col-span-2 {
          grid-column: span 2;
        }
        .field-group {
          display: flex;
          flex-direction: column;
        }
        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #334155;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .req {
          color: #ee4325;
        }
        .input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .field-icon {
          position: absolute;
          left: 14px;
          color: #94a3b8;
          font-size: 15px;
          pointer-events: none;
          z-index: 1;
        }
        .form-input {
          width: 100%;
          padding: 12px 14px 12px 42px;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          background: #ffffff;
          font-size: 14.5px;
          color: #1e293b;
          transition: all 0.25s ease;
          outline: none;
        }
        .form-input:focus {
          border-color: #0e426a;
          box-shadow: 0 0 0 3px rgba(14, 66, 106, 0.1);
        }
        .form-input.is-invalid {
          border-color: #ef4444;
          background: #fffaf0;
        }
        .select-styled {
          appearance: auto;
          cursor: pointer;
        }
        .uppercase {
          text-transform: uppercase;
        }
        .phone-wrap .prefix-badge {
          position: absolute;
          left: 12px;
          font-weight: 700;
          color: #0e426a;
          font-size: 14px;
          background: #f1f5f9;
          padding: 2px 6px;
          border-radius: 4px;
          z-index: 1;
        }
        .has-prefix {
          padding-left: 54px;
        }
        .field-hint {
          font-size: 12px;
          color: #64748b;
          margin-top: 5px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .error-text {
          font-size: 12.5px;
          color: #ef4444;
          margin-top: 5px;
          font-weight: 500;
        }

        /* KYC Document Card */
        .kyc-doc-card {
          background: #f8fafc;
          border: 1.5px dashed #cbd5e1;
          border-radius: 14px;
          padding: 24px;
          margin-top: 26px;
        }
        .kyc-doc-head {
          margin-bottom: 20px;
        }
        .kyc-badge {
          background: #fed7aa;
          color: #c2410c;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 20px;
          display: inline-block;
          margin-bottom: 6px;
        }
        .kyc-doc-head h4 {
          font-size: 17px;
          font-weight: 700;
          color: #0e426a;
          margin: 0 0 4px;
        }
        .kyc-doc-head p {
          font-size: 13px;
          color: #64748b;
          margin: 0;
        }

        /* Vehicle Card Preview */
        .vehicle-preview-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 20px;
          margin-top: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }
        .vehicle-card-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .hsrp-plate {
          background: #ffffff;
          border: 2px solid #000000;
          border-radius: 6px;
          display: flex;
          align-items: center;
          overflow: hidden;
          font-family: monospace;
          font-weight: 800;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        }
        .plate-ind {
          background: #003399;
          color: white;
          padding: 6px 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 8px;
          line-height: 1;
        }
        .ind-flag {
          font-size: 10px;
        }
        .ind-text {
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }
        .plate-num {
          padding: 8px 12px;
          font-size: 16px;
          color: #000000;
          letter-spacing: 1.5px;
        }
        .vehicle-model {
          font-size: 18px;
          font-weight: 700;
          color: #0e426a;
          margin: 0 0 6px;
        }
        .vehicle-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .vtag {
          font-size: 11.5px;
          background: #f1f5f9;
          color: #475569;
          padding: 3px 8px;
          border-radius: 6px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .vehicle-card-right {
          display: flex;
          gap: 20px;
          border-left: 1px solid #f1f5f9;
          padding-left: 20px;
        }
        .price-item {
          display: flex;
          flex-direction: column;
        }
        .p-label {
          font-size: 11px;
          text-transform: uppercase;
          color: #94a3b8;
          font-weight: 600;
        }
        .p-val {
          font-size: 18px;
          font-weight: 800;
          color: #0e426a;
        }
        .p-val small {
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }
        .text-deposit {
          color: #059669;
        }

        /* Fare Calculator Card */
        .fare-calc-card {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 14px;
          padding: 22px;
          margin-top: 24px;
        }
        .fare-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }
        .fare-head h5 {
          margin: 0;
          color: #166534;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .duration-pill {
          background: #15803d;
          color: white;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
        }
        .fare-items {
          background: #ffffff;
          padding: 16px;
          border-radius: 10px;
          border: 1px solid #dcfce7;
        }
        .fare-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #334155;
          margin-bottom: 8px;
        }
        .fare-divider {
          height: 1px;
          background: #e2e8f0;
          margin: 10px 0;
        }
        .fare-total {
          font-size: 16px;
          margin-bottom: 0;
          font-weight: 700;
        }
        .text-total {
          font-size: 20px;
          color: #0e426a;
        }
        .fare-note {
          font-size: 12px;
          color: #15803d;
          margin: 12px 0 0;
          line-height: 1.4;
        }

        /* Terms & Conditions Section */
        .terms-container {
          background: #f8fafc;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
        }
        .terms-header-banner {
          background: #0e426a;
          color: white;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .banner-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 15px;
        }
        .jurisdiction-tag {
          background: rgba(255, 255, 255, 0.2);
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        .terms-list {
          padding: 20px;
          display: grid;
          gap: 12px;
        }
        .term-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 14px 16px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .term-card:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }
        .term-warning {
          border-left: 4px solid #ef4444;
          background: #fffdfd;
        }
        .term-highlight {
          border-left: 4px solid #ee4325;
          background: #fffbf9;
        }
        .term-num-badge {
          background: #0e426a;
          color: white;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
        }
        .term-warning .term-num-badge {
          background: #dc2626;
        }
        .term-icon {
          color: #64748b;
          font-size: 16px;
          margin-top: 3px;
          flex-shrink: 0;
        }
        .term-body {
          flex: 1;
        }
        .term-top {
          margin-bottom: 4px;
        }
        .term-badge {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #0e426a;
          background: #f1f5f9;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .term-warning .term-badge {
          color: #b91c1c;
          background: #fee2e2;
        }
        .term-highlight .term-badge {
          color: #c2410c;
          background: #ffedd5;
        }
        .term-text {
          margin: 0;
          font-size: 14px;
          color: #1e293b;
          font-weight: 500;
          line-height: 1.45;
        }

        /* Agreement Checkbox Box */
        .terms-agree-box {
          background: #ffffff;
          padding: 20px;
          border-top: 1px solid #e2e8f0;
        }
        .agree-checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          cursor: pointer;
        }
        .agree-checkbox {
          width: 20px;
          height: 20px;
          accent-color: #0e426a;
          margin-top: 2px;
          cursor: pointer;
          flex-shrink: 0;
        }
        .agree-text {
          font-size: 13.5px;
          color: #334155;
          line-height: 1.5;
          font-weight: 500;
        }
        .agree-error-msg {
          color: #ef4444;
          font-size: 13px;
          font-weight: 600;
          margin-top: 8px;
          margin-left: 32px;
        }

        /* Step 4 Review */
        .review-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 20px;
          margin-bottom: 24px;
        }
        .review-card-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 1px solid #e2e8f0;
        }
        .review-card-head h5 {
          margin: 0;
          color: #0e426a;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .edit-details-btn {
          background: none;
          border: none;
          color: #0369a1;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .edit-details-btn:hover {
          text-decoration: underline;
        }
        .review-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .rev-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .rev-k {
          font-size: 11px;
          text-transform: uppercase;
          color: #94a3b8;
          font-weight: 600;
        }
        .rev-v {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }
        .hsrp-mini {
          font-family: monospace;
          background: #fef3c7;
          color: #92400e;
          padding: 1px 6px;
          border-radius: 4px;
          font-weight: 700;
          width: fit-content;
        }
        .signature-section-block {
          background: #ffffff;
        }
        .signature-legal-note {
          background: #f1f5f9;
          border-left: 3px solid #0e426a;
          padding: 12px 16px;
          border-radius: 6px;
          font-size: 12.5px;
          color: #475569;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          line-height: 1.45;
          margin-top: 10px;
        }
        .signature-legal-note i {
          margin-top: 2px;
          color: #0e426a;
        }

        /* Step Action Buttons */
        .step-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 36px;
          padding-top: 24px;
          border-top: 1px solid #f1f5f9;
        }
        .btn-step {
          padding: 13px 28px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.25s ease;
          border: none;
        }
        .btn-prev {
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #cbd5e1;
        }
        .btn-prev:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        .btn-next {
          background: #0e426a;
          color: #ffffff;
          margin-left: auto;
        }
        .btn-next:hover {
          background: #092f4c;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(14, 66, 106, 0.25);
        }
        .btn-submit {
          background: #10b981;
          color: #ffffff;
          margin-left: auto;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);
        }
        .btn-submit:hover:not(:disabled) {
          background: #059669;
          transform: translateY(-2px);
        }
        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .checkout-main-section {
            padding: 30px 10px 60px;
          }
          .checkout-card {
            padding: 22px 16px;
            border-radius: 14px;
          }
          .stepper-wrapper {
            display: none;
          }
          .mobile-step-indicator {
            display: flex;
          }
          .form-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .col-span-2 {
            grid-column: span 1;
          }
          .vehicle-preview-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .vehicle-card-right {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid #f1f5f9;
            padding-top: 14px;
            width: 100%;
            justify-content: space-between;
          }
          .review-grid {
            grid-template-columns: 1fr;
          }
          .step-actions {
            flex-direction: column-reverse;
            gap: 12px;
          }
          .btn-step {
            width: 100%;
            justify-content: center;
          }
          .btn-next, .btn-submit {
            margin-left: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default MultiStepCheckout;
