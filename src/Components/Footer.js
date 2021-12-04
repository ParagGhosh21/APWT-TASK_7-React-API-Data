import React from 'react';

const Footer = () => {
    return (
        <div className="text-center">
            <div>
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>Copyright © {(new Date()).getFullYear()} || All Rights Reserved by <span style={{ color: "Black", fontWeight: "bold" }}>Parag Ghosh</span></p>
            </div>
        </div>
    );
};

export default Footer;