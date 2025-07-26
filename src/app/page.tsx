import React from "react";
import Image from "next/image";
import "./styling/home.css";

export default function Home() {
  const weldingRods = [
    { name: "E6010", image: "/products/welding-rods/e6010.png", description: "Deep penetration welding rod" },
    { name: "E6013", image: "/products/welding-rods/e6013.png", description: "General purpose welding rod" },
    { name: "E7010", image: "/products/welding-rods/e7010.png", description: "High tensile strength rod" },
    { name: "E7018", image: "/products/welding-rods/e7018.png", description: "Low hydrogen welding rod" },
    { name: "Cast Iron", image: "/products/welding-rods/cast_iron.png", description: "Specialized cast iron rod" },
    { name: "Stainless Steel", image: "/products/welding-rods/stainless_steel.png", description: "Corrosion resistant rod" },
  ];

  const wire = [
    { name: "MIG Wire", image: "/products/wire/mig_wire.png", description: "High-quality MIG welding wire" },
  ];

  return (
    <div className="main">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">ElectroMaster</h1>
          <p className="hero-subtitle">Quality Welding Rod Manufacturer</p>
          <p className="hero-description">
            Professional welding solutions for industrial and commercial applications
          </p>
        </div>
      </div>

      <div className="products-showcase">
        <section className="product-category">
          <h2 className="category-title">Welding Rods</h2>
          <div className="products-grid">
            {weldingRods.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image-container">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="product-category">
          <h2 className="category-title">Welding Wire</h2>
          <div className="products-grid">
            {wire.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image-container">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
