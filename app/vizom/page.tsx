import { ArrowRight } from "lucide-react"
import { Photo } from "@/components/site"
import { surfaceClass } from "@/components/surface"

const statements = ["Az ember lényeges.", "Az idő érték.", "A hatékonyság eredmény."]

const pillars = [
  {
    index: "01",
    label: "Megismerés",
    title: "Emberközpontúság",
    text: "A megfelelő ember a megfelelő helyre kerüljön. Alapos helyzetfelmérés és emberi tényezők.",
  },
  {
    index: "02",
    label: "Célkitűzés",
    title: "Kérdésalapú megközelítés",
    text: "Nem kész válaszokat adok, hanem megkeressük a leghatékonyabb utat. Tiszta irányok és mérhető célok.",
  },
  {
    index: "03",
    label: "Megvalósítás",
    title: "Mérhető eredmények",
    text: "Célok kitűzése és a változás határozott mederbe terelése. Határozott lépések a tartós eredményekért.",
  },
]

export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-8">
      <h1 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
        Amit érdemes csinálni, azt érdemes jól csinálni.
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">Lord Chesterfield</p>

      <div className="mt-16 grid items-start gap-10 border-t border-border pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Photo src="/images/selfie.jpg" alt="Horváth Ágnes" priority />

        <div className={surfaceClass}>
          <div className="space-y-3">
            {statements.map((line) => (
              <p key={line} className="text-2xl font-semibold uppercase tracking-tight md:text-3xl">
                {line}
              </p>
            ))}
          </div>
          <p className="mt-10 max-w-md text-base leading-relaxed text-muted-foreground">
            Húsz éve támogatom a vezetőket és a csapatokat. Nálam központban az ember, az idő és a pénz áll. Az ember
            az alap, az idő és a hatékonyság versenyelőny, a pénz a végső célok egyike.
          </p>
        </div>
      </div>

      <div className="relative mt-12 grid gap-4 md:grid-cols-3">
        <div className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-px bg-[#1B3A4B]/25 md:block" />
        {pillars.map((pillar, index) => (
          <article key={pillar.index} className={`${surfaceClass} relative`}>
            {index < pillars.length - 1 ? (
              <span className="absolute -right-3 top-6 z-10 hidden h-6 w-6 items-center justify-center rounded-full bg-[#1B3A4B] text-white md:flex">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            ) : null}
            <p className="font-mono text-sm uppercase tracking-wide text-[#1B3A4B]">
              {pillar.index} / {pillar.label}
            </p>
            <h2 className="mt-4 text-2xl font-semibold">{pillar.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-600">{pillar.text}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
