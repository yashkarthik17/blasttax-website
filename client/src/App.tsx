import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, FileText, 
  Shield, Star, Target, ClipboardList, 
  Smartphone, Search, Check
} from 'lucide-react';

const CursorDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseenter', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseenter', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 bg-brand-red rounded-full pointer-events-none z-[9999] mix-blend-multiply"
      animate={{
        x: position.x - 6,
        y: position.y - 6,
        opacity: isHovering ? 1 : 0,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
};

const Marquee = () => (
  <div className="bg-text-main text-bg py-2.5 overflow-hidden whitespace-nowrap font-mono text-xs tracking-[1.5px] uppercase">
    <div className="inline-block animate-marquee">
      &nbsp; TAX RESOLUTION &nbsp;•&nbsp; OFFER IN COMPROMISE &nbsp;•&nbsp; INSTALLMENT AGREEMENTS &nbsp;•&nbsp; PENALTY ABATEMENT &nbsp;•&nbsp; INNOCENT SPOUSE RELIEF &nbsp;•&nbsp; IRS AUDIT DEFENSE &nbsp;•&nbsp; WAGE GARNISHMENT RELEASE &nbsp;•&nbsp; TAX LIEN REMOVAL &nbsp;•&nbsp; CSED TRACKING &nbsp;•&nbsp; UNFILED RETURNS &nbsp;•&nbsp;
      TAX RESOLUTION &nbsp;•&nbsp; OFFER IN COMPROMISE &nbsp;•&nbsp; INSTALLMENT AGREEMENTS &nbsp;•&nbsp; PENALTY ABATEMENT &nbsp;•&nbsp; INNOCENT SPOUSE RELIEF &nbsp;•&nbsp; IRS AUDIT DEFENSE &nbsp;•&nbsp; WAGE GARNISHMENT RELEASE &nbsp;•&nbsp; TAX LIEN REMOVAL &nbsp;•&nbsp; CSED TRACKING &nbsp;•&nbsp; UNFILED RETURNS &nbsp;•&nbsp;
    </div>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-[40px] left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center backdrop-blur-xl bg-bg/80 border-b border-border-color">
    <div className="flex items-center gap-2.5">
      <img src="/blast_(4)_1774253286513.png" alt="BlastTax Debt Logo" className="h-10 w-auto" />
    </div>
    <div className="hidden md:flex gap-8 items-center">
      <a href="#services" className="text-text-muted hover:text-text-main text-sm font-medium transition-colors">Services</a>
      <a href="#platform" className="text-text-muted hover:text-text-main text-sm font-medium transition-colors">Platform</a>
      <a href="#how" className="text-text-muted hover:text-text-main text-sm font-medium transition-colors">How it works</a>
      <a href="#proof" className="text-text-muted hover:text-text-main text-sm font-medium transition-colors">Results</a>
      <a href="#" className="bg-brand-red text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_var(--color-brand-red-glow)] transition-all">
        Free Analysis →
      </a>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-40 pb-20 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,var(--color-brand-red-glow)_0%,transparent_70%)] -top-[100px] -right-[100px] animate-float1 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,var(--color-brand-blue-glow)_0%,transparent_70%)] bottom-[50px] -left-[100px] animate-float2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-[760px]">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-red-light border border-brand-red/15 rounded-full font-mono text-xs text-brand-red mb-7"
          >
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-blink" />
            Now accepting new tax resolution cases
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(48px,7vw,88px)] font-extrabold leading-[1] tracking-[-3px]"
          >
            <span className="text-brand-red">Blast</span> away<br/>your tax <span className="text-brand-blue">debt.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-text-muted max-w-[500px] mt-6 leading-[1.75]"
          >
            End-to-end tax resolution that actually works. From IRS notices to full debt elimination — we handle it all while you get your life back.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-hand text-[22px] text-brand-red -rotate-3 inline-block mt-3"
          >
            You deserve a fresh start!
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3.5 mt-9"
          >
            <a href="#" className="px-7 py-3.5 rounded-full text-[15px] font-semibold bg-brand-red text-white shadow-[0_4px_20px_var(--color-brand-red-glow)] hover:shadow-[0_8px_36px_rgba(212,43,43,0.25)] hover:-translate-y-0.5 transition-all flex items-center gap-2">
              Get free tax analysis <ArrowRight size={18} />
            </a>
            <a href="#how" className="px-7 py-3.5 rounded-full text-[15px] font-semibold bg-surface text-text-main border border-border-color shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all">
              See how it works
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-9 border-t border-border-color"
          >
            <div><h3 className="text-[34px] font-extrabold tracking-[-1.5px]">$47<span className="text-brand-red">M+</span></h3><p className="text-[13px] text-text-dim mt-0.5">Tax debt resolved</p></div>
            <div><h3 className="text-[34px] font-extrabold tracking-[-1.5px]">12<span className="text-brand-red">K+</span></h3><p className="text-[13px] text-text-dim mt-0.5">Cases handled</p></div>
            <div><h3 className="text-[34px] font-extrabold tracking-[-1.5px]">94<span className="text-brand-red">%</span></h3><p className="text-[13px] text-text-dim mt-0.5">Resolution success rate</p></div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:block h-[600px]"
        >
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" 
            alt="Tax Professional" 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px] object-cover rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute right-[280px] top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
            <motion.div 
              whileHover={{ rotate: 0, y: -4, scale: 1.02 }}
              className="bg-surface border border-border-color rounded-2xl p-6 w-[280px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] -rotate-3 transition-all cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-red-light flex items-center justify-center text-brand-red mb-3.5">
                <Target size={20} />
              </div>
              <h4 className="text-[15px] font-bold mb-1">Offer in Compromise</h4>
              <p className="text-[13px] text-text-muted leading-[1.6]">Settle your tax debt for pennies on the dollar. We build bulletproof OIC applications.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ rotate: 0, y: -4, scale: 1.02 }}
              className="bg-surface border border-border-color rounded-2xl p-6 w-[280px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] rotate-2 translate-x-5 transition-all cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-blue-light flex items-center justify-center text-brand-blue mb-3.5">
                <ClipboardList size={20} />
              </div>
              <h4 className="text-[15px] font-bold mb-1">Installment Plans</h4>
              <p className="text-[13px] text-text-muted leading-[1.6]">Structured monthly payments the IRS accepts. Tailored to what you can actually afford.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ rotate: 0, y: -4, scale: 1.02 }}
              className="bg-surface border border-border-color rounded-2xl p-6 w-[280px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] -rotate-[1.5deg] -translate-x-2 transition-all cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-red-light flex items-center justify-center text-brand-red mb-3.5">
                <Shield size={20} />
              </div>
              <h4 className="text-[15px] font-bold mb-1">Penalty Abatement</h4>
              <p className="text-[13px] text-text-muted leading-[1.6]">Remove penalties and reduce what you owe. First-time & reasonable cause relief.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => (
  <section id="services" className="py-[100px] px-6 md:px-12 max-w-7xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <p className="font-mono text-xs text-text-dim uppercase tracking-[2px] mb-3">01 / What we do</p>
      <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-2px] max-w-[620px] mb-4 leading-[1.08]">
        Tax resolution for real people with real problems.
      </h2>
      <p className="text-[17px] text-text-muted max-w-[500px] mb-[52px] leading-[1.7]">
        Whether you owe $10K or $1M, BlastTax connects you with licensed tax professionals through our technology-powered platform.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6 items-start">
      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="rounded-2xl overflow-hidden relative aspect-[4/3] bg-bg-warm group"
      >
        <img 
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" 
          alt="Tax consultation" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold">
          Expert Tax Resolution
        </div>
      </motion.div>

      <div className="flex flex-col gap-4">
        {[
          { num: '01', title: 'IRS Back Taxes & Unfiled Returns', desc: "Haven't filed in years? We bring you current with the IRS and negotiate the best resolution for all owed balances." },
          { num: '02', title: 'Liens, Levies & Wage Garnishments', desc: "Stop the IRS from seizing your paycheck, bank accounts, or property. We act fast to release enforcement actions." },
          { num: '03', title: 'Audit Representation & Defense', desc: "Facing an audit? Our enrolled agents and tax attorneys represent you directly before the IRS." },
          { num: '04', title: 'Innocent Spouse Relief', desc: "Shouldn't be on the hook for your spouse's tax mistakes? We file the relief petitions to separate your liability." }
        ].map((item, i) => (
          <motion.div 
            key={item.num}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 * i }}
            className="bg-surface border border-border-color rounded-2xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-border-hover transition-all duration-300"
          >
            <div className="font-mono text-[11px] text-brand-red mb-2.5 tracking-[1px]">{item.num}</div>
            <h3 className="text-lg font-bold mb-1.5">{item.title}</h3>
            <p className="text-sm text-text-muted leading-[1.7]">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const PhotoStrip = () => (
  <section className="pb-[60px] px-6 md:px-12 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80", label: "Document Analysis" },
        { img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80", label: "Expert Partnership" },
        { img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80", label: "Financial Freedom" }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 * i }}
          className="rounded-2xl overflow-hidden aspect-[16/10] relative bg-bg-warm group"
        >
          <img 
            src={item.img} 
            alt={item.label} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
            <span className="text-white text-sm font-semibold">{item.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Platform = () => (
  <section id="platform" className="py-[100px] px-6 md:px-12 max-w-7xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <p className="font-mono text-xs text-text-dim uppercase tracking-[2px] mb-3">02 / The Platform</p>
      <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-2px] max-w-[620px] mb-4 leading-[1.08]">
        Technology meets tax expertise.
      </h2>
      <p className="text-[17px] text-text-muted max-w-[500px] mb-[52px] leading-[1.7]">
        Our proprietary platform connects every piece — from initial analysis through IRS communication to final resolution.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="md:col-span-7 bg-surface border border-border-color rounded-2xl p-9 relative overflow-hidden min-h-[340px] hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all group"
      >
        <span className="font-mono text-[11px] px-3 py-1 rounded-full text-brand-red bg-brand-red-light inline-block mb-4">Mobile App</span>
        <h3 className="text-[21px] font-bold tracking-[-0.8px] mb-2 relative z-10">Your case, in your pocket</h3>
        <p className="text-sm text-text-muted leading-[1.7] max-w-[380px] relative z-10">Upload documents, track your case status, message your tax pro, and make payments — all from the BlastTax mobile app.</p>
        
        <div className="absolute bottom-5 left-9 right-9 bg-[#1a1a1a] rounded-xl p-5 font-mono text-xs text-[#999] leading-loose">
          <div><span className="text-red-500">blast</span> → case status #BT-20260</div>
          <div><span className="text-green-400">✓</span> Investigation phase complete</div>
          <div><span className="text-green-400">✓</span> OIC application submitted to IRS</div>
          <div><span className="text-red-500">blast</span> → estimated resolution</div>
          <div><span className="text-green-400">→</span> $84,200 → $12,500 (85% reduction)</div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="md:col-span-5 bg-surface border border-border-color rounded-2xl p-9 relative overflow-hidden min-h-[340px] hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all group"
      >
        <span className="font-mono text-[11px] px-3 py-1 rounded-full text-brand-blue bg-brand-blue-light inline-block mb-4">Salesforce CRM</span>
        <h3 className="text-[21px] font-bold tracking-[-0.8px] mb-2 relative z-10">Tax pro command center</h3>
        <p className="text-sm text-text-muted leading-[1.7] max-w-[380px] relative z-10">Your professional manages every detail through our Salesforce integration — IRS letters, transcripts, CSED dates, and filings.</p>
        
        <div className="absolute bottom-0 left-0 right-0 h-[120px] flex items-end gap-1 px-9 pb-5">
          {[25,40,30,55,45,70,85,100,90,50].map((h, i) => (
            <div 
              key={i} 
              className={`flex-1 rounded-t-sm transition-all duration-300 ${i%2===0 ? 'bg-brand-blue' : 'bg-brand-red'} ${i>=5 && i<=8 ? 'opacity-50 group-hover:opacity-85' : 'opacity-[0.18] group-hover:opacity-35'}`} 
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="md:col-span-4 bg-surface border border-border-color rounded-2xl p-9 relative overflow-hidden min-h-[280px] hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all group"
      >
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80" alt="AI Abstract" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <span className="font-mono text-[11px] px-3 py-1 rounded-full text-brand-red bg-brand-red-light inline-block mb-4 relative z-10">Smart Analysis</span>
        <h3 className="text-[21px] font-bold tracking-[-0.8px] mb-2 relative z-10">AI-powered tax analysis</h3>
        <p className="text-sm text-text-muted leading-[1.7] max-w-[380px] relative z-10">Our system instantly identifies your best resolution path — OIC, installment, or penalty abatement.</p>
        <div className="text-[100px] font-black tracking-[-5px] text-brand-red opacity-[0.06] absolute -bottom-2.5 right-5 leading-none">AI</div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="md:col-span-8 bg-surface border border-border-color rounded-2xl p-9 relative overflow-hidden min-h-[280px] hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all group"
      >
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ maskImage: 'linear-gradient(to right, transparent, black)' }}>
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Data Sync" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <span className="font-mono text-[11px] px-3 py-1 rounded-full text-brand-blue bg-brand-blue-light inline-block mb-4 relative z-10">Real-time Sync</span>
        <h3 className="text-[21px] font-bold tracking-[-0.8px] mb-2 relative z-10">Everything connected, nothing lost</h3>
        <p className="text-sm text-text-muted leading-[1.7] max-w-[380px] relative z-10">Bidirectional data sync between your app, your tax pro's CRM, and our secure database. Every document, message, and update flows instantly.</p>
        <div className="text-[100px] font-black tracking-[-5px] text-brand-blue opacity-[0.06] absolute -bottom-2.5 right-5 leading-none">SYNC</div>
      </motion.div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how" className="py-[100px] px-6 md:px-12 max-w-7xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <p className="font-mono text-xs text-text-dim uppercase tracking-[2px] mb-3">03 / How it works</p>
      <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-2px] max-w-[620px] mb-4 leading-[1.08]">
        Three steps to tax freedom.
      </h2>
      <p className="text-[17px] text-text-muted max-w-[500px] mb-[52px] leading-[1.7]">
        Most clients see results within 90 days. Some resolve in as little as 30.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 [counter-reset:step]">
      {[
        { icon: <Smartphone size={24} />, title: 'Free Tax Analysis', desc: 'Download the app or call us. Answer a few questions about your tax situation, upload IRS notices, and get an instant resolution estimate — 100% free.', img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=400&q=80" },
        { icon: <Search size={24} />, title: 'Investigation & Strategy', desc: 'Your assigned tax professional pulls IRS transcripts, analyzes your financials, calculates CSED dates, and builds a custom resolution strategy.', img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80" },
        { icon: <Check size={24} />, title: 'Resolution & Relief', desc: "We submit your case to the IRS, handle all correspondence, negotiate on your behalf, and don't stop until your tax debt is resolved.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80" }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 * i }}
          className="bg-surface border border-border-color rounded-2xl p-10 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.07)] transition-all group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-bl-full overflow-hidden">
            <img src={item.img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>

          <div className="absolute -top-3.5 right-4 font-mono text-[80px] font-bold text-brand-red opacity-[0.06] leading-none [counter-increment:step] content-[counter(step,decimal-leading-zero)]" />
          
          <div className="w-12 h-12 rounded-xl bg-brand-red-light flex items-center justify-center text-brand-red mb-5 transition-all duration-300 group-hover:bg-brand-red group-hover:text-white group-hover:scale-110">
            {item.icon}
          </div>
          <h3 className="text-lg font-bold mb-2 relative z-10">{item.title}</h3>
          <p className="text-sm text-text-muted leading-[1.7] relative z-10">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const AppPreview = () => (
  <section className="py-[100px] px-6 md:px-12 max-w-7xl mx-auto text-center overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <p className="font-mono text-xs text-text-dim uppercase tracking-[2px] mb-3">04 / The App</p>
      <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-2px] max-w-[620px] mx-auto mb-4 leading-[1.08]">
        Your tax resolution<br/>headquarters.
      </h2>
      <p className="text-[17px] text-text-muted max-w-[500px] mx-auto mb-[52px] leading-[1.7]">
        Track your case, upload documents, message your tax pro, and see your debt shrink — all in real time.
      </p>
    </motion.div>

    <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-12 relative">
      <motion.div 
        initial={{ opacity: 0, y: 32, rotate: -5 }}
        whileInView={{ opacity: 1, y: 20, rotate: -5 }}
        whileHover={{ y: 14, rotate: -2 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="w-[280px] h-[560px] bg-surface border border-border-color rounded-[36px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative z-10"
      >
        <div className="w-full h-full bg-surface-2 rounded-[26px] overflow-hidden flex flex-col">
          <div className="w-[100px] h-6 bg-bg rounded-b-[14px] mx-auto" />
          <div className="p-5 flex-1 relative">
            <h4 className="text-base font-bold mb-3 text-left">Documents</h4>
            <div className="bg-bg-warm rounded-xl h-[70px] mt-3 flex items-center px-3.5 gap-3 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1618044733300-9472054094ee?w=100&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="" referrerPolicy="no-referrer" />
              <div className="w-8 h-8 rounded-full bg-brand-red-light flex-shrink-0 relative z-10 flex items-center justify-center"><FileText size={14} className="text-brand-red"/></div>
              <div className="flex-1 relative z-10"><div className="h-2 bg-border-color rounded-full mb-1.5" /><div className="h-2 bg-border-color rounded-full w-[55%]" /></div>
            </div>
            <div className="bg-bg-warm rounded-xl h-[70px] mt-3 flex items-center px-3.5 gap-3 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1554224154-26032ffc0d04?w=100&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="" referrerPolicy="no-referrer" />
              <div className="w-8 h-8 rounded-full bg-brand-blue-light flex-shrink-0 relative z-10 flex items-center justify-center"><FileText size={14} className="text-brand-blue"/></div>
              <div className="flex-1 relative z-10"><div className="h-2 bg-border-color rounded-full mb-1.5" /><div className="h-2 bg-border-color rounded-full w-[65%]" /></div>
            </div>
            <div className="bg-bg-warm rounded-xl h-[70px] mt-3 flex items-center px-3.5 gap-3 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=100&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="" referrerPolicy="no-referrer" />
              <div className="w-8 h-8 rounded-full bg-brand-red-light flex-shrink-0 relative z-10 flex items-center justify-center"><FileText size={14} className="text-brand-red"/></div>
              <div className="flex-1 relative z-10"><div className="h-2 bg-border-color rounded-full mb-1.5" /><div className="h-2 bg-border-color rounded-full w-[45%]" /></div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1.08 }}
        whileHover={{ scale: 1.1, y: -4 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-[280px] h-[560px] bg-surface border border-border-color rounded-[36px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative z-20"
      >
        <div className="w-full h-full bg-surface-2 rounded-[26px] overflow-hidden flex flex-col">
          <div className="w-[100px] h-6 bg-bg rounded-b-[14px] mx-auto" />
          <div className="p-5 flex-1 text-left">
            <h4 className="text-base font-bold mb-3">Case Overview</h4>
            <div className="text-[11px] text-text-dim">Total tax debt</div>
            <div className="text-[32px] font-extrabold text-brand-red tracking-[-1.5px] my-2">$84,200</div>
            <div className="mt-1 flex flex-wrap gap-1">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-brand-red-light text-brand-red">OIC Filed</span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-brand-blue-light text-brand-blue">Investigation</span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-green-400/12 text-green-600">Active</span>
            </div>
            <div className="mt-5">
              <div className="text-[11px] text-text-dim mb-2">Projected Resolution</div>
              <div className="bg-brand-red-light rounded-xl p-4 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=300&q=80" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" alt="" referrerPolicy="no-referrer" />
                <div className="text-[24px] font-extrabold text-brand-red tracking-[-1px] relative z-10">$12,500</div>
                <div className="text-[11px] text-text-dim relative z-10">85% debt reduction</div>
              </div>
            </div>
            <div className="bg-bg-warm rounded-xl h-[60px] mt-3.5 flex items-center px-3.5 gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80" alt="Tax Pro" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1"><div className="h-2 bg-border-color rounded-full mb-1.5" /><div className="h-2 bg-border-color rounded-full w-[45%]" /></div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 32, rotate: 5 }}
        whileInView={{ opacity: 1, y: 20, rotate: 5 }}
        whileHover={{ y: 14, rotate: 2 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-[280px] h-[560px] bg-surface border border-border-color rounded-[36px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative z-10"
      >
        <div className="w-full h-full bg-surface-2 rounded-[26px] overflow-hidden flex flex-col">
          <div className="w-[100px] h-6 bg-bg rounded-b-[14px] mx-auto" />
          <div className="p-5 flex-1 text-left">
            <h4 className="text-base font-bold mb-3">Messages</h4>
            <div className="bg-brand-blue-light rounded-[12px_12px_12px_4px] p-3 text-xs text-brand-blue mb-2 max-w-[85%]">
              Great news — the IRS accepted your OIC application for review.
            </div>
            <div className="bg-bg-warm rounded-[12px_12px_4px_12px] p-3 text-xs text-text-muted mb-2 ml-auto max-w-[75%] text-right">
              That's amazing! What happens next?
            </div>
            <div className="bg-brand-blue-light rounded-[12px_12px_12px_4px] p-3 text-xs text-brand-blue max-w-[85%]">
              They'll assign an examiner. I'll handle everything — expect an update in 2–3 weeks.
            </div>
            <div className="bg-bg-warm rounded-xl h-10 mt-4 flex items-center px-3">
              <div className="h-2 bg-border-color rounded-full w-full" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="proof" className="bg-text-main text-bg py-20 px-6 md:px-12 relative overflow-hidden">
    <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse,rgba(212,43,43,0.15)_0%,transparent_60%)] pointer-events-none" />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <p className="font-mono text-xs text-bg/30 uppercase tracking-[2px] mb-3">05 / Results that speak</p>
        <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-2px] max-w-[500px] mx-auto text-bg">
          Real people. Real resolutions.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            quote: "I owed the IRS $126,000 and was terrified. BlastTax got it resolved for $8,200 through an Offer in Compromise. I literally cried when I got the letter.", 
            author: "Maria G., Texas",
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80"
          },
          { 
            quote: "They stopped a wage garnishment within 48 hours of me signing up. My tax pro was in constant communication through the app. Best money I ever spent.", 
            author: "David R., California",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
          },
          { 
            quote: "10 years of unfiled returns. I thought I'd end up in prison. BlastTax filed everything, negotiated my penalties down 90%, and set up a payment plan I can actually afford.", 
            author: "James T., Florida",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80"
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 * i }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
            </div>
            <p className="text-[15px] leading-[1.7] text-bg/85 mb-5 italic">"{item.quote}"</p>
            <div className="flex items-center gap-3">
              <img src={item.img} alt={item.author} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              <span className="text-[13px] font-semibold text-bg/60">— {item.author}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-12 md:gap-20 mt-14 relative z-10"
      >
        <div className="text-center"><h3 className="text-[42px] font-extrabold tracking-[-2px] text-bg">$47<span className="text-brand-red">M</span></h3><p className="text-[13px] text-bg/40 mt-1">Total debt resolved</p></div>
        <div className="text-center"><h3 className="text-[42px] font-extrabold tracking-[-2px] text-bg">85<span className="text-brand-red">%</span></h3><p className="text-[13px] text-bg/40 mt-1">Avg. debt reduction</p></div>
        <div className="text-center"><h3 className="text-[42px] font-extrabold tracking-[-2px] text-bg">4.9<span className="text-brand-red">/5</span></h3><p className="text-[13px] text-bg/40 mt-1">Client satisfaction</p></div>
        <div className="text-center"><h3 className="text-[42px] font-extrabold tracking-[-2px] text-bg">30<span className="text-brand-red">d</span></h3><p className="text-[13px] text-bg/40 mt-1">Avg. first result</p></div>
      </motion.div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-[120px] px-6 md:px-12 text-center relative overflow-hidden">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,var(--color-brand-red-glow)_0%,transparent_60%)] pointer-events-none" />
    
    <motion.div 
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="relative z-10"
    >
      <span className="font-hand text-2xl text-brand-blue block mb-7 -rotate-2">You deserve a fresh start →</span>
      <h2 className="text-[clamp(36px,5vw,60px)] font-extrabold tracking-[-2.5px] mb-4 leading-[1.05]">
        Stop stressing.<br/>Start <span className="text-brand-red">blasting.</span>
      </h2>
      <p className="text-[17px] text-text-muted max-w-[440px] mx-auto mb-9 leading-[1.7]">
        Get your free tax analysis today. No credit card. No obligation. Just answers about what the IRS can do — and what we can do about it.
      </p>
      <a href="#" className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-[17px] font-semibold bg-brand-red text-white shadow-[0_4px_20px_var(--color-brand-red-glow)] hover:shadow-[0_8px_36px_rgba(212,43,43,0.25)] hover:-translate-y-0.5 transition-all">
        Get my free analysis <ArrowRight size={20} />
      </a>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 md:px-12 border-t border-border-color flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left">
    <div className="text-[13px] text-text-dim font-mono">© 2026 BlastTax Debt Inc. All rights reserved.</div>
    <div className="flex gap-6">
      <a href="#" className="text-[13px] text-text-muted hover:text-text-main transition-colors">Privacy</a>
      <a href="#" className="text-[13px] text-text-muted hover:text-text-main transition-colors">Terms</a>
      <a href="#" className="text-[13px] text-text-muted hover:text-text-main transition-colors">Disclaimer</a>
      <a href="#" className="text-[13px] text-text-muted hover:text-text-main transition-colors">Contact</a>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-brand-red-light">
      <CursorDot />
      <Marquee />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PhotoStrip />
        <Platform />
        <HowItWorks />
        <AppPreview />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
