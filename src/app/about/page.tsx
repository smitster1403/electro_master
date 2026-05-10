"use client";

import React from "react";
import Link from "next/link";
import "../styling/about.css";

const stats = [
    { number: "500+",  label: "Active Clients" },
    { number: "99.9%", label: "Delivery Accuracy" },
    { number: "24/7",  label: "Technical Support" },
];

const values = [
    {
        num: "01",
        title: "Uncompromising Quality",
        desc: "Every electrode and wire we manufacture undergoes rigorous testing against AWS, ISO, and DIN standards. We do not ship a product until it meets — or exceeds — specification.",
    },
    {
        num: "02",
        title: "Partnership, Not Transactions",
        desc: "We invest in understanding each client's process, constraints, and goals. Our team acts as an extension of your engineering department — not just a catalogue.",
    },
    {
        num: "03",
        title: "Operational Reliability",
        desc: "Downtime is never acceptable. Our optimised supply chain, real-time inventory management, and rapid fulfilment operations ensure your line keeps moving.",
    },
];

const certBadges = [
    { code: "AWS D1.1",   name: "Structural Welding Code" },
    { code: "ISO 9001",   name: "Quality Management System" },
    { code: "CE Mark",    name: "European Conformity" },
    { code: "DIN EN 499", name: "Electrode Classification" },
    { code: "SGS",        name: "Independent Verification" },
    { code: "ASME IX",    name: "Welding Qualifications" },
];

const AboutPage = () => {
    return (
        <div className="about-page">

            {/* ── Hero Banner ────────────────────────────────────────── */}
            <div className="about-hero">
                <div className="container-width">
                    <span className="label about-hero-overline">
                        Our Purpose
                    </span>
                    <h1 className="about-hero-title">Our Mission</h1>
                    <p className="about-hero-lead">
                        To provide the global industrial sector with welding solutions that define
                        reliability, efficiency, and strength — from the shop floor to the most
                        critical structural applications on earth.
                    </p>
                </div>
            </div>

            {/* ── Who We Are ─────────────────────────────────────────── */}
            <section className="about-content-section" aria-label="Who we are">
                <div className="container-width">
                    <div className="about-who-grid">
                        <div className="about-who-text">
                            <span className="label">Our Story</span>
                            <h2 className="section-title" style={{ marginTop: "12px" }}>Who We Are</h2>
                            <p>
                                Electro Master was founded with a singular vision: to bridge the gap
                                between precision manufacturing and the real demands of on-site
                                industrial work. We understand that in construction, shipbuilding,
                                and pipeline fabrication, the quality of the weld determines the
                                integrity of the entire structure.
                            </p>
                            <p>
                                We are not merely a supplier — we are partners embedded in your
                                production line. Our team of industry veterans brings deep expertise
                                in metallurgy and arc physics, ensuring that every product we ship
                                performs flawlessly under pressure, in any environment, every time.
                            </p>
                            <p>
                                From standard SMAW electrodes to custom-formulated alloys for
                                specialised applications, our product range is engineered to meet
                                the tightest tolerances the industry demands.
                            </p>
                            <Link href="/contact" className="btn-navy about-who-btn">
                                Speak to Our Team
                            </Link>
                        </div>
                        <div className="about-who-image-wrap">
                            <div className="img-ph" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stats Bar ──────────────────────────────────────────── */}
            <section className="about-stats-section" aria-label="Company statistics">
                <div className="container-width">
                    <div className="about-stats-grid">
                        {stats.map((s) => (
                            <div className="about-stat-item" key={s.label}>
                                <span className="about-stat-number">{s.number}</span>
                                <span className="about-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Our Values ─────────────────────────────────────────── */}
            <section className="about-values-section" aria-label="Our values">
                <div className="container-width">
                    <div className="section-header section-header--center">
                        <span className="label">What Drives Us</span>
                        <h2 className="section-title" style={{ marginTop: "12px" }}>Our Values</h2>
                        <p className="section-subtitle">
                            These principles guide every product we manufacture, every
                            delivery we make, and every client relationship we build.
                        </p>
                    </div>

                    <div className="values-grid">
                        {values.map((v) => (
                            <article className="value-card" key={v.num}>
                                <span className="value-num" aria-hidden="true">{v.num}</span>
                                <h3 className="value-title">{v.title}</h3>
                                <p className="value-desc">{v.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Resellers / Network ────────────────────────────────── */}
            <section className="about-network-section" aria-label="Our distribution network">
                <div className="container-width">
                    <div className="about-network-grid">
                        <div className="about-network-content">
                            <span className="label">Our Reach</span>
                            <h2 className="section-title" style={{ marginTop: "12px" }}>A Network Built on Trust</h2>
                            <p>
                                Our products reach job sites across the globe through a carefully
                                selected network of authorised distributors and direct supply
                                partnerships. Whether you are a single-site fabrication shop or a
                                multinational EPC contractor, our logistics infrastructure ensures
                                consistent availability and on-time delivery.
                            </p>
                            <p>
                                Becoming an Electro Master authorised reseller means access to
                                technical training, co-branded materials, and dedicated account
                                management — everything you need to serve your customers with
                                confidence.
                            </p>
                            <Link href="/contact" className="btn-outline-dark about-network-btn">
                                Enquire About Reselling
                            </Link>
                        </div>
                        <div className="about-network-image-wrap">
                            <div className="img-ph" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Certifications ─────────────────────────────────────── */}
            <section className="about-cert-section" aria-label="Certifications and standards">
                <div className="container-width">
                    <div className="about-cert-inner">
                        <div className="about-cert-image-wrap">
                            <div className="img-ph" aria-hidden="true" />
                        </div>
                        <div className="about-cert-content">
                            <span className="label">Quality Assurance</span>
                            <h2 className="section-title" style={{ marginTop: "12px" }}>Standards We Uphold</h2>
                            <p>
                                Every product leaving our facilities is tested against the world&apos;s
                                leading welding and quality standards. Our commitment to certification
                                is not a checkbox — it is the foundation of the trust our clients
                                place in us.
                            </p>
                            <div className="about-cert-badges" role="list">
                                {certBadges.map((c) => (
                                    <div className="about-cert-badge" role="listitem" key={c.code}>
                                        <span className="acb-code">{c.code}</span>
                                        <span className="acb-name">{c.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ────────────────────────────────────────────────── */}
            <section className="about-cta-section" aria-label="Contact us">
                <div className="container-width">
                    <h2 className="about-cta-heading">Partner with Electro Master</h2>
                    <p className="about-cta-sub">
                        Ready to bring Electro Master quality to your production line?
                        Speak to our team and receive a tailored quote within 24 hours.
                    </p>
                    <div className="about-cta-actions">
                        <Link href="/contact" className="btn-primary">Get a Quote</Link>
                        <Link href="/products" className="btn-outline">View Products</Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;
