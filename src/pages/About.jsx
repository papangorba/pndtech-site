import { Link } from 'react-router-dom'
import {
  Building2,
  Eye,
  Heart,
  Users,
  Code,
  CheckCircle2,
  Sparkles,
  Target,
  Shield,
  Zap,
  ArrowRight
} from 'lucide-react'
import FounderCard from '../components/FounderCard'

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Rigueur & Excellence',
      description: 'Nous appliquons les meilleurs standards d\'ingénierie logicielle pour livrer des produits stables, sécurisés et pérennes.'
    },
    {
      icon: Zap,
      title: 'Agilité & Rapidité',
      description: 'Des cycles de développement courts pour valider rapidement vos idées et accélérer votre mise sur le marché.'
    },
    {
      icon: Heart,
      title: 'Inspiration & Impact',
      description: 'Construire des solutions digitales à forte valeur ajoutée pour dynamiser l\'écosystème technologique africain et global.'
    },
    {
      icon: Target,
      title: 'Transparence Totale',
      description: 'Communication fluide, jalons clairs et gestion de projet partagée sans mauvaise surprise.'
    }
  ]

  const stack = [
    { name: 'React / Next.js', category: 'Frontend Web' },
    { name: 'Flutter / React Native', category: 'Mobile Multiplateforme' },
    { name: 'Node.js / Express / NestJS', category: 'Backend & APIs' },
    { name: 'Python / Django / FastAPI', category: 'Backend & Data' },
    { name: 'PostgreSQL / MongoDB / Redis', category: 'Bases de données' },
    { name: 'Docker / AWS / VPS / CI/CD', category: 'Cloud & DevOps' }
  ]

  return (
    <div className="space-y-24 pb-20 pt-10">

      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium">
            <Building2 className="w-4 h-4" />
            <span>À propos de PndTech</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-heading tracking-tight">
            L'ingénierie logicielle au service du futur.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            PndTech est une entreprise technologique dédiée à la conception, au développement et au déploiement de solutions numériques d'exception.
          </p>
        </div>
      </section>

      {/* Entreprise & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Building2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              L'Entreprise & L'Équipe
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Fondée par Papa Ngorba DIA (Ingénieur en Génie Logiciel & Sécurité des SI) et ses collaborateurs, PndTech s'impose comme un partenaire d'ingénierie logicielle et un éditeur de logiciels SaaS verticaux de référence.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Forts de réalisations concrètes dans le transport, l'auto-dépannage, l'éducation et l'e-commerce (projets hbt.sn, magentalebpa.com), nous combinons compréhension métier terrain et exigence de sécurité.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              La Vision
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Nous croyons fermement que l'Afrique est un vivier d'innovation et que le logiciel est le levier le plus puissant pour transformer les entreprises et créer de la valeur durable.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Notre ambition est de faire rayonner des produits technologiques conçus localement selon des critères de qualité mondiaux.
            </p>
          </div>

        </div>
      </section>

      {/* Section Fondateur */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>Fondateur & Leadership</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white font-heading">
            Le Fondateur
          </h2>
          <p className="text-slate-400 text-sm">
            Une vision claire tournée vers l'excellence technologique et l'impact local.
          </p>
        </div>

        <FounderCard />
      </section>

      {/* Les Valeurs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-white font-heading">
            Nos Valeurs Fondamentales
          </h2>
          <p className="text-slate-400 text-sm">
            Les principes qui guident chacune de nos lignes de code et chacun de nos projets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon
            return (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Approche Technique & Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs uppercase">
              <Code className="w-4 h-4" />
              <span>Méthode & Stack</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white font-heading">
              Notre Approche Technique
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Nous sélectionnons les technologies les plus stables et reconnues de l'industrie pour vous garantir un produit maintenable, évolutif et sécurisé.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {stack.map((s, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="font-semibold text-white text-sm">{s.name}</span>
                <span className="text-xs text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20 font-mono">
                  {s.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-6 p-8 rounded-2xl bg-slate-900 border border-amber-500/30">
          <h3 className="text-2xl font-bold text-white font-heading">Prêt à collaborer avec PndTech ?</h3>
          <p className="text-slate-400 text-sm">Découvrez nos services ou échangez directement avec un ingénieur conseil.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors"
          >
            <span>Prendre contact</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}
