'use client'

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: "Mayondo Wood & Furniture",
    description: "Inventory and sales management system with real-time stock tracking and analytics.",
    tech: ["Vue.js", "Node.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/Desire-coder-wq/MW-F",
    demo: "#",
  },
  {
    title: "RSK Technologies",
    description: "Company website built with Next.js, TypeScript, and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Desire-coder-wq/rsk-tech",
    demo: "https://rsktech.net/",
  },
  {
    title: "BeyondSports UG",
    description: "Corporate wellness platform with GPS activity tracking and fitness challenges.",
    tech: ["React Native", "NestJS", "Prisma", "PostgreSQL"],
    github: "https://github.com/Desire-coder-wq/beyondsports",
    demo: "https://beyondsports.fitness/",
  },
  {
    title: "Rental Management App",
    description: "Property management system with payments, SMS, and automated invoices.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Flutterwave"],
    github: "https://github.com/Desire-coder-wq/rental-app",
    demo: "#",
  },
  {
    title: "CartWise & AgriTech",
    description: "Smart agriculture logistics platform with real-time analytics.",
    tech: ["Next.js", "NestJS", "Prisma", "Tailwind"],
    github: "https://github.com/Desire-coder-wq/cartwise",
    demo: "#",
  },
  {
    title: "College Alert Mobile",
    description: "Real-time push notification system for educational institutions.",
    tech: ["React Native", "NestJS", "WebSockets"],
    github: "https://github.com/Desire-coder-wq/college-alert",
    demo: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Real‑world full‑stack & mobile apps that solve business challenges
        </p>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {projects.map((project, index) => (
             <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
               <div className="h-64 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                 <span className="text-white font-semibold text-xl">{project.title}</span>
               </div>
               <div className="p-8">
                 <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                 <p className="text-gray-600 text-base mb-5">{project.description}</p>
                 <div className="flex flex-wrap gap-2 mb-5">
                   {project.tech.map((tech) => (
                     <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                       {tech}
                     </span>
                   ))}
                 </div>
                 <div className="flex gap-4">
                   <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 hover:text-blue-600 text-base transition">
                     <FaGithub size={18} /> Code
                   </a>
                   {project.demo !== '#' && (
                     <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 hover:text-blue-600 text-base transition">
                       <FaExternalLinkAlt size={16} /> Demo
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