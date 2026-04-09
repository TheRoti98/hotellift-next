export function Footer() {
  return (
    <footer className="bg-midnight border-t border-white/[0.06] py-6">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-brand-gradient flex items-center justify-center flex-shrink-0">
            <span className="text-midnight font-black text-[9px]">4W</span>
          </div>
          <span className="text-white/40 text-[13px] font-medium">
            4WebZones <span className="gradient-text font-bold">HORECA</span>
          </span>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <a href="https://4webzones.pl/polityka-prywatnosci/" className="text-white/25 text-[12px] hover:text-white/50 transition-colors">
            Polityka prywatności
          </a>
          <a href="mailto:start@4webzones.pl" className="text-white/25 text-[12px] hover:text-white/50 transition-colors">
            start@4webzones.pl
          </a>
        </div>

        <p className="text-white/20 text-[12px]">
          © 2026 4WebZones sp. z o.o. · Starowiejska 16/2, 81-356 Gdynia · NIP: 5862388594
        </p>
      </div>
    </footer>
  )
}
