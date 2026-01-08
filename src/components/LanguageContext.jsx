import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header & Nav
    company_name: "Young Bae",
    company_subtitle: "Immigration Consulting Company",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_contact: "Contact",
    free_consultation: "Free Consultation",
    
    // Home Page
    hero_title: "Trusted Immigration||Consulting with 45 Years of Experience",
    hero_subtitle: "Specializing in Manitoba Immigration • CICC Licensed",
    hero_description: "Your journey to Canada starts with expert guidance. We provide personalized, professional immigration consulting services backed by decades of experience and a commitment to your success.",
    our_services: "Our Services",
    contact_us_today: "Contact Us Today",
    
    // Highlights
    years_experience: "45 Years of Experience",
    years_description: "Decades of trusted expertise guiding families and professionals through the immigration process.",
    cicc_licensed: "CICC Licensed",
    cicc_description: "Fully licensed immigration consultant (R407311) ensuring professional and ethical service.",
    manitoba_specialist: "Manitoba Specialist",
    manitoba_description: "Deep expertise in Manitoba Provincial Nominee Program and local immigration pathways.",
    
    // Why Choose Us
    why_choose_us: "Why Choose Us",
    trusted_partner: "Your Trusted Partner in Immigration",
    trusted_description: "At Young Bae Immigration Consulting Company, we understand that immigration is more than paperwork—it's about building futures and reuniting families. With 45 years of dedicated service, we've helped countless individuals and families achieve their Canadian dreams.",
    personalized_strategies: "Personalized immigration strategies",
    transparent_consulting: "Transparent and ethical consulting",
    expert_knowledge: "Expert knowledge of Manitoba programs",
    dedicated_support: "Dedicated support throughout your journey",
    years_of_excellence: "Years of Excellence",
    license_number: "License Number",
    specialization: "Specialization",
    consultation: "Consultation",
    manitoba: "Manitoba",
    free: "Free",
    
    // CTA
    ready_to_start: "Ready to Start Your Immigration Journey?",
    ready_description: "Schedule your free consultation today and take the first step towards your new life in Canada.",
    
    // CICC Section
    proud_member_of: "Proud Member Of",
    licensed_consultant: "Licensed Immigration Consultant – R407311",
    
    // About Page
    about_title: "45 Years of Dedication to Your Immigration Success",
    about_subtitle: "Building futures, reuniting families, and making Canadian dreams come true through professional and ethical immigration consulting.",
    meet_consultant: "Meet Our Principal Consultant",
    consultant_bio_1: "With 45 years of dedicated experience in immigration consulting, our principal consultant has helped countless families and professionals achieve their Canadian dreams. This wealth of experience brings deep understanding of immigration policy evolution and practical insights that only decades of service can provide.",
    consultant_bio_2: "As a CICC licensed consultant (R407311), we maintain the highest standards of professional conduct and ethical practice. Our specialization in Manitoba immigration provides clients with expert knowledge of the Manitoba Provincial Nominee Program and local pathways to permanent residence.",
    consultant_bio_3: "We believe in building lasting relationships with our clients, providing personalized guidance and support throughout their entire immigration journey. Your success is our success.",
    experience: "Experience",
    principal_consultant: "Principal Immigration Consultant",
    cicc_professional: "CICC Licensed Professional",
    
    // Our Story
    our_story: "Our Story",
    story_1: "Young Bae Immigration Consulting Company was founded on a simple belief: everyone deserves honest, professional guidance on their path to Canada. With 45 years of experience in the field, we have witnessed the evolution of Canadian immigration policy and have adapted our expertise to serve clients through every change.",
    story_2: "Our specialization in Manitoba immigration gives us unique insight into the Manitoba Provincial Nominee Program (MPNP) and the opportunities it offers to skilled workers, international graduates, and families looking to build their lives in this welcoming province.",
    story_3: "As a CICC licensed consultant (R407311), we adhere to the highest standards of professional conduct, ensuring that every client receives ethical, accurate, and personalized immigration advice.",
    family_focused: "Family Focused",
    dedicated_care: "Dedicated Care",
    
    // Values
    our_values: "Our Values",
    what_we_stand_for: "What We Stand For",
    values_description: "Our values guide every interaction and decision, ensuring you receive the best possible service and support.",
    integrity: "Integrity",
    integrity_desc: "We uphold the highest ethical standards in all our consultations, ensuring honest and transparent guidance.",
    compassion: "Compassion",
    compassion_desc: "We understand the emotional journey of immigration and treat every client with empathy and care.",
    excellence: "Excellence",
    excellence_desc: "We strive for excellence in every case, applying our expertise to achieve the best possible outcomes.",
    guidance: "Guidance",
    guidance_desc: "We provide clear, step-by-step guidance through complex immigration processes.",
    
    // Commitment
    our_commitment: "Our Commitment to You",
    commitment_description: "We are committed to providing professional, ethical, and personalized immigration consulting services. As a CICC licensed consultant, we adhere to strict professional standards and are accountable for the advice we provide.",
    schedule_consultation: "Schedule Free Consultation",
    
    // Services Page
    services_title: "Comprehensive Immigration Services",
    services_subtitle: "From study permits to permanent residency, we provide expert guidance through every step of your Canadian immigration journey.",
    
    // Service Items
    mpnp: "Manitoba Provincial Nominee Program (MPNP)",
    mpnp_desc: "Expert guidance through Manitoba's Provincial Nominee Program, including skilled worker, international education, and business investor streams.",
    mpnp_feature_1: "Skilled Worker in Manitoba",
    mpnp_feature_2: "Skilled Worker Overseas",
    mpnp_feature_3: "International Education Stream",
    mpnp_feature_4: "Business Investor Stream",
    
    permanent_residency: "Permanent Residency Applications",
    pr_desc: "Comprehensive support for Express Entry, family class sponsorship, and other pathways to Canadian permanent residence.",
    pr_feature_1: "Express Entry applications",
    pr_feature_2: "PNP-linked applications",
    pr_feature_3: "Document preparation",
    pr_feature_4: "Application monitoring",
    
    work_permits: "Work Permits",
    work_permits_desc: "Assistance with employer-specific work permits, open work permits, and LMIA-based applications.",
    work_feature_1: "LMIA-based permits",
    work_feature_2: "Employer-specific permits",
    work_feature_3: "Open work permits",
    work_feature_4: "Work permit renewals",
    
    study_permits: "Study Permits",
    study_permits_desc: "Guidance for international students seeking to study at Canadian educational institutions.",
    study_feature_1: "Initial study permits",
    study_feature_2: "Study permit extensions",
    study_feature_3: "Post-graduation work permits",
    study_feature_4: "Pathway planning",
    
    family_sponsorship: "Family Sponsorship",
    family_desc: "Help reunite families through spousal sponsorship, parent and grandparent sponsorship, and dependent child applications.",
    family_feature_1: "Spousal sponsorship",
    family_feature_2: "Parent & grandparent",
    family_feature_3: "Dependent children",
    family_feature_4: "Super Visa applications",
    
    general_consultation: "General Immigration Consultation",
    general_desc: "Personalized assessment of your immigration options and strategic planning for your Canadian journey.",
    general_feature_1: "Eligibility assessment",
    general_feature_2: "Immigration strategy",
    general_feature_3: "Document review",
    general_feature_4: "Process guidance",
    
    // Free Consultation Banner
    not_sure_service: "Not Sure Which Service You Need?",
    not_sure_desc: "Book a free consultation with our experienced team. We'll assess your situation and recommend the best immigration pathway for you.",
    get_started: "Get Started",
    
    // Process
    our_process: "Our Process",
    how_we_work: "How We Work With You",
    process_step_1: "Consultation",
    process_desc_1: "Free initial assessment of your immigration goals and eligibility",
    process_step_2: "Strategy",
    process_desc_2: "Development of a personalized immigration strategy",
    process_step_3: "Preparation",
    process_desc_3: "Document collection, review, and application preparation",
    process_step_4: "Submission",
    process_desc_4: "Application submission and ongoing monitoring until decision",
    
    // Contact Page
    contact_title: "Start Your Immigration Journey Today",
    contact_subtitle: "Ready to take the next step? Contact us for a free consultation and let our 45 years of experience guide you.",
    email_us: "Email Us",
    call_us: "Call Us",
    consultation_label: "Consultation",
    free_initial_consultation: "Free Initial Consultation",
    free_consultation_available: "Free Consultation Available",
    manitoba_specialist_note: "Manitoba Immigration Specialist",
    specialist_description: "With deep expertise in the Manitoba Provincial Nominee Program, we can help you navigate the specific requirements and opportunities available in Manitoba.",
    
    // Managing Director Profile
    managing_director: "Managing Director",
    managing_director_title: "Licensed Immigration Consultant",
    director_profile_desc: "Young Bae is a licensed immigration consultant with over 45 years of experience, specializing in Manitoba immigration programs. As a CICC-licensed professional (R407311), he provides ethical, reliable, and personalized immigration consulting services. Free consultations are available for clients seeking professional guidance.",
    years_of_service: "Years of Service",

    // Footer
    footer_description: "Trusted immigration consulting with 45 years of experience. Your journey to Canada starts here.",
    quick_links: "Quick Links",
    contact_us: "Contact Us",
    specializing_manitoba: "Specializing in Manitoba Immigration • 45 Years of Trusted Service",
    all_rights_reserved: "All rights reserved.",
    regulated_by: "Regulated & Licensed By",
    },
  
  ko: {
    // Header & Nav
    company_name: "Young Bae",
    company_subtitle: "이민 컨설팅 회사",
    nav_home: "홈",
    nav_about: "회사소개",
    nav_services: "서비스",
    nav_contact: "연락처",
    free_consultation: "무료 상담",
    
    // Home Page
    hero_title: "45년 경력의 신뢰할 수 있는||이민 컨설팅",
    hero_subtitle: "매니토바 이민 전문 • CICC 라이센스",
    hero_description: "캐나다로의 여정은 전문가의 안내로 시작됩니다. 수십 년의 경험과 고객 성공을 위한 헌신을 바탕으로 맞춤형 전문 이민 컨설팅 서비스를 제공합니다.",
    our_services: "서비스 보기",
    contact_us_today: "오늘 연락하기",
    
    // Highlights
    years_experience: "45년 경력",
    years_description: "가족과 전문가를 이민 절차로 안내한 수십 년의 신뢰할 수 있는 전문 지식.",
    cicc_licensed: "CICC 라이센스",
    cicc_description: "전문적이고 윤리적인 서비스를 보장하는 완전 라이센스 이민 컨설턴트 (R407311).",
    manitoba_specialist: "매니토바 전문가",
    manitoba_description: "매니토바 주정부 이민 프로그램 및 지역 이민 경로에 대한 깊은 전문 지식.",
    
    // Why Choose Us
    why_choose_us: "왜 저희를 선택해야 하나요",
    trusted_partner: "이민의 신뢰할 수 있는 파트너",
    trusted_description: "Young Bae 이민 컨설팅 회사는 이민이 서류 작업 이상이라는 것을 이해합니다. 그것은 미래를 건설하고 가족을 재결합하는 것입니다. 45년의 헌신적인 서비스로 수많은 개인과 가족이 캐나다의 꿈을 이루도록 도왔습니다.",
    personalized_strategies: "맞춤형 이민 전략",
    transparent_consulting: "투명하고 윤리적인 컨설팅",
    expert_knowledge: "매니토바 프로그램 전문 지식",
    dedicated_support: "여정 전반에 걸친 헌신적인 지원",
    years_of_excellence: "우수성의 년수",
    license_number: "라이센스 번호",
    specialization: "전문 분야",
    consultation: "상담",
    manitoba: "매니토바",
    free: "무료",
    
    // CTA
    ready_to_start: "이민 여정을 시작할 준비가 되셨나요?",
    ready_description: "오늘 무료 상담을 예약하고 캐나다에서의 새로운 삶을 향한 첫 걸음을 내디디세요.",
    
    // CICC Section
    proud_member_of: "자랑스러운 회원",
    licensed_consultant: "라이센스 이민 컨설턴트 – R407311",
    
    // About Page
    about_title: "귀하의 이민 성공을 위한 45년의 헌신",
    about_subtitle: "전문적이고 윤리적인 이민 컨설팅을 통해 미래를 건설하고 가족을 재결합하며 캐나다의 꿈을 실현합니다.",
    meet_consultant: "수석 컨설턴트 소개",
    consultant_bio_1: "45년간 이민 컨설팅 분야에서 헌신적인 경험을 쌓은 우리의 수석 컨설턴트는 수많은 가족과 전문가들이 캐나다의 꿈을 이루도록 도왔습니다. 이러한 풍부한 경험은 이민 정책 진화에 대한 깊은 이해와 수십 년의 서비스만이 제공할 수 있는 실질적인 통찰력을 가져옵니다.",
    consultant_bio_2: "CICC 라이센스 컨설턴트 (R407311)로서 우리는 최고 수준의 전문적 행동과 윤리적 실천을 유지합니다. 매니토바 이민에 대한 우리의 전문성은 고객에게 매니토바 주정부 이민 프로그램과 영주권으로의 지역 경로에 대한 전문 지식을 제공합니다.",
    consultant_bio_3: "우리는 고객과 지속적인 관계를 구축하고 전체 이민 여정 동안 맞춤형 안내와 지원을 제공한다고 믿습니다. 귀하의 성공이 우리의 성공입니다.",
    experience: "경력",
    principal_consultant: "수석 이민 컨설턴트",
    cicc_professional: "CICC 라이센스 전문가",
    
    // Our Story
    our_story: "우리의 이야기",
    story_1: "Young Bae 이민 컨설팅 회사는 단순한 믿음에 기반하여 설립되었습니다. 모든 사람은 캐나다로 가는 길에서 정직하고 전문적인 안내를 받을 자격이 있습니다. 45년의 현장 경험을 통해 우리는 캐나다 이민 정책의 진화를 목격했으며 모든 변화를 통해 고객에게 서비스를 제공하기 위해 전문 지식을 적응시켰습니다.",
    story_2: "매니토바 이민에 대한 우리의 전문성은 매니토바 주정부 이민 프로그램 (MPNP)과 숙련 노동자, 국제 졸업생 및 이 환영하는 주에서 삶을 건설하려는 가족에게 제공하는 기회에 대한 독특한 통찰력을 제공합니다.",
    story_3: "CICC 라이센스 컨설턴트 (R407311)로서 우리는 최고 수준의 전문적 행동을 준수하여 모든 고객이 윤리적이고 정확하며 맞춤형 이민 조언을 받도록 보장합니다.",
    family_focused: "가족 중심",
    dedicated_care: "헌신적인 케어",
    
    // Values
    our_values: "우리의 가치",
    what_we_stand_for: "우리가 지향하는 것",
    values_description: "우리의 가치는 모든 상호 작용과 결정을 안내하여 최상의 서비스와 지원을 받을 수 있도록 합니다.",
    integrity: "정직성",
    integrity_desc: "우리는 모든 상담에서 최고의 윤리적 기준을 유지하여 정직하고 투명한 안내를 보장합니다.",
    compassion: "동정심",
    compassion_desc: "우리는 이민의 감정적 여정을 이해하고 모든 고객을 공감과 배려로 대합니다.",
    excellence: "우수성",
    excellence_desc: "우리는 모든 사례에서 우수성을 추구하며 최상의 결과를 달성하기 위해 전문 지식을 적용합니다.",
    guidance: "안내",
    guidance_desc: "우리는 복잡한 이민 절차를 통해 명확하고 단계별 안내를 제공합니다.",
    
    // Commitment
    our_commitment: "귀하에 대한 우리의 약속",
    commitment_description: "우리는 전문적이고 윤리적이며 맞춤형 이민 컨설팅 서비스를 제공하기 위해 최선을 다하고 있습니다. CICC 라이센스 컨설턴트로서 우리는 엄격한 전문 기준을 준수하며 우리가 제공하는 조언에 대해 책임을 집니다.",
    schedule_consultation: "무료 상담 예약",
    
    // Services Page
    services_title: "종합 이민 서비스",
    services_subtitle: "학생 허가부터 영주권까지 캐나다 이민 여정의 모든 단계를 통해 전문가 안내를 제공합니다.",
    
    // Service Items
    mpnp: "매니토바 주정부 이민 프로그램 (MPNP)",
    mpnp_desc: "숙련 노동자, 국제 교육 및 비즈니스 투자자 스트림을 포함한 매니토바 주정부 이민 프로그램을 통한 전문가 안내.",
    mpnp_feature_1: "매니토바 숙련 노동자",
    mpnp_feature_2: "해외 숙련 노동자",
    mpnp_feature_3: "국제 교육 스트림",
    mpnp_feature_4: "비즈니스 투자자 스트림",
    
    permanent_residency: "영주권 신청",
    pr_desc: "익스프레스 엔트리, 가족 클래스 스폰서십 및 캐나다 영주권으로 가는 다른 경로에 대한 포괄적인 지원.",
    pr_feature_1: "익스프레스 엔트리 신청",
    pr_feature_2: "PNP 연계 신청",
    pr_feature_3: "서류 준비",
    pr_feature_4: "신청 모니터링",
    
    work_permits: "취업 허가",
    work_permits_desc: "고용주별 취업 허가, 오픈 취업 허가 및 LMIA 기반 신청 지원.",
    work_feature_1: "LMIA 기반 허가",
    work_feature_2: "고용주별 허가",
    work_feature_3: "오픈 취업 허가",
    work_feature_4: "취업 허가 갱신",
    
    study_permits: "학생 허가",
    study_permits_desc: "캐나다 교육 기관에서 공부하고자 하는 국제 학생을 위한 안내.",
    study_feature_1: "초기 학생 허가",
    study_feature_2: "학생 허가 연장",
    study_feature_3: "졸업 후 취업 허가",
    study_feature_4: "경로 계획",
    
    family_sponsorship: "가족 스폰서십",
    family_desc: "배우자 스폰서십, 부모 및 조부모 스폰서십, 부양 자녀 신청을 통해 가족 재결합을 돕습니다.",
    family_feature_1: "배우자 스폰서십",
    family_feature_2: "부모 및 조부모",
    family_feature_3: "부양 자녀",
    family_feature_4: "슈퍼 비자 신청",
    
    general_consultation: "일반 이민 상담",
    general_desc: "이민 옵션에 대한 맞춤형 평가 및 캐나다 여정을 위한 전략 계획.",
    general_feature_1: "자격 평가",
    general_feature_2: "이민 전략",
    general_feature_3: "서류 검토",
    general_feature_4: "절차 안내",
    
    // Free Consultation Banner
    not_sure_service: "어떤 서비스가 필요한지 확실하지 않습니까?",
    not_sure_desc: "경험 많은 팀과 무료 상담을 예약하십시오. 귀하의 상황을 평가하고 최상의 이민 경로를 추천해 드리겠습니다.",
    get_started: "시작하기",
    
    // Process
    our_process: "우리의 프로세스",
    how_we_work: "우리가 귀하와 함께하는 방법",
    process_step_1: "상담",
    process_desc_1: "이민 목표 및 자격에 대한 무료 초기 평가",
    process_step_2: "전략",
    process_desc_2: "맞춤형 이민 전략 개발",
    process_step_3: "준비",
    process_desc_3: "서류 수집, 검토 및 신청 준비",
    process_step_4: "제출",
    process_desc_4: "신청 제출 및 결정까지 지속적인 모니터링",
    
    // Contact Page
    contact_title: "오늘 이민 여정을 시작하세요",
    contact_subtitle: "다음 단계를 밟을 준비가 되셨습니까? 무료 상담을 위해 저희에게 연락하시고 45년의 경험이 귀하를 안내하도록 하십시오.",
    email_us: "이메일 보내기",
    call_us: "전화하기",
    consultation_label: "상담",
    free_initial_consultation: "무료 초기 상담",
    free_consultation_available: "무료 상담 가능",
    manitoba_specialist_note: "매니토바 이민 전문가",
    specialist_description: "매니토바 주정부 이민 프로그램에 대한 깊은 전문 지식을 바탕으로 매니토바에서 이용 가능한 특정 요구 사항과 기회를 탐색하는 데 도움을 드릴 수 있습니다.",
    
    // Managing Director Profile
    managing_director: "대표이사",
    managing_director_title: "라이센스 이민 컨설턴트",
    director_profile_desc: "Young Bae는 45년 이상의 경험을 가진 라이센스 이민 컨설턴트로 매니토바 이민 프로그램을 전문으로 합니다. CICC 라이센스 전문가(R407311)로서 윤리적이고 신뢰할 수 있으며 맞춤형 이민 컨설팅 서비스를 제공합니다. 전문적인 안내를 원하는 고객을 위해 무료 상담이 제공됩니다.",
    years_of_service: "서비스 년수",

    // Footer
    footer_description: "45년 경력의 신뢰할 수 있는 이민 컨설팅. 캐나다로의 여정은 여기서 시작됩니다.",
    quick_links: "빠른 링크",
    contact_us: "연락처",
    specializing_manitoba: "매니토바 이민 전문 • 45년의 신뢰할 수 있는 서비스",
    all_rights_reserved: "모든 권리 보유.",
    regulated_by: "규제 및 라이센스",
    },
  
  zh: {
    // Header & Nav
    company_name: "Young Bae",
    company_subtitle: "移民咨询公司",
    nav_home: "首页",
    nav_about: "关于我们",
    nav_services: "服务",
    nav_contact: "联系我们",
    free_consultation: "免费咨询",
    
    // Home Page
    hero_title: "拥有45年经验的||值得信赖的移民咨询",
    hero_subtitle: "专注于曼尼托巴省移民 • CICC持牌",
    hero_description: "您的加拿大之旅始于专业指导。我们提供个性化的专业移民咨询服务，以数十年的经验和对您成功的承诺为后盾。",
    our_services: "我们的服务",
    contact_us_today: "今天联系我们",
    
    // Highlights
    years_experience: "45年经验",
    years_description: "数十年的可靠专业知识，引导家庭和专业人士完成移民流程。",
    cicc_licensed: "CICC持牌",
    cicc_description: "完全持牌的移民顾问（R407311），确保专业和道德的服务。",
    manitoba_specialist: "曼尼托巴专家",
    manitoba_description: "在曼尼托巴省提名计划和当地移民途径方面具有深厚的专业知识。",
    
    // Why Choose Us
    why_choose_us: "为什么选择我们",
    trusted_partner: "您值得信赖的移民伙伴",
    trusted_description: "在Young Bae移民咨询公司，我们理解移民不仅仅是文书工作——它关乎建设未来和团聚家庭。凭借45年的专注服务，我们帮助无数个人和家庭实现了他们的加拿大梦想。",
    personalized_strategies: "个性化移民策略",
    transparent_consulting: "透明和道德的咨询",
    expert_knowledge: "曼尼托巴计划的专业知识",
    dedicated_support: "在整个旅程中的专注支持",
    years_of_excellence: "卓越的年数",
    license_number: "执照号码",
    specialization: "专业化",
    consultation: "咨询",
    manitoba: "曼尼托巴",
    free: "免费",
    
    // CTA
    ready_to_start: "准备开始您的移民之旅了吗？",
    ready_description: "今天预约免费咨询，迈出通往加拿大新生活的第一步。",
    
    // CICC Section
    proud_member_of: "荣誉会员",
    licensed_consultant: "持牌移民顾问 – R407311",
    
    // About Page
    about_title: "45年致力于您的移民成功",
    about_subtitle: "通过专业和道德的移民咨询建设未来、团聚家庭并实现加拿大梦想。",
    meet_consultant: "认识我们的首席顾问",
    consultant_bio_1: "凭借45年在移民咨询领域的专注经验，我们的首席顾问帮助无数家庭和专业人士实现了他们的加拿大梦想。这种丰富的经验带来了对移民政策演变的深刻理解以及只有数十年服务才能提供的实际见解。",
    consultant_bio_2: "作为CICC持牌顾问（R407311），我们保持最高标准的专业行为和道德实践。我们在曼尼托巴移民方面的专业知识为客户提供了关于曼尼托巴省提名计划和通往永久居留权的当地途径的专业知识。",
    consultant_bio_3: "我们相信与客户建立持久的关系，在整个移民旅程中提供个性化的指导和支持。您的成功就是我们的成功。",
    experience: "经验",
    principal_consultant: "首席移民顾问",
    cicc_professional: "CICC持牌专业人士",
    
    // Our Story
    our_story: "我们的故事",
    story_1: "Young Bae移民咨询公司建立在一个简单的信念之上：每个人都应该在通往加拿大的道路上获得诚实、专业的指导。凭借45年的现场经验，我们见证了加拿大移民政策的演变，并调整了我们的专业知识，以在每次变化中为客户服务。",
    story_2: "我们在曼尼托巴移民方面的专业化为曼尼托巴省提名计划（MPNP）及其为技术工人、国际毕业生和希望在这个欢迎的省份建立生活的家庭提供的机会提供了独特的见解。",
    story_3: "作为CICC持牌顾问（R407311），我们遵守最高标准的专业行为，确保每个客户都能获得道德、准确和个性化的移民建议。",
    family_focused: "以家庭为中心",
    dedicated_care: "专注的关怀",
    
    // Values
    our_values: "我们的价值观",
    what_we_stand_for: "我们代表什么",
    values_description: "我们的价值观指导每一次互动和决定，确保您获得最好的服务和支持。",
    integrity: "诚信",
    integrity_desc: "我们在所有咨询中坚持最高的道德标准，确保诚实和透明的指导。",
    compassion: "同情心",
    compassion_desc: "我们理解移民的情感之旅，以同理心和关怀对待每一位客户。",
    excellence: "卓越",
    excellence_desc: "我们在每个案例中追求卓越，应用我们的专业知识以达到最佳结果。",
    guidance: "指导",
    guidance_desc: "我们通过复杂的移民流程提供清晰的逐步指导。",
    
    // Commitment
    our_commitment: "我们对您的承诺",
    commitment_description: "我们致力于提供专业、道德和个性化的移民咨询服务。作为CICC持牌顾问，我们遵守严格的专业标准，并对我们提供的建议负责。",
    schedule_consultation: "预约免费咨询",
    
    // Services Page
    services_title: "全面的移民服务",
    services_subtitle: "从学习许可到永久居留权，我们在加拿大移民旅程的每一步提供专业指导。",
    
    // Service Items
    mpnp: "曼尼托巴省提名计划（MPNP）",
    mpnp_desc: "通过曼尼托巴省提名计划提供专业指导，包括技术工人、国际教育和商业投资者流。",
    mpnp_feature_1: "曼尼托巴技术工人",
    mpnp_feature_2: "海外技术工人",
    mpnp_feature_3: "国际教育流",
    mpnp_feature_4: "商业投资者流",
    
    permanent_residency: "永久居留权申请",
    pr_desc: "为快速通道、家庭类担保和其他通往加拿大永久居留权的途径提供全面支持。",
    pr_feature_1: "快速通道申请",
    pr_feature_2: "PNP相关申请",
    pr_feature_3: "文件准备",
    pr_feature_4: "申请监控",
    
    work_permits: "工作许可",
    work_permits_desc: "协助雇主特定的工作许可、开放式工作许可和基于LMIA的申请。",
    work_feature_1: "基于LMIA的许可",
    work_feature_2: "雇主特定许可",
    work_feature_3: "开放式工作许可",
    work_feature_4: "工作许可续签",
    
    study_permits: "学习许可",
    study_permits_desc: "为寻求在加拿大教育机构学习的国际学生提供指导。",
    study_feature_1: "初始学习许可",
    study_feature_2: "学习许可延期",
    study_feature_3: "毕业后工作许可",
    study_feature_4: "途径规划",
    
    family_sponsorship: "家庭担保",
    family_desc: "通过配偶担保、父母和祖父母担保以及受抚养子女申请帮助家庭团聚。",
    family_feature_1: "配偶担保",
    family_feature_2: "父母和祖父母",
    family_feature_3: "受抚养子女",
    family_feature_4: "超级签证申请",
    
    general_consultation: "一般移民咨询",
    general_desc: "对您的移民选择进行个性化评估，并为您的加拿大之旅进行战略规划。",
    general_feature_1: "资格评估",
    general_feature_2: "移民策略",
    general_feature_3: "文件审查",
    general_feature_4: "流程指导",
    
    // Free Consultation Banner
    not_sure_service: "不确定您需要哪种服务？",
    not_sure_desc: "与我们经验丰富的团队预约免费咨询。我们将评估您的情况并推荐最适合您的移民途径。",
    get_started: "开始",
    
    // Process
    our_process: "我们的流程",
    how_we_work: "我们如何与您合作",
    process_step_1: "咨询",
    process_desc_1: "对您的移民目标和资格进行免费初步评估",
    process_step_2: "策略",
    process_desc_2: "制定个性化的移民策略",
    process_step_3: "准备",
    process_desc_3: "文件收集、审查和申请准备",
    process_step_4: "提交",
    process_desc_4: "申请提交和持续监控直到决定",
    
    // Contact Page
    contact_title: "今天开始您的移民之旅",
    contact_subtitle: "准备迈出下一步了吗？联系我们进行免费咨询，让我们45年的经验指导您。",
    email_us: "发送电子邮件",
    call_us: "致电我们",
    consultation_label: "咨询",
    free_initial_consultation: "免费初步咨询",
    free_consultation_available: "提供免费咨询",
    manitoba_specialist_note: "曼尼托巴移民专家",
    specialist_description: "凭借对曼尼托巴省提名计划的深厚专业知识，我们可以帮助您了解曼尼托巴可用的特定要求和机会。",
    
    // Managing Director Profile
    managing_director: "董事总经理",
    managing_director_title: "持牌移民顾问",
    director_profile_desc: "Young Bae是一位拥有45年以上经验的持牌移民顾问，专注于曼尼托巴省移民项目。作为CICC持牌专业人士(R407311)，他提供道德、可靠和个性化的移民咨询服务。为寻求专业指导的客户提供免费咨询。",
    years_of_service: "服务年数",
    
    // Footer
    footer_description: "拥有45年经验的值得信赖的移民咨询。您的加拿大之旅从这里开始。",
    quick_links: "快速链接",
    contact_us: "联系我们",
    specializing_manitoba: "专注于曼尼托巴移民 • 45年的值得信赖的服务",
    all_rights_reserved: "保留所有权利。",
    regulated_by: "监管和许可",
  },
  
  fil: {
    // Header & Nav
    company_name: "Young Bae",
    company_subtitle: "Kumpanya ng Konsultasyon sa Imigrasyon",
    nav_home: "Home",
    nav_about: "Tungkol",
    nav_services: "Serbisyo",
    nav_contact: "Makipag-ugnayan",
    free_consultation: "Libreng Konsultasyon",
    
    // Home Page
    hero_title: "Pinagkakatiwalaang Konsultasyon sa Imigrasyon||na may 45 Taong Karanasan",
    hero_subtitle: "Nag-espesyalisa sa Imigrasyon sa Manitoba • May Lisensya ng CICC",
    hero_description: "Ang iyong paglalakbay sa Canada ay nagsisimula sa dalubhasang gabay. Nagbibigay kami ng personalized, propesyonal na serbisyo sa konsultasyon sa imigrasyon na sinusuportahan ng mga dekada ng karanasan at pangako sa iyong tagumpay.",
    our_services: "Aming mga Serbisyo",
    contact_us_today: "Makipag-ugnayan Ngayon",
    
    // Highlights
    years_experience: "45 Taong Karanasan",
    years_description: "Mga dekada ng pinagkakatiwalaang kadalubhasaan sa paggabay sa mga pamilya at propesyonal sa proseso ng imigrasyon.",
    cicc_licensed: "May Lisensya ng CICC",
    cicc_description: "Ganap na lisensyadong konsultant sa imigrasyon (R407311) na nagsisiguro ng propesyonal at etikal na serbisyo.",
    manitoba_specialist: "Espesyalista sa Manitoba",
    manitoba_description: "Malalim na kadalubhasaan sa Manitoba Provincial Nominee Program at mga lokal na landas sa imigrasyon.",
    
    // Why Choose Us
    why_choose_us: "Bakit Piliin Kami",
    trusted_partner: "Ang Iyong Pinagkakatiwalaang Kasosyo sa Imigrasyon",
    trusted_description: "Sa Young Bae Immigration Consulting Company, nauunawaan namin na ang imigrasyon ay higit pa sa paperwork—tungkol ito sa pagbuo ng kinabukasan at pagsasama-sama ng mga pamilya. Sa 45 taong dedikadong serbisyo, tinulungan namin ang walang bilang na indibidwal at pamilya na makamit ang kanilang mga pangarap sa Canada.",
    personalized_strategies: "Mga personalized na estratehiya sa imigrasyon",
    transparent_consulting: "Transparent at etikal na konsultasyon",
    expert_knowledge: "Dalubhasang kaalaman sa mga programa sa Manitoba",
    dedicated_support: "Dedikadong suporta sa buong paglalakbay mo",
    years_of_excellence: "Taon ng Kahusayan",
    license_number: "Numero ng Lisensya",
    specialization: "Espesyalisasyon",
    consultation: "Konsultasyon",
    manitoba: "Manitoba",
    free: "Libre",
    
    // CTA
    ready_to_start: "Handa na Bang Simulan ang Iyong Paglalakbay sa Imigrasyon?",
    ready_description: "Mag-iskedyul ng iyong libreng konsultasyon ngayon at gumawa ng unang hakbang tungo sa iyong bagong buhay sa Canada.",
    
    // CICC Section
    proud_member_of: "Mapagmalaking Miyembro Ng",
    licensed_consultant: "Lisensyadong Konsultant sa Imigrasyon – R407311",
    
    // About Page
    about_title: "45 Taong Dedikasyon sa Iyong Tagumpay sa Imigrasyon",
    about_subtitle: "Pagbuo ng kinabukasan, pagsasama-sama ng mga pamilya, at paggawa ng mga pangarap sa Canada na totoo sa pamamagitan ng propesyonal at etikal na konsultasyon sa imigrasyon.",
    meet_consultant: "Kilalanin ang Aming Pangunahing Konsultant",
    consultant_bio_1: "Sa 45 taong dedikadong karanasan sa konsultasyon sa imigrasyon, ang aming pangunahing konsultant ay tumulong sa walang bilang na pamilya at propesyonal na makamit ang kanilang mga pangarap sa Canada. Ang kayamanang karanasang ito ay nagdudulot ng malalim na pag-unawa sa ebolusyon ng patakaran sa imigrasyon at praktikal na mga insight na tanging mga dekada ng serbisyo lamang ang makapagbibigay.",
    consultant_bio_2: "Bilang lisensyadong konsultant ng CICC (R407311), pinapanatili namin ang pinakamataas na pamantayan ng propesyonal na pag-uugali at etikal na pagsasagawa. Ang aming espesyalisasyon sa imigrasyon sa Manitoba ay nagbibigay sa mga kliyente ng dalubhasang kaalaman sa Manitoba Provincial Nominee Program at mga lokal na landas sa permanenteng paninirahan.",
    consultant_bio_3: "Naniniwala kami sa pagbuo ng pangmatagalang relasyon sa aming mga kliyente, pagbibigay ng personalized na gabay at suporta sa buong paglalakbay sa imigrasyon. Ang iyong tagumpay ay aming tagumpay.",
    experience: "Karanasan",
    principal_consultant: "Pangunahing Konsultant sa Imigrasyon",
    cicc_professional: "Propesyonal na May Lisensya ng CICC",
    
    // Our Story
    our_story: "Ang Aming Kuwento",
    story_1: "Ang Young Bae Immigration Consulting Company ay itinatag sa isang simpleng paniniwala: ang bawat isa ay karapat-dapat sa tapat, propesyonal na gabay sa kanilang landas sa Canada. Sa 45 taong karanasan sa larangan, nasaksihan namin ang ebolusyon ng patakaran sa imigrasyon ng Canada at inangkop ang aming kadalubhasaan upang maglingkod sa mga kliyente sa bawat pagbabago.",
    story_2: "Ang aming espesyalisasyon sa imigrasyon sa Manitoba ay nagbibigay sa amin ng natatanging pananaw sa Manitoba Provincial Nominee Program (MPNP) at ang mga oportunidad na inaalok nito sa mga skilled worker, mga international graduate, at mga pamilyang naghahangad na bumuo ng kanilang buhay sa mapagkalingang lalawigan na ito.",
    story_3: "Bilang lisensyadong konsultant ng CICC (R407311), sumusunod kami sa pinakamataas na pamantayan ng propesyonal na pag-uugali, na nagsisiguro na ang bawat kliyente ay nakakatanggap ng etikal, tumpak, at personalized na payo sa imigrasyon.",
    family_focused: "Nakatuon sa Pamilya",
    dedicated_care: "Dedikadong Pag-aalaga",
    
    // Values
    our_values: "Ang Aming mga Halaga",
    what_we_stand_for: "Kung Ano ang Aming Pinaglalaban",
    values_description: "Ang aming mga halaga ay gumagabay sa bawat interaksyon at desisyon, na nagsisiguro na makakatanggap ka ng pinakamahusay na serbisyo at suporta.",
    integrity: "Integridad",
    integrity_desc: "Pinapanatili namin ang pinakamataas na etikal na pamantayan sa lahat ng aming konsultasyon, na nagsisiguro ng tapat at transparent na gabay.",
    compassion: "Habag",
    compassion_desc: "Nauunawaan namin ang emosyonal na paglalakbay ng imigrasyon at tinatrato ang bawat kliyente nang may empatiya at pag-aalaga.",
    excellence: "Kahusayan",
    excellence_desc: "Nagsusumikap kami para sa kahusayan sa bawat kaso, inilalapat ang aming kadalubhasaan upang makamit ang pinakamahusay na mga resulta.",
    guidance: "Gabay",
    guidance_desc: "Nagbibigay kami ng malinaw, hakbang-hakbang na gabay sa mga komplikadong proseso ng imigrasyon.",
    
    // Commitment
    our_commitment: "Ang Aming Pangako sa Iyo",
    commitment_description: "Nakatuon kami sa pagbibigay ng propesyonal, etikal, at personalized na serbisyo sa konsultasyon sa imigrasyon. Bilang lisensyadong konsultant ng CICC, sumusunod kami sa mahigpit na mga pamantayan ng propesyonal at responsable sa payo na ibinibigay namin.",
    schedule_consultation: "Mag-iskedyul ng Libreng Konsultasyon",
    
    // Services Page
    services_title: "Komprehensibong mga Serbisyo sa Imigrasyon",
    services_subtitle: "Mula sa mga permit sa pag-aaral hanggang sa permanenteng paninirahan, nagbibigay kami ng dalubhasang gabay sa bawat hakbang ng iyong paglalakbay sa imigrasyon sa Canada.",
    
    // Service Items
    mpnp: "Manitoba Provincial Nominee Program (MPNP)",
    mpnp_desc: "Dalubhasang gabay sa Manitoba Provincial Nominee Program, kabilang ang skilled worker, international education, at business investor streams.",
    mpnp_feature_1: "Skilled Worker sa Manitoba",
    mpnp_feature_2: "Skilled Worker sa Ibang Bansa",
    mpnp_feature_3: "International Education Stream",
    mpnp_feature_4: "Business Investor Stream",
    
    permanent_residency: "Mga Aplikasyon sa Permanenteng Paninirahan",
    pr_desc: "Komprehensibong suporta para sa Express Entry, family class sponsorship, at iba pang landas sa permanenteng paninirahan sa Canada.",
    pr_feature_1: "Mga aplikasyon sa Express Entry",
    pr_feature_2: "Mga aplikasyong konektado sa PNP",
    pr_feature_3: "Paghahanda ng dokumento",
    pr_feature_4: "Pagsubaybay sa aplikasyon",
    
    work_permits: "Mga Work Permit",
    work_permits_desc: "Tulong sa employer-specific work permits, open work permits, at mga aplikasyong batay sa LMIA.",
    work_feature_1: "Mga permit na batay sa LMIA",
    work_feature_2: "Employer-specific permits",
    work_feature_3: "Open work permits",
    work_feature_4: "Pag-renew ng work permit",
    
    study_permits: "Mga Study Permit",
    study_permits_desc: "Gabay para sa mga internasyonal na estudyante na naghahangad na mag-aral sa mga institusyong pang-edukasyon ng Canada.",
    study_feature_1: "Mga paunang study permit",
    study_feature_2: "Mga extension ng study permit",
    study_feature_3: "Post-graduation work permits",
    study_feature_4: "Pagpaplano ng landas",
    
    family_sponsorship: "Sponsorship ng Pamilya",
    family_desc: "Tulong sa pagsasama-sama ng mga pamilya sa pamamagitan ng sponsorship ng asawa, sponsorship ng magulang at lolo't lola, at mga aplikasyon ng dependent child.",
    family_feature_1: "Sponsorship ng asawa",
    family_feature_2: "Magulang at lolo't lola",
    family_feature_3: "Mga dependent children",
    family_feature_4: "Mga aplikasyon sa Super Visa",
    
    general_consultation: "Pangkalahatang Konsultasyon sa Imigrasyon",
    general_desc: "Personalized na pagsusuri ng iyong mga opsyon sa imigrasyon at estratehikong pagpaplano para sa iyong paglalakbay sa Canada.",
    general_feature_1: "Pagsusuri ng karapat-dapat",
    general_feature_2: "Estratehiya sa imigrasyon",
    general_feature_3: "Pagsusuri ng dokumento",
    general_feature_4: "Gabay sa proseso",
    
    // Free Consultation Banner
    not_sure_service: "Hindi Ka Sigurado kung Aling Serbisyo ang Kailangan Mo?",
    not_sure_desc: "Mag-book ng libreng konsultasyon sa aming may karanasang team. Susuriin namin ang iyong sitwasyon at irerekumenda ang pinakamahusay na landas sa imigrasyon para sa iyo.",
    get_started: "Magsimula",
    
    // Process
    our_process: "Ang Aming Proseso",
    how_we_work: "Paano Kami Nakikipagtulungan sa Iyo",
    process_step_1: "Konsultasyon",
    process_desc_1: "Libreng paunang pagsusuri ng iyong mga layunin at karapat-dapat sa imigrasyon",
    process_step_2: "Estratehiya",
    process_desc_2: "Pagbuo ng personalized na estratehiya sa imigrasyon",
    process_step_3: "Paghahanda",
    process_desc_3: "Pagkolekta, pagsusuri, at paghahanda ng dokumento ng aplikasyon",
    process_step_4: "Pagsusumite",
    process_desc_4: "Pagsusumite ng aplikasyon at patuloy na pagsubaybay hanggang sa desisyon",
    
    // Contact Page
    contact_title: "Simulan ang Iyong Paglalakbay sa Imigrasyon Ngayon",
    contact_subtitle: "Handa na bang gumawa ng susunod na hakbang? Makipag-ugnayan sa amin para sa libreng konsultasyon at hayaang ang aming 45 taong karanasan ay gabayan ka.",
    email_us: "Mag-email sa Amin",
    call_us: "Tumawag sa Amin",
    consultation_label: "Konsultasyon",
    free_initial_consultation: "Libreng Paunang Konsultasyon",
    free_consultation_available: "May Libreng Konsultasyon",
    manitoba_specialist_note: "Espesyalista sa Imigrasyon sa Manitoba",
    specialist_description: "Sa malalim na kadalubhasaan sa Manitoba Provincial Nominee Program, matutulungan ka naming mag-navigate sa mga partikular na kinakailangan at oportunidad na available sa Manitoba.",
    
    // Managing Director Profile
    managing_director: "Managing Director",
    managing_director_title: "Lisensyadong Konsultant sa Imigrasyon",
    director_profile_desc: "Si Young Bae ay isang lisensyadong konsultant sa imigrasyon na may mahigit 45 taong karanasan, na nag-espesyalisa sa mga programa ng imigrasyon sa Manitoba. Bilang isang CICC-licensed professional (R407311), nagbibigay siya ng etikal, maaasahan, at personalized na serbisyo sa konsultasyon sa imigrasyon. May libreng konsultasyon para sa mga kliyenteng humihingi ng propesyonal na gabay.",
    years_of_service: "Taon ng Serbisyo",

    // Footer
    footer_description: "Pinagkakatiwalaang konsultasyon sa imigrasyon na may 45 taong karanasan. Ang iyong paglalakbay sa Canada ay nagsisimula dito.",
    quick_links: "Mabilis na mga Link",
    contact_us: "Makipag-ugnayan sa Amin",
    specializing_manitoba: "Nag-espesyalisa sa Imigrasyon sa Manitoba • 45 Taong Pinagkakatiwalaang Serbisyo",
    all_rights_reserved: "Lahat ng karapatan ay nakalaan.",
    regulated_by: "Niregula at Lisensyado Ng",
    },
  
  hi: {
    // Header & Nav
    company_name: "Young Bae",
    company_subtitle: "इमिग्रेशन परामर्श कंपनी",
    nav_home: "होम",
    nav_about: "हमारे बारे में",
    nav_services: "सेवाएं",
    nav_contact: "संपर्क करें",
    free_consultation: "मुफ्त परामर्श",
    
    // Home Page
    hero_title: "45 वर्षों के अनुभव के साथ||विश्वसनीय इमिग्रेशन परामर्श",
    hero_subtitle: "मैनिटोबा इमिग्रेशन में विशेषज्ञता • CICC लाइसेंस प्राप्त",
    hero_description: "कनाडा की आपकी यात्रा विशेषज्ञ मार्गदर्शन के साथ शुरू होती है। हम दशकों के अनुभव और आपकी सफलता के प्रति प्रतिबद्धता के साथ व्यक्तिगत, पेशेवर इमिग्रेशन परामर्श सेवाएं प्रदान करते हैं।",
    our_services: "हमारी सेवाएं",
    contact_us_today: "आज संपर्क करें",
    
    // Highlights
    years_experience: "45 वर्षों का अनुभव",
    years_description: "इमिग्रेशन प्रक्रिया के माध्यम से परिवारों और पेशेवरों का मार्गदर्शन करने वाली दशकों की विश्वसनीय विशेषज्ञता।",
    cicc_licensed: "CICC लाइसेंस प्राप्त",
    cicc_description: "पेशेवर और नैतिक सेवा सुनिश्चित करने वाले पूर्ण रूप से लाइसेंस प्राप्त इमिग्रेशन सलाहकार (R407311)।",
    manitoba_specialist: "मैनिटोबा विशेषज्ञ",
    manitoba_description: "मैनिटोबा प्रांतीय नामांकित कार्यक्रम और स्थानीय इमिग्रेशन मार्गों में गहन विशेषज्ञता।",
    
    // Why Choose Us
    why_choose_us: "हमें क्यों चुनें",
    trusted_partner: "इमिग्रेशन में आपका विश्वसनीय साझेदार",
    trusted_description: "Young Bae Immigration Consulting Company में, हम समझते हैं कि इमिग्रेशन केवल कागजी कार्रवाई से अधिक है—यह भविष्य बनाने और परिवारों को फिर से मिलाने के बारे में है। 45 वर्षों की समर्पित सेवा के साथ, हमने अनगिनत व्यक्तियों और परिवारों को उनके कनाडाई सपनों को प्राप्त करने में मदद की है।",
    personalized_strategies: "व्यक्तिगत इमिग्रेशन रणनीतियाँ",
    transparent_consulting: "पारदर्शी और नैतिक परामर्श",
    expert_knowledge: "मैनिटोबा कार्यक्रमों का विशेषज्ञ ज्ञान",
    dedicated_support: "आपकी यात्रा के दौरान समर्पित सहायता",
    years_of_excellence: "उत्कृष्टता के वर्ष",
    license_number: "लाइसेंस नंबर",
    specialization: "विशेषज्ञता",
    consultation: "परामर्श",
    manitoba: "मैनिटोबा",
    free: "मुफ्त",
    
    // CTA
    ready_to_start: "अपनी इमिग्रेशन यात्रा शुरू करने के लिए तैयार हैं?",
    ready_description: "आज ही अपना मुफ्त परामर्श शेड्यूल करें और कनाडा में अपने नए जीवन की ओर पहला कदम उठाएं।",
    
    // CICC Section
    proud_member_of: "गर्व से सदस्य",
    licensed_consultant: "लाइसेंस प्राप्त इमिग्रेशन सलाहकार – R407311",
    
    // About Page
    about_title: "आपकी इमिग्रेशन सफलता के लिए 45 वर्षों की समर्पण",
    about_subtitle: "पेशेवर और नैतिक इमिग्रेशन परामर्श के माध्यम से भविष्य का निर्माण, परिवारों को फिर से मिलाना और कनाडाई सपनों को सच करना।",
    meet_consultant: "हमारे प्रमुख सलाहकार से मिलें",
    consultant_bio_1: "इमिग्रेशन परामर्श में 45 वर्षों के समर्पित अनुभव के साथ, हमारे प्रमुख सलाहकार ने अनगिनत परिवारों और पेशेवरों को उनके कनाडाई सपनों को प्राप्त करने में मदद की है। अनुभव का यह खजाना इमिग्रेशन नीति के विकास की गहरी समझ और व्यावहारिक अंतर्दृष्टि लाता है जो केवल दशकों की सेवा प्रदान कर सकती है।",
    consultant_bio_2: "CICC लाइसेंस प्राप्त सलाहकार (R407311) के रूप में, हम पेशेवर आचरण और नैतिक अभ्यास के उच्चतम मानकों को बनाए रखते हैं। मैनिटोबा इमिग्रेशन में हमारी विशेषज्ञता ग्राहकों को मैनिटोबा प्रांतीय नामांकित कार्यक्रम और स्थायी निवास के स्थानीय मार्गों के विशेषज्ञ ज्ञान प्रदान करती है।",
    consultant_bio_3: "हम अपने ग्राहकों के साथ स्थायी संबंध बनाने में विश्वास करते हैं, उनकी पूरी इमिग्रेशन यात्रा के दौरान व्यक्तिगत मार्गदर्शन और सहायता प्रदान करते हैं। आपकी सफलता हमारी सफलता है।",
    experience: "अनुभव",
    principal_consultant: "प्रमुख इमिग्रेशन सलाहकार",
    cicc_professional: "CICC लाइसेंस प्राप्त पेशेवर",
    
    // Our Story
    our_story: "हमारी कहानी",
    story_1: "Young Bae Immigration Consulting Company की स्थापना एक सरल विश्वास पर की गई थी: हर कोई कनाडा के रास्ते पर ईमानदार, पेशेवर मार्गदर्शन का हकदार है। क्षेत्र में 45 वर्षों के अनुभव के साथ, हमने कनाडाई इमिग्रेशन नीति के विकास को देखा है और हर बदलाव के माध्यम से ग्राहकों की सेवा करने के लिए अपनी विशेषज्ञता को अनुकूलित किया है।",
    story_2: "मैनिटोबा इमिग्रेशन में हमारी विशेषज्ञता हमें मैनिटोबा प्रांतीय नामांकित कार्यक्रम (MPNP) और कुशल श्रमिकों, अंतर्राष्ट्रीय स्नातकों और इस स्वागत योग्य प्रांत में अपना जीवन बनाने की इच्छा रखने वाले परिवारों को इसके द्वारा प्रदान किए जाने वाले अवसरों में अद्वितीय अंतर्दृष्टि प्रदान करती है।",
    story_3: "CICC लाइसेंस प्राप्त सलाहकार (R407311) के रूप में, हम पेशेवर आचरण के उच्चतम मानकों का पालन करते हैं, यह सुनिश्चित करते हुए कि प्रत्येक ग्राहक को नैतिक, सटीक और व्यक्तिगत इमिग्रेशन सलाह प्राप्त हो।",
    family_focused: "परिवार केंद्रित",
    dedicated_care: "समर्पित देखभाल",
    
    // Values
    our_values: "हमारे मूल्य",
    what_we_stand_for: "हम क्या समर्थन करते हैं",
    values_description: "हमारे मूल्य प्रत्येक बातचीत और निर्णय का मार्गदर्शन करते हैं, यह सुनिश्चित करते हुए कि आपको सर्वोत्तम संभव सेवा और सहायता प्राप्त हो।",
    integrity: "अखंडता",
    integrity_desc: "हम अपने सभी परामर्शों में उच्चतम नैतिक मानकों को बनाए रखते हैं, ईमानदार और पारदर्शी मार्गदर्शन सुनिश्चित करते हैं।",
    compassion: "करुणा",
    compassion_desc: "हम इमिग्रेशन की भावनात्मक यात्रा को समझते हैं और प्रत्येक ग्राहक के साथ सहानुभूति और देखभाल के साथ व्यवहार करते हैं।",
    excellence: "उत्कृष्टता",
    excellence_desc: "हम हर मामले में उत्कृष्टता के लिए प्रयास करते हैं, सर्वोत्तम संभव परिणाम प्राप्त करने के लिए अपनी विशेषज्ञता लागू करते हैं।",
    guidance: "मार्गदर्शन",
    guidance_desc: "हम जटिल इमिग्रेशन प्रक्रियाओं के माध्यम से स्पष्ट, चरण-दर-चरण मार्गदर्शन प्रदान करते हैं।",
    
    // Commitment
    our_commitment: "आपके प्रति हमारी प्रतिबद्धता",
    commitment_description: "हम पेशेवर, नैतिक और व्यक्तिगत इमिग्रेशन परामर्श सेवाएं प्रदान करने के लिए प्रतिबद्ध हैं। CICC लाइसेंस प्राप्त सलाहकार के रूप में, हम सख्त पेशेवर मानकों का पालन करते हैं और हम जो सलाह प्रदान करते हैं, उसके लिए जवाबदेह हैं।",
    schedule_consultation: "मुफ्त परामर्श शेड्यूल करें",
    
    // Services Page
    services_title: "व्यापक इमिग्रेशन सेवाएं",
    services_subtitle: "अध्ययन परमिट से स्थायी निवास तक, हम आपकी कनाडाई इमिग्रेशन यात्रा के हर कदम पर विशेषज्ञ मार्गदर्शन प्रदान करते हैं।",
    
    // Service Items
    mpnp: "मैनिटोबा प्रांतीय नामांकित कार्यक्रम (MPNP)",
    mpnp_desc: "कुशल श्रमिक, अंतर्राष्ट्रीय शिक्षा और व्यापार निवेशक धाराओं सहित मैनिटोबा प्रांतीय नामांकित कार्यक्रम के माध्यम से विशेषज्ञ मार्गदर्शन।",
    mpnp_feature_1: "मैनिटोबा में कुशल श्रमिक",
    mpnp_feature_2: "विदेश में कुशल श्रमिक",
    mpnp_feature_3: "अंतर्राष्ट्रीय शिक्षा धारा",
    mpnp_feature_4: "व्यापार निवेशक धारा",
    
    permanent_residency: "स्थायी निवास आवेदन",
    pr_desc: "एक्सप्रेस एंट्री, परिवार वर्ग प्रायोजन और कनाडाई स्थायी निवास के अन्य मार्गों के लिए व्यापक समर्थन।",
    pr_feature_1: "एक्सप्रेस एंट्री आवेदन",
    pr_feature_2: "PNP-संबंधित आवेदन",
    pr_feature_3: "दस्तावेज़ तैयारी",
    pr_feature_4: "आवेदन निगरानी",
    
    work_permits: "कार्य परमिट",
    work_permits_desc: "नियोक्ता-विशिष्ट कार्य परमिट, खुले कार्य परमिट और LMIA-आधारित आवेदनों में सहायता।",
    work_feature_1: "LMIA-आधारित परमिट",
    work_feature_2: "नियोक्ता-विशिष्ट परमिट",
    work_feature_3: "खुले कार्य परमिट",
    work_feature_4: "कार्य परमिट नवीनीकरण",
    
    study_permits: "अध्ययन परमिट",
    study_permits_desc: "कनाडाई शैक्षिक संस्थानों में अध्ययन करने की इच्छा रखने वाले अंतर्राष्ट्रीय छात्रों के लिए मार्गदर्शन।",
    study_feature_1: "प्रारंभिक अध्ययन परमिट",
    study_feature_2: "अध्ययन परमिट विस्तार",
    study_feature_3: "स्नातक के बाद कार्य परमिट",
    study_feature_4: "मार्ग योजना",
    
    family_sponsorship: "परिवार प्रायोजन",
    family_desc: "पति-पत्नी प्रायोजन, माता-पिता और दादा-दादी प्रायोजन, और आश्रित बच्चों के आवेदनों के माध्यम से परिवारों को फिर से मिलाने में मदद करें।",
    family_feature_1: "पति-पत्नी प्रायोजन",
    family_feature_2: "माता-पिता और दादा-दादी",
    family_feature_3: "आश्रित बच्चे",
    family_feature_4: "सुपर वीजा आवेदन",
    
    general_consultation: "सामान्य इमिग्रेशन परामर्श",
    general_desc: "आपके इमिग्रेशन विकल्पों का व्यक्तिगत मूल्यांकन और आपकी कनाडाई यात्रा के लिए रणनीतिक योजना।",
    general_feature_1: "पात्रता मूल्यांकन",
    general_feature_2: "इमिग्रेशन रणनीति",
    general_feature_3: "दस्तावेज़ समीक्षा",
    general_feature_4: "प्रक्रिया मार्गदर्शन",
    
    // Free Consultation Banner
    not_sure_service: "निश्चित नहीं हैं कि आपको किस सेवा की आवश्यकता है?",
    not_sure_desc: "हमारी अनुभवी टीम के साथ मुफ्त परामर्श बुक करें। हम आपकी स्थिति का मूल्यांकन करेंगे और आपके लिए सर्वोत्तम इमिग्रेशन मार्ग की सिफारिश करेंगे।",
    get_started: "शुरू करें",
    
    // Process
    our_process: "हमारी प्रक्रिया",
    how_we_work: "हम आपके साथ कैसे काम करते हैं",
    process_step_1: "परामर्श",
    process_desc_1: "आपके इमिग्रेशन लक्ष्यों और पात्रता का मुफ्त प्रारंभिक मूल्यांकन",
    process_step_2: "रणनीति",
    process_desc_2: "व्यक्तिगत इमिग्रेशन रणनीति का विकास",
    process_step_3: "तैयारी",
    process_desc_3: "दस्तावेज़ संग्रह, समीक्षा और आवेदन तैयारी",
    process_step_4: "प्रस्तुतीकरण",
    process_desc_4: "आवेदन प्रस्तुत करना और निर्णय तक निरंतर निगरानी",
    
    // Contact Page
    contact_title: "आज अपनी इमिग्रेशन यात्रा शुरू करें",
    contact_subtitle: "अगला कदम उठाने के लिए तैयार हैं? मुफ्त परामर्श के लिए हमसे संपर्क करें और हमारे 45 वर्षों के अनुभव को आपका मार्गदर्शन करने दें।",
    email_us: "हमें ईमेल करें",
    call_us: "हमें कॉल करें",
    consultation_label: "परामर्श",
    free_initial_consultation: "मुफ्त प्रारंभिक परामर्श",
    free_consultation_available: "मुफ्त परामर्श उपलब्ध",
    manitoba_specialist_note: "मैनिटोबा इमिग्रेशन विशेषज्ञ",
    specialist_description: "मैनिटोबा प्रांतीय नामांकित कार्यक्रम में गहन विशेषज्ञता के साथ, हम मैनिटोबा में उपलब्ध विशिष्ट आवश्यकताओं और अवसरों को नेविगेट करने में आपकी सहायता कर सकते हैं।",
    
    // Managing Director Profile
    managing_director: "प्रबंध निदेशक",
    managing_director_title: "लाइसेंस प्राप्त इमिग्रेशन सलाहकार",
    director_profile_desc: "Young Bae 45 वर्षों से अधिक के अनुभव वाले लाइसेंस प्राप्त इमिग्रेशन सलाहकार हैं, जो मैनिटोबा इमिग्रेशन कार्यक्रमों में विशेषज्ञता रखते हैं। CICC-लाइसेंस प्राप्त पेशेवर (R407311) के रूप में, वे नैतिक, विश्वसनीय और व्यक्तिगत इमिग्रेशन परामर्श सेवाएं प्रदान करते हैं। पेशेवर मार्गदर्शन चाहने वाले ग्राहकों के लिए मुफ्त परामर्श उपलब्ध है।",
    years_of_service: "सेवा के वर्ष",

    // Footer
    footer_description: "45 वर्षों के अनुभव के साथ विश्वसनीय इमिग्रेशन परामर्श। कनाडा की आपकी यात्रा यहाँ से शुरू होती है।",
    quick_links: "त्वरित लिंक",
    contact_us: "हमसे संपर्क करें",
    specializing_manitoba: "मैनिटोबा इमिग्रेशन में विशेषज्ञता • 45 वर्षों की विश्वसनीय सेवा",
    all_rights_reserved: "सर्वाधिकार सुरक्षित।",
    regulated_by: "द्वारा विनियमित और लाइसेंस प्राप्त",
    },
  
  ar: {
    // Header & Nav
    company_name: "Young Bae",
    company_subtitle: "شركة استشارات الهجرة",
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "الخدمات",
    nav_contact: "اتصل بنا",
    free_consultation: "استشارة مجانية",
    
    // Home Page
    hero_title: "استشارات هجرة موثوقة||مع 45 عامًا من الخبرة",
    hero_subtitle: "متخصصون في هجرة مانيتوبا • مرخص من CICC",
    hero_description: "تبدأ رحلتك إلى كندا بإرشاد الخبراء. نقدم خدمات استشارية مهنية وشخصية في مجال الهجرة مدعومة بعقود من الخبرة والتزام بنجاحك.",
    our_services: "خدماتنا",
    contact_us_today: "اتصل بنا اليوم",
    
    // Highlights
    years_experience: "45 عامًا من الخبرة",
    years_description: "عقود من الخبرة الموثوقة في إرشاد العائلات والمهنيين خلال عملية الهجرة.",
    cicc_licensed: "مرخص من CICC",
    cicc_description: "مستشار هجرة مرخص بالكامل (R407311) يضمن خدمة مهنية وأخلاقية.",
    manitoba_specialist: "متخصص في مانيتوبا",
    manitoba_description: "خبرة عميقة في برنامج ترشيح مانيتوبا الإقليمي ومسارات الهجرة المحلية.",
    
    // Why Choose Us
    why_choose_us: "لماذا تختارنا",
    trusted_partner: "شريكك الموثوق في الهجرة",
    trusted_description: "في شركة Young Bae لاستشارات الهجرة، ندرك أن الهجرة أكثر من مجرد أوراق - إنها تتعلق ببناء المستقبل ولم شمل العائلات. بفضل 45 عامًا من الخدمة المتفانية، ساعدنا عددًا لا يحصى من الأفراد والعائلات على تحقيق أحلامهم الكندية.",
    personalized_strategies: "استراتيجيات هجرة شخصية",
    transparent_consulting: "استشارات شفافة وأخلاقية",
    expert_knowledge: "معرفة خبيرة ببرامج مانيتوبا",
    dedicated_support: "دعم مخصص طوال رحلتك",
    years_of_excellence: "سنوات من التميز",
    license_number: "رقم الترخيص",
    specialization: "التخصص",
    consultation: "الاستشارة",
    manitoba: "مانيتوبا",
    free: "مجاني",
    
    // CTA
    ready_to_start: "هل أنت مستعد لبدء رحلة الهجرة الخاصة بك؟",
    ready_description: "حدد موعد استشارتك المجانية اليوم واتخذ الخطوة الأولى نحو حياتك الجديدة في كندا.",
    
    // CICC Section
    proud_member_of: "عضو فخور في",
    licensed_consultant: "مستشار هجرة مرخص – R407311",
    
    // About Page
    about_title: "45 عامًا من التفاني لنجاح هجرتك",
    about_subtitle: "بناء المستقبل ولم شمل العائلات وتحقيق الأحلام الكندية من خلال استشارات هجرة مهنية وأخلاقية.",
    meet_consultant: "تعرف على المستشار الرئيسي لدينا",
    consultant_bio_1: "مع 45 عامًا من الخبرة المتفانية في استشارات الهجرة، ساعد مستشارنا الرئيسي عددًا لا يحصى من العائلات والمهنيين على تحقيق أحلامهم الكندية. تجلب هذه الثروة من الخبرة فهمًا عميقًا لتطور سياسة الهجرة ورؤى عملية لا يمكن إلا لعقود من الخدمة توفيرها.",
    consultant_bio_2: "بصفتنا مستشار مرخص من CICC (R407311)، نحافظ على أعلى معايير السلوك المهني والممارسة الأخلاقية. يوفر تخصصنا في هجرة مانيتوبا للعملاء معرفة خبيرة ببرنامج ترشيح مانيتوبا الإقليمي والمسارات المحلية للإقامة الدائمة.",
    consultant_bio_3: "نؤمن ببناء علاقات دائمة مع عملائنا، وتقديم إرشاد ودعم شخصي طوال رحلة الهجرة بأكملها. نجاحك هو نجاحنا.",
    experience: "الخبرة",
    principal_consultant: "مستشار الهجرة الرئيسي",
    cicc_professional: "محترف مرخص من CICC",
    
    // Our Story
    our_story: "قصتنا",
    story_1: "تأسست شركة Young Bae لاستشارات الهجرة على إيمان بسيط: يستحق الجميع إرشادًا صادقًا ومهنيًا في طريقهم إلى كندا. بفضل 45 عامًا من الخبرة في هذا المجال، شهدنا تطور سياسة الهجرة الكندية وقمنا بتكييف خبرتنا لخدمة العملاء خلال كل تغيير.",
    story_2: "يمنحنا تخصصنا في هجرة مانيتوبا رؤية فريدة لبرنامج ترشيح مانيتوبا الإقليمي (MPNP) والفرص التي يقدمها للعمال المهرة والخريجين الدوليين والعائلات التي تتطلع إلى بناء حياتهم في هذه المقاطعة المضيافة.",
    story_3: "بصفتنا مستشار مرخص من CICC (R407311)، نلتزم بأعلى معايير السلوك المهني، مما يضمن حصول كل عميل على نصيحة هجرة أخلاقية ودقيقة وشخصية.",
    family_focused: "تركيز على الأسرة",
    dedicated_care: "رعاية مخصصة",
    
    // Values
    our_values: "قيمنا",
    what_we_stand_for: "ما نمثله",
    values_description: "توجه قيمنا كل تفاعل وقرار، مما يضمن حصولك على أفضل خدمة ودعم ممكنين.",
    integrity: "النزاهة",
    integrity_desc: "نحافظ على أعلى المعايير الأخلاقية في جميع استشاراتنا، مما يضمن إرشادًا صادقًا وشفافًا.",
    compassion: "التعاطف",
    compassion_desc: "نفهم الرحلة العاطفية للهجرة ونعامل كل عميل بالتعاطف والرعاية.",
    excellence: "التميز",
    excellence_desc: "نسعى للتميز في كل حالة، مطبقين خبرتنا لتحقيق أفضل النتائج الممكنة.",
    guidance: "الإرشاد",
    guidance_desc: "نقدم إرشادًا واضحًا خطوة بخطوة من خلال عمليات الهجرة المعقدة.",
    
    // Commitment
    our_commitment: "التزامنا تجاهك",
    commitment_description: "نحن ملتزمون بتقديم خدمات استشارية مهنية وأخلاقية وشخصية في مجال الهجرة. بصفتنا مستشار مرخص من CICC، نلتزم بمعايير مهنية صارمة ونتحمل المسؤولية عن النصائح التي نقدمها.",
    schedule_consultation: "حدد موعد استشارة مجانية",
    
    // Services Page
    services_title: "خدمات هجرة شاملة",
    services_subtitle: "من تصاريح الدراسة إلى الإقامة الدائمة، نقدم إرشاد الخبراء من خلال كل خطوة من رحلة الهجرة الكندية الخاصة بك.",
    
    // Service Items
    mpnp: "برنامج ترشيح مانيتوبا الإقليمي (MPNP)",
    mpnp_desc: "إرشاد الخبراء من خلال برنامج ترشيح مانيتوبا الإقليمي، بما في ذلك العمال المهرة والتعليم الدولي وتدفقات المستثمرين التجاريين.",
    mpnp_feature_1: "العامل الماهر في مانيتوبا",
    mpnp_feature_2: "العامل الماهر في الخارج",
    mpnp_feature_3: "تدفق التعليم الدولي",
    mpnp_feature_4: "تدفق المستثمر التجاري",
    
    permanent_residency: "طلبات الإقامة الدائمة",
    pr_desc: "دعم شامل للدخول السريع، ورعاية الفئة العائلية، ومسارات أخرى للإقامة الدائمة الكندية.",
    pr_feature_1: "طلبات الدخول السريع",
    pr_feature_2: "طلبات مرتبطة بـ PNP",
    pr_feature_3: "إعداد المستندات",
    pr_feature_4: "مراقبة الطلب",
    
    work_permits: "تصاريح العمل",
    work_permits_desc: "المساعدة في تصاريح العمل الخاصة بصاحب العمل، وتصاريح العمل المفتوحة، والطلبات المستندة إلى LMIA.",
    work_feature_1: "تصاريح مستندة إلى LMIA",
    work_feature_2: "تصاريح خاصة بصاحب العمل",
    work_feature_3: "تصاريح عمل مفتوحة",
    work_feature_4: "تجديد تصاريح العمل",
    
    study_permits: "تصاريح الدراسة",
    study_permits_desc: "إرشاد للطلاب الدوليين الذين يسعون للدراسة في المؤسسات التعليمية الكندية.",
    study_feature_1: "تصاريح دراسة أولية",
    study_feature_2: "تمديدات تصاريح الدراسة",
    study_feature_3: "تصاريح عمل بعد التخرج",
    study_feature_4: "تخطيط المسار",
    
    family_sponsorship: "رعاية الأسرة",
    family_desc: "المساعدة في لم شمل العائلات من خلال رعاية الزوج، ورعاية الوالدين والأجداد، وطلبات الأطفال المعالين.",
    family_feature_1: "رعاية الزوج",
    family_feature_2: "الوالدين والأجداد",
    family_feature_3: "الأطفال المعالون",
    family_feature_4: "طلبات التأشيرة الفائقة",
    
    general_consultation: "استشارة هجرة عامة",
    general_desc: "تقييم شخصي لخيارات الهجرة الخاصة بك والتخطيط الاستراتيجي لرحلتك الكندية.",
    general_feature_1: "تقييم الأهلية",
    general_feature_2: "استراتيجية الهجرة",
    general_feature_3: "مراجعة المستندات",
    general_feature_4: "إرشاد العملية",
    
    // Free Consultation Banner
    not_sure_service: "لست متأكدًا من الخدمة التي تحتاجها؟",
    not_sure_desc: "احجز استشارة مجانية مع فريقنا ذو الخبرة. سنقيم وضعك ونوصي بأفضل مسار هجرة لك.",
    get_started: "ابدأ الآن",
    
    // Process
    our_process: "عمليتنا",
    how_we_work: "كيف نعمل معك",
    process_step_1: "الاستشارة",
    process_desc_1: "تقييم أولي مجاني لأهداف الهجرة والأهلية الخاصة بك",
    process_step_2: "الاستراتيجية",
    process_desc_2: "تطوير استراتيجية هجرة شخصية",
    process_step_3: "التحضير",
    process_desc_3: "جمع المستندات ومراجعتها وإعداد الطلب",
    process_step_4: "التقديم",
    process_desc_4: "تقديم الطلب والمراقبة المستمرة حتى القرار",
    
    // Contact Page
    contact_title: "ابدأ رحلة الهجرة الخاصة بك اليوم",
    contact_subtitle: "هل أنت مستعد لاتخاذ الخطوة التالية؟ اتصل بنا للحصول على استشارة مجانية ودع خبرتنا التي تمتد لـ 45 عامًا ترشدك.",
    email_us: "راسلنا",
    call_us: "اتصل بنا",
    consultation_label: "الاستشارة",
    free_initial_consultation: "استشارة أولية مجانية",
    free_consultation_available: "استشارة مجانية متاحة",
    manitoba_specialist_note: "متخصص في هجرة مانيتوبا",
    specialist_description: "بفضل الخبرة العميقة في برنامج ترشيح مانيتوبا الإقليمي، يمكننا مساعدتك في التنقل في المتطلبات والفرص المحددة المتاحة في مانيتوبا.",
    
    // Managing Director Profile
    managing_director: "المدير الإداري",
    managing_director_title: "مستشار هجرة مرخص",
    director_profile_desc: "Young Bae هو مستشار هجرة مرخص يتمتع بخبرة تزيد عن 45 عامًا، متخصص في برامج هجرة مانيتوبا. بصفته محترفًا مرخصًا من CICC (R407311)، يقدم خدمات استشارية أخلاقية وموثوقة وشخصية في مجال الهجرة. الاستشارات المجانية متاحة للعملاء الذين يبحثون عن إرشاد مهني.",
    years_of_service: "سنوات الخدمة",

    // Footer
    footer_description: "استشارات هجرة موثوقة مع 45 عامًا من الخبرة. تبدأ رحلتك إلى كندا من هنا.",
    quick_links: "روابط سريعة",
    contact_us: "اتصل بنا",
    specializing_manitoba: "متخصصون في هجرة مانيتوبا • 45 عامًا من الخدمة الموثوقة",
    all_rights_reserved: "جميع الحقوق محفوظة.",
    regulated_by: "مرخص ومنظم من قبل",
    }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Get saved language from localStorage or default to English
    return localStorage.getItem('language') || 'en';
  });

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Update document direction for RTL languages
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = lang;
    }
  };

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  // Set initial direction on mount
  React.useEffect(() => {
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = language;
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}