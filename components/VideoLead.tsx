'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Reveal } from './Reveal'

const consents = [
  {
    id: 'rodo',
    text: 'Wyrażam zgodę na przetwarzanie moich danych osobowych przez 4WebZones sp. z o.o. w celu kontaktu i przedstawienia oferty, zgodnie z Polityką prywatności.',
  },
  {
    id: 'telecom',
    text: 'Wyrażam zgodę na używanie telekomunikacyjnych urządzeń końcowych (np. telefonu) przez 4WebZones sp. z o.o. w celu marketingu bezpośredniego zgodnie z art. 172 ustawy Prawo telekomunikacyjne.',
  },
  {
    id: 'email',
    text: 'Wyrażam zgodę na otrzymywanie informacji handlowych drogą elektroniczną od 4WebZones sp. z o.o. na podany adres e-mail, zgodnie z ustawą o świadczeniu usług drogą elektroniczną.',
  },
]

export function VideoLead() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [checked, setChecked] = useState({ rodo: false, telecom: false, email: false })
  const allChecked = checked.rodo && checked.telecom && checked.email

  const toggle = (id: string) =>
    setChecked(prev => ({ ...prev, [id]: !prev[id as keyof typeof prev] }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!allChecked) return
    setLoading(true)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone, source: 'wideo-lead' }),
      })
    } catch {}
    router.push('/dziekujemy')
  }

  return (
    <section className="bg-offwhite py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">

          {/* TEXT - mobile: 1st, desktop: col 1 */}
          <Reveal className="order-1 md:col-start-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet/20 bg-violet/[0.06] mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.14em] text-violet/70">
                Bezpłatne wideo
              </span>
            </div>

            <h2
              className="font-black text-midnight leading-tight tracking-tight mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Dowiedz się co dokładnie<br />
              <span className="gradient-text">nie działa w Twoim hotelu</span><br />
              i jak to zmienić.
            </h2>

            <p className="text-text-main/55 text-[15px] leading-relaxed mb-8">
              12 minut. Konkretna lista błędów, które większość hoteli popełnia — i dlaczego kosztują Cię dziesiątki, setki, a może nawet miliony zł rocznie.
            </p>

            <div>
              <button
                onClick={() => setModalOpen(true)}
                className="gradient-btn font-bold text-[15px] px-8 py-4 rounded-xl shadow-lg shadow-brand-green/10"
              >
                Odbierz bezpłatne wideo →
              </button>
            </div>
          </Reveal>

          {/* MOCKUP - mobile: 2nd, desktop: col 2 */}
          <Reveal delay={120} className="order-2 md:col-start-2">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
                  alt="Hotel VSL"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(5,0,10,0.45)' }} />

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                    style={{ background: 'linear-gradient(135deg, #03ef23, #00bbf5)', boxShadow: '0 0 40px rgba(3,239,35,0.35)' }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '3px' }}>
                      <path d="M6 4l14 8-14 8V4z" fill="#05000a"/>
                    </svg>
                  </button>
                </div>

                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-bold text-white" style={{ background: 'rgba(0,0,0,0.7)' }}>
                  12:00
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 pt-10" style={{ background: 'linear-gradient(to top, rgba(5,0,10,0.9), transparent)' }}>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Łukasz Falba & Hubert Hurban</p>
                  <p className="text-white font-bold text-[13px] leading-snug">
                    Dlaczego marketing w Twoim hotelu nie działa?<br />
                    <span className="gradient-text">I jak to zmienić.</span>
                  </p>
                </div>
              </div>

              <div className="bg-midnight px-5 py-4 flex flex-col gap-2.5">
                {[
                  'Dlaczego reklamy nie przynoszą rezerwacji',
                  'Które 3 błędy przepalają budżet',
                  'Co konkretnie zmienić w 30 dni',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span
                      className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg,#03ef23,#00bbf5)' }}
                    >
                      <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4l1.8 1.8L6.5 2" stroke="#05000a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-white/50 text-[12px]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(5,0,10,0.85)' }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-midnight border border-white/10 rounded-2xl p-7 relative overflow-y-auto max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors text-xl leading-none"
            >
              ✕
            </button>
            <h3 className="font-black text-white text-xl leading-tight mb-6">
              Odbierz dostęp <span className="gradient-text">do nagrania</span>
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Twój e-mail"
                className="w-full bg-white/[0.07] border border-white/15 rounded-xl text-white placeholder:text-white/30 px-5 py-4 text-[15px] focus:outline-none focus:border-violet/50 transition-colors"
              />
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Numer telefonu"
                className="w-full bg-white/[0.07] border border-white/15 rounded-xl text-white placeholder:text-white/30 px-5 py-4 text-[15px] focus:outline-none focus:border-violet/50 transition-colors"
              />

              {/* Checkboxy zgód */}
              <div className="flex flex-col gap-3 mt-1">
                {consents.map(({ id, text }) => (
                  <label key={id} className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex-shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        required
                        checked={checked[id as keyof typeof checked]}
                        onChange={() => toggle(id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded border transition-colors ${
                          checked[id as keyof typeof checked]
                            ? 'bg-violet border-violet'
                            : 'bg-white/[0.07] border-white/30 group-hover:border-white/55'
                        }`}
                      >
                        {checked[id as keyof typeof checked] && (
                          <svg className="w-4 h-4 text-white p-0.5" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] text-white/45 leading-relaxed group-hover:text-white/65 transition-colors">
                      {text}
                    </span>
                  </label>
                ))}
              </div>

              <button
                type="submit"
                disabled={loading || !allChecked}
                className={`gradient-btn font-bold text-[15px] py-4 rounded-xl shadow-lg shadow-brand-green/10 transition-opacity mt-1 ${
                  allChecked && !loading ? 'opacity-100 cursor-pointer' : 'opacity-40 cursor-not-allowed'
                }`}
              >
                {loading ? 'Chwila...' : 'Odbierz bezpłatne wideo →'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
