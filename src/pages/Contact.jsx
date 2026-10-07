import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Clock,
  Sparkles,
  HelpCircle
} from 'lucide-react'
import FounderCard from '../components/FounderCard'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Développement Web',
    budget: '< 5 000 €',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  const faqs = [
    {
      q: 'Combien de temps prend un projet avec PndTech ?',
      a: 'Selon la complexité, un projet web ou mobile MVP prend généralement entre 3 et 8 semaines de développement.'
    },
    {
      q: 'Proposez-vous une maintenance après la livraison ?',
      a: 'Oui, tous nos contrats incluent une période de garantie post-livraison ainsi que des formules de maintenance préventive et évolutive.'
    },
    {
      q: 'Comment s\'effectue le paiement ?',
      a: 'Paiement échelonné par jalons (ex: 30% d\'acompte, 40% à la livraison de la version Bêta, 30% à la mise en production).'
    }
  ]

  return (
    <div className="space-y-24 pb-20 pt-10">

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium">
            <MessageSquare className="w-4 h-4" />
            <span>Contact & Devis</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-heading tracking-tight">
            Parlons de votre futur projet.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Vous avez une idée, un cahier des charges ou un besoin d'accompagnement ? Notre équipe vous répond sous 24h.
          </p>
        </div>
      </section>

      {/* Main Content Form + Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white font-heading">
                Envoyez-nous un message
              </h2>
              <p className="text-slate-400 text-sm">
                Remplissez le formulaire ci-dessous pour recevoir une estimation rapide.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Merci pour votre message !</h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
                  Votre demande a bien été transmise à notre équipe technique. Nous vous recontacterons sous 24 heures ouvrées.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: '', email: '', phone: '', serviceType: 'Développement Web', budget: '< 5 000 €', message: '' })
                  }}
                  className="text-xs font-semibold text-amber-400 hover:underline pt-2 inline-block"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Votre nom & prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ex: Mamadou Ndiaye"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Adresse email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ex: m.ndiaye@entreprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Téléphone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="ex: +221 77 000 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Type de besoin
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                    >
                      <option value="Développement Web">Développement Web</option>
                      <option value="Application Mobile">Application Mobile</option>
                      <option value="Solution SaaS">Solution SaaS</option>
                      <option value="Logiciel Métier">Logiciel Métier sur-mesure</option>
                      <option value="Conseil / Audit">Conseil & Audit IT</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Message / Description du projet *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Décrivez brièvement vos objectifs, fonctionnalités clés et délais souhaités..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold text-base hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer ma demande</span>
                </button>

              </form>
            )}
          </div>

          {/* Details & Founder Card */}
          <div className="lg:col-span-5 space-y-8">

            <FounderCard />

            {/* Offer Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500/15 via-slate-900 to-slate-950 border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs font-mono uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Offre Spéciale</span>
              </div>
              <h4 className="text-lg font-bold text-white font-heading">Session de cadrage gratuite (30 min)</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Réservez un échange en visioconférence avec un de nos ingénieurs pour clarifier l'architecture, la faisabilité et le coût de votre projet.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs uppercase">
            <HelpCircle className="w-4 h-4" />
            <span>Foire aux questions</span>
          </div>
          <h2 className="text-3xl font-bold text-white font-heading">
            Questions Fréquentes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white font-heading">{faq.q}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
