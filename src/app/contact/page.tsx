"use client";

import React from "react";
import "../styling/contact.css";

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1 className="contact-title">CONTACT US</h1>
                <p className="contact-subtitle">
                    Get in touch with our sales team for quotes and technical inquiries.
                </p>
            </div>

            <div className="contact-container">
                <div className="contact-card">
                    <div className="contact-form">
                        <form>
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-input" placeholder="John Doe" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-input" placeholder="john@company.com" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Company Name</label>
                                <input type="text" className="form-input" placeholder="Industrial Corp Ltd." />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea className="form-textarea" placeholder="Tell us about your project requirements..."></textarea>
                            </div>

                            <button type="submit" className="btn-primary btn-block">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="contact-info">
                        <div className="info-block">
                            <h3 className="info-title">Headquarters</h3>
                            <p className="info-text">
                                123 Industrial Sector 7<br/>
                                Neo-Manufacturing District<br/>
                                New York, NY 10001
                            </p>
                        </div>

                        <div className="info-block">
                            <h3 className="info-title">Phone</h3>
                            <p className="info-text">
                                +1 (555) 019-2834<br/>
                                Mon-Fri, 8am - 6pm EST
                            </p>
                        </div>

                        <div className="info-block">
                            <h3 className="info-title">Email</h3>
                            <p className="info-text">
                                sales@electromaster.com<br/>
                                support@electromaster.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
