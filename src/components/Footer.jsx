import { Link } from 'react-router-dom'
import { Code2, Sparkles, Mail, Phone, MapPin, ArrowUpRight, Globe, Share2, MessageSquare } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Info Officiel PNDTech */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-8 h-8">
                    <rect x="15" y="45" width="22" height="22" rx="3" fill="#2563EB" />
                    <rect x="42" y="15" width="22" height="22" rx="3" fill="#1D4ED8" />
                    <rect x="42" y="45" width="22" height="22" rx="3" fill="#F97316" />
                    <rect x="15" y="74" width="14" height="14" rx="2" fill="#EA580C" />
                    <rect x="48" y="76" width="10" height="10" rx="2" fill="#F97316" />
                    <path d="M 26 45 L 26 26 L 42 26" stroke="#2563EB" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M 22 67 L 22 74" stroke="#EA580C" strokeWidth="4" fill="none" />
                    <path d="M 29 81 L 48 81" stroke="#F97316" strokeWidth="3" fill="none" />
                  </svg>
                </div>
                <div className="h-7 w-[2px] bg-amber-500 rounded-full"></div>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight font-heading leading-none">
                  <span className="text-white">PND</span>
                  <span className="text-amber-500">Tech</span>
                </span>
                <span className="text-[8px] tracking-[0.2em] text-slate-400 uppercase font-mono font-semibold mt-0.5">
                  DIGITAL SOLUTIONS
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Construisons les solutions numériques de demain. Nous accompagnons les entreprises et les visionnaires avec du logiciel sur-mesure, des applications mobiles d'excellence et des produits SaaS performants.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Message" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider font-heading mb-4 border-l-2 border-amber-500 pl-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">À propos de nous</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">Nos Services</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-amber-400 transition-colors">Produits PndTech</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-400 transition-colors">Réalisations</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider font-heading mb-4 border-l-2 border-teal-500 pl-2">
              Expertises
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">Développement Web</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">Applications Mobiles</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">Solutions SaaS</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">Logiciels Métier</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">Conseil & Audit IT</Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider font-heading mb-4 border-l-2 border-amber-500 pl-2">
              Contact Direct
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <a href="mailto:papadiawdia@gmail.com" className="hover:text-amber-400 transition-colors">papadiawdia@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <a href="https://wa.me/221772995725" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">+221 77 299 57 25</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Dakar, Sénégal</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} PndTech. Tous droits réservés.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Conçu avec rigueur & agilité pour le monde numérique.</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </div>
        </div>
      </div>
    </footer>
  )
}
