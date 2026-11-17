import { Link } from 'react-router-dom'
import {
  Package,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Wrench,
  GraduationCap,
  Scissors,
  Truck,
  Building,
  Boxes
} from 'lucide-react'

export default function Products() {
  const productsList = [
    {
      id: 'pnd-garage',
      icon: Wrench,
      name: 'PndTech Garage',
      tagline: 'Logiciel de gestion pour garages & centres de dépannage',
      status: 'Lancement Prochain',
      statusBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      description: 'Conçu sur la base de notre expertise du dépannage automobile. Gérez vos réparations, ordres de travail, stock de pièces détachées, devis et suivi des véhicules clients en toute simplicité.',
      tags: ['SaaS', 'Automobile', 'Garage', 'Dépannage'],
      features: [
        'Ordres de réparation & fiches d\'entrée véhicule',
        'Génération automatique de devis & factures',
        'Gestion des stocks de pièces & historiques pannes',
        'Rappels d\'entretien automatiques par SMS/WhatsApp'
      ]
    },
    {
      id: 'pnd-school',
      icon: GraduationCap,
      name: 'PndTech School',
      tagline: 'ERP scolaire simplifié & accessible pour établissements',
      status: 'Lancement Prochain',
      statusBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      description: 'Une alternative moderne et ultra-agile aux lourds ERP scolaires. Un tarif accessible (10 000 FCFA/mois) permettant à toute école privée ou centre de numériser sa gestion.',
      tags: ['SaaS', 'Éducation', 'Scolarité', 'ERP'],
      features: [
        'Gestion des inscriptions & fiches élèves',
        'Suivi des frais de scolarité & reçus Mobile Money',
        'Bulletins de notes & relevés automatiques',
        'Gestion des présences & espace direct pour parents'
      ]
    },
    {
      id: 'pnd-beauty',
      icon: Scissors,
      name: 'PndTech Beauty',
      tagline: 'Gestion & Réservation en ligne pour salons et instituts',
      status: 'Lancement Prochain',
      statusBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      description: 'Solution complète pour salons de coiffure, barbiers, coiffeuses et instituts de beauté avec lien public de réservation directe permettant aux clients de réserver 24/7.',
      tags: ['SaaS', 'Beauty', 'Booking', 'Planning'],
      features: [
        'Lien public personnalisé de réservation en ligne',
        'Agenda d\'équipe & gestion des créneaux',
        'Rappels automatiques de RDV sans appels',
        'Encaissement & rapports de chiffre d\'affaires'
      ]
    },
    {
      id: 'pnd-transport',
      icon: Truck,
      name: 'PndTech Transport',
      tagline: 'Logiciel B2B de gestion de flotte & transporteurs',
      status: 'En Développement',
      statusBg: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
      description: 'Issu de notre savoir-faire dans le transport, un outil B2B puissant dédié aux compagnies de transport et gestionnaires de flottes pour piloter leurs lignes et véhicules.',
      tags: ['B2B SaaS', 'Transport', 'Flotte', 'Billetterie'],
      features: [
        'Gestion de la flotte de véhicules & maintenance',
        'Billetterie B2B & suivi des lignes de transport',
        'Gestion des chauffeurs, affectations & carburant',
        'Tableau de bord de rentabilité par trajet'
      ]
    },
    {
      id: 'senegal-immo',
      icon: Building,
      name: 'Sénégal Immo',
      tagline: 'Portail immobilier & logiciel pour agences',
      status: 'Lancement Prochain',
      statusBg: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
      description: 'Location, vente et colocation au Sénégal avec des agences vérifiées. Chaque agence dispose d’une vitrine publique et d’un espace de gestion complet pour ses annonces, ses prospects et ses contrats.',
      tags: ['SaaS', 'Immobilier', 'Agences', 'Portail'],
      features: [
        'Vitrine agence avec logo, WhatsApp et annonces certifiées',
        'Suivi des prospects par étape & agenda des visites',
        'Gestion d’équipe : invitations et rôles des agents',
        'Contrats de bail et mandats de vente en PDF'
      ]
    }
  ]

  return (
    <div className="space-y-24 pb-20 pt-10">

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium">
            <Package className="w-4 h-4" />
            <span>Produits SaaS PndTech</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-heading tracking-tight">
            Des logiciels métiers conçus pour transformer vos secteurs d’activité.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Découvrez notre gamme de solutions SaaS verticales pensées pour simplifier le quotidien des garages, écoles, salons, transporteurs et agences.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsList.map((prod) => {
            const IconComponent = prod.icon
            return (
              <div
                key={prod.id}
                className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl space-y-8"
              >
                <div className="space-y-6">

                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-mono px-3 py-1 rounded-full border ${prod.statusBg}`}>
                      {prod.status}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white font-heading">
                      {prod.name}
                    </h2>
                    <p className="text-amber-400 text-sm font-medium">
                      {prod.tagline}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {prod.tags.map((t, tIdx) => (
                      <span key={tIdx} className="text-xs bg-slate-950 text-slate-400 px-2.5 py-1 rounded-md border border-slate-800 font-mono">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-slate-800 pt-4 space-y-2.5">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">Fonctionnalités clés :</span>
                    {prod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-4 border-t border-slate-800">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white font-semibold text-sm transition-all"
                  >
                    <span>Demander un accès / Bêta</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Custom Software CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 className="text-2xl font-bold text-white font-heading">Besoin d’un SaaS métier spécifique ?</h3>
          <p className="text-slate-300 text-sm">Nous développons des plateformes privées ou multi-locataires sur-mesure adaptées à votre marché.</p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold text-sm shadow-lg shadow-orange-500/20"
            >
              <span>Co-créer un projet SaaS avec PndTech</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
