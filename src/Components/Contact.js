import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Contact = () => {
    return (
        <div>
            <NavBar />
            <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                <div>
                    <h1>Contact page</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;