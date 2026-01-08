
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Menu, X, Shield, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider, useLanguage } from '../components/LanguageContext.jsx';
import LanguageSelector from '../components/LanguageSelector.jsx';

function LayoutContent({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  
  const navigation = [
    { name: t('nav_home'), page: 'Home' },
    { name: t('nav_about'), page: 'About' },
    { name: t('nav_services'), page: 'Services' },
    { name: t('nav_contact'), page: 'Contact' }
  ];
  
  const isCurrentPage = (page) => {
    const pagePath = createPageUrl(page);
    return location.pathname === pagePath || 
           (page === 'Home' && location.pathname === '/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Bar */}
      <div className="bg-[#1e3a5a] text-white py-2 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:jy-company@hotmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Mail className="w-4 h-4" />
              jy-company@hotmail.com
            </a>
            <a href="tel:204-996-7003" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Phone className="w-4 h-4" />
              204-996-7003
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>CICC Licensed – R407311</span>
          </div>
        </div>
      </div>
      
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex-shrink-0">
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-[#1e3a5a] leading-tight">
                  {t('company_name')}
                </span>
                <span className="text-xs md:text-sm text-slate-500 font-medium">
                  {t('company_subtitle')}
                </span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.page)}
                  className={`text-sm font-medium transition-colors relative py-2 ${
                    isCurrentPage(item.page)
                      ? 'text-[#1e3a5a]'
                      : 'text-slate-600 hover:text-[#1e3a5a]'
                  }`}
                >
                  {item.name}
                  {isCurrentPage(item.page) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1e3a5a] rounded-full"
                    />
                  )}
                </Link>
              ))}
              <Link
                to={createPageUrl('Contact')}
                className="bg-[#1e3a5a] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2a4a6a] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {t('free_consultation')}
              </Link>
              <LanguageSelector />
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-[#1e3a5a] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={createPageUrl(item.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                      isCurrentPage(item.page)
                        ? 'bg-slate-100 text-[#1e3a5a]'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-[#1e3a5a]'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to={createPageUrl('Contact')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-[#1e3a5a] text-white px-4 py-3 rounded-lg text-sm font-medium text-center mt-4"
                >
                  {t('free_consultation')}
                </Link>
                
                <div className="pt-4 border-t border-slate-200">
                  <LanguageSelector />
                </div>
                
                {/* Mobile Contact Info */}
                <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
                  <a href="mailto:jy-company@hotmail.com" className="flex items-center gap-2 text-sm text-slate-600 py-2">
                    <Mail className="w-4 h-4" />
                    jy-company@hotmail.com
                  </a>
                  <a href="tel:204-996-7003" className="flex items-center gap-2 text-sm text-slate-600 py-2">
                    <Phone className="w-4 h-4" />
                    204-996-7003
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-[#1e3a5a] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{t('company_name')}</h3>
                <p className="text-blue-200 text-sm">{t('company_subtitle')}</p>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                {t('footer_description')}
              </p>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695dc69cc5f8a879c55c28de/f24f37fb1_CICC_EF_HORZ_CLR_POS_TMMC_1000x326.png"
                alt="CICC Licensed"
                className="h-12 w-auto mb-4 opacity-80 brightness-0 invert"
              />
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-blue-300" />
                <span className="text-blue-200">CICC Licensed – R407311</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6">{t('quick_links')}</h4>
              <nav className="space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={createPageUrl(item.page)}
                    className="block text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-6">{t('contact_us')}</h4>
              <div className="space-y-4">
                <a 
                  href="mailto:jy-company@hotmail.com"
                  className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-blue-300" />
                  jy-company@hotmail.com
                </a>
                <a 
                  href="tel:204-996-7003"
                  className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-blue-300" />
                  204-996-7003
                </a>
                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    {t('free_consultation_available')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-blue-200 text-sm">
              {t('specializing_manitoba')}
            </p>
            <p className="text-blue-300/60 text-xs mt-2">
              © {new Date().getFullYear()} {t('company_name')} {t('company_subtitle')}. {t('all_rights_reserved')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  );
}
