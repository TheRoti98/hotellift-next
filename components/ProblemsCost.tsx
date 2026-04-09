'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
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

function CountUp({ to, visible, delay = 0 }: { to: number; visible: boolean; delay?: number }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => {
      let v = 0
      const id = setInterval(() => {
        v = Math.min(v + to / 60, to)
        setVal(Math.round(v))
        if (v >= to) clearInterval(id)
      }, 16)
    }, delay)
    return () => clearTimeout(t)
  }, [visible, delay]) // only animate on first scroll-in, not on every `to` change
  return <>{val.toLocaleString('pl-PL')}</>
}

function fmt(n: number) {
  return Math.round(n).toLocaleString('pl-PL')
}

function Slider({ label, value, min, max, step, unit, onChange }: {
  label: string; value: number; min: number; max: number; step: number; unit: string; onChange: (v: number) => void
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-baseline justify-between">
        <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-text-main/45">{label}</span>
        <span className="font-black text-midnight tabular-nums text-[1.25rem]">
          {value.toLocaleString('pl-PL')} {unit}
        </span>
      </div>
      <div className="relative h-2.5 rounded-full" style={{ background: 'rgba(60,0,128,0.08)' }}>
        <div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ width: `${pct}%`, background: 'linear-gradient(90deg,#03ef23,#00bbf5)' }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 shadow"
          style={{ left: `calc(${pct}% - 10px)`, borderColor: '#3c0080', boxShadow: '0 2px 8px rgba(60,0,128,0.2)' }}
        />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: 10 }}
        />
      </div>
      <div className="flex justify-between text-[11px] text-text-main/30 tabular-nums">
        <span>{min.toLocaleString('pl-PL')} {unit}</span>
        <span>{max.toLocaleString('pl-PL')} {unit}</span>
      </div>
    </div>
  )
}

function calc(rooms: number, price: number) {
  const base      = rooms * price * 365 * 0.58
  // OTA: 68% rezerwacji przez OTA, 18% prowizji
  const ota       = Math.round(base * 0.68 * 0.18)
  // Off-season: 150 dni × delta 12pp obłożenia × obniżona cena ~80%
  const offseason = Math.round(rooms * price * 0.8 * 150 * 0.12)
  // Grupy: ~4% rocznego przychodu to potencjał grup którego nie ma
  const groups    = Math.round(base * 0.04)
  // Reklamy: ok. 5% budżetu reklamowego (szacowane ~6% rev) przepalone
  const ads       = Math.round(base * 0.06 * 0.55)
  const total    = ota + offseason + groups + ads
  return [
    { label: 'Prowizje OTA', amount: ota },
    { label: 'Puste pokoje poza sezonem', amount: offseason },
    { label: 'Brak grup i eventów', amount: groups },
    { label: 'Przepalony budżet', amount: ads },
    { label: '_total', amount: total },
  ]
}

const DEFAULTS = { rooms: 15, price: 280 }

export function ProblemsCost() {
  const { ref, visible } = useVisible()
  const [animated, setAnimated] = useState(false)
  const [rooms, setRooms] = useState(15)
  const [price, setPrice] = useState(280)

  // After initial animation completes, switch to live numbers
  useEffect(() => {
    if (visible && !animated) {
      const t = setTimeout(() => setAnimated(true), 1800)
      return () => clearTimeout(t)
    }
  }, [visible, animated])

  const sources = useMemo(() => calc(rooms, price), [rooms, price])
  const defaultSources = useMemo(() => calc(DEFAULTS.rooms, DEFAULTS.price), [])

  const total = sources[4].amount
  const defaultTotal = defaultSources[4].amount
  const monthly = Math.round(total / 12)

  const show = (live: number, init: number, delay: number) =>
    animated
      ? fmt(live)
      : visible
        ? <CountUp to={init} visible={visible} delay={delay} />
        : '0'

  return (
    <section className="bg-offwhite pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="w-full h-px bg-violet/8 mb-16 md:mb-20" />

        <div ref={ref} className="flex flex-col items-center text-center">

          <Reveal>
            <p className="section-tag mb-4">Twój obiekt</p>
          </Reveal>

          {/* Sliders */}
          <Reveal delay={60} className="w-full max-w-3xl">
            <div className="relative flex flex-col gap-6 mb-12 md:mb-14">

              <Slider label="Liczba pokoi" value={rooms} min={10} max={200} step={5} unit="pokoi" onChange={setRooms} />
              <Slider label="Średnia cena za noc" value={price} min={100} max={900} step={10} unit="zł" onChange={setPrice} />
            </div>
          </Reveal>


          {/* Big number */}
          <Reveal delay={140}>
            <div className="mb-3">
              <p className="section-tag mb-3">Łączny koszt</p>
              <span
                className="font-black text-midnight tabular-nums leading-none"
                style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}
              >
                {show(total, defaultTotal, 200)}
                <span
                  className="font-black text-violet/30"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', marginLeft: '0.2em' }}
                >
                  zł
                </span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-text-main/50 text-[15px] mb-14 md:mb-16 max-w-sm leading-relaxed">
              tyle tracisz rocznie przez te cztery obszary razem
            </p>
          </Reveal>

          {/* Bar + labels */}
          <Reveal delay={280} className="w-full max-w-3xl">
            <div>

              <div className="flex rounded-full overflow-hidden h-2 mb-8 gap-px">
                {sources.slice(0, 4).map((s, i) => (
                  <div
                    key={i}
                    className="transition-all duration-500"
                    style={{
                      background: i === 0
                        ? 'linear-gradient(90deg,#dc2626,#ef4444)'
                        : `rgba(220,38,38,${0.75 - i * 0.15})`,
                      width: `${(s.amount / total) * 100}%`,
                    }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
                {sources.slice(0, 4).map((s, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <span
                      className="font-black tabular-nums text-midnight"
                      style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)' }}
                    >
                      {show(s.amount, defaultSources[i].amount, 400 + i * 100)} zł
                    </span>
                    <span className="text-[12px] text-text-main/50 leading-tight text-center">{s.label}</span>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>

          {/* Closing line */}
          <Reveal delay={400}>
            <p
              className="mt-12 md:mt-14 font-semibold text-midnight/60 leading-snug max-w-md"
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)' }}
            >
              Każdy miesiąc bez zmiany to kolejne{' '}
              <span className="text-midnight font-black">
                {show(monthly, Math.round(defaultTotal / 12), 600)} zł
              </span>{' '}
              zostawione na stole.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
