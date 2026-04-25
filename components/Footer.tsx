export function Footer() {
  return (
    <footer className="bg-midnight border-t border-white/[0.06] py-6">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center opacity-40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.svg" alt="4WebZones" className="h-5 w-auto" />
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <a href="https://4webzones.pl/polityka-prywatnosci/" className="text-white/25 text-[12px] hover:text-white/50 transition-colors">
            Polityka prywatności
          </a>
          <a href="mailto:kontakt@4wz.pl" className="text-white/25 text-[12px] hover:text-white/50 transition-colors">
            kontakt@4wz.pl
          </a>
        </div>

        <p className="text-white/20 text-[12px]">
          © 2026 4WebZones sp. z o.o. · Starowiejska 16/2, 81-356 Gdynia · NIP: 5862388594
        </p>
      </div>
    </footer>
  )
}
