import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: Mail,
      title: t('email_us'),
      value: "jy-company@hotmail.com",
      link: "mailto:jy-company@hotmail.com"
    },
    {
      icon: Phone,
      title: t('call_us'),
      value: "204-996-7003",
      link: "tel:204-996-7003"
    },
    {
      icon: Clock,
      title: t('consultation_label'),
      value: t('free_initial_consultation'),
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695dc69cc5f8a879c55c28de/2538f5ab9_bear-alaska.jpg"
            alt="Manitoba Nature"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/92 to-blue-50/90" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4 block">{t('nav_contact')}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a5a] mb-6 max-w-3xl leading-tight">
              {t('contact_title')}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              {t('contact_subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white relative -mt-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-900/5 border border-slate-100 hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a5a] to-[#2a4a6a] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#1e3a5a]/20">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1e3a5a] mb-2">{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="text-slate-600 hover:text-blue-600 transition-colors text-base"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-green-600 font-medium text-base">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="bg-white rounded-3xl p-12 shadow-xl shadow-slate-900/5 border border-slate-100 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#1e3a5a] mb-4">
                {t('company_name')} {t('company_subtitle')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#1e3a5a] to-blue-500 mx-auto rounded-full" />
            </div>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-[#1e3a5a]" />
                    <h3 className="font-semibold text-[#1e3a5a]">{t('email_us')}</h3>
                  </div>
                  <a href="mailto:jy-company@hotmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                    jy-company@hotmail.com
                  </a>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-5 h-5 text-[#1e3a5a]" />
                    <h3 className="font-semibold text-[#1e3a5a]">{t('call_us')}</h3>
                  </div>
                  <a href="tel:204-996-7003" className="text-slate-600 hover:text-blue-600 transition-colors">
                    204-996-7003
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8 mt-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <h3 className="text-xl font-bold text-green-800">
                    {t('free_consultation_available')}
                  </h3>
                </div>
                <p className="text-green-700">
                  {t('contact_subtitle')}
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-12 bg-[#1e3a5a] rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">{t('manitoba_specialist_note')}</h3>
            <p className="text-blue-100 leading-relaxed">
              {t('specialist_description')}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}