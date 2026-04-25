'use client'

import { useState } from 'react'
import { Reveal } from './Reveal'

const faqs = [
  {
    q: 'Czy to nie będzie kolejna agencja, która obiecuje cuda?',
    a: 'Jesteśmy na rynku od 2014 roku. Mamy klientów którzy są z nami od ponad 12 lat. Nie pracujemy z każdym - mamy ograniczoną liczbę obiektów w obsłudze, żeby żaden klient nie czuł się pominięty.',
  },
  {
    q: 'Mam mały obiekt - pensjonat / aparthotel - czy to ma sens?',
    a: 'Tak. Pakiet Basic jest zaprojektowany właśnie pod mniejsze obiekty które chcą przestać przepalać budżet i zacząć mieć system. Nie musisz mieć 100 pokoi żeby sensownie inwestować w reklamy.',
  },
  {
    q: 'Czy będę musiał zmieniać cały zespół lub systemy?',
    a: 'Nie. Pracujemy z tym co masz. Naszym celem jest nauczenie Twojego zespołu jak działać lepiej z narzędziami które już istnieją - plus dodanie nowych tam gdzie to ma sens.',
  },
  {
    q: 'Jak szybko zobaczę pierwsze efekty?',
    a: 'Pierwsze wyniki widoczne zazwyczaj w ciągu 30 dni od startu kampanii. Nie mamy w zwyczaju czekania - jeśli coś nie działa, zmieniamy natychmiast. Brak wyników to dla nas sygnał do działania, nie do tłumaczenia.',
  },
  {
    q: 'Co konkretnie oznacza "AI w marketingu hotelu"?',
    a: 'Praktyczne narzędzia, nie buzzword. Opisy pokoi, oferty specjalne, automatyczne follow-upy po rezerwacji, analiza konkurencji, przygotowanie contentu - rzeczy które Twój zespół robi godzinami, AI robi w minutach. Uczymy jak tego używać, nie zostawiamy z narzędziem bez instrukcji.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Reveal>
          <p className="section-tag">FAQ</p>
          <h2 className="font-black text-violet leading-tight tracking-tight mb-14" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Najczęstsze pytania
          </h2>
        </Reveal>

        <div className="border border-gray1 rounded-2xl overflow-hidden">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="border-b border-gray1 last:border-0">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left flex items-start justify-between gap-4 px-6 py-5 hover:bg-offwhite transition-colors group"
                >
                  <span className="font-semibold text-midnight text-[15px] leading-snug">{faq.q}</span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border border-violet/20 flex items-center justify-center text-violet transition-transform mt-0.5 ${
                      open === i ? 'rotate-45 bg-violet/5' : ''
                    }`}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-text-main/60 text-[14px] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
