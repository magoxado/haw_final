import type { Metadata } from "next"
import { CtaBand, PageHeader } from "@/components/site"

export const metadata: Metadata = {
  title: "Gyermek művészetterápia - HAW",
  description:
    "Gyermek művészetterápia bemutató: kreatív kifejezés, biztonságos tér, egyéni megközelítés és önbizalom építés.",
}

const features = [
  {
    title: "Kreatív kifejezés",
    text: "A rajzolás, festés és kézművesség segítségével a gyermekek nonverbálisan kommunikálhatnak belső világukról.",
  },
  {
    title: "Biztonságos tér",
    text: "Olyan légkört teremtek, ahol a gyerekek szabadon kifejezhetik magukat, ítélkezés és elvárások nélkül.",
  },
  {
    title: "Egyéni megközelítés",
    text: "Minden gyermek egyedi, ezért a terápiás folyamatot az ő személyiségéhez és szükségleteihez alakítom.",
  },
  {
    title: "Önbizalom építés",
    text: "A művészeti alkotás élménye erősíti a gyermekek önértékelését és magabiztosságát.",
  },
]

export default function ChildArtTherapyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <PageHeader eyebrow="Gyermekeknek" title="Gyermek művészetterápia" lead="Horváth Ágnes · gyermek művészetterapeuta" />

      <section className="max-w-3xl">
        <p className="text-lg leading-relaxed">
          Örülök, hogy itt vagy. Művészetterapeutaként külön figyelmet fordítok a gyermekekkel való munkára. Hiszem, hogy
          a művészet híd lehet a gyermeki lélek megértéséhez és a gyógyuláshoz.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          A gyerekek természetesen kreatívak, és a művészeten keresztül könnyebben fejezik ki az érzéseiket és a
          gondolataikat, mint szavakkal.
        </p>
      </section>

      <section className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
        {features.map((feature, index) => (
          <article key={feature.title}>
            <span className="font-mono text-sm text-zinc-400">0{index + 1}</span>
            <h2 className="mt-3 text-lg font-semibold">{feature.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
          </article>
        ))}
      </section>

      <blockquote className="mt-10 border-t border-border pt-8 text-lg leading-relaxed">
        „A művészetterápia olyan terápiás folyamat, ahol a művészetet eszközként használjuk lelki történéseink
        megértéséhez és nonverbális kommunikációhoz.”
      </blockquote>

      <CtaBand
        title="Kezdjük el a közös munkát"
        text="Ha úgy érzed, hogy a gyermeked számára hasznos lehet a művészetterápia, írj, és beszéljük meg, hogyan segíthetek."
      />
    </div>
  )
}
