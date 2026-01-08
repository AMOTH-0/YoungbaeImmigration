import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Award, Shield, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageContext';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  const { t } = useLanguage();
  
  // Multi-line title support
  const rawTitle = t('hero_title');
  const titleLines = rawTitle.split('||').map(s => s.trim()).filter(Boolean);
  
  const highlights = [
    {
      icon: Award,
      title: t('years_experience'),
      description: t('years_description')
    },
    {
      icon: Shield,
      title: t('cicc_licensed'),
      description: t('cicc_description')
    },
    {
      icon: MapPin,
      title: t('manitoba_specialist'),
      description: t('manitoba_description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695dc69cc5f8a879c55c28de/67aef460f_mahesh-gupta-4g313F4rUdM-unsplash.jpg"
            alt="Manitoba"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/92 to-blue-50/90" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <Shield className="w-4 h-4 text-[#1e3a5a]" />
              <span className="text-sm font-medium text-slate-700">{t('cicc_licensed')} {t('licensed_consultant').split('–')[0]}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a5a] leading-tight tracking-tight mb-6">
              {titleLines.length > 1 ? (
                titleLines.map((line, index) => (
                  <span key={index} style={{ display: 'block' }}>
                    {line}
                  </span>
                ))
              ) : (
                rawTitle
              )}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-4 font-light">
              {t('hero_subtitle')}
            </p>
            
            <p className="text-slate-500 mb-10 max-w-2xl leading-relaxed">
              {t('hero_description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center justify-center gap-2 bg-[#1e3a5a] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#2a4a6a] transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-0.5"
              >
                {t('free_consultation')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to={createPageUrl('Services')}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1e3a5a] px-8 py-4 rounded-xl font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
              >
                {t('our_services')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white relative -mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-900/5 border border-slate-100 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-500 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a5a] to-[#2a4a6a] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#1e3a5a]/20">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a5a] mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CICC Logo Section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm text-slate-500 mb-6 font-medium">{t('proud_member_of')}</p>
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695dc69cc5f8a879c55c28de/f24f37fb1_CICC_EF_HORZ_CLR_POS_TMMC_1000x326.png"
              alt="CICC - College of Immigration and Citizenship Consultants"
              className="h-16 md:h-20 w-auto opacity-90"
            />
            <p className="text-xs text-slate-400 mt-4">{t('licensed_consultant')}</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4 block">{t('why_choose_us')}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5a] mb-6 leading-tight">
                {t('trusted_partner')}
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                {t('trusted_description')}
              </p>
              
              <div className="space-y-4">
                {[
                  t('personalized_strategies'),
                  t('transparent_consulting'),
                  t('expert_knowledge'),
                  t('dedicated_support')
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-900/5 border border-slate-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1e3a5a] to-[#3b5998] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-[#1e3a5a] mb-2">45</div>
                  <div className="text-xl text-slate-600 mb-6">{t('years_of_excellence')}</div>
                  <div className="h-px bg-slate-200 mb-6" />
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">{t('license_number')}</span>
                      <span className="font-semibold text-[#1e3a5a]">R407311</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">{t('specialization')}</span>
                      <span className="font-semibold text-[#1e3a5a]">{t('manitoba')}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">{t('consultation')}</span>
                      <span className="font-semibold text-green-600">{t('free')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Managing Director Section - Short Version */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-100 p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#1e3a5a] to-[#2a4a6a] overflow-hidden shadow-lg flex-shrink-0">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695dc69cc5f8a879c55c28de/eea99f013_ChatGPTImageJan7202607_12_38PM.png"
                    alt="Young Bae"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2 block">
                    {t('managing_director')}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1e3a5a] mb-1">Young Bae</h3>
                  <p className="text-slate-600 font-medium mb-4">{t('managing_director_title')}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                      <Award className="w-3 h-3" />
                      45 {t('years_of_service').split(' ').slice(-2).join(' ')}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                      <Shield className="w-3 h-3" />
                      CICC R407311
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t('director_profile_desc')}
                </p>
                <Link
                  to={createPageUrl('About')}
                  className="inline-flex items-center gap-2 text-[#1e3a5a] font-semibold hover:text-[#2a4a6a] transition-colors"
                >
                  {t('nav_about')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695dc69cc5f8a879c55c28de/c5180a170_josh-lavallee-sM0q8DxTkWQ-unsplash.jpg"
            alt="Winnipeg at Night"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1e3a5a]/90" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('ready_to_start')}
          </h2>
          <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
            {t('ready_description')}
          </p>
          <Link
            to={createPageUrl('Contact')}
            className="inline-flex items-center gap-2 bg-white text-[#1e3a5a] px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('contact_us_today')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}