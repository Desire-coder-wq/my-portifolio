'use client'

import { useState } from 'react'
import type { IconType } from 'react-icons'
import {
  FaAws,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaMoneyBillWave,
  FaPlay,
  FaServer,
} from 'react-icons/fa'
import {
  SiAndroidstudio,
  SiFirebase,
  SiKotlin,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'

type MediaType = 'image' | 'video' | 'youtube' | 'placeholder'
type ProjectCategory = 'production' | 'personal'
type ProjectLayout = 'featured' | 'standard'
type ScreenKind = 'mobile' | 'web'

interface ProjectScreen {
  src: string
  label: string
  kind: ScreenKind
}

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
  mediaType: MediaType
  mediaSrc?: string
  mediaPlaceholder: string
  badge?: string
  category: ProjectCategory
  layout?: ProjectLayout
  impact?: string
  imageFit?: 'cover' | 'contain'
  imageTone?: string
  screens?: ProjectScreen[]
}

const projects: Project[] = [
  {
    title: 'BeyondSports UG',
    description:
      'Corporate wellness platform with GPS activity tracking, fitness challenges, and leaderboards for teams. Includes both a web dashboard and a React Native mobile app used in production.',
    tech: ['React Native', 'NestJS', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/Desire-coder-wq/beyondsports',
    demo: 'https://beyondsports.fitness/',
    mediaType: 'image',
    mediaSrc: '/projects/beyondsports.jpeg',
    mediaPlaceholder: 'BeyondSports',
    badge: 'Mobile + Web',
    category: 'production',
    layout: 'featured',
    impact: 'Production fitness platform for corporate teams',
    imageFit: 'contain',
    imageTone: 'from-red-500/20 via-cyan-500/10 to-violet-500/20',
    screens: [
      { src: '/projects/beyondsports.jpeg', label: 'Mobile welcome screen', kind: 'mobile' },
      { src: '/projects/beyondsports4.png', label: 'Web landing page', kind: 'web' },
      { src: '/projects/beyondsports3.png', label: 'How it works section', kind: 'web' },
      { src: '/projects/beyondsports2.png', label: 'Download section', kind: 'web' },
    ],
  },
  {
    title: 'Rental Management App',
    description:
      'Full property management system with Flutterwave payments, automated SMS invoices, tenant tracking, and landlord dashboard. Hosted on AWS Ubuntu servers with CI/CD pipeline.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Flutterwave', 'AWS'],
    github: 'https://github.com/Desire-coder-wq/rental-app',
    demo: '#',
    mediaType: 'image',
    mediaSrc: '/projects/rental-app.jpeg',
    mediaPlaceholder: 'Rental App',
    badge: 'Mobile App',
    category: 'production',
    impact: 'Property management app built for real landlords and tenants',
    imageFit: 'contain',
    imageTone: 'from-blue-500/20 via-amber-500/10 to-cyan-500/20',
    screens: [
      { src: '/projects/rental-app.jpeg', label: 'Welcome screen', kind: 'mobile' },
    ],
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
    category: 'production',
    impact: 'Live company website serving real business clients',
    imageFit: 'cover',
    imageTone: 'from-indigo-500/20 via-white/5 to-violet-500/20',
    screens: [
      { src: '/projects/rsk.png', label: 'Live website preview', kind: 'web' },
    ],
  },
  {
    title: 'CartWise',
    description:
      'Smart grocery buddy web app that helps people manage their shopping lists, track items as they buy, and monitor money spent. Built for everyday shoppers who want to stay on budget.',
    tech: ['Next.js', 'NestJS', 'Prisma', 'Tailwind'],
    github: 'https://github.com/Desire-coder-wq/cartwise',
    demo: 'https://cartwise-frontend.onrender.com/',
    mediaType: 'youtube',
    mediaSrc: 'https://www.youtube.com/embed/7u16R0wI0Qc',
    mediaPlaceholder: 'CartWise',
    badge: 'Live Demo',
    category: 'personal',
  },
  {
    title: 'Mayondo Wood & Furniture',
    description:
      'Inventory and sales management system with real-time stock tracking, analytics dashboard, and order management for a furniture business.',
    tech: ['Vue.js', 'Node.js', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/Desire-coder-wq/MW-F',
    demo: '#',
    mediaType: 'placeholder',
    mediaSrc: undefined,
    mediaPlaceholder: 'Mayondo',
    badge: 'Web App',
    category: 'personal',
  },
  {
    title: 'AgriTech Platform',
    description:
      'Smart agriculture logistics platform connecting farmers to markets with real-time crop analytics, supply chain tracking, and direct buyer connections for Ugandan farmers.',
    tech: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/Desire-coder-wq/agritech',
    demo: '#',
    mediaType: 'placeholder',
    mediaSrc: undefined,
    mediaPlaceholder: 'AgriTech',
    badge: 'Concept Build',
    category: 'personal',
  },
  {
    title: 'College Alert',
    description:
      'Real-time push notification system for educational institutions built in Kotlin for Android using Android Studio. Students get instant alerts for announcements, schedules, and emergencies.',
    tech: ['Kotlin', 'Android Studio', 'NestJS', 'WebSockets', 'Firebase'],
    github: 'https://github.com/Desire-coder-wq/college-alert',
    demo: '#',
    mediaType: 'video',
    mediaSrc: 'https://res.cloudinary.com/drml9utkh/video/upload/college_Alert_eurvya.mp4',
    mediaPlaceholder: 'College Alert',
    badge: 'Android App',
    category: 'personal',
  },
]

const badgeColors: Record<string, string> = {
  'Mobile + Web': 'text-violet-200 bg-violet-500/15 border-violet-400/30',
  'Mobile App': 'text-pink-200 bg-pink-500/15 border-pink-400/30',
  'Android App': 'text-emerald-200 bg-emerald-500/15 border-emerald-400/30',
  'Web App': 'text-cyan-200 bg-cyan-500/15 border-cyan-400/30',
  'Live Website': 'text-yellow-200 bg-yellow-500/15 border-yellow-400/30',
  'Live Demo': 'text-cyan-200 bg-cyan-500/15 border-cyan-400/30',
  'Concept Build': 'text-emerald-200 bg-emerald-500/15 border-emerald-400/30',
}

const techIcons: Record<string, { icon: IconType; color: string }> = {
  'React Native': { icon: SiReact, color: 'text-cyan-300' },
  React: { icon: SiReact, color: 'text-cyan-300' },
  'Next.js': { icon: SiNextdotjs, color: 'text-white' },
  'Node.js': { icon: SiNodedotjs, color: 'text-emerald-300' },
  NestJS: { icon: SiNestjs, color: 'text-red-300' },
  Prisma: { icon: SiPrisma, color: 'text-slate-200' },
  PostgreSQL: { icon: SiPostgresql, color: 'text-sky-300' },
  Flutterwave: { icon: FaMoneyBillWave, color: 'text-yellow-300' },
  AWS: { icon: FaAws, color: 'text-orange-300' },
  TypeScript: { icon: SiTypescript, color: 'text-blue-300' },
  'Tailwind CSS': { icon: SiTailwindcss, color: 'text-cyan-300' },
  Tailwind: { icon: SiTailwindcss, color: 'text-cyan-300' },
  'Vue.js': { icon: SiVuedotjs, color: 'text-emerald-300' },
  Kotlin: { icon: SiKotlin, color: 'text-purple-300' },
  'Android Studio': { icon: SiAndroidstudio, color: 'text-green-300' },
  WebSockets: { icon: SiSocketdotio, color: 'text-white' },
  Firebase: { icon: SiFirebase, color: 'text-amber-300' },
}

const gradients: Record<string, string> = {
  CartWise: 'from-violet-600 to-purple-900',
  AgriTech: 'from-emerald-600 to-teal-900',
  BeyondSports: 'from-cyan-600 to-blue-900',
  Rental: 'from-orange-600 to-red-900',
  College: 'from-pink-600 to-rose-900',
  Mayondo: 'from-amber-600 to-yellow-900',
  RSK: 'from-indigo-600 to-violet-900',
}

function getGradient(project: Project) {
  return (
    Object.entries(gradients).find(([key]) =>
      project.mediaPlaceholder.toLowerCase().includes(key.toLowerCase())
    )?.[1] ?? 'from-violet-600 to-cyan-900'
  )
}

function TechChip({ name }: { name: string }) {
  const tech = techIcons[name] ?? { icon: FaCode, color: 'text-violet-300' }
  const Icon = tech.icon

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.075] px-3.5 py-2 text-sm font-semibold text-gray-100 shadow-inner shadow-white/5">
      <Icon className={tech.color} size={19} />
      {name}
    </span>
  )
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-4 pt-5 border-t border-white/5">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-gray-400 hover:text-violet-300 text-sm transition-colors"
      >
        <FaGithub size={14} /> Code
      </a>
      {project.demo !== '#' && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-gray-400 hover:text-cyan-300 text-sm transition-colors"
        >
          <FaExternalLinkAlt size={12} /> Live Demo
        </a>
      )}
    </div>
  )
}

