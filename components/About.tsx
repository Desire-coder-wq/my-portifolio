'use client'

import { FaCode, FaAward, FaRocket, FaEnvelope, FaPhone } from 'react-icons/fa'

const stats = [
  { icon: FaCode, value: '5', label: 'Projects' },
  { icon: FaAward, value: '4+', label: 'Years Exp' },
  { icon: FaRocket, value: '100%', label: 'Satisfaction' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative" style={{ background: '#0a0a0f' }}>
      <div className="container-custom">
        <h2 className="section-title text-white">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          Developer, builder, and problem solver based in Mukono, Uganda.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              I&apos;m a full‑stack & mobile developer with expertise in{' '}
              <span className="text-violet-400 font-semibold">
                JavaScript/TypeScript, React Native, Next.js, NestJS, and PostgreSQL
              </span>.
              I design high‑performance digital ecosystems — from corporate wellness platforms to rental automation systems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Passionate about crafting maintainable code, real‑time features, and seamless UX across all devices. I&apos;ve shipped production apps used by real people — including a wellness platform, property management tool, and a school alert system built with Kotlin for Android.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="card-dark p-4 text-center hover:border-violet-500/30 transition-colors">
                  <div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-violet-400" size={18} />
                  </div>
                  <div className="font-bold text-white text-lg">{value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — quote card */}
          <div
            className="relative rounded-2xl p-8 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(6,182,212,0.1))', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="absolute top-4 right-6 text-7xl text-white/5 font-serif select-none">&quot;</div>
            <div className="text-5xl text-violet-400 mb-4 font-serif leading-none">&quot;</div>
            <p className="text-gray-200 text-lg italic leading-relaxed">
              Building resilient software that drives business growth — from MVP launch to enterprise scaling.
            </p>
            <div className="mt-6 text-violet-300 font-semibold">— Rose Desire, Lead Developer</div>

            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <a
                href="mailto:asinguradesirecomfort@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-violet-300 transition-colors text-sm"
              >
                <FaEnvelope className="text-violet-400" size={14} />
                asinguradesirecomfort@gmail.com
              </a>
              <a
                href="tel:+256767625461"
                className="flex items-center gap-3 text-gray-400 hover:text-violet-300 transition-colors text-sm"
              >
                <FaPhone className="text-violet-400" size={14} />
                +256 767 625461
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}