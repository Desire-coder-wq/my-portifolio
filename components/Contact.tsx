'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-24" style={{ background: '#0a0a0f' }}>
      <div className="container-custom">
        <h2 className="section-title text-white">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-center text-gray-500 mb-16">Have a project? Reach out — I&apos;ll respond within 24 hours.</p>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <div className="card-dark p-6 rounded-2xl">
              <h3 className="text-white font-bold text-xl mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                Contact Info
              </h3>
              <div className="space-y-4">
                {[
                  { icon: FaEnvelope, label: 'asinguradesirecomfort@gmail.com', href: 'mailto:asinguradesirecomfort@gmail.com' },
                  { icon: FaPhone, label: '+256 767 625461', href: 'tel:+256767625461' },
                  { icon: FaMapMarkerAlt, label: 'Mukono, Uganda', href: '#' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl text-gray-300 hover:text-violet-300 hover:bg-violet-500/5 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-violet-500/10 rounded-lg flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                      <Icon className="text-violet-400" size={14} />
                    </div>
                    <span className="text-sm">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-dark p-6 rounded-2xl">
              <h3 className="text-white font-bold text-base mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                Find me online
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Desire-coder-wq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-2 p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-sm"
                >
                  <FaGithub size={16} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rose-desire-asingura-0a1684372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-2 p-3 bg-white/5 rounded-xl text-gray-400 hover:text-violet-300 hover:bg-violet-500/5 transition-colors text-sm"
                >
                  <FaLinkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card-dark p-6 rounded-2xl">
            <h3 className="text-white font-bold text-xl mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 outline-none transition text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 outline-none transition text-sm"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 outline-none transition resize-none text-sm"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center"
              >
                {status === 'loading' ? 'Sending...' : <><FaPaperPlane size={14} /> Send Message</>}
              </button>
              {status === 'success' && (
                <p className="text-emerald-400 text-center text-sm">✓ Message sent! I&apos;ll be in touch soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center text-sm">✗ Failed to send. Please try email directly.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}