"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../styling/navbar.css";

const NavBar = () => {
    const pathname  = usePathname();
    const headerRef = useRef<HTMLElement>(null);

    const [scrolled,  setScrolled]  = useState(false);
    const [nearNav,   setNearNav]   = useState(false);
    const [menuOpen,  setMenuOpen]  = useState(false);

    const isActive = (p: string) => pathname === p ? "active" : "";

    /* Scroll detection — triggers is-scrolled class */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /*
     * Proximity detection — show nav-row when mouse is within 15 px
     * of the header's current bottom edge (works whether collapsed or
     * expanded, because getBoundingClientRect reflects live height).
     */
    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            if (!headerRef.current) return;
            const bottom = headerRef.current.getBoundingClientRect().bottom;
            setNearNav(e.clientY <= bottom + 15);
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    /* Close mobile drawer on route change */
    useEffect(() => { setMenuOpen(false); }, [pathname]);

    /*
     * nav-open = true when:
     *   • user is at the top of the page (!scrolled), OR
     *   • user has scrolled but the mouse is near the navbar
     */
    const navOpen = !scrolled || nearNav;

    return (
        <header
            ref={headerRef}
            className={[
                "site-header",
                scrolled  ? "is-scrolled" : "",
                navOpen   ? "nav-open"    : "",
                menuOpen  ? "menu-open"   : "",
            ].join(" ")}
            role="banner"
        >
            <nav className="nav-inner wrap" aria-label="Main navigation">

                {/* ── Row 1: Logo centred (always visible) ── */}
                <div className="nav-top">
                    <Link href="/" className="nav-brand" aria-label="ElectroMaster — home">
                        <Image
                            src="/logo.png"
                            alt=""
                            width={42}
                            height={42}
                            className="nav-logo-img"
                            priority
                        />
                        <span className="nav-brand-name">
                            Electro<em>Master</em>
                        </span>
                    </Link>

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

                {/* ── Row 2: Links — driven by nav-open class ── */}
                <div className="nav-row">
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
                    <Link href="/contact" className={`nav-link ${isActive("/contact")}`}>
                        Contact Sales
                    </Link>
                </div>

            </nav>

            {/* ── Mobile drawer ── */}
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
                            <Link href={href} className={`drawer-link ${isActive(href)}`}>
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
