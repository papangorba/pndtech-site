import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FolderGit2, ArrowRight, ExternalLink, Code, CheckCircle, Globe } from 'lucide-react'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const categories = ['Tous', 'Web & SaaS', 'Mobile', 'Solutions Métier']

  const projectList = [
    {
      id: 1,
      title: 'Plateforme HBT Senegal',
      category: 'Web & SaaS',
      client: 'hbt.sn',
      url: 'https://hbt.sn',
      description: 'Développement complet de la plateforme digitale corporate & commerciale pour HBT Senegal. Architecture web moderne, réactive et optimisée pour l\'expérience utilisateur.',
      tech: ['React', 'Node.js', 'Tailwind CSS', 'Vite'],
      impact: 'Visibilité digitale renforcée et croissance des demandes de contact'
    },
    {
      id: 2,
      title: 'Plateforme E-Commerce Magentalabpa',
      category: 'Web & SaaS',
      client: 'magentalabpa.com',
      url: 'https://magentalabpa.com',
      description: 'Conception et déploiement du site et du portail du laboratoire Magentalabpa, situé en Pennsylvanie (États-Unis). Catalogue interactif, parcours d\'achat optimisé et intégration de moyens de paiement.',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'Paiement en ligne'],
      impact: 'Digitalisation des rendez-vous et catalogue des tests'
    },
    {
      id: 3,
      title: 'Plateforme AutoDépannage ',
      category: 'Solutions Métier',
      client: 'Secteur Automobile & Dépannage',
      url: null,
      description: 'Système complet d\'assistance routière et de gestion d\'ateliers mécaniques. Prise en charge rapide des demandes de dépannage et gestion des interventions.',
      tech: ['Flutter', 'Node.js', 'PostgreSQL', 'Géolocalisation'],
      impact: 'Gestion optimisée du parc automobile et interventions en temps réel'
    },
    {
      id: 4,
      title: 'Solution de Transport Ñu Demm & Flottes',
      category: 'Mobile',
      client: 'Secteur Transport & Mobilité',
      url: null,
      description: 'Inspiré des retours d\'expérience Ñu Demm / Bokko Demm. Outil métier d\'optimisation de flottes de véhicules, billetterie et suivi des trajets interurbains.',
      tech: ['Flutter', 'Spring-boot', 'openmapstreet', 'GPS Tracking'],
      impact: 'Réduction des coûts opérationnels et suivi précis de la flotte'
    }
  ]

  const filteredProjects = activeCategory === 'Tous'
    ? projectList
    : projectList.filter(p => p.category === activeCategory)

  return (
    <div className="space-y-24 pb-20 pt-10">

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium">
            <FolderGit2 className="w-4 h-4" />
            <span>Nos Réalisations</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-heading tracking-tight">
            Des projets réels conçus pour nos clients & écosystèmes.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Découvrez nos plateformes en ligne et solutions métiers déployées avec succès.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-orange-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-amber-500/40 transition-all space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {p.category}
                  </span>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>{p.client}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-500">
                      {p.client}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-white font-heading">
                  {p.title}
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {p.description}
                </p>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Impact : {p.impact}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="text-xs text-slate-400 font-mono bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 className="text-2xl font-bold text-white font-heading">Vous souhaitez concevoir votre plateforme avec PndTech ?</h3>
          <p className="text-slate-300 text-sm">Discutons de votre projet et établissons un plan d'action technique sur-mesure.</p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors"
            >
              <span>Démarrer une collaboration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
