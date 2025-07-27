"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./styling/home.css";

export default function Home() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const heroRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);

  const allProducts = [
    { name: "E6010", image: "/products/welding-rods/e6010.png", description: "Deep penetration welding rod" },
    { name: "E6013", image: "/products/welding-rods/e6013.png", description: "General purpose welding rod" },
    { name: "E7010", image: "/products/welding-rods/e7010.png", description: "High tensile strength rod" },
    { name: "E7018", image: "/products/welding-rods/e7018.png", description: "Low hydrogen welding rod" },
    { name: "Cast Iron", image: "/products/welding-rods/cast_iron.png", description: "Specialized cast iron rod" },
    { name: "Stainless Steel", image: "/products/welding-rods/stainless_steel.png", description: "Corrosion resistant rod" },
    { name: "MIG Wire", image: "/products/wire/mig_wire.png", description: "High-quality MIG welding wire" },
  ];

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

    const elements = [heroRef.current, carouselRef.current, statsRef.current];
    elements.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home_main">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        id="hero"
        className={`home_hero ${visibleElements.has('hero') ? 'visible' : ''}`}
      >
        <div className="hero_content">
          <h1 className="hero_title">
            <span className="title_line">Precision</span>
            <span className="title_line">Engineering</span>
            <span className="title_line title_highlight">ElectroMaster</span>
          </h1>
          <p className="hero_subtitle">Quality Welding Rod Manufacturer</p>
        </div>
      </section>

      {/* Products Showcase */}
      <section 
        ref={carouselRef}
        id="carousel"
        className={`products_showcase ${visibleElements.has('carousel') ? 'visible' : ''}`}
      >
        <div className="showcase_content">
          <h2 className="section_title">Our Premium Products</h2>
          <div className="product_carousel">
            <div className="conveyor_belt">
              <div className="conveyor_track">
                {/* First set of products */}
                {allProducts.map((product, index) => (
                  <div key={`first-${index}`} className="product_card">
                    <div className="product_image_container">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={250}
                        height={250}
                        className="product_image"
                      />
                    </div>
                    <div className="product_info">
                      <h3 className="product_name">{product.name}</h3>
                      <p className="product_description">{product.description}</p>
                    </div>
                  </div>
                ))}
                {/* Second set for seamless loop */}
                {allProducts.map((product, index) => (
                  <div key={`second-${index}`} className="product_card">
                    <div className="product_image_container">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={250}
                        height={250}
                        className="product_image"
                      />
                    </div>
                    <div className="product_info">
                      <h3 className="product_name">{product.name}</h3>
                      <p className="product_description">{product.description}</p>
                    </div>
                  </div>
                ))}
                {/* Third set for extra smoothness */}
                {allProducts.map((product, index) => (
                  <div key={`third-${index}`} className="product_card">
                    <div className="product_image_container">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={250}
                        height={250}
                        className="product_image"
                      />
                    </div>
                    <div className="product_info">
                      <h3 className="product_name">{product.name}</h3>
                      <p className="product_description">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section 
        ref={statsRef}
        id="stats"
        className={`company_stats_section ${visibleElements.has('stats') ? 'visible' : ''}`}
      >
        <div className="stats_content">
          <h2 className="section_title">Proven Excellence</h2>
          <div className="stats_grid">
            <div className="stat_card card_1">
              <div className="stat_icon">
                <Image src="/thumbsup.png" alt="SAIW Certification" width={80} height={80} />
              </div>
              <div className="stat_info">
                <h3 className="stat_text">Passed SAIW Tests</h3>
                <p className="stat_label">Quality Assurance Standard</p>
              </div>
              <div className="card_highlight"></div>
            </div>
            
            <div className="stat_card card_2">
              <div className="stat_icon">
                <Image src="/production.png" alt="Production Capacity" width={80} height={80} />
              </div>
              <div className="stat_info">
                <h3 className="stat_text">≈6 Tons/Day</h3>
                <p className="stat_label">Production Capacity</p>
              </div>
              <div className="card_highlight"></div>
            </div>
           
            <div className="stat_card card_3">
              <div className="stat_icon">
                <Image src="/certificate.png" alt="BOBS Certification" width={80} height={80} />
              </div>
              <div className="stat_info">
                <h3 className="stat_text">BOBS Certification</h3>
                <p className="stat_label">BOS89-2010 in process</p>
              </div>
              <div className="card_highlight"></div>
            </div>
            
            <div className="stat_card card_4">
              <div className="stat_icon">
                <Image src="/resellers.png" alt="Distribution Network" width={80} height={80} />
              </div>
              <div className="stat_info">
                <h3 className="stat_text">15+ Partners</h3>
                <p className="stat_label">Distribution Network</p>
              </div>
              <div className="card_highlight"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
