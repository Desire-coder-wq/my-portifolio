'use client'

import { FaAward } from 'react-icons/fa'

const certificates = [
  {
    title: 'Apprenticeship Program',
    issuer: 'Refactory',
    src: '/certificates/apprenticiship.png',
  },
  {
    title: 'Certificate in Software Engineering',
    issuer: 'Refactory',
    src: '/certificates/software engineering.jpeg',
  },
  {
    title: 'Soft Skills Training',
    issuer: 'BrighterMonday Uganda',
    src: '/certificates/softskills.jpeg',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="relative overflow-hidden py-24" style={{ background: 'linear-gradient(to bottom, #0d0d16, #0a0a0f)' }}>
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-200">
            <FaAward /> Training & Certifications
          </div>
          <h2 className="section-title text-white">
            My <span className="gradient-text">Certificates</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.src}
              className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-black/20 backdrop-blur"
            >
              <div className="mb-4">
                <div>
                  <h3 className="text-lg font-bold leading-tight text-white" style={{ fontFamily: 'var(--font-syne)' }}>
                    {certificate.title}
                  </h3>
                  <p className="text-sm text-gray-400">{certificate.issuer}</p>
                </div>
              </div>

              <div className="flex flex-1 items-center rounded-[1.4rem] border border-white/10 bg-white p-2 shadow-2xl shadow-black/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={certificate.src}
                  alt={`${certificate.title} certificate`}
                  className="mx-auto h-96 w-full rounded-xl object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
