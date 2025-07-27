"use client";

import React, { useEffect, useRef, useState } from "react";
import type { Metadata } from "next";
import "../styling/about.css";

const About = () => {
    const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
    const heroRef = useRef<HTMLElement>(null);
    const valuesRef = useRef<HTMLElement>(null);
    const statsRef = useRef<HTMLElement>(null);

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

        const elements = [heroRef.current, valuesRef.current, statsRef.current];
        elements.forEach(el => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="about_main">
            {/* Hero Section */}
            <section 
                ref={heroRef}
                id="hero"
                className={`about_hero ${visibleElements.has('hero') ? 'visible' : ''}`}
            >
                <div className="hero_content">
                    <h1 className="hero_title">
                        <span className="title_line">Precision.</span>
                        <span className="title_line">Performance.</span>
                        <span className="title_line title_highlight">ElectroMaster.</span>
                    </h1>
                    <p className="about_hero_description">
                        ElectroMaster delivers welding solutions you can rely on. Based in Botswana, we focus
                        on producing durable, high-quality electrodes that keep projects moving forward. Our
                        team combines practical expertise with a commitment to consistent performance,
                        ensuring each weld meets the standards our clients deserve.
                    </p>
                    <div className="hero_stats">
                        <div className="hero_stat">
                            <span className="stat_number">15+</span>
                            <span className="stat_label">Years Experience</span>
                        </div>
                        <div className="hero_stat">
                            <span className="stat_number">1000+</span>
                            <span className="stat_label">Projects Completed</span>
                        </div>
                        <div className="hero_stat">
                            <span className="stat_number">100%</span>
                            <span className="stat_label">Quality Guaranteed</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section 
                ref={valuesRef}
                id="values"
                className={`about_values ${visibleElements.has('values') ? 'visible' : ''}`}
            >
                <h2 className="section_title">Why Choose ElectroMaster</h2>
                <div className="values_grid">
                    <div className="value_card card_1">
                        <div className="card_icon">🎯</div>
                        <h3>Customer-Centric Solutions</h3>
                        <p>
                            Our team goes above and beyond to recommend the right electrodes for your
                            specific welding needs. Whether you require guidance on structural steel, pipelines, or
                            fabrication projects, we're here to ensure you get strong, reliable welds every time.
                        </p>
                        <div className="card_highlight"></div>
                    </div>
                    
                    <div className="value_card card_2">
                        <div className="card_icon">🇧🇼</div>
                        <h3>Botswana-Based Support Team</h3>
                        <p>
                            Our dedicated local team is always ready to assist with fast, knowledgeable support. We
                            understand your projects and timelines, providing expert advice to keep your welding
                            work efficient and on track.
                        </p>
                        <div className="card_highlight"></div>
                    </div>
                    
                    <div className="value_card card_3">
                        <div className="card_icon">⚡</div>
                        <h3>Quality You Can Rely On</h3>
                        <p>
                            We stand by our products with uncompromising quality standards. With
                            ElectroMaster, you can be confident that your welding electrodes are manufactured to
                            perform consistently, giving you peace of mind on every job.
                        </p>
                        <div className="card_highlight"></div>
                    </div>
                </div>
            </section>

            {/* Performance Stats Section */}
            <section 
                ref={statsRef}
                id="stats"
                className={`performance_section ${visibleElements.has('stats') ? 'visible' : ''}`}
            >
                <div className="performance_content">
                    <h2 className="section_title">Built for Performance</h2>
                    <div className="performance_grid">
                        <div className="performance_item">
                            <div className="performance_visual">
                                <div className="progress_circle">
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45" className="progress_bg"/>
                                        <circle cx="50" cy="50" r="45" className="progress_fill" data-percent="98"/>
                                    </svg>
                                    <span className="progress_text">98%</span>
                                </div>
                            </div>
                            <h3>Weld Strength</h3>
                            <p>Superior electrode performance ensuring maximum joint integrity</p>
                        </div>
                        
                        <div className="performance_item">
                            <div className="performance_visual">
                                <div className="progress_circle">
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45" className="progress_bg"/>
                                        <circle cx="50" cy="50" r="45" className="progress_fill" data-percent="95"/>
                                    </svg>
                                    <span className="progress_text">95%</span>
                                </div>
                            </div>
                            <h3>Consistency</h3>
                            <p>Reliable performance across all welding conditions and applications</p>
                        </div>
                        
                        <div className="performance_item">
                            <div className="performance_visual">
                                <div className="progress_circle">
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45" className="progress_bg"/>
                                        <circle cx="50" cy="50" r="45" className="progress_fill" data-percent="100"/>
                                    </svg>
                                    <span className="progress_text">100%</span>
                                </div>
                            </div>
                            <h3>Quality Control</h3>
                            <p>Every electrode tested to meet our uncompromising standards</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
