"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../styling/navbar.css";

const NavBar = () => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path ? "active" : "";

    return (
        <nav className="nav-container">
            <div className="nav-content">
                <Link href="/" className="nav-logo">
                    <Image 
                        src="/logo.png" 
                        alt="Electro Master Logo" 
                        width={40} 
                        height={40} 
                        className="nav-logo-img"
                    />
                    <div className="nav-logo-text">
                        ELECTRO<span>MASTER</span>
                    </div>
                </Link>

                <ul className="nav-links">
                    <li>
                        <Link href="/" className={`nav-link ${isActive("/")}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className={`nav-link ${isActive("/products")}`}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={`nav-link ${isActive("/about")}`}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="nav-cta">
                            Contact Sales
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
