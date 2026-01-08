import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  MapPin, 
  Home, 
  Briefcase, 
  GraduationCap, 
  Users, 
  MessageSquare,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const services = [
    {
      icon: MapPin,
      title: t('mpnp'),
      description: t('mpnp_desc'),
      features: [
        t('mpnp_feature_1'),
        t('mpnp_feature_2'),
        t('mpnp_feature_3'),
        t('mpnp_feature_4')
      ]
    },
    {
      icon: Home,
      title: t('permanent_residency'),
      description: t('pr_desc'),
      features: [
        t('pr_feature_1'),
        t('pr_feature_2'),
        t('pr_feature_3'),
        t('pr_feature_4')
      ]
    },
    {
      icon: Briefcase,
      title: t('work_permits'),
      description: t('work_permits_desc'),
      features: [
        t('work_feature_1'),
        t('work_feature_2'),
        t('work_feature_3'),
        t('work_feature_4')
      ]
    },
    {
      icon: GraduationCap,
      title: t('study_permits'),
      description: t('study_permits_desc'),
      features: [
        t('study_feature_1'),
        t('study_feature_2'),
        t('study_feature_3'),
        t('study_feature_4')
      ]
    },
    {
      icon: Users,
      title: t('family_sponsorship'),
      description: t('family_desc'),
      features: [
        t('family_feature_1'),
        t('family_feature_2'),
        t('family_feature_3'),
        t('family_feature_4')
      ]
    },
    {
      icon: MessageSquare,
      title: t('general_consultation'),
      description: t('general_desc'),
      features: [
        t('general_feature_1'),
        t('general_feature_2'),
        t('general_feature_3'),
        t('general_feature_4')
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695dc69cc5f8a879c55c28de/43f538cf3_pete-mcbride-4ma1B4OdCpM-unsplash.jpg"
            alt="Manitoba Winter"
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
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4 block">{t('nav_services')}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a5a] mb-6 max-w-3xl leading-tight">
              {t('services_title')}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              {t('services_subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-900/5 border border-slate-100 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-500 hover:-translate-y-1 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a5a] to-[#2a4a6a] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#1e3a5a]/20 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a5a] mb-3">{service.title}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation Banner */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="bg-white rounded-3xl p-10 md:p-16 shadow-xl shadow-slate-900/5 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-4 py-2 mb-4">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">{t('free_consultation_available')}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5a] mb-4">
                {t('not_sure_service')}
                </h2>
                <p className="text-slate-600 max-w-lg">
                {t('not_sure_desc')}
                </p>
                </div>
                <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center gap-2 bg-[#1e3a5a] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#2a4a6a] transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-xl whitespace-nowrap flex-shrink-0"
                >
                {t('get_started')}
                <ArrowRight className="w-5 h-5" />
                </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4 block">{t('our_process')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5a] mb-6">
              {t('how_we_work')}
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: t('process_step_1'), desc: t('process_desc_1') },
              { step: "02", title: t('process_step_2'), desc: t('process_desc_2') },
              { step: "03", title: t('process_step_3'), desc: t('process_desc_3') },
              { step: "04", title: t('process_step_4'), desc: t('process_desc_4') }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-slate-100 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-[#1e3a5a] mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}