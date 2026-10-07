import { Link } from 'react-router-dom'
import {
  Globe,
  Smartphone,
  Layers,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Workflow,
  Sparkles
} from 'lucide-react'

export default function Services() {
  const serviceList = [
    {
      id: 'web',
      icon: Globe,
      title: 'Développement Web & Portails',
      subtitle: 'Applications web sur-mesure, rapides et sécurisées',
      description: 'Nous concevons des plateformes web modernes bâties sur des architectures solides (React, Next.js, Node.js). Que ce soit un portail client, une plateforme e-commerce complexe ou une application métier web.',
      features: [
        'Single Page Applications (SPA) & Server Side Rendering (SSR)',
        'Interfaces utilisateur fluides et ultra-réactives',
        'APIs REST / GraphQL performantes',
        'Optimisation SEO technique et vitesse d\'affichage'
      ]
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Applications Mobiles iOS & Android',
      subtitle: 'Des expériences mobiles fluides et engagées',
      description: 'Développement d\'applications mobiles hybrides et natives performantes. Vos utilisateurs bénéficient d\'une expérience fluide, même en cas de connexion internet instable.',
      features: [
        'Développement Flutter / React Native haut rendement',
        'Mode hors-ligne (Offline-first) et synchronisation',
        'Intégration Mobile Money (Wave, Orange Money, Free Money, Stripe)',
        'Push notifications & Géolocalisation'
      ]
    },
    {
      id: 'saas',
      icon: Layers,
      title: 'Solutions & Produits SaaS',
      subtitle: 'Logiciels en tant que service prêts pour l\'échelle',
      description: 'Du prototype à la plateforme SaaS multilocataire complète. Nous prenons en charge la gestion des abonnements, la sécurité des données et la scalabilité des serveurs.',
      features: [
        'Architecture Multi-tenant sécurisée',
        'Système de facturation et d\'abonnements automatisé',
        'Tableaux de bord analytiques en temps réel',
        'Conformité et protection des données'
      ]
    },
    {
      id: 'business',
      icon: Briefcase,
      title: 'Solutions Métier & Logiciels Sur-Mesure',
      subtitle: 'Digitalisation personnalisée de vos processus internes',
      description: 'Des outils de gestion d\'entreprise (ERP léger, CRM, gestion de stocks, automatisation de facturation) conçus spécifiquement pour répondre à vos règles métier.',
      features: [
        'Numérisation des flux de travail et formulaires',
        'Gestion des droits, rôles et accès utilisateurs',
        'Intégration avec vos outils existants (API, Excel, Legacy)',
        'Rapports et exports automatiques (PDF, Excel)'
      ]
    },
    {
      id: 'consulting',
      icon: ShieldCheck,
      title: 'Conseil Informatique & Audit Tech',
      subtitle: 'Accompagnement stratégique et optimisation IT',
      description: 'Nous aidons les dirigeants et équipes techniques à faire les meilleurs choix d\'architecture, à auditer le code existant et à sécuriser leurs infrastructures.',
      features: [
        'Audit de code, de sécurité et de performances',
        'Architecture Cloud (AWS, VPS, Docker, CI/CD)',
        'Aide au choix de stack technique et cadrage de projet',
        'Formation et transfert de compétences'
      ]
    }
  ]

  const processSteps = [
    { num: '01', title: 'Cadrage & Analyse', desc: 'Analyse approfondie de vos besoins, spécifications techniques et définition de la feuille de route.' },
    { num: '02', title: 'UI/UX & Architecture', desc: 'Prototypage des écrans, conception de la base de données et choix de la stack.' },
    { num: '03', title: 'Développement Agile', desc: 'Sprints réguliers avec démonstrations hebdomadaires pour valider chaque fonctionnalité.' },
    { num: '04', title: 'Déploiement & Recette', desc: 'Tests automatisés, déploiement sur serveurs sécurisés et recette finale.' },
    { num: '05', title: 'Support & Évolution', desc: 'Maintenance préventive, corrections et ajouts de nouvelles fonctionnalités.' }
  ]

  return (
    <div className="space-y-24 pb-20 pt-10">

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium">
            <Cpu className="w-4 h-4" />
            <span>Nos Services & Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-heading tracking-tight">
            Des expertises pointues pour chaque étape de votre croissance.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Nous transformons vos défis métiers en logiciels robustes, élégants et faciles à utiliser.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {serviceList.map((srv, idx) => {
          const Icon = srv.icon
          const isEven = idx % 2 === 0
          return (
            <div
              key={srv.id}
              className={`p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                    Service 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    {srv.title}
                  </h2>
                  <p className="text-amber-400 font-medium text-sm sm:text-base">
                    {srv.subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {srv.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
                  >
                    <span>Demander un devis pour ce service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
                  <span>PndTech Delivery Standard</span>
                  <Sparkles className="w-4 h-4 text-teal-400" />
                </div>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-500">Qualité du code :</span>
                    <span className="text-emerald-400 font-mono">Clean Code & Tests</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-500">Sécurité :</span>
                    <span className="text-emerald-400 font-mono">Chiffrement & SSL/TLS</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-500">Compatibilité :</span>
                    <span className="text-emerald-400 font-mono">Mobile & Desktop Responsive</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Garantie :</span>
                    <span className="text-emerald-400 font-mono">Support & Corrections inclus</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* Méthodologie */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-xs uppercase">
            <Workflow className="w-4 h-4" />
            <span>Notre Processus</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white font-heading">
            Comment nous travaillons ensemble
          </h2>
          <p className="text-slate-400 text-sm">
            Une démarche claire, transparente et structurée pour garantir le succès de votre projet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {processSteps.map((step, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 relative">
              <span className="text-3xl font-black text-amber-500/40 font-mono">{step.num}</span>
              <h3 className="text-lg font-bold text-white font-heading">{step.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
