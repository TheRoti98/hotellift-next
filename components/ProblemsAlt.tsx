'use client'

import { useEffect, useRef, useState } from 'react'
import { Reveal } from './Reveal'

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

function Count({ to, unit = '', decimals = 0, delay = 0, visible }: {
  to: number; unit?: string; decimals?: number; delay?: number; visible: boolean
}) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => {
      let v = 0
      const id = setInterval(() => {
        v = Math.min(v + to / 55, to)
        setVal(parseFloat(v.toFixed(decimals)))
        if (v >= to) clearInterval(id)
      }, 18)
    }, delay)
    return () => clearTimeout(t)
  }, [visible, to, decimals, delay])
  return <>{val.toFixed(decimals)}{unit}</>
}

type Stat = { value: string; animated?: { to: number; unit: string; decimals?: number }; label: string; sub?: string; variant?: 'bad' | 'good' }

const cards: {
  num: string
  title: string
  kicker: string
  stats: Stat[]
}[] = [
  {
    num: '01',
    title: 'Prowizje OTA',
    kicker: 'Booking.com zarabia na Twoich gościach przy każdej rezerwacji. Twoja strona pozyskuje tego samego gościa czterokrotnie taniej.',
    stats: [
      { value: '18%', animated: { to: 18, unit: '%' }, label: 'prowizji od każdej rezerwacji', sub: 'standardowa stawka Booking.com', variant: 'bad' },
      { value: '68%', animated: { to: 68, unit: '%' }, label: 'rezerwacji trafia przez OTA', sub: 'zamiast bezpośrednio do Ciebie', variant: 'bad' },
      { value: '4×', animated: { to: 4, unit: '×' }, label: 'tańsze pozyskanie bezpośrednie', sub: 'własna strona vs. OTA', variant: 'good' },
    ],
  },
  {
    num: '02',
    title: 'Puste pokoje poza sezonem',
    kicker: 'Hotele bez aktywnych kampanii mają 20-30% obłożenia w sezonie niskim. Przy dobrym marketingu to 40-50%.',
    stats: [
      { value: '25%', animated: { to: 25, unit: '%' }, label: 'obłożenie bez marketingu', sub: 'sezon niski, typowy obiekt', variant: 'bad' },
      { value: '45%', animated: { to: 45, unit: '%' }, label: 'realne obłożenie', sub: 'przy aktywnych kampaniach', variant: 'good' },
      { value: '5 mies.', label: 'trwa sezon niski', sub: 'październik - marzec' },
    ],
  },
  {
    num: '03',
    title: 'Brak grup i eventów',
    kicker: 'Konferencje, szkolenia, eventy - najwyższa marża w hotelarstwie. Większość obiektów na nie czeka zamiast je aktywnie sprzedawać.',
    stats: [
      { value: '4%', animated: { to: 4, unit: '%' }, label: 'przychodu to realny potencjał B2B', sub: 'który większość obiektów pomija', variant: 'bad' },
      { value: '2.4×', animated: { to: 2.4, unit: '×', decimals: 1 }, label: 'wyższy przychód z grupy', sub: 'vs. ta sama liczba gości FIT', variant: 'good' },
      { value: '+40%', label: 'wyższa marża na eventach', sub: 'konferencje, szkolenia, wesela', variant: 'good' },
    ],
  },
  {
    num: '04',
    title: 'Przepalony budżet reklamowy',
    kicker: 'Małe hotele wydają 2-3 tys. zł miesięcznie na reklamy. Ponad połowa z tego nie przynosi żadnych rezerwacji.',
    stats: [
      { value: '55%', animated: { to: 55, unit: '%' }, label: 'budżetu nie wraca w rezerwacjach', sub: 'średnia w branży hotelowej', variant: 'bad' },
      { value: '2-3k', label: 'zł/mies. wydaje mały hotel', sub: 'bez kontroli nad wynikami', variant: 'bad' },
      { value: '2×', animated: { to: 2, unit: '×' }, label: 'więcej rezerwacji z tego samego budżetu', sub: 'przy dobrym targetowaniu', variant: 'good' },
    ],
  },
]

function StatTile({ stat, visible, delay }: { stat: Stat; visible: boolean; delay: number }) {
  const v = stat.variant ?? 'neutral'

  const tileBg =
    v === 'bad' ? 'rgba(220,38,38,0.06)' :
    v === 'good' ? 'linear-gradient(135deg,rgba(3,239,35,0.07),rgba(0,187,245,0.07))' :
    'rgba(60,0,128,0.04)'

  const tileBorder =
    v === 'bad' ? '1px solid rgba(220,38,38,0.16)' :
    v === 'good' ? '1px solid rgba(3,239,35,0.2)' :
    '1px solid rgba(60,0,128,0.08)'

  const numClass =
    v === 'good' ? 'gradient-text' :
    v === 'bad' ? '' : ''

  const numColor =
    v === 'bad' ? '#dc2626' : '#3c0080'

  return (
    <div
      className="rounded-xl p-3 md:p-4 flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-1"
      style={{ background: tileBg, border: tileBorder }}
    >
      <span
        className={`font-black leading-none tabular-nums inline-block shrink-0 ${numClass}`}
        style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)', ...(v !== 'good' ? { color: numColor } : {}) }}
      >
        {stat.animated && visible ? (
          <Count to={stat.animated.to} unit={stat.animated.unit} decimals={stat.animated.decimals ?? 0} delay={delay} visible={visible} />
        ) : stat.value}
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="text-[12px] md:text-[13px] font-bold text-midnight leading-tight">{stat.label}</span>
        {stat.sub && <span className="text-[11px] md:text-[12px] text-text-main/60 leading-tight hidden md:block">{stat.sub}</span>}
      </div>
    </div>
  )
}

function ProblemCard({ card }: { card: typeof cards[0] }) {
  const { ref, visible } = useVisible()
  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-0.5"
      style={{ boxShadow: '0 0 0 1px rgba(60,0,128,0.08), 0 2px 16px rgba(60,0,128,0.04)' }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 0 1.5px rgba(3,239,35,0.25), 0 8px 28px rgba(60,0,128,0.08)' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 0 1px rgba(60,0,128,0.08), 0 2px 16px rgba(60,0,128,0.04)' }}
    >
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-black uppercase tracking-[0.15em] text-violet/50">{card.num}</span>
          <h3 className="font-black text-midnight" style={{ fontSize: '1.1rem' }}>{card.title}</h3>
        </div>
        <p className="text-[14px] text-text-main/75 leading-relaxed">{card.kicker}</p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-2.5">
        {card.stats.map((stat, i) => (
          <StatTile key={i} stat={stat} visible={visible} delay={i * 150} />
        ))}
      </div>
    </div>
  )
}

export function ProblemsAlt() {
  return (
    <section className="bg-offwhite py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="mb-14">
            <p className="section-tag">Diagnoza</p>
            <h2 className="font-black text-violet leading-tight tracking-tight mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              Gdzie konkretnie<br />tracisz pieniądze?
            </h2>
            <p className="text-text-main/60 max-w-lg text-[15px] leading-relaxed">
              Nie w jednym miejscu. W czterech. I każde z nich da się zatrzymać.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.num} delay={i * 60}>
              <ProblemCard card={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
