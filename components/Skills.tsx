'use client'

const skillCategories = [
  {
    title: 'Languages',
    color: 'from-violet-500/20 to-violet-500/5',
    accent: 'text-violet-400',
    border: 'border-violet-500/20',
    skills: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    ],
  },
  {
    title: 'Frontend',
    color: 'from-cyan-500/20 to-cyan-500/5',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/20',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
      { name: 'Pug', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pug/pug-plain.svg' },
    ],
  },
  {
    title: 'Mobile',
    color: 'from-pink-500/20 to-pink-500/5',
    accent: 'text-pink-400',
    border: 'border-pink-500/20',
    skills: [
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Expo', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg' },
      { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
  },
  {
    title: 'Backend & DB',
    color: 'from-emerald-500/20 to-emerald-500/5',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/20',
    skills: [
      { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
      { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    color: 'from-orange-500/20 to-orange-500/5',
    accent: 'text-orange-400',
    border: 'border-orange-500/20',
    skills: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
      { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ],
  },
  {
    title: 'Tools',
    color: 'from-yellow-500/20 to-yellow-500/5',
    accent: 'text-yellow-400',
    border: 'border-yellow-500/20',
    skills: [
      { name: 'Trello', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Socket.io', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative" style={{ background: 'linear-gradient(to bottom, #0a0a0f, #0d0d16)' }}>
      <div className="container-custom">
        <h2 className="section-title text-white">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          Technologies I use to build fast, reliable, and scalable products
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ title, color, accent, border, skills }) => (
            <div
              key={title}
              className={`rounded-2xl p-6 bg-gradient-to-br ${color} border ${border} hover:scale-[1.01] transition-transform`}
            >
              <h3 className={`text-lg font-bold mb-5 ${accent}`} style={{ fontFamily: 'Syne, sans-serif' }}>
                {title}
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {skills.map(({ name, icon }) => (
                  <div key={name} className="flex flex-col items-center gap-1.5 group">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={icon}
                        alt={name}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          const t = e.currentTarget
                          t.style.display = 'none'
                          if (t.nextElementSibling) (t.nextElementSibling as HTMLElement).style.display = 'block'
                        }}
                      />
                      <span className="text-gray-400 text-xs hidden">{name[0]}</span>
                    </div>
                    <span className="text-[10px] text-gray-500 text-center leading-tight">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
