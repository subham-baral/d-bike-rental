"use client";

import React from 'react';
import Banner from '../../sections/common/Banner';
import googleIcon from '../../assets/images/icon/icon-google-2.png';
import facebookIcon from '../../assets/images/icon/icon-facebook.png';
import Link from 'next/link';
const SignUp = () => {
  const socialLogins = [{
    href: '#',
    icon: googleIcon,
    alt: 'Google',
    text: 'Continue with Google'
  }, {
    href: '#',
    icon: facebookIcon,
    alt: 'Facebook',
    text: 'Continue with Facebook'
  }];
  const handleSignup = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const signUpInfo = {
      name: formData.get('form_name'),
      email: formData.get('form_email'),
      phone: formData.get('form_phone'),
      password: formData.get('form_password')
    };
    if (signUpInfo) {
      form.reset();
    }
  };
  return <>
            <Banner breadcrumb='Sign up' />
            <section className="sign-up-one">
                <div className="container">
                    <div className="sign-up-one__form">
                        <div className="inner-title text-center">
                            <h2>Sign Up</h2>
                        </div>
                        <form onSubmit={handleSignup}>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input type="text" name="form_name" id="formName" placeholder="Name..." required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input type="email" name="form_email" id="formEmail" placeholder="Email..." required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input type="tel" name="form_phone" id="formPhone" placeholder="Phone..." required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input type="password" name="form_password" id="formPassword" placeholder="Password..." required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                            Sign Up
                                            <span><i className="icon-diagonal-arrow"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="google-facebook">
                                {socialLogins.map(social => <a key={social.alt} href={social.href} rel="noopener noreferrer">
                                        <div className="icon">
                                            <img src={social.icon} alt={social.alt} />
                                        </div>
                                        {social.text}
                                    </a>)}
                            </div>
                            <div className="create-account text-center">
                                <p>Already have an account? <Link href={"/inner/login"}>Login Here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>;
};
export default SignUp;