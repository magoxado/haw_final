import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHeader, Photo } from "@/components/site"

const people = [
  "Növekedési pályán, változás előtt álló cégeknek, vállalkozásoknak, vállalatoknak.",
  "Cégvezetőknek, akik fejlődni, fejleszteni szeretnének.",
  "Csapatoknak, akiknél probléma van és belülről nem látnak rá a kiváltó okokra.",
  "Tulajdonosoknak, akik növelni szeretnék a céget, de nem találják a kollégákhoz vezető utat.",
  "Vezetőknek, akik csapatot, közösséget szeretnének építeni, munkaerőt akarnak megtartani.",
]

export default function WhoCanIHelpPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <PageHeader eyebrow="Együttműködés" title="Kinek tudok segíteni?" />

      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          {people.map((item, index) => (
            <article
              key={item}
              className="flex gap-4 rounded-md border bg-card px-5 py-5"
            >
              <span className="text-sm text-muted-foreground">0{index + 1}</span>
              <p className="text-lg leading-relaxed">{item}</p>
            </article>
          ))}
        </div>
        <div className="lg:sticky lg:top-24">
          <Photo src="/images/celtudatos.jpg" alt="Céltudatos" className="aspect-[4/5] w-full" />
        </div>
      </div>

      <section className="mt-16 grid gap-8 border-t border-border pt-10 md:grid-cols-2">
        <p className="text-lg leading-relaxed">
          Véleményem szerint növekedni, hatékonyabb vállalati teljesítményt elérni, kizárólag vezetői, munkatársi közös
          munkával, letisztázott, hatékony folyamatokkal, tiszta, érhető kommunikációval lehet. A problémák, kellő
          odafigyeléssel, elemzéssel, nem gátló, hanem támogató folyamatokká alakíthatók át.
        </p>
        <p className="text-lg leading-relaxed">
          Húsz éves tapasztalattal, éles szemmel, logikus gondolkodással, széles ismeretekkel támogatom a vállalatokat,
          hogy a jelenlegi helyzeten túllendülve, a fejlődés útjára lépjenek.
        </p>
      </section>

      <div className="mt-10 flex justify-center">
        <Button asChild size="lg">
          <Link href="/cegeknek">Részletek cégeknek</Link>
        </Button>
      </div>
    </div>
  )
}
