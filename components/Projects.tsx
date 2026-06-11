'use client'

import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'

type MediaType = 'image' | 'video' | 'youtube' | 'placeholder'

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
  mediaType: MediaType
  mediaSrc?: string       // For images: /projects/xxx.png, For videos: Cloudinary URL, For YouTube: embed URL
  mediaPlaceholder: string
  badge?: string
}

const projects: Project[] = [
  {
    title: 'BeyondSports UG',
    description:
      'Corporate wellness platform with GPS activity tracking, fitness challenges, and leaderboards for teams. Includes both a web dashboard and a React Native mobile app used in production.',
    tech: ['React Native', 'NestJS', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/Desire-coder-wq/beyondsports',
    demo: 'https://beyondsports.fitness/',
    mediaType: 'placeholder',  // 👈 CHANGE THIS when you have video link
    mediaSrc: undefined,       // 👈 PASTE Cloudinary or YouTube embed URL here
    mediaPlaceholder: 'BeyondSports',
    badge: 'Mobile + Web',
  },
  {
    title: 'RSK Technologies',
    description:
      'Company website for RSK Technologies Group — a software solutions company. Live in production at rsktech.net, serving real clients.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Desire-coder-wq/rsk-tech',
    demo: 'https://rsktech.net/',
    mediaType: 'image',
    mediaSrc: '/projects/rsk.png',
    mediaPlaceholder: 'RSK Tech',
    badge: 'Live Website',
  },
  {
    title: 'Mayondo Wood & Furniture',
    description:
      'Inventory and sales management system with real-time stock tracking, analytics dashboard, and order management for a furniture business.',
    tech: ['Vue.js', 'Node.js', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/Desire-coder-wq/MW-F',
    demo: '#',
    mediaType: 'image',
    mediaSrc: '/projects/mayondo.png',
    mediaPlaceholder: 'Mayondo',
    badge: 'Web App',
  },
  {
    title: 'CartWise',
    description:
      'Smart grocery buddy web app that helps people manage their shopping lists, track items as they buy, and monitor money spent. Built for everyday shoppers who want to stay on budget.',
    tech: ['Next.js', 'NestJS', 'Prisma', 'Tailwind'],
    github: 'https://github.com/Desire-coder-wq/cartwise',
    demo: '#',
    mediaType: 'youtube',  // ✅ YouTube video
    mediaSrc: 'https://www.youtube.com/embed/7u16R0wI0Qc',  // ✅ Your Cartwise YouTube link
    mediaPlaceholder: 'CartWise',
    badge: 'Web App',
  },
  {
    title: 'Rental Management App',
    description:
      'Full property management system with Flutterwave payments, automated SMS invoices, tenant tracking, and landlord dashboard. Hosted on AWS Ubuntu servers with CI/CD pipeline.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Flutterwave', 'AWS'],
    github: 'https://github.com/Desire-coder-wq/rental-app',
    demo: '#',
    mediaType: 'placeholder',  // 👈 CHANGE THIS when you have video link
    mediaSrc: undefined,       // 👈 PASTE Cloudinary or YouTube embed URL here
    mediaPlaceholder: 'Rental App',
    badge: 'Mobile App',
  },
  {
    title: 'AgriTech Platform',
    description:
      'Smart agriculture logistics platform connecting farmers to markets with real-time crop analytics, supply chain tracking, and direct buyer connections for Ugandan farmers.',
    tech: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/Desire-coder-wq/agritech',
    demo: '#',
    mediaType: 'placeholder',  // 👈 CHANGE THIS when you have video link
    mediaSrc: undefined,       // 👈 PASTE Cloudinary or YouTube embed URL here
    mediaPlaceholder: 'AgriTech',
    badge: 'Web App',
  },
  {
    title: 'College Alert',
    description:
      'Real-time push notification system for educational institutions built in Kotlin for Android using Android Studio. Students get instant alerts for announcements, schedules, and emergencies.',
    tech: ['Kotlin', 'Android Studio', 'NestJS', 'WebSockets', 'Firebase'],
    github: 'https://github.com/Desire-coder-wq/college-alert',
    demo: '#',
    mediaType: 'video',  // ✅ Cloudinary video
    mediaSrc: 'https://res.cloudinary.com/drml9utkh/video/upload/college_Alert_eurvya.mp4',  // ✅ Your College Alert Cloudinary URL
    mediaPlaceholder: 'College Alert',
    badge: 'Android App',
  },
]

const badgeColors: Record<string, string> = {
  'Mobile + Web': 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  'Mobile App': 'text-pink-400 bg-pink-500/10 border-pink-500/20',
  'Android App': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  'Web App': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  'Live Website': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
}

function MediaSlot({ project }: { project: Project }) {
  const [playing, setPlaying] = useState(false)
  const hasSrc = !!project.mediaSrc

  // Gradient fallback colors per project
  const gradients: Record<string, string> = {
    CartWise: 'from-violet-600 to-purple-800',
    AgriTech: 'from-emerald-600 to-teal-800',
    BeyondSports: 'from-cyan-600 to-blue-800',
    Rental: 'from-orange-600 to-red-800',
    College: 'from-pink-600 to-rose-800',
    Mayondo: 'from-amber-600 to-yellow-800',
    RSK: 'from-indigo-600 to-violet-800',
  }
  const g = Object.entries(gradients).find(([k]) =>
    project.mediaPlaceholder.toLowerCase().includes(k.toLowerCase())
  )?.[1] ?? 'from-violet-600 to-cyan-800'

  // YouTube video player
  if (project.mediaType === 'youtube' && hasSrc) {
    return (
      <div className="relative h-52 bg-black overflow-hidden">
        <iframe
          src={project.mediaSrc}
          title={project.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  // Regular video player (Cloudinary or local)
  if (project.mediaType === 'video' && hasSrc) {
    return (
      <div className="relative h-52 bg-black overflow-hidden group">
        {!playing ? (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${g} opacity-50`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setPlaying(true)}
                className="w-14 h-14 rounded-full bg-white/20 border border-white/30 flex items-center justify-center hover:bg-white/30 transition backdrop-blur-sm"
              >
                <FaPlay className="text-white ml-1" size={18} />
              </button>
            </div>
            <div className="absolute top-3 left-3 text-white text-sm font-semibold opacity-70">
              {project.mediaPlaceholder}
            </div>
            <div className="absolute bottom-3 right-3 text-white/50 text-xs">Click to play demo</div>
          </>
        ) : (
          <video
            src={project.mediaSrc}
            autoPlay
            controls
            className="w-full h-full object-cover"
          />
        )}
      </div>
    )
  }

  if (project.mediaType === 'image' && hasSrc) {
    return (
      <div className="relative h-52 overflow-hidden group">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.mediaSrc!}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback to gradient if image not found
            const parent = e.currentTarget.parentElement
            if (parent) {
              parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${g} flex items-center justify-center"><span class="text-white font-semibold text-lg">${project.mediaPlaceholder}</span></div>`
            }
          }}
        />
      </div>
    )
  }

  // Placeholder — no media yet
  return (
    <div className={`h-52 bg-gradient-to-br ${g} flex flex-col items-center justify-center gap-3 relative overflow-hidden`}>
      <span className="text-white font-semibold text-lg opacity-90">{project.mediaPlaceholder}</span>
      <span className="text-white/40 text-xs">Add image or video in /public/projects/</span>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: 'linear-gradient(to bottom, #0d0d16, #0a0a0f)' }}>
      <div className="container-custom">
        <h2 className="section-title text-white">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          Real‑world full‑stack & mobile apps that solve business challenges — from MVP to production
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-dark overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              {/* Media */}
              <MediaSlot project={project} />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-bold text-lg leading-tight" style={{ fontFamily: 'var(--font-syne)' }}>
                    {project.title}
                  </h3>
                  {project.badge && (
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border whitespace-nowrap ${badgeColors[project.badge] ?? 'text-gray-400 bg-white/5 border-white/10'}`}>
                      {project.badge}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-violet-400 text-sm transition-colors"
                  >
                    <FaGithub size={14} /> Code
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}