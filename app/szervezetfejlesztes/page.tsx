import { CtaBand, PageHeader, SectionTitle } from "@/components/site"
import { surfaceClass } from "@/components/surface"

const points = [
  {
    title: "Folyamatok",
    text: "Folyamatokat optimalizálok, önjáró működést állítok össze, és ahol kell, informatikai megoldást javaslok.",
  },
  {
    title: "A megfelelő ember",
    text: "A szervezet sikerének kulcsa a megfelelő ember a megfelelő helyen, a felvételtől a betanulásig.",
  },
  {
    title: "Kommunikáció",
    text: "Javítom a vállalati kommunikációt, és kiépítem a belső kommunikáció útját a változásokhoz.",
  },
  {
    title: "Kultúra",
    text: "Erősítem a vállalati kultúrát, és segítek növelni a munkatársi elkötelezettséget.",
  },
]

export default function OrganizationDevelopmentPage() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <PageHeader
        title="Szervezetfejlesztés"
        lead="Folyamatok és együttműködés optimalizálása. Húsz éves tapasztalattal támogatom a vállalatokat, hogy a fejlődés útjára lépjenek."
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

      <CtaBand text="Ha a szervezet működésén szeretnél dolgozni, írj, és átbeszéljük a kiindulást." />
    </div>
  )
}
