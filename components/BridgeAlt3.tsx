'use client'

import { useEffect, useRef, useState } from 'react'

function useVisible() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return { ref, visible }
}

const lines = [
  {
    num: '01',
    headline: 'Przestajesz płacić OTA za własnych gości.',
    body: 'Kampanie które kierują ruch bezpośrednio na Twoją stronę. Gość rezerwuje u Ciebie - nie przez pośrednika.',
  },
  {
    num: '02',
    headline: 'Sezon nie kończy się we wrześniu.',
    body: 'Aktywna strategia przez 12 miesięcy. Grupy, pakiety, kampanie off-season. Pokoje zarabiają cały rok.',
  },
  {
    num: '03',
    headline: 'Twój zespół robi więcej. Bez nowych etatów.',
    body: 'AI które przejmuje powtarzalne zadania recepcji, marketingu i sprzedaży. 15 minut zamiast 2 dni.',
  },
]

function Line({ line, index }: { line: typeof lines[0]; index: number }) {
  const { ref, visible } = useVisible()

  return (
    <div
      ref={ref}
      className="group relative flex flex-col md:flex-row md:items-start gap-6 md:gap-10 py-10 md:py-12 border-b border-white/[0.07] last:border-b-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: `opacity 0.65s ease ${index * 140}ms, transform 0.65s ease ${index * 140}ms`,
      }}
    >
      {/* Left accent on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to bottom, #03ef23, #00bbf5)' }}
      />

      {/* Big step number */}
      <div className="shrink-0 pl-3 md:pl-4">
        <span
          className="gradient-text font-black tabular-nums leading-none inline-block"
          style={{ fontSize: 'clamp(2.8rem, 5vw, 3.8rem)' }}
        >
          {line.num}
        </span>
      </div>

      {/* Text */}
      <div className="pl-3 md:pl-0 flex flex-col gap-3 pt-1">
        <h3
          className="font-black text-white leading-tight tracking-tight"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)' }}
        >
          {line.headline}
        </h3>
        <p className="text-white/40 text-[14px] leading-relaxed max-w-xl">
          {line.body}
        </p>
      </div>
    </div>
  )
}

export function BridgeAlt3() {
  const { ref, visible } = useVisible()

  return (
    <section className="bg-midnight py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-20" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, #3c0080, transparent)' }}
      />

      <div className="relative max-w-4xl mx-auto px-5 md:px-8">

        {/* Header z pomostem wbudowanym w copy */}
        <div
          ref={ref}
          className="mb-16 md:mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/25 mb-5">Dobra wiadomość</p>
          <h2
            className="font-black text-white leading-tight tracking-tight mb-5"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Wszystkie te straty<br />
            <span className="gradient-text">da się zatrzymać.</span>
          </h2>
          {/* Pomost - nie pyta "jak", tylko otwiera */}
          <p
            className="font-semibold leading-snug max-w-lg"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.35)' }}
          >
            Nie przez magię. Przez trzy konkretne rzeczy które robimy inaczej niż wszyscy.
          </p>
        </div>

        <div>
          {lines.map((line, i) => (
            <Line key={i} line={line} index={i} />
          ))}
        </div>

        <div
          className="mt-14 md:mt-16"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 700ms',
          }}
        >
          <a
            href="#wyniki"
            className="inline-flex items-center gap-3 text-white/30 hover:text-white/60 transition-colors"
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em]">Przekonaj się na wynikach</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-gradient opacity-20" />
    </section>
  )
}
