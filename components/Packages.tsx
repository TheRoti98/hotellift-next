'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Reveal } from './Reveal'

export function Packages() {
  const router = useRouter()

  // Video form
  const [videoEmail, setVideoEmail] = useState('')
  const [videoLoading, setVideoLoading] = useState(false)

  async function handleVideoSubmit(e: React.FormEvent) {
    e.preventDefault()
    setVideoLoading(true)
    // TODO: zapisz email do backendu
    await new Promise(r => setTimeout(r, 600))
    router.push('/dziekujemy')
  }

  // Consultation form
  const [consultSubmitted, setConsultSubmitted] = useState(false)
  const [consultLoading, setConsultLoading] = useState(false)

  async function handleConsultSubmit(e: React.FormEvent) {
    e.preventDefault()
    setConsultLoading(true)
    // TODO: zapisz do backendu
    await new Promise(r => setTimeout(r, 800))
    setConsultLoading(false)
    setConsultSubmitted(true)
  }

  return (
    <section id="pakiety" className="bg-offwhite py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <Reveal>
          <p className="section-tag mb-3">Zacznij tutaj</p>
          <h2
            className="font-black text-violet leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Wybierz swój następny krok
          </h2>
          <p className="text-text-main/55 text-[15px] leading-relaxed mb-14 max-w-lg">
            Nie wiesz jeszcze czy to dla Ciebie? Zacznij od wideo. Jesteś gotowy? Umów konsultację.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* --- WIDEO --- */}
          <Reveal>
            <div className="bg-midnight rounded-2xl overflow-hidden border border-white/[0.08] flex flex-col h-full relative">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-40" />

              <div className="p-8 flex flex-col flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-green/20 bg-brand-green/8 mb-6 self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-green/80">Darmowe</span>
                </div>

                <h3 className="font-black text-white leading-tight tracking-tight mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                  Obejrzyj darmowe wideo
                </h3>
                <p className="gradient-text font-bold text-[15px] mb-5 leading-snug">
                  Co ssie w Twoim hotelu i jak to naprawić
                </p>
                <p className="text-white/35 text-[14px] leading-relaxed mb-8 flex-1">
                  12 minut. Łukasz tłumaczy dlaczego większość hoteli przepala budżet na reklamy — i co konkretnie trzeba zmienić żeby to naprawić.
                </p>

                <form onSubmit={handleVideoSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={videoEmail}
                    onChange={e => setVideoEmail(e.target.value)}
                    placeholder="Twój e-mail"
                    className="w-full bg-white/[0.07] border border-white/10 rounded-xl text-white placeholder:text-white/20 px-4 py-3.5 text-[14px] focus:outline-none focus:border-violet/50 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={videoLoading}
                    className="gradient-btn font-bold text-[15px] py-4 rounded-xl shadow-lg shadow-brand-green/10 disabled:opacity-60 transition-opacity"
                  >
                    {videoLoading ? 'Przekierowuję...' : 'Obejrzyj wideo →'}
                  </button>
                  <p className="text-center text-[11px] text-white/20">
                    Bez spamu. Jeden mail z linkiem do wideo.
                  </p>
                </form>
              </div>
            </div>
          </Reveal>

          {/* --- KONSULTACJA --- */}
          <Reveal delay={100}>
            <div className="bg-white rounded-2xl border border-gray1 overflow-hidden flex flex-col h-full">
              <div className="p-8 flex flex-col flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet/20 bg-violet/[0.05] mb-6 self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet" />
                  <span className="text-[10px] font-black uppercase tracking-[0.14em] text-violet/70">Bezpłatna</span>
                </div>

                <h3 className="font-black text-midnight leading-tight tracking-tight mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                  Bezpłatna konsultacja
                </h3>
                <p className="text-text-main/55 text-[15px] mb-5 leading-snug">
                  30-minutowa analiza Twojego obiektu
                </p>

                {consultSubmitted ? (
                  <div className="flex-1 flex flex-col items-center justify-center py-10 text-center">
                    <div
                      className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg,#03ef23,#00bbf5)' }}
                    >
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M4 11l5 5L18 6" stroke="#05000a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="font-black text-midnight text-xl mb-2">Gotowe!</h4>
                    <p className="text-text-main/50 text-[14px]">Odezwiemy się w ciągu 24 godzin roboczych.</p>
                  </div>
                ) : (
                  <form onSubmit={handleConsultSubmit} className="flex flex-col gap-3.5 flex-1">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-text-main/40">Imię i nazwisko</label>
                        <input
                          type="text"
                          required
                          placeholder="Jan Kowalski"
                          className="border border-gray1 rounded-xl px-4 py-3 text-[14px] text-text-main placeholder:text-gray3 focus:outline-none focus:border-violet/40 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-text-main/40">Nazwa obiektu</label>
                        <input
                          type="text"
                          required
                          placeholder="Hotel Górski"
                          className="border border-gray1 rounded-xl px-4 py-3 text-[14px] text-text-main placeholder:text-gray3 focus:outline-none focus:border-violet/40 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-text-main/40">E-mail</label>
                        <input
                          type="email"
                          required
                          placeholder="jan@hotel.pl"
                          className="border border-gray1 rounded-xl px-4 py-3 text-[14px] text-text-main placeholder:text-gray3 focus:outline-none focus:border-violet/40 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-text-main/40">Telefon</label>
                        <input
                          type="tel"
                          placeholder="+48 600 000 000"
                          className="border border-gray1 rounded-xl px-4 py-3 text-[14px] text-text-main placeholder:text-gray3 focus:outline-none focus:border-violet/40 transition-colors"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={consultLoading}
                      className="gradient-btn font-bold text-[15px] py-4 rounded-xl shadow-lg shadow-brand-green/10 mt-auto disabled:opacity-60 transition-opacity"
                    >
                      {consultLoading ? 'Wysyłamy...' : 'Umów bezpłatną konsultację →'}
                    </button>
                    <p className="text-center text-[11px] text-text-main/30">
                      Ograniczona liczba miejsc w miesiącu.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
