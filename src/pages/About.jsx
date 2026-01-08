import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Award, Shield, Users, Heart, Target, Compass, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const values = [
    {
      icon: Shield,
      title: t('integrity'),
      description: t('integrity_desc')
    },
    {
      icon: Heart,
      title: t('compassion'),
      description: t('compassion_desc')
    },
    {
      icon: Target,
      title: t('excellence'),
      description: t('excellence_desc')
    },
    {
      icon: Compass,
      title: t('guidance'),
      description: t('guidance_desc')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695dc69cc5f8a879c55c28de/5e256080f_mahesh-gupta-Pe41jdFXxTg-unsplash.jpg"
            alt="Manitoba Legislature"
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
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4 block">{t('nav_about')}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a5a] mb-6 max-w-3xl leading-tight">
              {t('about_title')}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              {t('about_subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5a] mb-6">
                {t('meet_consultant')}
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  {t('consultant_bio_1')}
                </p>
                <p>
                  {t('consultant_bio_2')}
                </p>
                <p>
                  {t('consultant_bio_3')}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-5 py-3">
                  <Award className="w-5 h-5 text-[#1e3a5a]" />
                  <div>
                    <div className="text-sm font-semibold text-[#1e3a5a]">45 {t('years_experience').split(' ')[2]}</div>
                    <div className="text-xs text-slate-500">{t('experience')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-5 py-3">
                  <Shield className="w-5 h-5 text-[#1e3a5a]" />
                  <div>
                    <div className="text-sm font-semibold text-[#1e3a5a]">{t('cicc_licensed')}</div>
                    <div className="text-xs text-slate-500">R407311</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5a]/10 to-blue-500/10 rounded-3xl transform rotate-3" />
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695dc69cc5f8a879c55c28de/eea99f013_ChatGPTImageJan7202607_12_38PM.png"
                  alt="Principal Immigration Consultant"
                  className="relative rounded-3xl shadow-2xl w-full object-contain"
                />
              </div>
              <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#1e3a5a] mb-2">
                    {t('company_name')} {t('company_subtitle')}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {t('principal_consultant')}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-slate-600">{t('cicc_professional')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5a] mb-6">
                {t('our_story')}
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  {t('story_1')}
                </p>
                <p>
                  {t('story_2')}
                </p>
                <p>
                  {t('story_3')}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 mb-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[#1e3a5a] to-[#2a4a6a] rounded-2xl p-8 text-white">
                    <div className="text-5xl font-bold mb-2">45</div>
                    <div className="text-blue-200">{t('years_experience')}</div>
                    </div>
                    <div className="bg-slate-100 rounded-2xl p-8">
                    <Award className="w-12 h-12 text-[#1e3a5a] mb-4" />
                    <div className="text-[#1e3a5a] font-semibold">{t('cicc_licensed')}</div>
                    <div className="text-slate-500 text-sm">R407311</div>
                    </div>
                    <div className="bg-slate-100 rounded-2xl p-8">
                    <Users className="w-12 h-12 text-[#1e3a5a] mb-4" />
                    <div className="text-[#1e3a5a] font-semibold">{t('family_focused')}</div>
                    <div className="text-slate-500 text-sm">{t('dedicated_care')}</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                    <div className="text-xl font-bold mb-2">{t('manitoba')}</div>
                    <div className="text-blue-100">{t('manitoba_specialist')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4 block">{t('our_values')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5a] mb-6">
              {t('what_we_stand_for')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              {t('values_description')}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-[#1e3a5a]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1e3a5a] mb-3">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CICC Credential Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-500 mb-6 font-medium">{t('regulated_by')}</p>
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695dc69cc5f8a879c55c28de/f24f37fb1_CICC_EF_HORZ_CLR_POS_TMMC_1000x326.png"
            alt="CICC - College of Immigration and Citizenship Consultants"
            className="h-20 md:h-24 w-auto mx-auto opacity-90 mb-6"
          />
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-6 py-3 shadow-sm">
            <Shield className="w-5 h-5 text-[#1e3a5a]" />
            <span className="text-sm font-semibold text-slate-700">{t('license_number')}: R407311</span>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="bg-gradient-to-br from-[#1e3a5a] to-[#2a4a6a] rounded-3xl p-12 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl font-bold mb-6">{t('our_commitment')}</h2>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              {t('commitment_description')}
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-2 bg-white text-[#1e3a5a] px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300"
            >
              {t('schedule_consultation')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}