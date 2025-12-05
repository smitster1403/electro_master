"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styling/products.css";

const ProductsPage = () => {
    const weldingRods = [
        {
            id: "WR-6010",
            name: "E6010 Cellulose",
            image: "/products/welding-rods/e6010.png",
            description: "Deep penetration cellulose electrode designed for all-position welding. Ideal for pipelines and structural steel.",
            specs: { class: "AWS E6010", strength: "62,000 PSI", current: "DC+" }
        },
        {
            id: "WR-6013",
            name: "E6013 General Purpose",
            image: "/products/welding-rods/e6013.png",
            description: "Versatile rutile electrode with excellent arc stability and low spatter. Perfect for general fabrication.",
            specs: { class: "AWS E6013", strength: "60,000 PSI", current: "AC/DC" }
        },
        {
            id: "WR-7010",
            name: "E7010 High Tensile",
            image: "/products/welding-rods/e7010.png",
            description: "High tensile strength electrode for critical applications requiring superior mechanical properties.",
            specs: { class: "AWS E7010", strength: "70,000 PSI", current: "DC+" }
        },
        {
            id: "WR-7018",
            name: "E7018 Low Hydrogen",
            image: "/products/welding-rods/e7018.png",
            description: "Premium low hydrogen iron powder electrode. The industry standard for code-quality welds.",
            specs: { class: "AWS E7018", strength: "70,000 PSI", current: "AC/DC+" }
        },
        {
            id: "WR-CAST",
            name: "Cast Iron Special",
            image: "/products/welding-rods/cast_iron.png",
            description: "Specialized nickel-based electrode for maintenance and repair of cast iron components.",
            specs: { class: "Ni-Cl", strength: "Machinable", current: "AC/DC" }
        },
        {
            id: "WR-STAIN",
            name: "Stainless Steel 308L",
            image: "/products/welding-rods/stainless_steel.png",
            description: "Corrosion resistant electrode for welding 304 and 308 stainless steels.",
            specs: { class: "E308L-16", strength: "Resistant", current: "AC/DC" }
        }
    ];

    return (
        <div className="products-page">
            <div className="products-header">
                <h1 className="products-title">PRODUCT CATALOG</h1>
                <p className="products-subtitle">
                    High-performance welding consumables for industrial applications.
                </p>
            </div>

            <div className="products-container">
                <div className="products-grid">
                    {weldingRods.map((product, index) => (
                        <div key={index} className="product-card">
                            <div className="product-image-container">
                                <Image 
                                    src={product.image} 
                                    alt={product.name} 
                                    width={160} 
                                    height={160}
                                    style={{ objectFit: "contain", maxHeight: "160px" }}
                                />
                            </div>

                            <div className="product-content">
                                <span className="product-id">ITEM #{product.id}</span>
                                <h2 className="product-name">{product.name}</h2>
                                <p className="product-desc">{product.description}</p>
                                
                                <ul className="specs-list">
                                    <li>
                                        <span className="specs-label">Classification</span>
                                        <span className="specs-value">{product.specs.class}</span>
                                    </li>
                                    <li>
                                        <span className="specs-label">Tensile Strength</span>
                                        <span className="specs-value">{product.specs.strength}</span>
                                    </li>
                                    <li>
                                        <span className="specs-label">Current Type</span>
                                        <span className="specs-value">{product.specs.current}</span>
                                    </li>
                                </ul>

                                <div className="product-action">
                                    <Link href="/contact" className="btn-primary btn-block">
                                        Request Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
