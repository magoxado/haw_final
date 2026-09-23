import Link from "next/link"
import { Phone, Mail, Facebook } from "lucide-react"

const pages = [
  { name: "Főoldal", href: "/" },
  { name: "Rólam", href: "/rolam" },
  { name: "Vízióm", href: "/vizom" },
  { name: "Kinek tudok segíteni?", href: "/kinek-tudok-segiteni" },
  { name: "Coaching", href: "/coaching" },
  { name: "Management tréning", href: "/management-trening" },
  { name: "Szervezetfejlesztés", href: "/szervezetfejlesztes" },
  { name: "Művészetterápia", href: "/muveszetterapia" },
  { name: "Álláskeresési tanácsadás", href: "/allaskeresesi-tanacsadas" },
  { name: "Kapcsolat", href: "/kapcsolat" },
  { name: "Adatkezelési tájékoztató", href: "/adatkezelesi-tajekoztato" },
]

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold">HAW</p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Business coach, management tréner, szocio- és művészetterapeuta
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Nálam központban az ember, az idő és a pénz áll.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Kapcsolat</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a href="tel:+36203974141" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                +36 20 397 4141
              </a>
              <a href="mailto:info@haw.hu" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                info@haw.hu
              </a>
              <a
                href="https://www.facebook.com/hawhorvathagnes/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-4 w-4 shrink-0" />
                <span className="min-w-0 break-all">facebook.com/hawhorvathagnes</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Oldalak</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              {pages.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HAW - Horváth Ágnes. Minden jog fenntartva.</p>
          <Link href="/adatkezelesi-tajekoztato" className="hover:text-foreground">
            Adatkezelési tájékoztató
          </Link>
        </div>
      </div>
    </footer>
  )
}
