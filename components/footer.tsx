import Link from "next/link"
import { Phone, Mail, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">HAW - Horváth Ágnes</h3>
            <p className="text-muted-foreground mb-2">
              Business coach, management tréner, szocio- és művészetterapeuta
            </p>
            <p className="text-muted-foreground">Nálam központban az ember, az idő és a pénz áll.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kapcsolat</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+36 20 397 4141</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@haw.hu</span>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="h-4 w-4 text-primary" />
                <a
                  href="https://www.facebook.com/hawhorvathagnes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  facebook.com/hawhorvathagnes
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Oldalak</h3>
            <ul className="space-y-2">
              {[
                { name: "Főoldal", href: "/" },
                { name: "Rólam", href: "/rolam" },
                { name: "Vízióm", href: "/vizom" },
                { name: "Kinek tudok segíteni?", href: "/kinek-tudok-segiteni" },
                { name: "Kapcsolat", href: "/kapcsolat" },
                { name: "Adatkezelési tájékoztató", href: "/adatkezelesi-tajekoztato" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HAW - Horváth Ágnes. Minden jog fenntartva.</p>
          <p className="mt-1">
            <Link href="/adatkezelesi-tajekoztato" className="hover:text-primary transition-colors">
              Adatkezelési tájékoztató
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
