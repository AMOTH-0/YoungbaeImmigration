import Layout from "./Layout.jsx";

import About from "./About";

import Contact from "./Contact";

import Home from "./Home";

import Services from "./Services";

import { Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    About: About,
    
    Contact: Contact,
    
    Home: Home,
    
    Services: Services,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// PagesContent component that uses useLocation (Router context provided by HashRouter in main.jsx)
export default function Pages() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<About />} />
                
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Services" element={<Services />} />
                
            </Routes>
        </Layout>
    );
}