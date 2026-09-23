import { CtaBand, PageHeader, SectionTitle } from "@/components/site"
import { surfaceClass } from "@/components/surface"
import { cn } from "@/lib/utils"

const background = [
  "Sok év, toborzási és HR oldalon eltöltött tapasztalat",
  "Én is sokszor kerestem állást, sok interjún voltam",
]

const steps = [
  "Megírod, milyen állást keresel vagyis mi a célod. Átküldöd a már meglévő önéletrajzodat. Ha nincs, akkor csak a célodat írod meg.",
  "Időpontot egyeztetünk, amikor online beszélünk.",
  "Időponttal együtt kapsz egy feladatot is, amelyet el kell készítened a beszélgetésünkre.",
  "Online beszélgetés során átvesszük a fő pontokat, elmondom a javaslataimat az önéletrajzoddal kapcsolatosan.",
  "Ha az interjútechnikádat szeretnéd fejleszteni, próbainterjúzunk, én leszek a HR-es, te pedig a jelentkező.",
]

export default function JobSearchPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <PageHeader
        title="Álláskeresési- és karrier-tanácsadás"
        lead="Biztosan meglátom benned az értéket, és támogatlak, hogy képviselni is tudd."
      />

      <section>
        <SectionTitle>Ami mögöttem van</SectionTitle>
        <ol className={cn(surfaceClass, "divide-y divide-zinc-100")}>
          {background.map((item, index) => (
            <li key={item} className="flex gap-4 py-4 first:pt-0 last:pb-0">
              <span className="w-8 shrink-0 font-mono text-sm tabular-nums text-zinc-400">0{index + 1}</span>
              <p className="leading-relaxed">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <SectionTitle>Tanácsadás menete</SectionTitle>
        <ol className="grid gap-4 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step} className={surfaceClass}>
              <span className="font-mono text-sm tabular-nums text-zinc-400">0{index + 1}</span>
              <p className="mt-3 text-sm leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand text="Küldd el a célodat vagy az önéletrajzodat, és egyeztetünk egy online beszélgetést." />
    </div>
  )
}
