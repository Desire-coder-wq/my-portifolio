import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container-custom text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/Desire-coder-wq" target="_blank" className="hover:text-white transition">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/rose-desire-asingura-0a1684372" target="_blank" className="hover:text-white transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com/" target="_blank" className="hover:text-white transition">
            <FaTwitter size={20} />
          </a>
        </div>
        <p className="text-sm">© 2025 Asingura Rose Desire — Full‑Stack & Mobile Developer</p>
        <p className="text-xs mt-2 flex items-center justify-center gap-1">
          Built with <FaHeart size={12} className="text-red-500" /> using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}