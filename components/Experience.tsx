'use client'

const experiences = [
  {
    role: 'Full-Stack Developer (Apprenticeship)',
    company: 'BeyondSports UG',
    period: '6 months',
    type: 'Apprenticeship',
    description:
      'Gained hands-on experience building real-world production applications used by real users. Built the corporate wellness platform with GPS activity tracking, fitness challenges, leaderboards, and NestJS backend. The app is live at beyondsports.fitness.',
    tech: ['React Native', 'NestJS', 'Prisma', 'PostgreSQL', 'GPS Tracking'],
    highlight: true,
  },
  {
    role: 'Full-Stack Developer',
    company: 'RSK Technologies Group',
    period: 'Contract',
    type: 'Contract',
    description:
      'Built and launched the company website for RSK Technologies — a software solutions company. The site is live at rsktech.net, handling real visitors and clients. Implemented modern Next.js architecture with TypeScript and Tailwind CSS.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    highlight: false,
  },
  {
    role: 'Freelance Developer',
    company: 'Independent Projects',
    period: 'Ongoing',
    type: 'Freelance',
    description:
      'Delivered multiple client projects including a rental management system with Flutterwave payments and automated SMS invoices, a furniture inventory system, and a college push-notification app built in Kotlin for Android. Shipped mobile apps to production on Google Play.',
    tech: ['React Native', 'Kotlin', 'Node.js', 'Flutterwave', 'AWS', 'Docker'],
    highlight: false,
  },
]

const typeColors: Record<string, string> = {
  Apprenticeship: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  Contract: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  Freelance: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
}

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ background: '#0a0a0f' }}>
      <div className="container-custom">
        <h2 className="section-title text-white">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          Real-world experience building and shipping production applications
        </p>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-cyan-500/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative sm:pl-16">
                {/* Dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-violet-500 bg-[#0a0a0f] hidden sm:block" />

                <div
                  className={`card-dark p-6 rounded-2xl transition-all hover:border-white/20 ${
                    exp.highlight ? 'border-violet-500/30' : ''
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-syne)' }}>
                        {exp.role}
                      </h3>
                      <p className="text-gray-400 text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full border ${typeColors[exp.type]}`}>
                        {exp.type}
                      </span>
                      <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
