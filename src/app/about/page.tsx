"use client";

import React from "react";
import "../styling/about.css";

const About = () => {
    return (
        <div className="about_main">
            <section className="about_hero">
                <h1 className="about_title">
                    The<br />Forge
                </h1>
                <p className="about_lead">
                    ElectroMaster is not just a manufacturer. We are the backbone of industry. 
                    Forging the tools that build nations, one weld at a time.
                </p>
            </section>

            <div className="about_grid">
                <div className="about_section">
                    <span className="section_label">OUR MISSION</span>
                    <p className="section_text">
                        To deliver welding solutions of uncompromising quality. We believe in the power of 
                        precision and the strength of materials. Our electrodes are engineered to withstand 
                        the most demanding environments on Earth.
                    </p>
                </div>
                <div className="about_section">
                    <span className="section_label">OUR ORIGIN</span>
                    <p className="section_text">
                        Born in the heart of Botswana, ElectroMaster rose to meet the demands of a growing 
                        infrastructure. We combine local expertise with global standards to create products 
                        that define reliability.
                    </p>
                </div>
            </div>

            <div className="stats_grid">
                <div className="stat_box">
                    <span className="stat_number">25+</span>
                    <span className="stat_label">YEARS EXPERIENCE</span>
                </div>
                <div className="stat_box">
                    <span className="stat_number">1M+</span>
                    <span className="stat_label">RODS PRODUCED</span>
                </div>
                <div className="stat_box">
                    <span className="stat_number">100%</span>
                    <span className="stat_label">QUALITY GUARANTEE</span>
                </div>
            </div>
        </div>
    );
};

export default About;
