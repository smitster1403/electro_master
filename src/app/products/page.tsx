"use client";

import React from "react";
import Image from "next/image";
import "../styling/products.css";

const ProductsPage = () => {
    const weldingRods = [
        {
            name: "E6010",
            image: "/products/welding-rods/e6010.png",
            description: "Deep penetration cellulose electrode for all-position welding",
            specs: ["AWS E6010", "62,000 PSI", "DC+"]
        },
        {
            name: "E6013",
            image: "/products/welding-rods/e6013.png",
            description: "General purpose rutile electrode with excellent arc stability",
            specs: ["AWS E6013", "60,000 PSI", "AC/DC"]
        },
        {
            name: "E7010",
            image: "/products/welding-rods/e7010.png",
            description: "High tensile strength electrode for critical applications",
            specs: ["AWS E7010", "70,000 PSI", "DC+"]
        },
        {
            name: "E7018",
            image: "/products/welding-rods/e7018.png",
            description: "Low hydrogen iron powder electrode for quality welds",
            specs: ["AWS E7018", "70,000 PSI", "AC/DC+"]
        },
        {
            name: "Cast Iron",
            image: "/products/welding-rods/cast_iron.png",
            description: "Specialized electrode for welding cast iron components",
            specs: ["Ni-Cl", "Machinable", "AC/DC"]
        },
        {
            name: "Stainless",
            image: "/products/welding-rods/stainless_steel.png",
            description: "Corrosion resistant electrode for stainless steel",
            specs: ["E308L-16", "Corrosion Resistant", "AC/DC"]
        }
    ];

    const wire = [
        {
            name: "MIG Wire",
            image: "/products/wire/mig_wire.png",
            description: "Copper coated solid wire for GMAW welding",
            specs: ["ER70S-6", "High Efficiency", "DCEP"]
        }
    ];

    const allProducts = [...weldingRods, ...wire];

    return (
        <div className="products_main">
            <div className="products_header">
                <h1 className="products_title">The<br />Archive</h1>
                <div className="products_subtitle">INDUSTRIAL GRADE CONSUMABLES</div>
            </div>

            <div className="products_grid">
                {allProducts.map((product, index) => (
                    <div key={index} className="product_card">
                        <div className="card_header">
                            <span className="card_number">0{index + 1}</span>
                        </div>
                        
                        <div className="card_image_container">
                            <Image 
                                src={product.image} 
                                alt={product.name} 
                                width={200} 
                                height={200}
                                className="card_image"
                            />
                        </div>

                        <div className="card_info">
                            <h2 className="card_name">{product.name}</h2>
                            <p className="card_desc">{product.description}</p>
                            
                            <div className="card_specs">
                                {product.specs.map((spec, i) => (
                                    <span key={i} className="spec_tag">{spec}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
