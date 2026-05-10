"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styling/products.css";

const products = [
    {
        id:            "E6013",
        category:      "electrodes",
        name:          "E6013",
        categoryLabel: "General-Purpose Electrode",
        image:         "/products/welding-rods/e6013.png",
    },
    {
        id:            "E7018",
        category:      "electrodes",
        name:          "E7018",
        categoryLabel: "Structural Electrode",
        image:         "/products/welding-rods/e7018.png",
    },
    {
        id:            "E6010",
        category:      "electrodes",
        name:          "E6010",
        categoryLabel: "Pipeline Electrode",
        image:         "/products/welding-rods/e6010.png",
    },
    {
        id:            "E7010",
        category:      "electrodes",
        name:          "E7010",
        categoryLabel: "High-Penetration Electrode",
        image:         "/products/welding-rods/e7010.png",
    },
    {
        id:            "SS-ELEC",
        category:      "electrodes",
        name:          "Stainless Steel",
        categoryLabel: "Corrosion-Resistant Electrode",
        image:         "/products/welding-rods/stainless_steel.png",
        variants:      ["309L", "316L"],
    },
    {
        id:            "CI-ELEC",
        category:      "electrodes",
        name:          "Cast Iron",
        categoryLabel: "Cast Iron Repair Electrode",
        image:         "/products/welding-rods/cast_iron.png",
        variants:      ["Machinable", "Non-machinable"],
    },
    {
        id:            "MIG-WIRE",
        category:      "wire",
        name:          "MIG Wire",
        categoryLabel: "Semi-Automatic Welding Wire",
        image:         "/products/wire/mig_wire.png",
    },
];

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filtered = activeCategory === "all"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="products-page">
            <div className="products-header">
                <div className="container-width">
                    <span className="label" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "16px", display: "block" }}>
                        What We Supply
                    </span>
                    <h1 className="products-title">Product Catalog</h1>
                    <p className="products-subtitle">
                        Premium welding consumables engineered for precision and built for industry.
                        Request a quote on any product directly from our team.
                    </p>
                </div>
            </div>

            <div className="products-container">
                <div className="category-filter">
                    <button
                        className={`filter-btn ${activeCategory === "all" ? "active" : ""}`}
                        onClick={() => setActiveCategory("all")}
                    >
                        All Products
                    </button>
                    <button
                        className={`filter-btn ${activeCategory === "electrodes" ? "active" : ""}`}
                        onClick={() => setActiveCategory("electrodes")}
                    >
                        Electrodes
                    </button>
                    <button
                        className={`filter-btn ${activeCategory === "wire" ? "active" : ""}`}
                        onClick={() => setActiveCategory("wire")}
                    >
                        MIG Wire
                    </button>
                </div>

                <div className="products-grid">
                    {filtered.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-container">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="product-image"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                <div className="product-badge">
                                    {product.category === "wire" ? "WIRE" : "ELECTRODE"}
                                </div>
                            </div>

                            <div className="product-content">
                                <span className="product-cat-label">{product.categoryLabel}</span>
                                <h2 className="product-name">{product.name}</h2>
                                {product.variants && (
                                    <div className="product-variants">
                                        {product.variants.map(v => (
                                            <span key={v} className="product-variant">{v}</span>
                                        ))}
                                    </div>
                                )}
                                <Link href="/contact" className="btn-quote">
                                    Request Quote
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
