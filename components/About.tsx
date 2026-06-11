'use client'

import { FaCode, FaAward, FaUsers, FaRocket, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              I'm a full‑stack & mobile developer with expertise in <strong className="text-blue-600">JavaScript/TypeScript, React Native, Next.js, NestJS, and PostgreSQL</strong>. 
              I design high‑performance digital ecosystems — from corporate wellness platforms to rental automation systems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Passionate about crafting maintainable code, real‑time features, and seamless UX across all devices.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FaCode className="text-blue-600" size={20} />
                </div>
                <div className="font-semibold">10+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FaAward className="text-blue-600" size={20} />
                </div>
                <div className="font-semibold">4+ Years</div>
                <div className="text-sm text-gray-500">Experience</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FaUsers className="text-blue-600" size={20} />
                </div>
                <div className="font-semibold">15+</div>
                <div className="text-sm text-gray-500">Clients</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FaRocket className="text-blue-600" size={20} />
                </div>
                <div className="font-semibold">100%</div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 md:p-8 rounded-2xl text-white">
            <div className="text-4xl mb-4">"</div>
            <p className="text-lg italic leading-relaxed">
              Building resilient software that drives business growth — from MVP launch to enterprise scaling.
            </p>
            <div className="mt-6 font-semibold">— Rose Desire, Lead Developer</div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="flex items-center gap-2"><FaEnvelope /> asinguradesirecomfort@gmail.com</p>
              <p className="flex items-center gap-2 mt-2"><FaPhone /> +256 767 625461</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}