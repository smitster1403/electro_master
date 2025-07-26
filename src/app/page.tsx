import React from "react";
import Image from "next/image";
import "./styling/home.css";

export default function Home() {
  const allProducts = [
    { name: "E6010", image: "/products/welding-rods/e6010.png", description: "Deep penetration welding rod" },
    { name: "E6013", image: "/products/welding-rods/e6013.png", description: "General purpose welding rod" },
    { name: "E7010", image: "/products/welding-rods/e7010.png", description: "High tensile strength rod" },
    { name: "E7018", image: "/products/welding-rods/e7018.png", description: "Low hydrogen welding rod" },
    { name: "Cast Iron", image: "/products/welding-rods/cast_iron.png", description: "Specialized cast iron rod" },
    { name: "Stainless Steel", image: "/products/welding-rods/stainless_steel.png", description: "Corrosion resistant rod" },
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
        <section className="product-carousel">
          <div className="conveyor-belt">
            <div className="conveyor-track">
              {/* First set of products */}
              {allProducts.map((product, index) => (
                <div key={`first-${index}`} className="product-card">
                  <div className="product-image-container">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={250}
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                  </div>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {allProducts.map((product, index) => (
                <div key={`second-${index}`} className="product-card">
                  <div className="product-image-container">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={250}
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                  </div>
                </div>
              ))}
              {/* Third set for extra smoothness */}
              {allProducts.map((product, index) => (
                <div key={`third-${index}`} className="product-card">
                  <div className="product-image-container">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={250}
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
          </div>
        </section>
      </div>
    </div>
  );
}
