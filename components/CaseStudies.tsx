'use client'

import Image from 'next/image'
import { Reveal } from './Reveal'

const cases = [
  {
    name: 'Hotel Skipper',
    stars: '★★★★',
    photo: '/skipper.jpg',
    quote: 'Przez 3 lata wydawałem 12k miesięcznie na agencje. Obłożenie dalej 45%. W 60 dni współpracy zwiększyliśmy rezerwacje bezpośrednie o 320% i obłożenie do 72%. Teraz płacę 3× mniej prowizji Bookingowi.',
    author: 'Marek K.',
    desc: 'Właściciel · 85 pokoi · Trójmiasto',
    results: [
      { num: '+320%', label: 'Rezerwacje bezpośrednie' },
      { num: '72%', label: 'Obłożenie (było 45%)' },
      { num: '4.2×', label: 'ROI kampanii' },
    ],
  },
  {
    name: 'Kadyny Folwark Hotel & SPA',
    stars: '★★★',
    photo: '/kadyny.jpg',
    quote: 'Marketing robili studenci przez praktyki. Teraz mam system AI który generuje zapytania 24/7. W nocy przychodzą rezerwacje z automatu. ROI kampanii wzrósł z 1:0,8 do 1:4,2.',
    author: 'Anna N.',
    desc: 'Dyrektor · 32 pokoje · Warmia',
    results: [
      { num: '2.8%', label: 'Konwersja (było 0.3%)' },
      { num: '+180%', label: 'Zapytania online' },
      { num: '−60%', label: 'Koszt pozyskania' },
    ],
  },
]

export function CaseStudies() {
  return (
    <section id="wyniki" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <p className="section-tag">Wyniki</p>
          <h2 className="font-black text-violet leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Hotele, które przestały<br />tracić pieniądze
          </h2>
          <p className="text-text-main/60 text-[15px] leading-relaxed mb-14 max-w-lg">
            Konkretne liczby. Prawdziwe wyniki. Zero bzdur.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <article className="group border border-gray1 rounded-2xl overflow-hidden hover:border-violet/30 transition-colors bg-white">
                {/* Photo */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={c.photo}
                    alt={c.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <span className="text-white font-bold text-[15px]">{c.name}</span>
                    <span className="text-brand-green text-[13px] tracking-wide">{c.stars}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <blockquote className="text-text-main/75 text-[14px] leading-relaxed italic border-l-2 border-violet/30 pl-4 mb-5">
                    &ldquo;{c.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-full bg-brand-gradient-soft border border-violet/20 flex items-center justify-center text-violet font-bold text-[13px]">
                      {c.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-[13px] text-text-main">{c.author}</div>
                      <div className="text-[12px] text-gray3">{c.desc}</div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3 pt-5 border-t border-gray1">
                    {c.results.map(r => (
                      <div key={r.label}>
                        <div className="font-black text-violet text-xl mb-0.5 leading-none">{r.num}</div>
                        <div className="text-[11px] text-gray3 leading-tight font-medium">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>


      </div>
    </section>
  )
}
