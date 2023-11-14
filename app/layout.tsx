import 'tailwindcss/tailwind.css'

import {
  Dancing_Script,
  IBM_Plex_Mono,
  Inter,
  League_Gothic,
  PT_Serif,
  Playfair_Display,
} from 'next/font/google'

// todo: delete these fonts if not used, also delete imports above and from html below.
const serif = PT_Serif({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})
const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  // @todo: understand why extrabold (800) isn't being respected when explicitly specified in this weight array
  // weight: ['500', '700', '800'],
})
const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})
// added fonts by me
const playfair = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400', '700'],
})
const league = League_Gothic({
  variable: '--font-league-gothic',
  subsets: ['latin'],
  weight: ['400'],
})
const dancing = Dancing_Script({
  variable: '--font-dancing-script',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${sans.variable} ${serif.variable} ${playfair.variable} ${league.variable} ${dancing.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
