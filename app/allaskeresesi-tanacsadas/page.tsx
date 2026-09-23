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
        <div className="grid gap-4 md:grid-cols-2">
          {background.map((item, index) => (
            <article key={item} className={surfaceClass}>
              <span className="font-mono text-sm tabular-nums text-[#1B3A4B]">0{index + 1}</span>
              <p className="mt-3 text-lg leading-relaxed">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionTitle>Tanácsadás menete</SectionTitle>
        <ol className="relative space-y-4 border-l border-[#1B3A4B]/30 pl-6">
          {steps.map((step, index) => (
            <li key={step} className={cn(surfaceClass, "relative")}>
              <span className="absolute -left-[1.95rem] top-6 flex h-6 w-6 items-center justify-center rounded-full bg-[#1B3A4B] font-mono text-xs text-white">
                {index + 1}
              </span>
              <p className="leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand text="Küldd el a célodat vagy az önéletrajzodat, és egyeztetünk egy online beszélgetést." />
    </div>
  )
}
