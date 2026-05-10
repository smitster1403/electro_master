"use client";

import React from "react";
import Link from "next/link";
import "../styling/footer.css";

const Footer = () => {
    return (
        <footer className="site-footer" aria-label="Site footer">

            {/* ── Main 4-column grid ──────────────────────────────────── */}
            <div className="footer-main">
                <div className="footer-grid container-width">

                    {/* Brand column */}
                    <div className="footer-col footer-brand">
                        <Link href="/" className="footer-logo" aria-label="Electro Master — home">
                            ELECTRO<em>MASTER</em>
                        </Link>
                        <p className="footer-tagline">
                            Industrial-grade welding consumables and hardware engineered for
                            the world&apos;s most demanding environments.
                        </p>
                        <div className="footer-social" aria-label="Social links">
                            <a
                                href="#"
                                className="social-link"
                                aria-label="LinkedIn"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                in
                            </a>
                            <a
                                href="#"
                                className="social-link"
                                aria-label="Twitter / X"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                𝕏
                            </a>
                        </div>
                    </div>

                    {/* Products column */}
                    <div className="footer-col">
                        <h3 className="footer-col-heading">Products</h3>
                        <ul className="footer-links">
                            <li><Link href="/products">Welding Electrodes</Link></li>
                            <li><Link href="/products">MIG Wires</Link></li>
                            <li><Link href="/products">TIG Rods</Link></li>
                            <li><Link href="/products">Specialty Alloys</Link></li>
                            <li><Link href="/products">View Full Catalog →</Link></li>
                        </ul>
                    </div>

                    {/* Company column */}
                    <div className="footer-col">
                        <h3 className="footer-col-heading">Company</h3>
                        <ul className="footer-links">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/about">Our Mission</Link></li>
                            <li><Link href="/about">Certifications</Link></li>
                            <li><Link href="/about">Distribution Network</Link></li>
                            <li><Link href="/contact">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact column */}
                    <div className="footer-col footer-contact-col">
                        <h3 className="footer-col-heading">Get In Touch</h3>
                        <address className="footer-address">
                            <p>123 Industrial Sector 7</p>
                            <p>New York, NY 10001</p>
                        </address>
                        <a href="tel:+15550192834" className="footer-contact-link">
                            +1 (555) 019-2834
                        </a>
                        <a href="mailto:sales@electromaster.com" className="footer-contact-link">
                            sales@electromaster.com
                        </a>
                        <Link href="/contact" className="btn-primary footer-cta-btn">
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Newsletter strip ────────────────────────────────────── */}
            <div className="footer-newsletter">
                <div className="container-width newsletter-inner">
                    <div className="newsletter-text">
                        <h3 className="newsletter-heading">Stay Informed</h3>
                        <p>Technical bulletins, product updates, and industry insights — delivered to your inbox.</p>
                    </div>
                    <form
                        className="newsletter-form"
                        onSubmit={(e) => e.preventDefault()}
                        aria-label="Newsletter signup"
                    >
                        <label htmlFor="newsletter-email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            required
                            placeholder="Enter your email address"
                            className="newsletter-input"
                            autoComplete="email"
                        />
                        <button type="submit" className="newsletter-btn">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* ── Bottom bar ──────────────────────────────────────────── */}
            <div className="footer-bottom">
                <div className="container-width footer-bottom-inner">
                    <p>&copy; {new Date().getFullYear()} Electro Master. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Use</Link>
                        <Link href="#">Site Map</Link>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
