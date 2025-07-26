import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Electro Master",
  description: "Learn more about Electro Master - Quality Welding Rod Manufacturer"
};

const About = () => {
    return (
        <div className="about_main">
            <h1>This is ELECTRO MASTER</h1>
            <p>We are a leading manufacturer of quality welding rods with years of experience in the industry.</p>
        </div>
    )
}

export default About;
