import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, Code2, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Produits', path: '/products' },
    { name: 'Réalisations', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Officiel PNDTech */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center gap-2">
              <div className="relative w-9 h-9 flex items-center justify-center transition-transform group-hover:scale-105">
                <svg viewBox="0 0 100 100" className="w-9 h-9">
                  {/* Nodes bleu fonce */}
                  <rect x="15" y="45" width="22" height="22" rx="3" fill="#2563EB" />
                  <rect x="42" y="15" width="22" height="22" rx="3" fill="#1D4ED8" />
                  {/* Nodes orange */}
                  <rect x="42" y="45" width="22" height="22" rx="3" fill="#F97316" />
                  <rect x="15" y="74" width="14" height="14" rx="2" fill="#EA580C" />
                  <rect x="48" y="76" width="10" height="10" rx="2" fill="#F97316" />
                  {/* Lignes de connexion */}
                  <path d="M 26 45 L 26 26 L 42 26" stroke="#2563EB" strokeWidth="6" fill="none" strokeLinecap="round" />
                  <path d="M 22 67 L 22 74" stroke="#EA580C" strokeWidth="4" fill="none" />
                  <path d="M 29 81 L 48 81" stroke="#F97316" strokeWidth="3" fill="none" />
                </svg>
              </div>
              <div className="h-8 w-[2px] bg-amber-500 rounded-full"></div>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight font-heading leading-none">
                <span className="text-white">PND</span>
                <span className="text-amber-500">Tech</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] text-slate-400 uppercase font-mono font-semibold mt-1">
                DIGITAL SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Call to action button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-semibold text-sm hover:from-amber-400 hover:to-orange-500 transition-all shadow-md shadow-orange-500/20 hover:shadow-orange-500/30"
            >
              <span>Discuter d'un projet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/95 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const active = isActive(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  active
                    ? 'bg-amber-500/10 text-amber-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
          <div className="pt-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold text-sm shadow-md"
            >
              <span>Discuter d'un projet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
