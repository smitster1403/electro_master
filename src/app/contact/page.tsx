"use client";

import React from "react";
import "../styling/contact.css";

const ContactPage = () => {
    return (
        <div className="contact-page">

            {/* ── Banner ────────────────────────────────────────────── */}
            <div className="contact-hero">
                <div className="container-width">
                    <span className="label contact-hero-overline">
                        Reach Our Team
                    </span>
                    <h1 className="contact-hero-title">Contact Us</h1>
                    <p className="contact-hero-sub">
                        For quotes, technical enquiries, or partnership discussions —
                        our sales engineers respond within one business day.
                    </p>
                </div>
            </div>

            {/* ── Card ─────────────────────────────────────────────── */}
            <div className="contact-body container-width">
                <div className="contact-card">

                    {/* Form */}
                    <section className="contact-form-section" aria-label="Contact form">
                        <h2 className="contact-section-heading">Send a Message</h2>

                        <form noValidate>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="cf-name">
                                        Full Name <span aria-hidden="true">*</span>
                                    </label>
                                    <input
                                        id="cf-name"
                                        type="text"
                                        className="form-input"
                                        placeholder="Jane Smith"
                                        required
                                        autoComplete="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="cf-email">
                                        Email Address <span aria-hidden="true">*</span>
                                    </label>
                                    <input
                                        id="cf-email"
                                        type="email"
                                        className="form-input"
                                        placeholder="jane@company.com"
                                        required
                                        autoComplete="email"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="cf-company">
                                        Company Name
                                    </label>
                                    <input
                                        id="cf-company"
                                        type="text"
                                        className="form-input"
                                        placeholder="Industrial Corp Ltd."
                                        autoComplete="organization"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="cf-phone">
                                        Phone Number
                                    </label>
                                    <input
                                        id="cf-phone"
                                        type="tel"
                                        className="form-input"
                                        placeholder="+1 (555) 000-0000"
                                        autoComplete="tel"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="cf-subject">
                                    Subject
                                </label>
                                <select id="cf-subject" className="form-input form-select">
                                    <option value="">Select an enquiry type…</option>
                                    <option value="quote">Request a Quote</option>
                                    <option value="technical">Technical Support</option>
                                    <option value="reseller">Reseller / Distribution</option>
                                    <option value="other">General Enquiry</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="cf-message">
                                    Message <span aria-hidden="true">*</span>
                                </label>
                                <textarea
                                    id="cf-message"
                                    className="form-textarea"
                                    placeholder="Tell us about your project, required quantities, or application…"
                                    required
                                />
                            </div>

                            <button type="submit" className="btn-primary btn-block btn-submit">
                                Send Message
                            </button>
                        </form>
                    </section>

                    {/* Info */}
                    <aside className="contact-info" aria-label="Contact information">

                        <div className="info-block">
                            <h3 className="info-heading">Headquarters</h3>
                            <address className="info-text">
                                123 Industrial Sector 7<br />
                                Neo-Manufacturing District<br />
                                New York, NY 10001
                            </address>
                        </div>

                        <div className="info-block">
                            <h3 className="info-heading">Phone</h3>
                            <p className="info-text">
                                <a href="tel:+15550192834">+1 (555) 019-2834</a>
                            </p>
                            <p className="info-hours">Mon – Fri, 8 am – 6 pm EST</p>
                        </div>

                        <div className="info-block">
                            <h3 className="info-heading">Email</h3>
                            <p className="info-text">
                                <a href="mailto:sales@electromaster.com">sales@electromaster.com</a>
                            </p>
                            <p className="info-text">
                                <a href="mailto:support@electromaster.com">support@electromaster.com</a>
                            </p>
                        </div>

                        <div className="info-block">
                            <h3 className="info-heading">Response Time</h3>
                            <p className="info-text">
                                All enquiries receive a response within one business day.
                                Urgent orders may be escalated by phone.
                            </p>
                        </div>

                        <div className="info-certifications">
                            <span className="info-cert-label">Quality Assured</span>
                            <div className="info-cert-badges">
                                <span>ISO 9001</span>
                                <span>AWS</span>
                                <span>CE</span>
                            </div>
                        </div>

                    </aside>
                </div>
            </div>

        </div>
    );
};

export default ContactPage;
