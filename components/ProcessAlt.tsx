'use client'

import { useEffect, useRef, useState } from 'react'

function useVisible(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return { ref, visible }
}

const phases = [
  {
    period: 'Miesiąc 1',
    bg: '30 DNI',
    title: 'Fundament',
    color: '#3c0080',
    items: [
      'Warsztat strategiczny (pełny dzień)',
      'Audyt techniczny strony i kampanii',
      'Setup kampanii Google Ads + Meta',
      'Plan działań i KPI na 3 miesiące',
    ],
    result: 'Pierwsze wyniki w ciągu 30 dni',
  },
  {
    period: 'Co miesiąc',
    bg: 'WZROST',
    title: 'Systematyczny wzrost',
    color: '#0077aa',
    items: [
      'Cotygodniowa optymalizacja kampanii',
      'Konsultacje i planowanie strategiczne',
      'Praca z contentem i social media',
      'Optymalizacja procesów wewnętrznych',
    ],
    result: 'Systematyczny wzrost rezerwacji bezpośrednich',
  },
  {
    period: 'Co kwartał',
    bg: 'ROZWÓJ',
    title: 'Niezależny zespół',
    badge: 'PRO',
    color: '#00916e',
    items: [
      'Dedykowany dzień pracy u Ciebie na miejscu',
      'Nagrywanie contentu wideo',
      'Szkolenia zespołu z AI i narzędzi',
      'Strategia na kolejne 3 miesiące',
    ],
    result: 'Niezależny, kompetentny zespół',
  },
]

function PhaseRow({ phase, index }: { phase: typeof phases[0]; index: number }) {
  const { ref, visible } = useVisible()
  const isLast = index === phases.length - 1

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: `opacity 0.65s ease ${index * 150}ms, transform 0.65s ease ${index * 150}ms`,
      }}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-[220px_1fr] gap-0 overflow-hidden">

        {/* Left: period + connecting line */}
        <div className="relative flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 pt-0 md:pt-2 pb-4 md:pb-0 pr-8 md:pr-10">
          {/* Period badge */}
          <div
            className="flex-shrink-0 px-4 py-2 rounded-full border text-[11px] font-black uppercase tracking-[0.14em] z-10"
            style={{
              borderColor: `${phase.color}30`,
              color: phase.color,
              background: `${phase.color}0a`,
            }}
          >
            {phase.period}
          </div>
          {phase.badge && (
            <span className="text-[10px] font-black uppercase tracking-widest gradient-text md:mt-2">
              {phase.badge}
            </span>
          )}

          {/* Connector line - desktop only */}
          {!isLast && (
            <div
              className="hidden md:block absolute left-[1.6rem] top-12 w-px"
              style={{
                height: 'calc(100% + 2rem)',
                background: `linear-gradient(to bottom, ${phase.color}40, transparent)`,
              }}
            />
          )}
        </div>

        {/* Right: content card */}
        <div
          className="relative rounded-2xl overflow-hidden border border-gray1 bg-white mb-6 md:mb-8 group hover:border-violet/20 transition-colors"
        >
          {/* Big background text */}
          <div
            className="absolute right-4 top-1/2 -translate-y-1/2 font-black leading-none pointer-events-none select-none"
            style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              color: `${phase.color}07`,
              letterSpacing: '-0.04em',
            }}
          >
            {phase.bg}
          </div>

          <div className="relative p-6 md:p-8">
            <h3
              className="font-black text-midnight leading-tight tracking-tight mb-5"
              style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)' }}
            >
              {phase.title}
            </h3>

            {/* Items as chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {phase.items.map(item => (
                <span
                  key={item}
                  className="text-[13px] text-text-main/65 bg-offwhite border border-gray1 rounded-lg px-3 py-1.5 leading-snug"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Result */}
            <div
              className="inline-flex items-center gap-2 text-[13px] font-semibold rounded-full px-4 py-2"
              style={{ background: `${phase.color}0d`, color: phase.color }}
            >
              <span style={{ color: phase.color }}>→</span>
              {phase.result}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export function ProcessAlt() {
  const { ref, visible } = useVisible(0.08)

  return (
    <section className="bg-offwhite py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 md:px-8">

        <div
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="section-tag mb-4">Proces</p>
          <h2
            className="font-black text-violet leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Jak wygląda<br />współpraca w praktyce?
          </h2>
          <p className="text-text-main/55 text-[15px] leading-relaxed mb-14 max-w-lg">
            Trzy etapy, każdy z mierzalnym efektem. Pierwsze wyniki w ciągu 30 dni.
          </p>
        </div>

        <div>
          {phases.map((phase, i) => (
            <PhaseRow key={phase.period} phase={phase} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
