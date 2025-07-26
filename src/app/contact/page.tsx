import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - Electro Master",
    description: "Get in touch with Electro Master for all your welding rod needs"
};

const Contact = () => {
    return (
        <div className="contact_main">
            <h1>Contact Us</h1>
            <p>Get in touch with us for high-quality welding rods and professional service.</p>
            <div className="contact-info">
                <p>Email: info@electromaster.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Industrial Ave, Manufacturing District</p>
            </div>
        </div>
    )
}

export default Contact;