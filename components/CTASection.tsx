'use client'

import Image from 'next/image'
import { Reveal } from './Reveal'

export function CTASection() {
  return (
    <section id="konsultacja" className="relative overflow-hidden bg-midnight py-24 md:py-32">
      {/* Background photo */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
          alt="Hotel"
          fill
          className="object-cover"
        />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-midnight via-midnight/95 to-violet/20" />
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-40" />

      <div className="relative z-10 max-w-2xl mx-auto px-5 md:px-8 text-center">
        <Reveal>
          <p className="section-tag justify-center !text-white/40 before:bg-white/20">Zaczynamy</p>
          <h2 className="font-black text-white leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Jeden krok, żeby sprawdzić<br />
            czy <span className="gradient-text">możemy Ci pomóc</span>
          </h2>
          <p className="text-white/45 text-[15px] leading-relaxed mb-10 max-w-lg mx-auto">
            30-minutowa bezpłatna analiza. Poznasz konkretny plan działań dla swojego obiektu - i możesz z niego skorzystać niezależnie od tego czy zdecydujesz się na współpracę.
          </p>
        </Reveal>

        {/* 3 steps */}
        <Reveal delay={100}>
          <div className="flex items-start justify-center gap-0 mb-10">
            {[
              { n: '1', label: 'Bezpłatna analiza\n30 min' },
              { n: '2', label: 'Konkretny plan\ndla Twojego obiektu' },
              { n: '3', label: 'Pierwsze efekty\nw 30 dni' },
            ].map((step, i) => (
              <div key={step.n} className="flex items-start gap-0">
                <div className="flex flex-col items-center gap-1.5 px-4 md:px-6 max-w-[110px] text-center">
                  <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center font-bold text-white/60 text-[13px]">
                    {step.n}
                  </div>
                  <span className="text-[12px] text-white/35 leading-snug whitespace-pre-line">{step.label}</span>
                </div>
                {i < 2 && (
                  <span className="text-white/15 text-lg mt-2 flex-shrink-0">→</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={200}>
          <form
            onSubmit={e => e.preventDefault()}
            className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 md:p-8 text-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.1em] text-white/30 mb-1.5">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  placeholder="Jan Kowalski"
                  className="w-full bg-white/[0.07] border border-white/10 rounded-lg text-white placeholder:text-white/20 px-4 py-3 text-[14px] focus:outline-none focus:border-violet/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.1em] text-white/30 mb-1.5">
                  Nazwa obiektu
                </label>
                <input
                  type="text"
                  placeholder="Hotel Górski"
                  className="w-full bg-white/[0.07] border border-white/10 rounded-lg text-white placeholder:text-white/20 px-4 py-3 text-[14px] focus:outline-none focus:border-violet/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.1em] text-white/30 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jan@hotel.pl"
                  className="w-full bg-white/[0.07] border border-white/10 rounded-lg text-white placeholder:text-white/20 px-4 py-3 text-[14px] focus:outline-none focus:border-violet/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.1em] text-white/30 mb-1.5">
                  Telefon
                </label>
                <input
                  type="tel"
                  placeholder="+48 000 000 000"
                  className="w-full bg-white/[0.07] border border-white/10 rounded-lg text-white placeholder:text-white/20 px-4 py-3 text-[14px] focus:outline-none focus:border-violet/50 transition-colors"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full gradient-btn py-4 rounded-xl text-[15px] font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-green/15"
            >
              Umów bezpłatną konsultację
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <p className="text-center text-[12px] text-white/25 mt-3">
              Ograniczona liczba miejsc. Pracujemy tylko z obiektami, którym możemy realnie pomóc.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
