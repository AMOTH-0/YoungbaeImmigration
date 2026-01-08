import Layout from "./Layout.jsx";

import About from "./About";

import Contact from "./Contact";

import Home from "./Home";

import Services from "./Services";

import { Route, Routes } from 'react-router-dom';

// Pages component - Router context provided by HashRouter in main.jsx
export default function Pages() {
    return (
        <Layout>
            <Routes>            
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Layout>
    );
}