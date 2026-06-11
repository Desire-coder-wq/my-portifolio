'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
              Full‑Stack & Mobile Developer
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Asingura Rose{' '}
              <span className="gradient-text">Desire</span>
            </h1>
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              I build scalable web & mobile solutions — React Native, Next.js, NestJS, PostgreSQL. 
              Turning ideas into high‑impact digital products.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Hire Me
              </a>
            </div>

            <div className="flex gap-6 mt-8">
              <a href="https://github.com/Desire-coder-wq" target="_blank" className="text-gray-600 hover:text-blue-600 transition">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rose-desire-asingura-0a1684372" target="_blank" className="text-gray-600 hover:text-blue-600 transition">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:asinguradesirecomfort@gmail.com" className="text-gray-600 hover:text-blue-600 transition">
                <FaEnvelope size={24} />
              </a>
              <a href="tel:+256767625461" className="text-gray-600 hover:text-blue-600 transition">
                <FaPhone size={24} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">RD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}