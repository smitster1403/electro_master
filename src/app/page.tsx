"use client";

import React from "react";
import Link from "next/link";
import "./styling/home.css";


/* ─── Static data ─────────────────────────────────────────────────────── */

const heroStats = [
    { number: "15+",   label: "Resellers Nationwide" },
    { number: "7",     label: "Product Lines" },
    { number: "100%",  label: "Local Manufacturing" },
    { number: "24 / 7",label: "Technical Support" },
];

const pillars = [
    { id: "01", title: "BOBS Certified",        desc: "BOS89-2010 certification in process — meeting Botswana national standards" },
    { id: "02", title: "SAIW Approved",         desc: "Southern African Institute of Welding tests passed" },
    { id: "03", title: "15+ Resellers",         desc: "Available in hardware stores and growing across Botswana" },
    { id: "04", title: "Technical Support",     desc: "Dedicated local team for expert welding advice and assistance" },
    { id: "05", title: "Botswana Made",         desc: "Locally manufactured in Gaborone — supporting the local economy" },
    { id: "06", title: "Full Electrode Range",  desc: "General-purpose, structural, pipeline, stainless, and cast iron grades" },
];

const products = [
    {
        id:    "E7018",
        size:  "hero",
        cat:   "Structural Electrode",
        name:  "E7018 Structural",
        desc:  "High strength, low hydrogen electrode for structural steel, bridges, and heavy construction. Crack resistant with consistent performance on critical applications.",
        specs: [
            { k: "Classification", v: "E7018" },
            { k: "Diameters",      v: "2.5 – 4.0 mm" },
            { k: "Packaging",      v: "1KG / 4KG / 20KG" },
        ],
    },
    {
        id:    "E6013",
        size:  "sm",
        cat:   "General-Purpose Electrode",
        name:  "E6013 General Purpose",
        desc:  "Easy to use with a smooth arc and minimal spatter — ideal for light structural work, thin materials, and general fabrication.",
        specs: [{ k: "Classification", v: "E6013" }, { k: "Current", v: "AC / DC" }],
    },
    {
        id:    "MIG-WIRE",
        size:  "sm",
        cat:   "Semi-Automatic Wire",
        name:  "MIG Wire",
        desc:  "High-performance wire with excellent bead appearance and arc stability — suitable for fabrication, automotive repair, and general maintenance.",
        specs: [{ k: "Diameter Range", v: "0.80 – 1.20 mm" }, { k: "Type", v: "Semi-Automatic" }],
    },
];

const capabilities = [
    {
        num:   "01",
        title: "Electrode Manufacturing",
        desc:  "Full range of SMAW electrodes — E6013, E7018, E6010, E7010, stainless steel (309L, 316L), and cast iron grades for every industrial application.",
    },
    {
        num:   "02",
        title: "MIG Wire Supply",
        desc:  "High-performance MIG wire (0.80mm – 1.20mm) delivering excellent bead appearance, arc stability, and feedability for semi-automatic welding.",
    },
    {
        num:   "03",
        title: "Welding Consulting",
        desc:  "Our team recommends the right electrode for your specific application — structural steel, pipelines, food-grade stainless, or general fabrication.",
    },
    {
        num:   "04",
        title: "Technical Support",
        desc:  "Dedicated local support team in Gaborone providing fast, knowledgeable welding advice and assistance for every project.",
    },
];

/* ─── Page ────────────────────────────────────────────────────────────── */

