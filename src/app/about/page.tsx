"use client";

import React from "react";
import Link from "next/link";
import "../styling/about.css";

const stats = [
    { number: "15+", label: "Hardware Store Resellers" },
    { number: "7",   label: "Product Types" },
    { number: "2",   label: "Certifications Pursued" },
];

const values = [
    {
        num: "01",
        title: "Quality You Can Rely On",
        desc: "ElectroMaster products are manufactured to perform consistently, giving customers confidence on every job — from light fabrication to heavy structural work.",
    },
    {
        num: "02",
        title: "Botswana-Based Support Team",
        desc: "Dedicated local support team providing fast, knowledgeable assistance and expert welding advice — right here in Gaborone.",
    },
    {
        num: "03",
        title: "Customer-Centric Solutions",
        desc: "We recommend the right electrodes for specific welding needs including structural steel, pipelines, food-grade stainless, and fabrication projects.",
    },
];

const certBadges = [
    {
        code: "BOBS",
        name: "BOS89-2010 — Certification in Process",
        highlight: true,
    },
    {
        code: "SAIW",
        name: "Southern African Institute of Welding — Tests Passed",
        highlight: false,
    },
];

const AboutPage = () => {
    return (
        <div className="about-page">

            {/* ── Hero Banner ────────────────────────────────────────── */}
            <div className="about-hero">
                <div className="container-wide">
                    <span className="label about-hero-overline">
                        Based in Botswana
                    </span>
                    <h1 className="about-hero-title">Finest Quality Electrode</h1>
                    <p className="about-hero-lead">
                        ElectroMaster delivers welding solutions you can rely on. We focus on
                        producing durable, high-quality electrodes that keep projects moving
                        forward — manufactured right here in Gaborone, Botswana.
                    </p>
                </div>
            </div>

            {/* ── Who We Are ─────────────────────────────────────────── */}
            <section className="about-content-section" aria-label="Who we are">
                <div className="container-wide">
                    <div className="about-who-grid">
                        <div className="about-who-text">
                            <span className="label">Our Story</span>
                            <h2 className="section-title" style={{ marginTop: "12px" }}>Who We Are</h2>
                            <p>
                                ElectroMaster is a Botswana-based manufacturer dedicated to producing
                                durable, high-quality welding electrodes. Our team combines practical
                                expertise with a commitment to consistent performance, ensuring each
                                weld meets the standards our clients deserve.
                            </p>
                            <p>
                                Our products are suitable for structural steel, pipelines, general
                                fabrication, and other industrial welding applications. Whether you
                                are working on heavy construction, automotive repair, or food-grade
                                stainless steel, we have the right electrode for the job.
                            </p>
                            <p>
                                Based at Plot 22086, G/West Industrial, Gaborone, we supply
                                through 15+ hardware stores across Botswana and continue to grow
                                our reseller network to reach more job sites nationwide.
                            </p>
                            <Link href="/contact" className="btn btn-navy about-who-btn">
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
                <div className="container-wide">
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
                <div className="container-wide">
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
                <div className="container-wide">
                    <div className="about-network-grid">
                        <div className="about-network-content">
                            <span className="label">Our Reach</span>
                            <h2 className="section-title" style={{ marginTop: "12px" }}>Available Across Botswana</h2>
                            <p>
                                ElectroMaster products are available in 15+ hardware stores across
                                Botswana and growing. Our reseller network means you can find our
                                electrodes close to your job site — without the wait.
                            </p>
                            <p>
                                Becoming an ElectroMaster authorised reseller gives you access to
                                a trusted, locally manufactured product line with a dedicated
                                support team to assist both you and your customers with technical
                                welding advice.
                            </p>
                            <Link href="/contact" className="btn btn-outline-dark about-network-btn">
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
                <div className="container-wide">
                    <div className="about-cert-inner">
                        <div className="about-cert-image-wrap">
                            <div className="img-ph" aria-hidden="true" />
                        </div>
                        <div className="about-cert-content">
                            <span className="label">Quality Assurance</span>
                            <h2 className="section-title" style={{ marginTop: "12px" }}>Our Certifications</h2>
                            <p>
                                ElectroMaster is actively pursuing leading industry certifications
                                to demonstrate the quality and consistency our clients already
                                experience on the job. We are committed to meeting and exceeding
                                national and regional welding standards.
                            </p>
                            <div className="about-cert-badges" role="list">
                                {certBadges.map((c) => (
                                    <div
                                        className="about-cert-badge"
                                        role="listitem"
                                        key={c.code}
                                        style={c.highlight ? { borderColor: "var(--blue)", background: "var(--blue-light)" } : {}}
                                    >
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
                <div className="container-wide">
                    <h2 className="about-cta-heading">Partner with ElectroMaster</h2>
                    <p className="about-cta-sub">
                        Ready to bring ElectroMaster quality to your project?
                        Get in touch and our team will recommend the right electrode for you.
                    </p>
                    <div className="about-cta-actions">
                        <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
                        <Link href="/products" className="btn btn-ghost">View Products</Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;
