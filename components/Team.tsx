// UWAGA: Skopiuj zdjęcia do folderu public/:
// cp "C:/Users/rotip/Projects/HOTEL LIFT/falba.png" "C:/Users/rotip/Projects/hotellift-next/public/falba.png"
// cp "C:/Users/rotip/Projects/HOTEL LIFT/hubi2.jpg" "C:/Users/rotip/Projects/hotellift-next/public/hubi2.jpg"

import Image from 'next/image'
import { Reveal } from './Reveal'

const members = [
  {
    name: 'Łukasz Falba',
    role: 'Strategy & Performance',
    photo: '/falba.png',
    quote: 'Rozwiązuję problemy, których nie widać gołym okiem.',
    bio: '10 lat w reklamach online. Pracował w Polsce, Niemczech, UK, Brazylii i Afryce Zachodniej. Budował i ratował agencje. Wygenerował ponad 20 mln zł przychodów z reklam w ostatnich 2 latach.',
    stats: [
      { num: '10 lat', label: 'doświadczenia' },
      { num: '50+', label: 'obiektów HORECA' },
      { num: '2000h+', label: 'szkoleń' },
    ],
  },
  {
    name: 'Hubert Hurban',
    role: 'Content & AI',
    photo: '/hubi2.jpg',
    quote: 'Skupiam się na content marketingu, wykorzystaniu AI i projektowaniu efektywnych procesów.',
    bio: 'Na własnych social mediach wygenerował 10 mln+ zasięgu na Instagramie. Projektuje automatyzacje AI oszczędzające tysiące złotych dziennie. Specjalizacja: content który faktycznie sprzedaje.',
    stats: [
      { num: '10M+', label: 'zasięgu na IG', highlight: true },
      { num: '10 lat', label: 'doświadczenia' },
      { num: '8 zł', label: 'koszt leda' },
    ],
  },
]

const globalStats = [
  { num: '24+', label: 'lata łącznego doświadczenia' },
  { num: '300+', label: 'zadowolonych klientów' },
  { num: '20M+', label: 'zł budżetu reklamowego' },
  { num: '50+', label: 'obiektów HORECA' },
  { num: '2014', label: 'rok założenia' },
]

export function Team() {
  return (
    <section id="zespol" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <p className="section-tag">Zespół</p>
          <h2 className="font-black text-violet leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Kto za tym stoi?
          </h2>
          <p className="text-text-main/60 text-[15px] leading-relaxed mb-14 max-w-xl">
            24 lata łącznego doświadczenia w marketingu, hotelarstwie i AI. Nie jesteśmy agencją pełną juniorów uczących się na Twoim obiekcie.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <div className="group border border-gray1 rounded-2xl overflow-hidden hover:border-violet/20 transition-colors bg-white">
                <div className="grid grid-cols-[200px_1fr] md:grid-cols-[220px_1fr]">
                  {/* Photo */}
                  <div className="relative bg-offwhite overflow-hidden">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      width={220}
                      height={340}
                      className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                      style={{ minHeight: '280px' }}
                    />
                    {/* right fade */}
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-white" />
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-violet/60 mb-1">{m.role}</div>
                      <h3 className="font-black text-midnight text-xl mb-4 leading-tight">{m.name}</h3>
                      <blockquote className="text-text-main/70 text-[13px] italic leading-relaxed border-l-2 border-violet/20 pl-3 mb-4">
                        &ldquo;{m.quote}&rdquo;
                      </blockquote>
                      <p className="text-text-main/55 text-[13px] leading-relaxed">{m.bio}</p>
                    </div>
                    <div className="flex gap-4 pt-4 mt-4 border-t border-gray1 flex-wrap">
                      {m.stats.map(s => (
                        <div key={s.label}>
                          <div className={`font-black text-lg leading-none mb-0.5 ${'highlight' in s && s.highlight ? 'text-brand-green' : 'text-violet'}`}>{s.num}</div>
                          <div className="text-[10px] font-medium text-gray3 uppercase tracking-wider">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Global stats bar */}
        <Reveal delay={200}>
          <div className="bg-brand-gradient rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {globalStats.map((s) => (
                <div key={s.label}>
                  <div className="font-black text-midnight leading-none mb-1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                    {s.num}
                  </div>
                  <div className="text-midnight/60 text-[11px] font-semibold uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
