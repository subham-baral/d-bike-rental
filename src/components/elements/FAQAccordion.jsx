"use client";

import React, { useState } from "react";

const faqData1 = [
  { id: 1, question: "What documents do I need to rent a vehicle?", answer: "You will need a valid driving license for the specific vehicle category and an original government-issued ID card (like an Aadhar Card or Passport) for verification." },
  { id: 2, question: "How can I book a vehicle?", answer: "You can book directly through our website by selecting your dates and vehicle, or you can call us or visit our location near Puri Railway station." },
  { id: 3, question: "Is there any age limit to rent a vehicle?", answer: "Yes, you must be at least 18 years old and hold a valid driver's license." },
  { id: 4, question: "Do I need to pay a security deposit?", answer: "A refundable security deposit may be required depending on the vehicle category. This will be returned to you upon safe return of the vehicle." },
  { id: 5, question: "What are your accepted payment methods?", answer: "We accept all major credit/debit cards, UPI (Google Pay, PhonePe), and cash." },
  { id: 6, question: "Can I cancel my booking?", answer: "Yes, cancellations made 24 hours prior to the pickup time may be eligible for a partial refund. Cancellations within 24 hours are non-refundable." },
  { id: 7, question: "Is fuel included in the rental price?", answer: "No, fuel is not included. We provide the vehicle with enough fuel to get you to the nearest petrol pump." },
  { id: 8, question: "Are there any mileage limits per day?", answer: "We offer generous daily mileage limits. Any excessive distance beyond the limit will be charged a nominal per-km fee as per our policy." },
  { id: 9, question: "Do you offer home or hotel delivery?", answer: "Yes, we offer delivery and pickup services to major hotels in Puri for a small additional fee." },
  { id: 10, question: "Can I modify my booking dates?", answer: "Modifications are subject to availability. Please contact us at least 24 hours in advance to change your dates." }
];

const faqData2 = [
  { id: 11, question: "Do you provide helmets?", answer: "Yes, we provide one complimentary helmet with every two-wheeler rental. A second helmet can be provided upon request for a nominal fee." },
  { id: 12, question: "What happens if the vehicle breaks down?", answer: "Please contact us immediately. We will arrange a replacement vehicle or send a mechanic as quickly as possible if the breakdown is not caused by the rider." },
  { id: 13, question: "Am I responsible for traffic fines?", answer: "Yes, the renter is strictly responsible for adhering to all traffic rules and paying any fines incurred during the rental period." },
  { id: 14, question: "Can I extend my rental duration?", answer: "Yes, you can extend your rental by contacting us before your scheduled return time. Extensions are subject to vehicle availability." },
  { id: 15, question: "Is there a late return fee?", answer: "Late returns will be subject to additional charges as per our hourly rates. Please inform us in advance if you anticipate a delay." },
  { id: 16, question: "What happens if I damage the vehicle?", answer: "The renter is responsible for any damage to the vehicle during the rental period. Costs for repairs will be deducted from the security deposit or billed to the renter." },
  { id: 17, question: "Can I take the rented vehicle outside Puri?", answer: "Our standard rentals are for use within Puri. If you plan to travel to Konark, Bhubaneswar, or outside the district, please inform us in advance for permission." },
  { id: 18, question: "Do the vehicles have commercial insurance?", answer: "Yes, all our rental vehicles are covered with standard commercial insurance as required by law." },
  { id: 19, question: "What should I do in case of an accident?", answer: "Ensure everyone's safety first. Contact local authorities if necessary, and then immediately inform our support team for further assistance." },
  { id: 20, question: "Are there any restrictions on where I can ride?", answer: "Riding on the beach or in restricted/off-road areas is strictly prohibited and violates the rental agreement." }
];

const FAQAccordion = () => {
  const [isActiveFaq1, setIsActiveFaq1] = useState(1);
  const [isActiveFaq2, setIsActiveFaq2] = useState(11);

  return (
    <div className="faq-one" style={{ padding: 0, backgroundColor: 'transparent' }}>
      <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className="col-md-6 mb-5">
          <h3 className="mb-4" style={{ color: 'var(--gorent-black)' }}>Booking & Policies</h3>
          <div className="accrodion-grp faq-one-accrodion">
          {faqData1.map(item => (
            <div key={item.id} className={`accrodion ${isActiveFaq1 === item.id ? "active" : ""}`}>
              <div className="accrodion-title" onClick={() => setIsActiveFaq1(isActiveFaq1 === item.id ? null : item.id)}>
                <h4>{item.question}</h4>
              </div>
              <div className="accrodion-content" style={{ display: isActiveFaq1 === item.id ? "block" : "none" }}>
                <div className="inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <h3 className="mb-4" style={{ color: 'var(--gorent-black)' }}>On the Road & Support</h3>
        <div className="accrodion-grp faq-one-accrodion">
          {faqData2.map(item => (
            <div key={item.id} className={`accrodion ${isActiveFaq2 === item.id ? "active" : ""}`}>
              <div className="accrodion-title" onClick={() => setIsActiveFaq2(isActiveFaq2 === item.id ? null : item.id)}>
                <h4>{item.question}</h4>
              </div>
              <div className="accrodion-content" style={{ display: isActiveFaq2 === item.id ? "block" : "none" }}>
                <div className="inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
