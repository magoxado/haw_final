import { CtaBand, PageHeader, SectionTitle } from "@/components/site"

const background = [
  "Sok év, toborzási és HR oldalon eltöltött tapasztalat",
  "Én is sokszor kerestem állást, sok interjún voltam",
]

const steps = [
  "Megírod, milyen állást keresel vagyis mi a célod. Átküldöd a már meglévő önéletrajzodat. Ha nincs, akkor csak a célodat írod meg.",
  "Időpontot egyeztetünk, amikor online beszélünk.",
  "Időponttal együtt kapsz egy feladatot is, amelyet el kell készítened a beszélgetésünkre.",
  "Online beszélgetés során átvesszük a fő pontokat, elmondom a javaslataimat az önéletrajzoddal kapcsolatosan.",
  "Ha az interjútechnikádat szeretnéd fejleszteni, próbainterjúzunk, én leszek a HR-es, Te pedig a jelentkező.",
]

export default function JobSearchPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <PageHeader
        eyebrow="Karrier"
        title="Álláskeresési- és karrier-tanácsadás"
        lead="Biztosan meglátom Benned az értéket és támogatlak, hogy képviselni is tudd."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {background.map((item, index) => (
          <article key={item} className="rounded-md border bg-card p-6">
            <p className="text-sm text-muted-foreground">Ami mögöttem van</p>
            <p className="mt-3 leading-relaxed">
              <span className="mr-2 text-muted-foreground">0{index + 1}</span>
              {item}
            </p>
          </article>
        ))}
      </div>

      <section className="mt-16">
        <SectionTitle>Tanácsadás menete</SectionTitle>
        <ol className="relative space-y-4 border-l border-primary/30 pl-6 md:pl-8">
          {steps.map((step, index) => (
            <li key={step} className="relative rounded-md border bg-card p-5 md:p-6">
              <span className="absolute -left-[1.85rem] top-6 text-sm text-muted-foreground md:-left-[2.35rem]">
                {index + 1}
              </span>
              <p className="text-lg leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand text="Küldd el a célodat vagy az önéletrajzodat, és egyeztetünk egy online beszélgetést." />
    </div>
  )
}
