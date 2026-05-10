"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../styling/navbar.css";

const NavBar = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (p: string) => pathname === p ? "active" : "";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* Close on route change */
    useEffect(() => { setMenuOpen(false); }, [pathname]);

    return (
        <header
            className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
            role="banner"
        >
            <nav
                className="nav-inner wrap"
                aria-label="Main navigation"
            >
                {/* ── Brand ───────────────────────────────────────── */}
                <Link href="/" className="nav-brand" aria-label="ElectroMaster — home">
                    <Image
                        src="/logo.png"
                        alt=""
                        width={34}
                        height={34}
                        className="nav-logo-img"
                        priority
                    />
                    <span className="nav-brand-name">
                        Electro<em>Master</em>
                    </span>
                </Link>

                {/* ── Desktop links ────────────────────────────────── */}
                <ul className="nav-links" role="list" aria-label="Site pages">
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
                            About
                        </Link>
                    </li>
                </ul>

                {/* ── Right side ───────────────────────────────────── */}
                <div className="nav-right">
                    <Link href="/contact" className="btn btn-primary nav-cta">
                        Contact Sales
                    </Link>

                    {/* Hamburger */}
                    <button
                        className={`nav-burger ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </nav>

            {/* ── Mobile drawer ────────────────────────────────────── */}
            <div
                id="mobile-menu"
                className={`mobile-drawer ${menuOpen ? "open" : ""}`}
                aria-hidden={!menuOpen}
            >
                <ul role="list">
                    {[
                        { href: "/",        label: "Home" },
                        { href: "/products",label: "Products" },
                        { href: "/about",   label: "About Us" },
                        { href: "/contact", label: "Contact Sales" },
                    ].map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`drawer-link ${isActive(href)}`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="drawer-contact">
                    <a href="tel:+15550192834">+1 (555) 019-2834</a>
                    <a href="mailto:sales@electromaster.com">sales@electromaster.com</a>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
