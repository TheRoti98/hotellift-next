'use client'

import Image from 'next/image'
import { Reveal } from './Reveal'

const featured = [
  {
    name: 'Hotel Skipper',
    stars: '★★★★',
    photo: '/skipper.jpg',
  },
  {
    name: 'Kadyny Folwark Hotel & SPA',
    stars: '★★★',
    photo: '/kadyny.jpg',
  },
]

const more = [
  {
    name: 'Hotel Solar',
    stars: '★★★★',
    photo: 'https://www.solarspa.pl/_thumb/650x550x80/banery/hotel-z-zewnatrz-2200px/img_5007.jpg',
  },
  {
    name: 'Restauracja M15 Sopot',
    stars: '',
    photo: 'https://m15.sopot.pl/wp-content/uploads/2025/07/Zdjecie-glowne-podstrona-plaza-scaled.jpg',
  },
  {
    name: 'Hotel Innercity',
    stars: '★★★',
    photo: 'https://wa-uploads.profitroom.com/hotelinnercity/16339029239558_innercityobiekt01.jpg',
  },
  {
    name: 'Restauracja Sirocco Olsztyn',
    stars: '',
    photo: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Hotel Platan Chrzanów',
    stars: '★★★',
    photo: 'https://hotelplatan.pl/files/media/Images/0001/01/5421a53b5eb7cc5cba3e97aa48ee72e5fa195bfe.jpeg',
  },
  {
    name: 'Villa Sielanka Węgorzewo',
    stars: '',
    photo: 'https://villasielanka.pl/wp-content/uploads/2026/04/noclegi-mazury-1-scaled.webp',
  },
]

export function CaseStudies() {
  return (
    <section id="wyniki" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <p className="section-tag">Wyniki</p>
          <h2 className="font-black text-violet leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Obiekty, z którymi<br />pracowaliśmy
          </h2>
          <p className="text-text-main/60 text-[15px] leading-relaxed mb-14 max-w-lg">
            Konkretne liczby. Prawdziwe wyniki. Zero bzdur.
          </p>
        </Reveal>

        {/* 2 duże karty */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {featured.map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <article className="group rounded-2xl overflow-hidden">
                <div className="relative h-72 overflow-hidden">
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
              </article>
            </Reveal>
          ))}
        </div>

        {/* 6 mniejszych kart */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {more.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <article className="group rounded-xl overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.photo}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="text-white font-semibold text-[13px]">{c.name}</span>
                    {c.stars && <span className="text-brand-green text-[11px]">{c.stars}</span>}
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
