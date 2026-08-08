"use client";

import React, { useState, useEffect } from 'react';

const DynamicBookingForm = ({ vehicleTitle }) => {
  const [formConfig, setFormConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchFormConfig = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/forms/4`, {
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CMS_API_TOKEN}`,
            'Content-Type': 'application/json'
          }
        });
        const result = await res.json();
        setFormConfig(result);
        
        // Initialize form data state with default empty strings & vehicle_name prefill
        const initialData = {};
        result.fields?.forEach(f => {
          if (f.key === 'vehicle_name') {
            initialData[f.key] = vehicleTitle || '';
          } else {
            initialData[f.key] = '';
          }
        });
        if (vehicleTitle) {
          initialData['vehicle_name'] = vehicleTitle;
        }
        setFormData(initialData);

      } catch (error) {
        console.error("Failed to fetch form config:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFormConfig();
  }, [vehicleTitle]);

  useEffect(() => {
    if (vehicleTitle) {
      setFormData(prev => ({ ...prev, vehicle_name: vehicleTitle }));
    }
  }, [vehicleTitle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/public/forms/4/booking-form/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSubmitStatus('success');
        // Reset form data optionally
        const initialData = {};
        formConfig.fields?.forEach(f => {
            initialData[f.key] = '';
        });
        setFormData(initialData);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center p-4">
        <div className="spinner-border text-primary spinner-border-sm" role="status">
          <span className="visually-hidden">Loading Form...</span>
        </div>
      </div>
    );
  }

  if (!formConfig) {
    return null; // Silent fallback if form fails to load
  }

  return (
    <div className="dynamic-booking-form-wrapper" id="booking-form-section">
      <style jsx>{`
        .dynamic-booking-form-wrapper {
          background: #ffffff;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          margin-bottom: 30px;
        }
        .form-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #1a1a1a;
          position: relative;
          padding-bottom: 10px;
        }
        .form-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 3px;
          background: #0e426a;
          border-radius: 2px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4a4a4a;
          font-size: 14px;
        }
        .form-control {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          background-color: #f8f9fa;
          transition: all 0.3s ease;
          font-size: 15px;
          color: #333;
        }
        .form-control:focus {
          border-color: #0e426a;
          background-color: #fff;
          box-shadow: 0 0 0 3px rgba(14, 66, 106, 0.1);
          outline: none;
        }
        .submit-btn {
          width: 100%;
          padding: 14px;
          background: #0e426a;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        .submit-btn:hover {
          background: #092f4c;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(14, 66, 106, 0.25);
        }
        .submit-btn:disabled {
          background: #ffccbc;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        .status-message {
          padding: 12px;
          border-radius: 8px;
          margin-top: 20px;
          text-align: center;
          font-weight: 500;
        }
        .status-success {
          background-color: #e8f5e9;
          color: #2e7d32;
          border: 1px solid #c8e6c9;
        }
        .status-error {
          background-color: #ffebee;
          color: #c62828;
          border: 1px solid #ffcdd2;
        }
      `}</style>
      
      <h3 className="form-title">{formConfig.name || "Book Your Ride"}</h3>
      
      <form onSubmit={handleSubmit}>
        {formConfig.fields?.sort((a,b) => a.sort_order - b.sort_order).map((fieldObj) => {
          const { key, label, is_required, options_override, field } = fieldObj;
          
          return (
            <div key={key} className="form-group">
              <label className="form-label">{label} {is_required === 1 && <span className="text-danger">*</span>}</label>
              
              {field.field_type === 'text' && (
                <input
                  type="text"
                  name={key}
                  className="form-control"
                  placeholder={`Enter ${label.toLowerCase()}`}
                  required={is_required === 1}
                  value={formData[key] || ''}
                  onChange={handleChange}
                />
              )}
              
              {field.field_type === 'select' && (
                <select
                  name={key}
                  className="form-control"
                  required={is_required === 1}
                  value={formData[key] || ''}
                  onChange={handleChange}
                >
                  <option value="">Select {label}</option>
                  {options_override?.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              )}
              
              {field.field_type === 'date' && (
                <input
                  type="date"
                  name={key}
                  className="form-control"
                  required={is_required === 1}
                  value={formData[key] || ''}
                  onChange={handleChange}
                />
              )}
            </div>
          );
        })}
        
        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? (
            <>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Processing...
            </>
          ) : (
             <>{formConfig.settings?.submit_button_text || "Submit Booking"}</>
          )}
        </button>

        {/* Powered By One9ty CMS */}
        <div className="text-center py-3">
          <a href="https://wa.me/9937958910" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
            <small className="text-muted">Powered by One9ty CRM</small>
          </a>
        </div>

        {submitStatus === 'success' && (
          <div className="status-message status-success">
            Your booking request has been submitted successfully! We will contact you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="status-message status-error">
            There was an error submitting your request. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default DynamicBookingForm;
