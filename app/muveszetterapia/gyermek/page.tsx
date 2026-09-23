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
    <div className="container mx-auto px-4 py-16 md:py-20">
      <header className="mb-10 text-center">
        <p className="eyebrow mb-3">Gyermekeknek</p>
        <h1 className="text-4xl font-medium md:text-6xl">Horváth Ágnes</h1>
        <p className="mt-3 text-lg text-muted-foreground">Gyermek művészetterapeuta</p>
      </header>

      {/* Intro */}
      <section className="mb-10">
        <div className="rounded-[1.6rem] border border-primary/20 bg-secondary/70 p-6 md:p-8">
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
            <h3 className="mb-2 font-semibold text-primary">Kreatív kifejezés</h3>
            <p className="text-sm text-muted-foreground">
              A rajzolás, festés és kézművesség segítségével a gyermekek nonverbálisan kommunikálhatnak belső
              világukról.
            </p>
          </div>
          <div className="bg-card text-card-foreground border rounded-xl p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="mb-2 font-semibold text-primary">Biztonságos tér</h3>
            <p className="text-sm text-muted-foreground">
              Olyan légkört teremtek, ahol a gyerekek szabadon kifejezhetik magukat, ítélkezés és elvárások nélkül.
            </p>
          </div>
          <div className="bg-card text-card-foreground border rounded-xl p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="mb-2 font-semibold text-primary">Egyéni megközelítés</h3>
            <p className="text-sm text-muted-foreground">
              Minden gyermek egyedi, ezért a terápiás folyamatot az ő személyiségéhez és szükségleteihez alakítom.
            </p>
          </div>
          <div className="bg-card text-card-foreground border rounded-xl p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="mb-2 font-semibold text-primary">Önbizalom építés</h3>
            <p className="text-sm text-muted-foreground">
              A művészeti alkotás élménye erősíti a gyermekek önértékelését és magabiztosságát.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="mb-8">
        <div className="rounded-[1.6rem] bg-foreground p-8 text-center font-display text-xl italic leading-snug text-background md:text-2xl">
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