import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Gyermek művészetterápia – HAW",
  description:
    "Gyermek művészetterápia bemutató – kreatív kifejezés, biztonságos tér, egyéni megközelítés és önbizalom építés.",
}

export default function ChildArtTherapyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <header className="text-center mb-8 pb-6 border-b">
        <h1 className="text-4xl font-light text-primary mb-2">Horváth Ágnes</h1>
        <p className="text-lg font-medium text-muted-foreground">Gyermek Művészetterapeuta</p>
      </header>

      {/* Intro */}
      <section className="mb-10">
        <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 border-l-4 border-indigo-500 rounded-xl p-6">
          <p className="text-lg text-muted-foreground mb-3">
            Üdvözlöm! Művészetterapeutaként különleges figyelmet fordítok a gyermekekkel való munkára. Hiszem, hogy a
            művészet csodálatos híd lehet a gyermeki lélek megértéséhez és a gyógyuláshoz.
          </p>
          <p className="text-lg text-muted-foreground">
            Tapasztalatom szerint a gyerekek természetesen kreatívak, és a művészeten keresztül könnyebben fejezik ki
            érzéseiket, gondolataikat, mint szavakkal.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-card text-card-foreground border rounded-xl p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">🎨 Kreatív Kifejezés</h3>
            <p className="text-sm text-muted-foreground">
              A rajzolás, festés és kézművesség segítségével a gyermekek nonverbálisan kommunikálhatnak belső
              világukról.
            </p>
          </div>
          <div className="bg-card text-card-foreground border rounded-xl p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">🌱 Biztonságos Tér</h3>
            <p className="text-sm text-muted-foreground">
              Olyan légkört teremtek, ahol a gyerekek szabadon kifejezhetik magukat, ítélkezés és elvárások nélkül.
            </p>
          </div>
          <div className="bg-card text-card-foreground border rounded-xl p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">🤝 Egyéni Megközelítés</h3>
            <p className="text-sm text-muted-foreground">
              Minden gyermek egyedi, ezért a terápiás folyamatot az ő személyiségéhez és szükségleteihez alakítom.
            </p>
          </div>
          <div className="bg-card text-card-foreground border rounded-xl p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">💝 Önbizalom Építés</h3>
            <p className="text-sm text-muted-foreground">
              A művészeti alkotás élménye erősíti a gyermekek önértékelését és magabiztosságát.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl p-6 text-center italic">
          „A művészetterápia olyan terápiás folyamat, ahol a művészetet eszközként használjuk lelki történéseink
          megértéséhez és nonverbális kommunikációhoz."
        </div>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h3 className="text-2xl font-semibold mb-2 text-primary">Kezdjük el a közös munkát!</h3>
        <p className="text-muted-foreground mb-6">
          Ha úgy érzi, hogy gyermeke számára hasznos lehet a művészetterápia, vegye fel velem a kapcsolatot. Szívesen
          beszélgetünk arról, hogyan segíthetek.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/kapcsolat">Kapcsolatfelvétel</Link>
        </Button>
      </section>
    </div>
  )
}