function ImageMedia({ project, large = false }: { project: Project; large?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false)
  const hasSrc = !!project.mediaSrc
  const fit = project.imageFit ?? 'cover'

  if (!hasSrc || imageFailed) {
    return <PlaceholderMedia project={project} large={large} />
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-gradient-to-br ${
        project.imageTone ?? 'from-white/10 to-white/5'
      } ${large ? 'min-h-[420px]' : 'h-72'}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_38%)]" />
      <div className="relative flex h-full items-center justify-center p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.mediaSrc!}
          alt={project.title}
          className={`max-h-full max-w-full rounded-2xl shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:scale-[1.02] ${
            fit === 'contain' ? 'object-contain' : 'h-full w-full object-cover'
          }`}
          onError={() => setImageFailed(true)}
        />
      </div>
      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
        {project.mediaPlaceholder}
      </div>
    </div>
  )
}

function ShowcaseImage({
  screen,
  className = '',
  imageClassName = '',
}: {
  screen: ProjectScreen
  className?: string
  imageClassName?: string
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return null
  }

  return (
    <figure className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={screen.src}
        alt={screen.label}
        className={imageClassName}
        onError={() => setFailed(true)}
        onLoad={(event) => {
          if (event.currentTarget.naturalWidth === 0) {
            setFailed(true)
          }
        }}
      />
    </figure>
  )
}

