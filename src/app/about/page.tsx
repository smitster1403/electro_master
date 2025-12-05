"use client";

import React from "react";
import "../styling/about.css";

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about-hero">
                <div className="container-width">
                    <h1 className="about-title">OUR MISSION</h1>
                    <p className="about-lead">
                        To provide the industrial sector with welding solutions that define reliability, efficiency, and strength. We are building the future of fabrication.
                    </p>
                </div>
            </div>

            <div className="about-content container-width">
                <div className="about-grid">
                    <div className="about-text">
                        <h2>WHO WE ARE</h2>
                        <p>
                            Electro Master was founded with a singular vision: to bridge the gap between high-quality manufacturing and on-site industrial needs. We understand that in construction, shipbuilding, and pipeline fabrication, the quality of the weld determines the integrity of the structure.
                        </p>
                        <p>
                            We are not just a supplier; we are partners in your production line. Our team consists of industry veterans who understand the technical nuances of metallurgy and arc physics.
                        </p>
                    </div>
                    <div className="about-image-placeholder">
                        [INDUSTRIAL FACILITY IMAGE]
                    </div>
                </div>

                <div className="stats-row">
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Active Clients</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">99.9%</span>
                        <span className="stat-label">Delivery Accuracy</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">Technical Support</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
