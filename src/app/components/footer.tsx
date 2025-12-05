import React from 'react';
import Link from 'next/link';
import '../styling/footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-section brand">
                    <h2 className="footer-logo">ELECTRO<span>MASTER</span></h2>
                    <p>Industrial grade welding solutions for professionals.</p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Contact</h3>
                    <p>123 Industrial Sector 7</p>
                    <p>New York, NY 10001</p>
                    <p>sales@electromaster.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Electro Master. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
