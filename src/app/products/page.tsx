"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../styling/products.css";

const ProductsPage = () => {
    const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
    const categoriesRef = useRef<HTMLElement>(null);

    const weldingRods = [
        {
            name: "E6010",
            image: "/products/welding-rods/e6010.png",
            description: "Deep penetration cellulose electrode for all-position welding",
            specs: [
                "AWS Classification: E6010",
                "Tensile Strength: 62,000 PSI",
                "Applications: Pipeline, structural work",
                "Positions: All positions",
                "Current: DC+ (DCEP)"
            ]
        },
        {
            name: "E6013",
            image: "/products/welding-rods/e6013.png",
            description: "General purpose rutile electrode with excellent arc stability",
            specs: [
                "AWS Classification: E6013",
                "Tensile Strength: 60,000 PSI",
                "Applications: General fabrication",
                "Positions: All positions",
                "Current: AC or DC"
            ]
        },
        {
            name: "E7010",
            image: "/products/welding-rods/e7010.png",
            description: "High tensile strength electrode for critical applications",
            specs: [
                "AWS Classification: E7010",
                "Tensile Strength: 70,000 PSI",
                "Applications: Pressure vessels, bridges",
                "Positions: All positions",
                "Current: DC+ (DCEP)"
            ]
        },
        {
            name: "E7018",
            image: "/products/welding-rods/e7018.png",
            description: "Low hydrogen basic electrode for superior weld quality",
            specs: [
                "AWS Classification: E7018",
                "Tensile Strength: 70,000 PSI",
                "Applications: Structural, heavy construction",
                "Positions: All positions",
                "Current: AC or DC"
            ]
        },
        {
            name: "Cast Iron Rod",
            image: "/products/welding-rods/cast_iron.png",
            description: "Specialized electrode for cast iron repair and fabrication",
            specs: [
                "Type: Nickel-Iron alloy",
                "Applications: Cast iron repair",
                "Features: Machinable deposits",
                "Positions: All positions",
                "Preheating: Recommended"
            ]
        },
        {
            name: "Stainless Steel Rod",
            image: "/products/welding-rods/stainless_steel.png",
            description: "Corrosion resistant electrode for stainless steel welding",
            specs: [
                "Type: 308L Stainless Steel",
                "Applications: Food service, chemical",
                "Features: Corrosion resistant",
                "Positions: All positions",
                "Current: AC or DC"
            ]
        }
    ];

    const wires = [
        {
            name: "MIG Wire",
            image: "/products/wire/mig_wire.png",
            description: "Premium solid wire for MIG/GMAW welding applications",
            specs: [
                "Type: ER70S-6 Solid Wire",
                "Diameter: 0.8mm - 1.6mm",
                "Applications: Mild steel welding",
                "Shielding Gas: CO2 or Ar/CO2",
                "Packaging: 15kg spools"
            ]
        }
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

        const elements = [categoriesRef.current];
        elements.forEach(el => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="products_main">
            {/* Products Categories */}
            <section 
                ref={categoriesRef}
                id="products-categories"
                className={`products_categories ${visibleElements.has('products-categories') ? 'visible' : ''}`}
            >
                <div className="categories_content">
                    {/* Welding Rods Section */}
                    <div className="category_section">
                        <div className="category_header">
                            <h2 className="category_title">Welding Electrodes</h2>
                            <p className="category_description">
                                Professional-grade welding rods engineered for superior performance across 
                                all welding applications. Each electrode is manufactured to meet stringent 
                                quality standards and deliver consistent results.
                            </p>
                        </div>
                        <div className="products_grid">
                            {weldingRods.map((product, index) => (
                                <div key={index} className="product_item">
                                    <div className="product_image_wrapper">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={300}
                                            height={300}
                                            className="product_image"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                    <h3 className="product_name">{product.name}</h3>
                                    <p className="product_description">{product.description}</p>
                                    <div className="product_specs">
                                        <h4>Specifications</h4>
                                        <ul>
                                            {product.specs.map((spec, specIndex) => (
                                                <li key={specIndex}>{spec}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wire Section */}
                    <div className="category_section">
                        <div className="category_header">
                            <h2 className="category_title">Welding Wire</h2>
                            <p className="category_description">
                                High-quality solid wires designed for MIG/GMAW welding processes. 
                                Our wires provide excellent arc stability and superior weld quality 
                                for both industrial and fabrication applications.
                            </p>
                        </div>
                        <div className="products_grid">
                            {wires.map((product, index) => (
                                <div key={index} className="product_item">
                                    <div className="product_image_wrapper">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={300}
                                            height={300}
                                            className="product_image"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                    <h3 className="product_name">{product.name}</h3>
                                    <p className="product_description">{product.description}</p>
                                    <div className="product_specs">
                                        <h4>Specifications</h4>
                                        <ul>
                                            {product.specs.map((spec, specIndex) => (
                                                <li key={specIndex}>{spec}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;