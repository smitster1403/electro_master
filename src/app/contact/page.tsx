"use client";

import React from "react";
import "../styling/contact.css";

const Contact = () => {
    return (
        <div className="contact_main">
            <div className="contact_hero">
                <h1 className="contact_title">Initiate</h1>
                <div className="contact_subtitle">START THE CONVERSATION</div>
            </div>

            <div className="contact_content">
                <div className="contact_info_panel">
                    <div className="info_group">
                        <span className="info_label">EMAIL</span>
                        <a href="mailto:sales@electromaster.co.bw" className="info_value">sales@electromaster.co.bw</a>
                    </div>
                    <div className="info_group">
                        <span className="info_label">PHONE</span>
                        <a href="tel:+2673912345" className="info_value">+267 391 2345</a>
                    </div>
                    <div className="info_group">
                        <span className="info_label">HQ</span>
                        <span className="info_value">Gaborone, Botswana</span>
                    </div>
                </div>

                <div className="contact_form_panel">
                    <form>
                        <div className="form_group">
                            <label className="form_label">Name</label>
                            <input type="text" className="form_input" placeholder="ENTER YOUR NAME" />
                        </div>
                        <div className="form_group">
                            <label className="form_label">Email</label>
                            <input type="email" className="form_input" placeholder="ENTER YOUR EMAIL" />
                        </div>
                        <div className="form_group">
                            <label className="form_label">Message</label>
                            <textarea className="form_textarea" rows={4} placeholder="TELL US ABOUT YOUR PROJECT"></textarea>
                        </div>
                        <button type="submit" className="submit_btn">SEND TRANSMISSION</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
