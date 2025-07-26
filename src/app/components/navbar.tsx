"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../styling/navbar.css";

const NavBar = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <nav className="main_nav">
            <Link href="/" className="header">
                <Image 
                    src="/logo.png" 
                    width={28} 
                    height={28} 
                    alt="Electro Master Logo" 
                />
                <div className="title">
                    ElectroMaster
                </div>
            </Link>
            <ul className="routes">
                <li>
                    <Link 
                        href="/" 
                        className={`nav_link ${isActive('/') ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        href="/products" 
                        className={`nav_link ${isActive('/products') ? 'active' : ''}`}
                    >
                        Products
                    </Link>
                </li>
                <li>
                    <Link 
                        href="/about" 
                        className={`nav_link ${isActive('/about') ? 'active' : ''}`}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        href="/contact" 
                        className={`nav_link ${isActive('/contact') ? 'active' : ''}`}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;