function PhoneShowcase({ screens, compact = false }: { screens: ProjectScreen[]; compact?: boolean }) {
  const mobileScreens = screens.filter((screen) => screen.kind === 'mobile')

  return (
    <div
      className={`relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-slate-950 via-white/[0.04] to-violet-950/40 ${
        compact ? 'min-h-[32rem]' : 'min-h-[36rem]'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(167,139,250,0.18),transparent_34%)]" />
      <div className="absolute inset-x-8 bottom-8 h-24 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className={`relative flex h-full items-center justify-center ${compact ? 'px-5 py-8' : 'px-8 py-10'}`}>
        <div className={`grid w-full place-items-center gap-5 ${mobileScreens.length > 1 ? 'sm:grid-cols-2' : ''}`}>
          {mobileScreens.slice(0, 4).map((screen, index) => (
            <ShowcaseImage
              key={`${screen.src}-${index}`}
              screen={screen}
              className={`${compact ? 'w-56' : 'w-64 md:w-72'} rounded-[2rem] border border-white/15 bg-black p-2 shadow-2xl shadow-black/50 transition duration-500 hover:scale-[1.02]`}
              imageClassName="aspect-[9/19] h-full w-full rounded-[1.55rem] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function WebShowcase({ screens, compact = false }: { screens: ProjectScreen[]; compact?: boolean }) {
  const webScreens = screens.filter((screen) => screen.kind === 'web')

  if (webScreens.length === 0) {
    return null
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-red-950/30 via-black to-cyan-950/20 p-4 ${
        compact ? 'min-h-[22rem]' : ''
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(239,68,68,0.24),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.16),transparent_34%)]" />
      <div className={`relative grid gap-5 ${!compact && webScreens.length > 1 ? 'xl:grid-cols-1' : ''}`}>
        {webScreens.map((screen) => (
          <div
            key={screen.src}
            className="overflow-hidden rounded-2xl border border-white/12 bg-[#08080d] p-2 shadow-2xl shadow-black/45 transition duration-500 hover:border-cyan-300/30"
          >
            <div className="mb-2 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 h-5 flex-1 rounded-full bg-white/5" />
            </div>
            <ShowcaseImage
              screen={screen}
              imageClassName={`w-full rounded-xl bg-white object-cover object-top ${compact ? 'h-72' : 'h-72 md:h-[22rem]'}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function ProductShowcase({ project, large = false }: { project: Project; large?: boolean }) {
  const screens = project.screens ?? []
  const mobileScreens = screens.filter((screen) => screen.kind === 'mobile')
  const webScreens = screens.filter((screen) => screen.kind === 'web')

  if (screens.length === 0) {
    return <MediaSlot project={project} large={large} />
  }

  if (mobileScreens.length > 0 && webScreens.length > 0) {
    return (
      <div className={`grid gap-5 ${large ? 'xl:grid-cols-[0.42fr_0.58fr]' : ''}`}>
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
            <SiReact /> Mobile screens
          </div>
          <PhoneShowcase screens={screens} compact={!large} />
        </div>
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
            <FaGlobe /> Web screens
          </div>
          <WebShowcase screens={screens} compact={!large} />
        </div>
      </div>
    )
  }

  if (mobileScreens.length > 0) {
    return <PhoneShowcase screens={screens} compact={!large} />
  }

  if (webScreens.length > 0) {
    return <WebShowcase screens={screens} compact={!large} />
  }

  return <MediaSlot project={project} large={large} />
}

function VideoMedia({ project }: { project: Project }) {
  const [playing, setPlaying] = useState(false)
  const hasSrc = !!project.mediaSrc
  const gradient = getGradient(project)

  if (!hasSrc) {
    return <PlaceholderMedia project={project} />
  }

  if (project.mediaType === 'youtube') {
    return (
      <div className="relative aspect-video overflow-hidden rounded-[1.4rem] border border-white/10 bg-black shadow-2xl shadow-black/30">
        <iframe
          src={project.mediaSrc}
          title={project.title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-[1.4rem] border border-white/10 bg-black shadow-2xl shadow-black/30">
      {!playing ? (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_36%)]" />
          <button
            onClick={() => setPlaying(true)}
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur transition hover:scale-105 hover:bg-white/30"
            aria-label={`Play ${project.title} demo video`}
          >
            <FaPlay className="ml-1" size={20} />
          </button>
          <div className="absolute left-5 top-5 text-sm font-semibold text-white/85">
            {project.mediaPlaceholder}
          </div>
          <div className="absolute bottom-5 right-5 text-xs text-white/60">Click to play demo</div>
        </>
      ) : (
        <video src={project.mediaSrc} autoPlay controls className="h-full w-full object-contain" />
      )}
    </div>
  )
}

function PlaceholderMedia({ project, large = false }: { project: Project; large?: boolean }) {
  const gradient = getGradient(project)

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[1.4rem] border border-white/10 bg-gradient-to-br ${gradient} ${
        large ? 'min-h-[420px]' : 'h-72'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%)]" />
      <span className="relative text-lg font-semibold text-white">{project.mediaPlaceholder}</span>
    </div>
  )
}

function MediaSlot({ project, large = false }: { project: Project; large?: boolean }) {
  if (project.mediaType === 'video' || project.mediaType === 'youtube') {
    return <VideoMedia project={project} />
  }

  if (project.mediaType === 'image') {
    return <ImageMedia project={project} large={large} />
  }

  return <PlaceholderMedia project={project} large={large} />
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-[2rem] border border-violet-400/20 bg-white/[0.055] p-4 shadow-2xl shadow-violet-950/20 backdrop-blur md:p-6 lg:col-span-2">
      <div className="grid gap-7">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            <FaServer /> Real-world production app
          </div>

          <div>
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-syne)' }}>
                {project.title}
              </h3>
              {project.badge && (
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${badgeColors[project.badge]}`}>
                  {project.badge}
                </span>
              )}
            </div>
            <p className="text-sm font-medium text-cyan-200">{project.impact}</p>
          </div>

          <p className="text-base leading-relaxed text-gray-400">{project.description}</p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="mb-1 text-xs uppercase tracking-[0.2em] text-gray-500">Product type</div>
              <div className="font-semibold text-white">Mobile + Web platform</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="mb-1 text-xs uppercase tracking-[0.2em] text-gray-500">Proof</div>
              <div className="font-semibold text-white">Used in production</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <TechChip key={tech} name={tech} />
            ))}
          </div>

          <ProjectActions project={project} />
        </div>

        <div className="flex flex-col justify-center">
          <ProductShowcase project={project} large />
        </div>
      </div>
    </article>
  )
}

function StandardProjectCard({ project, production = false }: { project: Project; production?: boolean }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[1.7rem] border bg-white/[0.055] p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.075] ${
        production
          ? 'border-emerald-400/20 shadow-2xl shadow-emerald-950/10'
          : 'border-white/10 shadow-xl shadow-black/15'
      }`}
    >
      <ProductShowcase project={project} large={production} />

      <div className="flex flex-1 flex-col pt-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            {project.impact && (
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
                {project.impact}
              </p>
            )}
            <h3 className="text-xl font-bold leading-tight text-white" style={{ fontFamily: 'var(--font-syne)' }}>
              {project.title}
            </h3>
          </div>
          {project.badge && (
            <span className={`whitespace-nowrap rounded-full border px-3 py-1 text-[11px] font-semibold ${badgeColors[project.badge] ?? 'border-white/10 bg-white/5 text-gray-300'}`}>
              {project.badge}
            </span>
          )}
        </div>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechChip key={tech} name={tech} />
          ))}
        </div>

        <ProjectActions project={project} />
      </div>
    </article>
  )
}