export default function Home() {
    return (
        <main>

            {/* ══ 1 · HERO ═══════════════════════════════════════════════════════ */}
            <section className="hero" aria-label="Hero">
                {/* Video background */}
                <div className="hero-media" aria-hidden="true">
                    <video autoPlay muted loop playsInline className="hero-video">
                        <source src="/background_video_hero.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-overlay" />
                </div>

                {/* Content — two-column, pinned to bottom */}
                <div className="hero-body wrap-xl">
                    <div className="hero-left">
                        <h1 className="hero-title">
                            Finest Quality<br />
                            Electrode.
                        </h1>
                    </div>
                    <div className="hero-right">
                        <p className="hero-sub">
                            Welding solutions you can rely on — manufactured in Botswana,
                            built for structural steel, pipelines, and every demanding application.
                        </p>
                        <div className="hero-actions">
                            <Link href="/products" className="btn btn-primary">
                                View Catalog
                            </Link>
                            <Link href="/contact" className="btn btn-ghost">
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Stats strip — bottom of hero */}
                <div className="hero-stats" aria-label="Company highlights">
                    <div className="wrap-xl hero-stats-grid">
                        {heroStats.map((s) => (
                            <div className="hero-stat" key={s.label}>
                                <span className="hero-stat-num">{s.number}</span>
                                <span className="hero-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 2 · MISSION STATEMENT ══════════════════════════════════════════ */}
            <section className="mission-strip" aria-label="Our mission">
                <div className="wrap-xl">
                    <p className="mission-text">
                        &ldquo;ElectroMaster delivers welding solutions you can rely on.
                        Based in Botswana, we combine practical expertise with a commitment
                        to consistent performance — ensuring each weld meets the standards
                        clients deserve.&rdquo;
                    </p>
                    <div className="mission-meta">
                        <span className="label label--muted">Gaborone, Botswana</span>
                        <Link href="/about" className="mission-link">
                            Our story <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ══ 3 · PILLARS ════════════════════════════════════════════════════ */}
            <section className="pillars" aria-label="Key capabilities">
                <div className="wrap-xl">
                    <div className="pillars-grid">
                        {pillars.map((p) => (
                            <article className="pillar-item" key={p.id}>
                                <span className="pillar-num label" aria-hidden="true">{p.id}</span>
                                <h3 className="pillar-title">{p.title}</h3>
                                <p className="pillar-desc">{p.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 4 · FEATURED PRODUCTS ══════════════════════════════════════════ */}
            <section className="featured" aria-label="Featured products">
                <div className="wrap-xl">
                    <div className="section-header">
                        <p className="label">Our Catalog</p>
                        <h2 className="section-title" style={{ marginTop: "12px" }}>
                            Featured Products
                        </h2>
                    </div>

                    <div className="featured-grid">
                        {products.map((p) => (
                            <article
                                className={`fcard fcard--${p.size}`}
                                key={p.id}
                                aria-label={p.name}
                            >
                                <div className="fcard-meta">
                                    <span className="label">{p.cat}</span>
                                    <span className="fcard-id">{p.id}</span>
                                </div>
                                <h3 className="fcard-name">{p.name}</h3>
                                <p className="fcard-desc">{p.desc}</p>
                                <dl className="fcard-specs">
                                    {p.specs.map((s) => (
                                        <div className="fcard-spec" key={s.k}>
                                            <dt>{s.k}</dt>
                                            <dd>{s.v}</dd>
                                        </div>
                                    ))}
                                </dl>
                                <Link href="/contact" className="fcard-cta">
                                    Request Quote <span aria-hidden="true">→</span>
                                </Link>
                            </article>
                        ))}
                    </div>

                    <div className="featured-footer">
                        <Link href="/products" className="btn btn-outline">
                            View Full Catalog
                        </Link>
                    </div>
                </div>
            </section>

            {/* ══ 5 · ABOUT TEASER ═══════════════════════════════════════════════ */}
            <section className="about-teaser" aria-label="About ElectroMaster">
                <div className="about-teaser-grid wrap-xl">

                    <div className="at-image-wrap">
                        <div className="img-ph" aria-hidden="true" />
                        <div className="at-badge" aria-hidden="true">
                            <span className="at-badge-num">15<sup>+</sup></span>
                            <span className="at-badge-lbl">Resellers & Growing</span>
                        </div>
                    </div>

                    <div className="at-content">
                        <p className="label">Our Story</p>
                        <h2 className="section-title" style={{ marginTop: "12px" }}>
                            Who We Are
                        </h2>
                        <p className="at-pull">
                            We deliver welding solutions you can rely on — right here in Botswana.
                        </p>
                        <p className="at-body">
                            ElectroMaster is a Botswana-based manufacturer focused on producing
                            durable, high-quality electrodes that keep projects moving forward.
                            Our team combines practical expertise with a commitment to consistent
                            performance, ensuring each weld meets the standards our clients deserve.
                        </p>
                        <p className="at-body">
                            Our products are suitable for structural steel, pipelines, general
                            fabrication, and other industrial welding applications — backed by
                            a dedicated local support team ready to advise on the right electrode
                            for your specific needs.
                        </p>
                        <Link href="/about" className="btn btn-navy" style={{ marginTop: "2.5rem" }}>
                            Learn More About Us
                        </Link>
                    </div>

                </div>
            </section>

            {/* ══ 6 · CAPABILITIES ═══════════════════════════════════════════════ */}
            <section className="capabilities" aria-label="Our capabilities">
                <div className="wrap-xl">
                    <div className="section-header section-header--center">
                        <p className="label">What We Offer</p>
                        <h2 className="section-title" style={{ marginTop: "12px" }}>
                            Our Capabilities
                        </h2>
                        <p className="section-body" style={{ marginTop: "16px" }}>
                            From standard electrodes to expert consulting, we provide everything
                            your welding operation needs — backed by a local Botswana team.
                        </p>
                    </div>

                    <div className="cap-grid">
                        {capabilities.map((c) => (
                            <article className="cap-card" key={c.num}>
                                <span className="cap-num" aria-hidden="true">{c.num}</span>
                                <h3 className="cap-title">{c.title}</h3>
                                <p className="cap-desc">{c.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 7 · CTA BANNER ═════════════════════════════════════════════════ */}
            <section className="cta-banner" aria-label="Contact call to action">
                <div className="wrap-xl">
                    <div className="cta-inner">
                        <div className="cta-text">
                            <h2 className="cta-heading">
                                Ready to Source<br />
                                Quality Electrodes?
                            </h2>
                            <p className="cta-sub">
                                Our team is ready to recommend the right product for your
                                application and get you a quote fast.
                            </p>
                        </div>
                        <div className="cta-actions">
                            <Link href="/contact" className="btn btn-primary">
                                Get a Quote
                            </Link>
                            <Link href="/products" className="btn btn-ghost">
                                Browse Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
