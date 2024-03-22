import React from "react";
import dicodingLogo from "./dicoding-logo.png";

function Element() {
    return (
        <div className="container">
            <h1>Biodata Perusahaan</h1>
            <ul>
                <li>Nama: Dicoding</li>
                <li>Bidang: Education</li>
                <li>Tagline: Decode Ideas, Discover Potential</li>
                <img src={dicodingLogo} alt="Dicoding logo" />
            </ul>
        </div>
    );
}

export default Element;