export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5" style={{ background: '#0a0a0f' }}>
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Asingura Rose Desire. Built with Next.js.
        </p>
        <p className="text-gray-600 text-sm">
          Mukono, Uganda
        </p>
      </div>
    </footer>
  )
}
