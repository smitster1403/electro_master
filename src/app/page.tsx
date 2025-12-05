"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./styling/home.css";

export default function Home() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const heroRef = useRef<HTMLElement>(null);
  const collectionRef = useRef<HTMLElement>(null);

  const allProducts = [
    { name: "E6010", image: "/products/welding-rods/e6010.png", description: "Deep Penetration" },
    { name: "E6013", image: "/products/welding-rods/e6013.png", description: "General Purpose" },
    { name: "E7010", image: "/products/welding-rods/e7010.png", description: "High Tensile" },
    { name: "E7018", image: "/products/welding-rods/e7018.png", description: "Low Hydrogen" },
    { name: "Cast Iron", image: "/products/welding-rods/cast_iron.png", description: "Specialized Repair" },
    { name: "Stainless", image: "/products/welding-rods/stainless_steel.png", description: "Corrosion Resistant" },
    { name: "MIG Wire", image: "/products/wire/mig_wire.png", description: "GMAW Solid Wire" },
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
      { threshold: 0.1 }
    );

    const elements = [heroRef.current, collectionRef.current];
    elements.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home_main">
      {/* Hero Section - Cinematic Industrial */}
      <section ref={heroRef} id="hero" className="v2_hero">
        <div className="hero_text_layer">
          <h1 className="hero_huge_text">
            FORGED<br />
            <span className="text_outline">PERFECTION</span>
          </h1>
        </div>
        
        <div className="hero_image_layer">
          <div className="floating_product">
            <Image 
              src="/products/welding-rods/e6010.png" 
              alt="E6010 Welding Rod" 
              width={140} 
              height={600}
              className="product_img_v2"
              priority
            />
            <div className="product_glow"></div>
          </div>
        </div>

        <div className="hero_details">
          <div className="detail_block">
            <span className="gold_label">MATERIAL</span>
            <p>Cellulose Sodium</p>
          </div>
          <div className="detail_block">
            <span className="gold_label">STRENGTH</span>
            <p>62,000 PSI</p>
          </div>
          <div className="detail_block">
            <span className="gold_label">ORIGIN</span>
            <p>ElectroMaster Ind.</p>
          </div>
        </div>
      </section>

      {/* Editorial Product Strip */}
      <section 
        ref={collectionRef} 
        id="collection" 
        className={`v2_strip ${visibleElements.has('collection') ? 'visible' : ''}`}
      >
        <div className="strip_header">
          <h2>THE COLLECTION</h2>
          <div className="line"></div>
        </div>
        
        <div className="strip_grid">
          {allProducts.map((product, index) => (
            <a href="/products" key={index} className="strip_item">
              <div className="item_number">0{index + 1}</div>
              <div className="item_content">
                <div className="item_name">{product.name}</div>
                <div className="item_desc">{product.description}</div>
              </div>
              <div className="item_action">VIEW SPECS &rarr;</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
