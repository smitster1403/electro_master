"use client";

import React from "react";
import Link from "next/link";
import "./styling/home.css";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-video-container">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="hero-video"
          >
            <source src="/background_video_hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <span className="hero-subtitle">INDUSTRIAL GRADE SOLUTIONS</span>
          <h1 className="hero-title">ENGINEERED FOR<br />PERFORMANCE</h1>
          <p className="hero-description">
            Electro Master delivers premium welding consumables and industrial hardware designed for the most demanding environments. Reliability you can trust.
          </p>
          <div className="hero-actions">
            <Link href="/products" className="btn-primary">
              View Catalog
            </Link>
            <Link href="/contact" className="btn-outline">
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container-width">
          <div className="section-header">
            <h2 className="section-title">WHY CHOOSE ELECTRO MASTER</h2>
            <p className="section-subtitle">Setting the standard for industrial supply since 2024</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3 className="feature-title">Premium Quality</h3>
              <p className="feature-text">
                Every electrode and component is rigorously tested to meet international standards (AWS, ISO, DIN), ensuring consistent performance in every weld.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3 className="feature-title">Rapid Logistics</h3>
              <p className="feature-text">
                Our optimized supply chain ensures that your critical materials arrive on site, on time. We understand that downtime is not an option.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3 className="feature-title">Technical Support</h3>
              <p className="feature-text">
                Backed by a team of experienced metallurgists and engineers ready to assist with selection and application guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
