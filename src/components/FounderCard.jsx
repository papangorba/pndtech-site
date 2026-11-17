import { MapPin, Mail, Phone, MessageSquare, ShieldCheck, Award, FileDown } from 'lucide-react'
import papaPhoto from '../assets/papa-diaw-dia.jpg'

export default function FounderCard({ variant = 'dark' }) {
  const isLight = variant === 'light'

  return (
    <div className={`max-w-xl mx-auto rounded-3xl p-6 sm:p-8 shadow-2xl transition-all space-y-6 text-center relative overflow-hidden group ${
      isLight
        ? 'bg-white border border-slate-200 text-slate-800'
        : 'bg-slate-900 border border-slate-800 text-slate-100'
    }`}>

      {/* Background glow effect */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-56 h-56 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Profile Photo in circular gradient ring */}
      <div className="relative inline-block mx-auto">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-orange-500 to-blue-600 shadow-xl shadow-orange-500/20 transition-transform duration-300 group-hover:scale-105">
          <img
            src={papaPhoto}
            alt="Papa Ngorba DIA - Ingénieur Génie Logiciel & Sécurité SI"
            className="w-full h-full object-cover rounded-full bg-slate-950"
          />
        </div>
      </div>

      {/* Name, Role & Qualification */}
      <div className="space-y-2">
        <h3 className={`text-2xl sm:text-3xl font-extrabold font-heading tracking-tight ${
          isLight ? 'text-slate-900' : 'text-white'
        }`}>
          Papa Ngorba DIA
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-semibold font-mono">
            Fondateur & CEO
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 text-xs font-semibold font-mono flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Sécurité SI</span>
          </span>
        </div>

        <p className={`text-xs sm:text-sm font-medium pt-1 ${
          isLight ? 'text-slate-600' : 'text-slate-300'
        }`}>
          Ingénieur en Génie Logiciel & Sécurité des Systèmes d'Information
        </p>
      </div>

      {/* Bio */}
      <p className={`text-xs sm:text-sm leading-relaxed max-w-md mx-auto ${
        isLight ? 'text-slate-600' : 'text-slate-300'
      }`}>
        Entrepreneur sénégalais passionné d'innovation. Fort d'une solide expertise en architecture logicielle et sécurité des SI, il pilote PNDTech pour offrir des solutions digitales résilientes, hautement sécurisées et adaptées aux réalités africaines.
      </p>

      {/* Contact Details List */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-4 border-t ${
        isLight ? 'border-slate-100 text-slate-700' : 'border-slate-800 text-slate-300'
      }`}>
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
          <span>Dakar, Sénégal</span>
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-2">
          <Mail className="w-4 h-4 text-amber-500 shrink-0" />
          <a href="mailto:contact@pndtech-sn.com" className="hover:text-amber-500 transition-colors font-medium">
            contact@pndtech-sn.com
          </a>
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-2">
          <Phone className="w-4 h-4 text-amber-500 shrink-0" />
          <a href="tel:+221772995725" className="hover:text-amber-500 transition-colors font-medium">
            +221 77 299 57 25
          </a>
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-2">
          <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
          <a
            href="https://wa.me/221772995725"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-500 font-medium hover:underline"
          >
            WhatsApp Direct
          </a>
        </div>
      </div>

      {/* Action Buttons : discussion WhatsApp + CV (PDF dans public/) */}
      <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-center gap-3 ${isLight ? 'border-slate-100' : 'border-slate-800'}`}>
        <a
          href="https://wa.me/221772995725"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:from-amber-400 hover:to-orange-500 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Discuter avec Papa Ngorba DIA</span>
        </a>
        <a
          href="/cv-papa-ngorba-dia.pdf"
          target="_blank"
          rel="noreferrer"
          download="CV-Papa-Ngorba-DIA.pdf"
          className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm border transition-all ${
            isLight
              ? 'border-slate-300 text-slate-800 hover:border-amber-500 hover:text-amber-600'
              : 'border-slate-700 text-white hover:border-amber-500 hover:text-amber-400'
          }`}
        >
          <FileDown className="w-4 h-4" />
          <span>Télécharger mon CV</span>
        </a>
      </div>

    </div>
  )
}
