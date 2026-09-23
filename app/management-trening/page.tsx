import { CtaBand, PageHeader, SectionTitle } from "@/components/site"
import { surfaceClass } from "@/components/surface"

const points = [
  {
    title: "Vezetői készségek",
    text: "Delegálás, csapatirányítás és a mindennapi vezetői döntések.",
  },
  {
    title: "Problémamegoldás",
    text: "Támogatom a vezetőket a hatékonyabb problémamegoldásban és a vezetői folyamataikban.",
  },
  {
    title: "Csapat és megtartás",
    text: "Vezetőknek, akik csapatot, közösséget szeretnének építeni, és a munkaerőt meg akarják tartani.",
  },
  {
    title: "Teljesítmény",
    text: "Megtervezem és segítek bevezetni a teljesítményértékelő rendszert.",
  },
]

export default function ManagementTrainingPage() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <PageHeader
        title="Management tréning"
        lead="Vezetői készségek, delegálás és hatékony csapatirányítás. Cégvezetőknek, akik fejlődni és fejleszteni szeretnének."
      />

      <section>
        <SectionTitle>Miben dolgozunk?</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          {points.map((point) => (
            <article key={point.title} className={surfaceClass}>
              <h3 className="text-lg font-semibold">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand text="Ha vezetői tréning érdekel, írj, és megbeszéljük, kiknek és mire szóljon." />
    </div>
  )
}
