import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Globe,
  Smartphone,
  Layers,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  TrendingUp,
  Code2,
  Cpu,
  Users
} from 'lucide-react'
import FounderCard from '../components/FounderCard'

export default function Home() {
  const services = [
    {
      icon: Globe,
      title: 'Développement Web',
      description: 'Applications web modernes, plateformes réactives et portails haute performance conçus avec les dernières technologies.',
      tag: 'Front & Back',
      badgeClass: 'bg-amber-500/10 text-amber-600 border-amber-500/30'
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Apps iOS & Android fluides, intuitives et sécurisées, adaptées aux réalités des marchés africains et internationaux.',
      tag: 'iOS & Android',
      badgeClass: 'bg-teal-500/10 text-teal-600 border-teal-500/30'
    },
    {
      icon: Layers,
      title: 'Solutions SaaS',
      description: 'Conception et déploiement de logiciels en tant que service évolutifs, multilocataires et prêts pour la mise à l\'échelle.',
      tag: 'Scalable SaaS',
      badgeClass: 'bg-amber-500/10 text-amber-600 border-amber-500/30'
    },
    {
      icon: Briefcase,
      title: 'Solutions Métier',
      description: 'Outils de gestion sur-mesure (ERP, CRM, Systèmes de paiement, automatisation) adaptés à vos processus d\'entreprise.',
      tag: 'Sur-Mesure',
      badgeClass: 'bg-teal-500/10 text-teal-600 border-teal-500/30'
    },
    {
      icon: ShieldCheck,
      title: 'Conseil & Sécurité SI',
      description: 'Audit de sécurité des SI, architecture cloud résiliente et accompagnement stratégique pour sécuriser votre système d\'information.',
      tag: 'Sécurité SI',
      badgeClass: 'bg-blue-500/10 text-blue-600 border-blue-500/30'
    }
  ]

  const metrics = [
    { value: '100%', label: 'Sur-mesure & Sécurisé' },
    { value: '5+', label: 'Piliers d\'Expertise' },
    { value: '99.9%', label: 'Haute Disponibilité' },
    { value: '24/7', label: 'Support & Supervision' }
  ]

  return (
    <div className="space-y-0">

      {/* Hero Section (Dark) */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 bg-slate-950 african-pattern-dark">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-medium shadow-xl">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>PndTech • Studio d'Ingénierie & Éditeur de Logiciels</span>
            </div>

            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-[1.15] text-white">
              Construisons les <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300">solutions numériques</span> de demain.
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              De l'idée à la production, PndTech conçoit des applications web, mobiles et logiciels métier haute performance, façonnés avec rigueur et sécurité.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold text-base hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-3"
              >
                <span>Lancer votre projet</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 font-semibold text-base hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <span>Découvrir nos services</span>
              </Link>
            </div>

            <div className="pt-10 sm:pt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 border-t border-slate-800/80">
              {metrics.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-heading">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section (Clair / Lumineux) */}
      <section className="bg-white text-slate-900 py-16 sm:py-24 border-y border-slate-200 african-pattern-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 font-semibold text-xs uppercase tracking-widest font-mono border border-amber-500/20">
              <Cpu className="w-4 h-4" />
              <span>Nos Domaines d'Action</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading">
              Une expertise complète pour transformer vos ambitions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Nous combinons maîtrise technique moderne, architecture résiliente et sécurité renforcée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((srv, idx) => {
              const IconComp = srv.icon
              return (
                <div
                  key={idx}
                  className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full border ${srv.badgeClass}`}>
                        {srv.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-amber-600 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>En savoir plus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Brand Identity / Vision Banner (Sombre) */}
      <section className="bg-slate-950 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 lg:p-16 overflow-hidden">
            <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-mono">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>L'ADN PndTech</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
                  Ancré dans l'innovation, pensé pour le monde
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  PndTech incarne la rencontre entre l'agilité technologique globale, la sécurité des données et les besoins concrets des entreprises africaines et internationales.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Savoir-faire logiciel de niveau ingénieur</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                    <span>Architecture cloud sécurisée & conformité des SI</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Accompagnement de A à Z (Cadrage, Design, Code, Déploiement)</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold text-sm hover:bg-slate-700 transition-colors"
                  >
                    <span>Découvrir notre vision</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4 shadow-2xl">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <span className="text-xs font-mono text-slate-500">pndtech-core.ts</span>
                  </div>
                  <div className="font-mono text-xs text-slate-300 space-y-2 leading-relaxed">
                    <p className="text-amber-400"><span className="text-purple-400">const</span> PndTechCore = &#123;</p>
                    <p className="pl-4 text-slate-300">founder: <span className="text-amber-300">"Papa Ngorba DIA"</span>,</p>
                    <p className="pl-4 text-slate-300">expertise: <span className="text-emerald-400">"Génie Logiciel & Sécurité SI"</span>,</p>
                    <p className="pl-4 text-slate-300">quality: <span className="text-amber-300">"Uncompromised"</span>,</p>
                    <p className="pl-4 text-slate-300">stack: [<span className="text-teal-300">"React"</span>, <span className="text-teal-300">"Flutter"</span>, <span className="text-teal-300">"Node.js"</span>, <span className="text-teal-300">"Security"</span>],</p>
                    <p className="pl-4 text-slate-300">securityFirst: <span className="text-purple-400">true</span>,</p>
                    <p className="text-amber-400">&#125;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section (Douceur / Lumineux) */}
      <section className="bg-slate-50 text-slate-900 py-16 sm:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-600 font-mono text-xs font-semibold uppercase border border-amber-500/20">
              <Users className="w-3.5 h-3.5" />
              <span>Fondateur PNDTech</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              À la tête de la vision
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Un engagement fort pour propulser l'innovation numérique et la sécurité des SI.
            </p>
          </div>

          <FounderCard variant="light" />
        </div>
      </section>

      {/* CTA Final (Sombre) */}
      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 space-y-6 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Vous avez un projet ou besoin d'un audit de sécurité ?
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto">
              Discutons ensemble de vos enjeux. Nous évaluons gratuitement votre projet et vous proposons un plan d'action technique sur-mesure.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold text-base hover:from-amber-400 hover:to-orange-500 transition-all shadow-xl shadow-orange-500/20"
              >
                <span>Demander une étude gratuite</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
