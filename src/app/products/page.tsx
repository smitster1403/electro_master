"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styling/products.css";

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const weldingRods = [
        {
            id: "WR-6010",
            category: "rods",
            name: "E6010 Cellulose",
            image: "/products/welding-rods/e6010.png",
            description: "Deep penetration cellulose electrode designed for all-position welding. Ideal for pipelines and structural steel.",
            specs: { class: "AWS E6010", strength: "62,000 PSI", current: "DC+" }
        },
        {
            id: "WR-6013",
            category: "rods",
            name: "E6013 General Purpose",
            image: "/products/welding-rods/e6013.png",
            description: "Versatile rutile electrode with excellent arc stability and low spatter. Perfect for general fabrication.",
            specs: { class: "AWS E6013", strength: "60,000 PSI", current: "AC/DC" }
        },
        {
            id: "WR-7010",
            category: "rods",
            name: "E7010 High Tensile",
            image: "/products/welding-rods/e7010.png",
            description: "High tensile strength electrode for critical applications requiring superior mechanical properties.",
            specs: { class: "AWS E7010", strength: "70,000 PSI", current: "DC+" }
        },
        {
            id: "WR-7018",
            category: "rods",
            name: "E7018 Low Hydrogen",
            image: "/products/welding-rods/e7018.png",
            description: "Premium low hydrogen iron powder electrode. The industry standard for code-quality welds.",
            specs: { class: "AWS E7018", strength: "70,000 PSI", current: "AC/DC+" }
        },
        {
            id: "WR-CAST",
            category: "rods",
            name: "Cast Iron Special",
            image: "/products/welding-rods/cast_iron.png",
            description: "Specialized nickel-based electrode for maintenance and repair of cast iron components.",
            specs: { class: "Ni-Cl", strength: "Machinable", current: "AC/DC" }
        },
        {
            id: "WR-STAIN",
            category: "rods",
            name: "Stainless Steel 308L",
            image: "/products/welding-rods/stainless_steel.png",
            description: "Corrosion resistant electrode for welding 304 and 308 stainless steels.",
            specs: { class: "E308L-16", strength: "Resistant", current: "AC/DC" }
        }
    ];

    const migWires = [
        {
            id: "MW-70S6",
            category: "wires",
            name: "Premium MIG Wire",
            image: "/products/wire/mig_wire.png",
            description: "High-quality MIG welding wire suitable for various industrial applications. Excellent feedability and arc stability.",
            specs: { class: "AWS ER70S-6", diameter: "0.035\"", spool: "33 lb" }
        }
    ];

    const allProducts = [...weldingRods, ...migWires];
    
    const filteredProducts = activeCategory === "all" 
        ? allProducts 
        : allProducts.filter(p => p.category === activeCategory);

    return (
        <div className="products-page">
            <div className="products-header">
                <div className="header-content">
                    <h1 className="products-title">PRODUCT CATALOG</h1>
                    <p className="products-subtitle">
                        Engineered for precision. Built for industry.
                    </p>
                </div>
            </div>

            <div className="products-container">
                <div className="category-filter">
                    <button 
                        className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('all')}
                    >
                        All Products
                    </button>
                    <button 
                        className={`filter-btn ${activeCategory === 'rods' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('rods')}
                    >
                        Welding Rods
                    </button>
                    <button 
                        className={`filter-btn ${activeCategory === 'wires' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('wires')}
                    >
                        MIG Wires
                    </button>
                </div>

                <div className="products-grid">
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="product-card">
                            <div className="product-image-container">
                                <div className="image-wrapper">
                                    <Image 
                                        src={product.image} 
                                        alt={product.name} 
                                        width={160} 
                                        height={160}
                                        className="product-image"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                                <div className="product-badge">{product.category === 'rods' ? 'ELECTRODE' : 'WIRE'}</div>
                            </div>

                            <div className="product-content">
                                <div className="product-header-row">
                                    <span className="product-id">{product.id}</span>
                                    <span className="product-status">IN STOCK</span>
                                </div>
                                
                                <h2 className="product-name">{product.name}</h2>
                                <p className="product-desc">{product.description}</p>
                                
                                <div className="specs-container">
                                    {Object.entries(product.specs).map(([key, value]) => (
                                        <div key={key} className="spec-item">
                                            <span className="spec-label">{key}</span>
                                            <span className="spec-value">{value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="product-action">
                                    <Link href="/contact" className="btn-quote">
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
