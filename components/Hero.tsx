'use client'

import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(139,92,246,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.1) 0%, transparent 50%), #0a0a0f' }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-custom relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 rounded-full text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              Available for work
            </div>

            <div>
              <p className="text-gray-400 text-lg mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                Full‑Stack & Mobile Developer
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05]" style={{ fontFamily: 'var(--font-syne)' }}>
                <span className="typing-name">Asingura Rose Desire</span>
              </h1>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              I build scalable web & mobile solutions — React Native, Next.js, NestJS, PostgreSQL.
              Turning ideas into high‑impact digital products.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Hire Me
              </a>
              <a
                href="/Desirecv.pdf"
                download="Desirecv.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                ↓ Download CV
              </a>
            </div>

            <div className="flex gap-5 pt-2">
              <a href="https://github.com/Desire-coder-wq" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-violet-400 transition-colors">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/rose-desire-asingura-0a1684372" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-violet-400 transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href="mailto:asinguradesirecomfort@gmail.com"
                className="text-gray-500 hover:text-violet-400 transition-colors">
                <FaEnvelope size={22} />
              </a>
              <a href="tel:+256767625461"
                className="text-gray-500 hover:text-violet-400 transition-colors">
                <FaPhone size={22} />
              </a>
            </div>
          </div>

          {/* Right — profile image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 blur-3xl opacity-20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-violet-500/20 scale-[1.15]" />
              <div className="absolute inset-0 rounded-full border border-cyan-500/10 scale-[1.3]" />

              {/* Photo */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image
                  src="/hero.jpeg"
                  alt="Asingura Rose Desire"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#0a0a0f] border border-white/10 rounded-2xl px-4 py-2 shadow-xl">
                <div className="text-xs text-gray-400">Experience</div>
                <div className="text-white font-bold text-sm">2+ Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
