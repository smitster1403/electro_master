"use client";

import React, { useEffect, useRef, useState } from "react";
import "../styling/contact.css";

const Contact = () => {
    const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
    const heroRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements(prev => new Set(prev).add(entry.target.id));
                    }
                });
            },
            { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
        );

        const elements = [heroRef.current, contactRef.current, formRef.current];
        elements.forEach(el => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="contact_main">
            {/* Hero Section */}
            <section 
                ref={heroRef}
                id="contact-hero"
                className={`contact_hero ${visibleElements.has('contact-hero') ? 'visible' : ''}`}
            >
                <div className="hero_content">
                    <h1 className="hero_title">
                        <span className="title_line">Get In</span>
                        <span className="title_line title_highlight">Touch</span>
                    </h1>
                    <p className="hero_subtitle">Ready to discuss your welding needs? We're here to help.</p>
                </div>
                <div className="hero_visual">
                    <div className="contact_accent"></div>
                </div>
            </section>

            {/* Contact Information */}
            <section 
                ref={contactRef}
                id="contact-info"
                className={`contact_info_section ${visibleElements.has('contact-info') ? 'visible' : ''}`}
            >
                <div className="info_content">
                    <div className="info_grid">
                        <div className="info_card">
                            <div className="info_icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div className="info_details">
                                <h3>Phone</h3>
                                <p>+267 123 4567</p>
                                <span>Mon-Fri 8AM-5PM</span>
                            </div>
                        </div>

                        <div className="info_card">
                            <div className="info_icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div className="info_details">
                                <h3>Email</h3>
                                <p>info@electromaster.co.bw</p>
                                <span>24/7 Response</span>
                            </div>
                        </div>

                        <div className="info_card">
                            <div className="info_icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div className="info_details">
                                <h3>Location</h3>
                                <p>Gaborone, Botswana</p>
                                <span>Industrial Area</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section 
                ref={formRef}
                id="contact-form"
                className={`contact_form_section ${visibleElements.has('contact-form') ? 'visible' : ''}`}
            >
                <div className="form_content">
                    <div className="form_header">
                        <h2>Send us a Message</h2>
                        <p>Tell us about your project requirements and we'll get back to you promptly.</p>
                    </div>
                    
                    <form className="contact_form">
                        <div className="form_row">
                            <div className="form_group">
                                <label htmlFor="name">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    placeholder="Your full name"
                                />
                            </div>
                            <div className="form_group">
                                <label htmlFor="email">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        <div className="form_row">
                            <div className="form_group">
                                <label htmlFor="phone">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    placeholder="+267 123 4567"
                                />
                            </div>
                            <div className="form_group">
                                <label htmlFor="company">Company</label>
                                <input 
                                    type="text" 
                                    id="company" 
                                    name="company" 
                                    placeholder="Your company name"
                                />
                            </div>
                        </div>

                        <div className="form_group">
                            <label htmlFor="subject">Subject</label>
                            <select id="subject" name="subject" required>
                                <option value="">Select a topic</option>
                                <option value="product-inquiry">Product Inquiry</option>
                                <option value="bulk-order">Bulk Orders</option>
                                <option value="technical-support">Technical Support</option>
                                <option value="partnership">Partnership</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form_group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                rows={6}
                                placeholder="Tell us about your welding requirements, project details, or any questions you have..."
                            ></textarea>
                        </div>

                        <button type="submit" className="submit_button">
                            <span>Send Message</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                            </svg>
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;