"use client";

import React, { useState } from 'react';
import Banner from '../../sections/common/Banner';
import Link from 'next/link';
const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const loginData = {
      email: formData.get('form_email'),
      password: formData.get('form_password'),
      rememberMe: rememberMe
    };
    if (loginData) {
      form.reset();
    }
  };
  const handleRememberMeChange = e => {
    setRememberMe(e.target.checked);
  };
  return <>
            <Banner breadcrumb='Login' />
            <section className="login-one">
                <div className="container">
                    <div className="login-one__form">
                        <div className="inner-title text-center">
                            <h2>Login Here</h2>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input type="email" name="form_email" id="formEmail1" placeholder="Email..." required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input type="password" name="form_password" id="formEmail2" placeholder="Password..." required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                            Login Here
                                            <span><i className="icon-diagonal-arrow"></i></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="remember-forget">
                                    <div className="checked-box1">
                                        <input className="form-check-input mt-1" type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} aria-label="Remember me checkbox" />
                                        <label htmlFor="rememberMe">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="forget">
                                        <a href="#">Forget password?</a>
                                    </div>
                                </div>

                                <div className="create-account text-center">
                                    <p>Not registered yet? <Link href={"/inner/sign-up"}>Create an Account</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>;
};
export default Login;