export default function Projects() {
  const productionProjects = projects.filter((project) => project.category === 'production')
  const personalProjects = projects.filter((project) => project.category === 'personal')
  const featuredProject = productionProjects.find((project) => project.layout === 'featured')
  const otherProductionProjects = productionProjects.filter((project) => project.layout !== 'featured')

  return (
    <section id="projects" className="relative overflow-hidden py-24" style={{ background: 'linear-gradient(to bottom, #0d0d16, #0a0a0f)' }}>
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute bottom-40 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-200">
            <span className="h-2 w-2 rounded-full bg-violet-300" />
            Product work that ships
          </div>
          <h2 className="section-title text-white">
            <span className="typing-project-title">My Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-center text-gray-500">
            A focused showcase of apps, websites, and demos — led by real-world products already used by people and businesses.
          </p>
        </div>

        <div className="mb-16">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">Used by real people</p>
              <h3 className="mt-2 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-syne)' }}>
                Production apps & client work
              </h3>
            </div>
          </div>

          <div className="grid gap-8">
            {featuredProject && <FeaturedProjectCard project={featuredProject} />}
            {otherProductionProjects.map((project) => (
              <StandardProjectCard key={project.title} project={project} production />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">More builds</p>
              <h3 className="mt-2 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-syne)' }}>
                Personal projects, demos & experiments
              </h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {personalProjects.map((project) => (
              <StandardProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
