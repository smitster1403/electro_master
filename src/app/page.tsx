"use client";

import React from "react";
import Link from "next/link";
import "./styling/home.css";


/* ─── Static data ─────────────────────────────────────────────────────── */

const heroStats = [
    { number: "500+",  label: "Active Clients" },
    { number: "99.9%", label: "Delivery Accuracy" },
    { number: "15+",   label: "Product Lines" },
    { number: "24 / 7",label: "Technical Support" },
];

const pillars = [
    { id: "01", title: "ISO 9001 Certified",      desc: "Third-party verified quality management" },
    { id: "02", title: "AWS Qualified",            desc: "Full American Welding Society compliance" },
    { id: "03", title: "Global Distribution",     desc: "Delivering to job sites worldwide" },
    { id: "04", title: "Technical Support",       desc: "Engineers on-call around the clock" },
    { id: "05", title: "Custom Formulations",     desc: "Bespoke alloys for critical applications" },
    { id: "06", title: "Same-Day Fulfilment",     desc: "Order by 2 pm — ships same day" },
];

const products = [
    {
        id:       "WR-7018",
        size:     "hero",
        cat:      "SMAW Electrode",
        name:     "E7018 Low Hydrogen",
        desc:     "The industry gold standard for code-quality structural welds. Low hydrogen, iron-powder formulation delivering exceptional tensile strength and crack resistance on critical applications.",
        specs:    [
            { k: "Classification", v: "AWS E7018" },
            { k: "Min. Tensile",   v: "70,000 PSI" },
            { k: "Current",        v: "AC / DC+" },
        ],
    },
    {
        id:       "WR-6013",
        size:     "sm",
        cat:      "SMAW Electrode",
        name:     "E6013 General Purpose",
        desc:     "Versatile rutile electrode delivering excellent arc stability, minimal spatter, and a smooth bead across all positions — ideal for general fabrication.",
        specs:    [{ k: "Classification", v: "AWS E6013" }, { k: "Current", v: "AC / DC" }],
    },
    {
        id:       "MW-70S6",
        size:     "sm",
        cat:      "GMAW Wire",
        name:     "MIG Wire ER70S-6",
        desc:     "High-quality solid wire with superior deoxidation for cleaner, stronger welds — even on mill-scale or lightly rusty base metal.",
        specs:    [{ k: "Classification", v: "AWS ER70S-6" }, { k: "Diameter", v: "0.035\"" }],
    },
];

const capabilities = [
    {
        num:   "01",
        title: "Covered Arc Electrodes",
        desc:  "A complete range of SMAW electrodes — cellulosic, rutile, low-hydrogen, and specialty grades for every industrial application and base metal.",
    },
    {
        num:   "02",
        title: "MIG & TIG Wires",
        desc:  "Precision-drawn solid and flux-cored wires engineered for consistent feedability, superior arc stability, and top-tier mechanical properties.",
    },
    {
        num:   "03",
        title: "Metallurgical Consulting",
        desc:  "Our engineers provide expert guidance on product selection, procedure qualification, and on-site weld optimisation.",
    },
    {
        num:   "04",
        title: "Custom Formulations",
        desc:  "Bespoke electrode chemistries for demanding specifications — offshore, subsea, nuclear-grade, and high-alloy applications.",
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

                {/* Content — bottom-anchored */}
                <div className="hero-body wrap">
                    <p className="label hero-label">Certified Industrial Solutions</p>
                    <h1 className="hero-title">
                        Engineered for the<br />
                        World&rsquo;s Most<br />
                        Demanding Environments.
                    </h1>
                    <p className="hero-sub">
                        Premium welding consumables built to AWS, ISO, and DIN standards —
                        so every weld you make is one you can stake your reputation on.
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

                {/* Stats strip — bottom of hero */}
                <div className="hero-stats" aria-label="Company highlights">
                    <div className="wrap hero-stats-grid">
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
                <div className="wrap">
                    <p className="mission-text">
                        &ldquo;The materials we supply hold bridges together, keep pipelines
                        intact, and ensure that the structures built today still stand
                        decades from now.&rdquo;
                    </p>
                    <div className="mission-meta">
                        <span className="label label--muted">Founded on a singular mission</span>
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
                <div className="wrap">
                    <div className="section-header">
                        <p className="label">Our Catalog</p>
                        <h2 className="section-title" style={{ marginTop: "12px" }}>
                            Featured Products
                        </h2>
                    </div>

                    {/* Editorial asymmetric grid */}
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
            <section className="about-teaser" aria-label="About Electro Master">
                <div className="about-teaser-grid wrap">

                    <div className="at-image-wrap">
                        <div className="img-ph" aria-hidden="true" />
                        {/* Floating stat badge */}
                        <div className="at-badge" aria-hidden="true">
                            <span className="at-badge-num">500<sup>+</sup></span>
                            <span className="at-badge-lbl">Clients Served</span>
                        </div>
                    </div>

                    <div className="at-content">
                        <p className="label">Our Story</p>
                        <h2 className="section-title" style={{ marginTop: "12px" }}>
                            Who We Are
                        </h2>
                        <p className="at-pull">
                            We are not merely a supplier — we are partners embedded in your
                            production line.
                        </p>
                        <p className="at-body">
                            Electro Master was founded with a singular vision: to bridge the gap
                            between precision manufacturing and the real demands of on-site
                            industrial work. In construction, shipbuilding, and pipeline
                            fabrication, the quality of the weld determines the integrity of the
                            whole structure.
                        </p>
                        <p className="at-body">
                            Our team of industry veterans brings deep expertise in metallurgy and
                            arc physics, ensuring every product we ship performs flawlessly under
                            pressure, in any environment, every time.
                        </p>
                        <Link href="/about" className="btn btn-navy" style={{ marginTop: "2.5rem" }}>
                            Learn More About Us
                        </Link>
                    </div>

                </div>
            </section>

            {/* ══ 6 · CAPABILITIES ═══════════════════════════════════════════════ */}
            <section className="capabilities" aria-label="Our capabilities">
                <div className="wrap">
                    <div className="section-header section-header--center">
                        <p className="label">What We Offer</p>
                        <h2 className="section-title" style={{ marginTop: "12px" }}>
                            Our Capabilities
                        </h2>
                        <p className="section-body" style={{ marginTop: "16px" }}>
                            From standard consumables to bespoke engineered solutions, we provide
                            everything your operation demands — backed by deep technical expertise.
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
                <div className="wrap">
                    <div className="cta-inner">
                        <div className="cta-text">
                            <h2 className="cta-heading">
                                Ready to Elevate<br />
                                Your Operation?
                            </h2>
                            <p className="cta-sub">
                                Our sales engineers are standing by. Tell us about your project
                                and receive a tailored quote within 24 hours.
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
