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
    <div className="container mx-auto px-4 py-10 md:py-16">
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
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={step} className="grid grid-cols-[2rem_minmax(0,1fr)] items-stretch gap-3 sm:gap-4">
              <div className="relative flex justify-center">
                {index < steps.length - 1 ? (
                  <span className="absolute left-1/2 top-4 h-[calc(100%+1rem)] w-px -translate-x-1/2 bg-[#1B3A4B]/40" aria-hidden />
                ) : null}
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1B3A4B] font-mono text-xs text-white ring-4 ring-[hsl(var(--background))] dark:bg-[#3E6D86]">
                  {index + 1}
                </span>
              </div>
              <div className={cn(surfaceClass, "min-w-0 md:p-6")}>
                <p className="leading-relaxed">{step}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand text="Küldd el a célodat vagy az önéletrajzodat, és egyeztetünk egy online beszélgetést." />
    </div>
  )
}
