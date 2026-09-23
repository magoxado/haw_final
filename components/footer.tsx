import Link from "next/link"
import { Phone, Mail, Facebook } from "lucide-react"

const pages = [
  { name: "Főoldal", href: "/" },
  { name: "Rólam", href: "/rolam" },
  { name: "Vízióm", href: "/vizom" },
  { name: "Kinek tudok segíteni?", href: "/kinek-tudok-segiteni" },
  { name: "Cégeknek", href: "/cegeknek" },
  { name: "Coaching", href: "/coaching" },
  { name: "Művészetterápia", href: "/muveszetterapia" },
  { name: "Kapcsolat", href: "/kapcsolat" },
  { name: "Adatkezelési tájékoztató", href: "/adatkezelesi-tajekoztato" },
]

export default function Footer() {
  return (
    <footer className="mt-8 bg-foreground text-background">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl">HAW</p>
            <p className="mt-3 max-w-xs text-background/70">
              Business coach, management tréner, szocio- és művészetterapeuta
            </p>
            <p className="mt-4 text-sm text-background/55">Nálam központban az ember, az idő és a pénz áll.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-background/50">Kapcsolat</h3>
            <div className="mt-4 space-y-3">
              <a href="tel:+36203974141" className="flex items-center gap-2 text-background/85 hover:text-background">
                <Phone className="h-4 w-4" />
                +36 20 397 4141
              </a>
              <a href="mailto:info@haw.hu" className="flex items-center gap-2 text-background/85 hover:text-background">
                <Mail className="h-4 w-4" />
                info@haw.hu
              </a>
              <a
                href="https://www.facebook.com/hawhorvathagnes/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/85 hover:text-background"
              >
                <Facebook className="h-4 w-4" />
                facebook.com/hawhorvathagnes
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-background/50">Oldalak</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {pages.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-background/75 transition-colors hover:text-background">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-background/15 pt-6 text-sm text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HAW - Horváth Ágnes. Minden jog fenntartva.</p>
          <Link href="/adatkezelesi-tajekoztato" className="hover:text-background">
            Adatkezelési tájékoztató
          </Link>
        </div>
      </div>
    </footer>
  )
}
