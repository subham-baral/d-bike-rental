import React from 'react';
import ContactForm from './ContactForm';

export async function getFormConfig() {
  try {
    const token = process.env.NEXT_PUBLIC_CMS_API_TOKEN;
    const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL || 'https://cmsapi.one9ty.com/api/v1';
    const res = await fetch(`${baseUrl}/forms/5`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      },
      next: { revalidate: 3600 }
    });
    if (!res.ok) {
      console.error(`Failed to fetch form config: ${res.status}`);
      return null;
    }
    const json = await res.json();
    if (json && json.id) {
      return json;
    }
    return null;
  } catch (err) {
    console.error("Error fetching form config", err);
    return null;
  }
}

const ContactMain = async () => {
  const formConfig = await getFormConfig();

  return (
    <>
      <section className="contact-info">
          <div className="container">
              <div className="row">
                  {/*Contact Two Single Start*/}
                  <div className="col-xl-4 col-lg-4">
                      <div className="contact-info__single">
                          <div className="contact-info__icon">
                              <span className="icon-call-2"></span>
                          </div>
                          <p>Contact Us</p>
                          <h3><a href="tel:+918112003520">+91 81120 03520</a></h3>
                      </div>
                  </div>
                  {/*Contact Two Single End*/}
                  {/*Contact Two Single Start*/}
                  <div className="col-xl-4 col-lg-4">
                      <div className="contact-info__single">
                          <div className="contact-info__icon">
                              <span className="icon-envelope-2"></span>
                          </div>
                          <p>Mail Us</p>
                          <h3><a href="mailto:dbikerental1@gmail.com">dbikerental1@gmail.com</a></h3>
                      </div>
                  </div>
                  {/*Contact Two Single End*/}
                  {/*Contact Two Single Start*/}
                  <div className="col-xl-4 col-lg-4">
                      <div className="contact-info__single">
                          <div className="contact-info__icon">
                              <span className="icon-pin-2"></span>
                          </div>
                          <p>Our Office Location</p>
                          <h3>Gopal Ballabh Rd, near Shakuntala Palace, Puri</h3>
                      </div>
                  </div>
                  {/*Contact Two Single End*/}
              </div>
          </div>
      </section>
      {/*Contact Info End*/}

      {/*Contact Page Start*/}
      <section className="contact-page">
          <div className="container">
              <div className="contact-page__inner">
                  <div className="row">
                      <div className="col-xl-6">
                          <div className="contact-page__left">
                              <iframe src="https://maps.google.com/maps?q=Gopal%20Ballabh%20Rd,%20near%20Shakuntala%20Palace,%20Puri,%20Odisha%20752001&t=&z=15&ie=UTF8&iwloc=&output=embed" className="google-map__one"></iframe>
                          </div>
                      </div>
                      <div className="col-xl-6">
                          <div className="contact-page__right">
                              <h3 className="contact-page__form-title">
                                {formConfig?.name || "Get A Free Quote"}
                              </h3>
                              <ContactForm formConfig={formConfig} />
                              <p className="ajax-response mb-0"></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default ContactMain;