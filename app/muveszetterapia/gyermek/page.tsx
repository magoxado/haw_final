import type { Metadata } from "next"
import { CtaBand, PageHeader } from "@/components/site"

export const metadata: Metadata = {
  title: "Gyermek művészetterápia – HAW",
  description:
    "Gyermek művészetterápia bemutató – kreatív kifejezés, biztonságos tér, egyéni megközelítés és önbizalom építés.",
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

      <section className="mx-auto max-w-3xl rounded-[2rem] border bg-secondary/70 p-6 md:p-10">
        <p className="text-lg leading-relaxed text-foreground/85">
          Üdvözlöm! Művészetterapeutaként különleges figyelmet fordítok a gyermekekkel való munkára. Hiszem, hogy a
          művészet csodálatos híd lehet a gyermeki lélek megértéséhez és a gyógyuláshoz.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-foreground/85">
          Tapasztalatom szerint a gyerekek természetesen kreatívak, és a művészeten keresztül könnyebben fejezik ki
          érzéseiket, gondolataikat, mint szavakkal.
        </p>
      </section>

      <section className="mt-10 grid gap-5 sm:grid-cols-2">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className="rounded-[1.6rem] border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="font-display text-3xl text-primary/40">0{index + 1}</span>
            <h2 className="mt-3 text-2xl font-medium">{feature.title}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{feature.text}</p>
          </article>
        ))}
      </section>

      <blockquote className="mt-10 rounded-[2rem] bg-foreground px-6 py-10 text-center font-display text-2xl italic leading-snug text-background md:text-3xl">
        „A művészetterápia olyan terápiás folyamat, ahol a művészetet eszközként használjuk lelki történéseink
        megértéséhez és nonverbális kommunikációhoz.”
      </blockquote>

      <CtaBand
        title="Kezdjük el a közös munkát"
        text="Ha úgy érzi, hogy gyermeke számára hasznos lehet a művészetterápia, vegye fel velem a kapcsolatot. Szívesen beszélgetünk arról, hogyan segíthetek."
      />
    </div>
  )
}
