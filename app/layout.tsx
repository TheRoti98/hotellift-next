import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

// STOLZL: Adobe Font - uncomment and add your kit ID in <head> to use Stolzl
// In tailwind.config.js, change fontFamily.sans to: ["'stolzl'", 'Poppins', 'system-ui', 'sans-serif']
// Then add this in the <head> section: <link rel="stylesheet" href="https://use.typekit.net/YOUR_KIT_ID.css" />

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: '4WebZones HORECA | Marketing dla hoteli który przynosi rezerwacje',
  description: 'Specjaliści od marketingu w hotelarstwie. Google Ads, Meta Ads, revenue management, AI dla Twojego zespołu. 24+ lata doświadczenia, 50+ obiektów HORECA.',
  openGraph: {
    title: '4WebZones HORECA | Marketing dla hoteli',
    description: 'Twój gość się zmienił. Twój marketing jeszcze nie. Bezpłatna analiza strat.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={poppins.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
