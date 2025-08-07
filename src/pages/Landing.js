import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hammer, Sparkles, Database, Bot, CheckCircle2, MessageSquare } from 'lucide-react';
import LoadingHammer from '../components/LoadingHammer';
import ChatPreview from '../components/ChatPreview';
import { hapticTick } from '../utils/haptics';
import MiniSpark from '../components/MiniSpark';
import VideoShowcase from '../components/VideoShowcase';

const Landing = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yLayer1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yLayer2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero" id="home" ref={heroRef}>
        {/* Parallax background glows */}
        <motion.div
          aria-hidden
          style={{ y: yLayer1 }}
          className="absolute -top-20 -left-24 w-72 h-72 rounded-full opacity-20"
        >
          <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(255,107,53,0.35), transparent 60%)' }} />
        </motion.div>
        <motion.div
          aria-hidden
          style={{ y: yLayer2 }}
          className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-15"
        >
          <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(255,215,0,0.25), transparent 60%)' }} />
        </motion.div>
        <div className="hero-content" style={{ position: 'relative' }}>
          <MiniSpark />
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center space-x-3 forge rounded-full px-5 py-2 mb-6">
              <Hammer className="w-4 h-4 text-accent-color" />
              <span className="text-xs uppercase tracking-wide text-text-secondary">Data Forge</span>
            </div>

            <h1 className="hero-title mb-4">Forge answers from your data</h1>
            <p className="hero-subtitle mb-10">Talk to your database. Agents do the heavy lifting, you get crisp, forged results.</p>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="mb-10">
              <LoadingHammer size={160} text="Heating the forge…" />
            </motion.div>

            <div className="flex flex-col gap-4 items-center">
              <a href="#demo" className="btn-secondary px-8 py-4 inline-flex items-center space-x-2" onClick={() => hapticTick(10)}>
                <Sparkles className="w-4 h-4" />
                <span>How it works</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process – horizontal scroll cards */}
      <section id="how" className="section bg-secondary-bg">
        <div className="container">
          <motion.h2 className="text-4xl font-bold mb-6 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>From raw to refined</motion.h2>
          <motion.p className="text-text-secondary text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Raw metal → Forging agents → Forged output
          </motion.p>

          <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollSnapType: 'x mandatory', padding: '0 8px', overscrollBehaviorX: 'contain' }}>
            {[{
              icon: Database,
              title: 'Raw metal',
              desc: 'Your database: the ore. Tables, rows, truth.'
            }, {
              icon: Hammer,
              title: 'Forging agents',
              desc: 'Specialized AI shape your ask into safe, optimal SQL.'
            }, {
              icon: CheckCircle2,
              title: 'Forged output',
              desc: 'Readable answers, optional SQL, and visuals.'
            }].map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  className="card" 
                  style={{ scrollSnapAlign: 'center', minWidth: '85%' }}
                  initial={{ opacity: 0, y: 16, rotate: 0.2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: i * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -2 }}
                >
                  <Icon className="w-7 h-7 text-accent-color mb-3" />
                  <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-text-secondary text-base">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo video */}
      <section id="demo" className="section">
        <div className="container">
          <motion.h2 className="text-4xl font-bold mb-6 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Demo video</motion.h2>
          <motion.p className="text-text-secondary text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            A short walkthrough of chatting with your data.
          </motion.p>

          <div className="max-w-xl mx-auto">
            <VideoShowcase title="Data Forge Demo" src="" poster="" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-secondary-bg" id="cta">
        <div className="container">
          <motion.div className="card text-center max-w-xl mx-auto" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mx-auto mb-4 forge">
              <Bot className="w-6 h-6 text-accent-color" />
            </div>
            <h3 className="text-3xl font-bold mb-3">Ready to talk to your data?</h3>
            <p className="text-text-secondary mb-6">Open the forge and craft answers instantly.</p>
            <a href="#demo" className="btn-primary inline-flex items-center space-x-2 px-7 py-4" onClick={() => hapticTick(14)}>
              <MessageSquare className="w-5 h-5" />
              <span>Open demo</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;


