import { CtaBand, PageHeader, Photo, SectionTitle } from "@/components/site"

const questions = [
  "Hogyan találjak új karrierutat?",
  "Hogyan kérjek előléptetést?",
  "Mit tegyek, ha kiégtem a munkahelyemen?",
  "Milyen karriert válasszak?",
  "Mikor érdemes karriert váltani?",
  "Hogyan építsek önbizalmat az állásinterjú előtt?",
  "Hogyan egyensúlyozzam a munkát és a magánéletet?",
  "Miért nem haladok előre a karrieremben?",
  "Hogyan találjam meg a valódi szenvedélyemet a munkámban?",
]

const audiences = [
  {
    title: "Karrierváltás előtt állsz?",
    points: [
      "Érzed, hogy nem a megfelelő területen dolgozol?",
      "Szeretnél új szakmai kihívásokat, de nem tudod, merre indulj?",
      "Vonz egy új terület, de bizonytalan vagy a lépésekben?",
    ],
  },
  {
    title: "Előrelépésre vágysz?",
    points: [
      "Megrekedtél a jelenlegi pozíciódban?",
      "Vezetői ambícióid vannak, de hiányoznak bizonyos készségek vagy az önbizalom?",
      "Szeretnéd jobban érvényesíteni tudásodat és értékeidet?",
    ],
  },
  {
    title: "Kiégéssel küzdesz?",
    points: [
      "Elvesztetted a lelkesedésedet a munkád iránt?",
      "Folyamatos stressz és nyomás alatt dolgozol?",
      "Nehezen találod az egyensúlyt a munka és magánélet között?",
    ],
  },
]

const offers = [
  {
    title: "Személyre szabott karrierút-tervezés",
    text: "Közösen fedezzük fel valódi tehetségedet és szenvedélyeidet, majd ezekhez igazítjuk karriercéljaidat.",
  },
  {
    title: "Változásmenedzsment támogatás",
    text: "Biztonságos környezetet teremtek, ahol feldolgozhatod a munkahelyváltással járó bizonytalanságokat és félelmeket.",
  },
  {
    title: "Erőforrás-aktiválás",
    text: "Segítek felismerni és hasznosítani a benned rejlő, de kihasználatlan képességeket és erőforrásokat.",
  },
  {
    title: "Kiégés-megelőzés és kezelés",
    text: "Praktikus eszközöket kapsz a munkahelyi stressz kezeléséhez és az egyensúly megteremtéséhez.",
  },
]

const reasons = [
  { title: "Holisztikus megközelítés", text: "Nem csak a munkára, hanem az egész életedre fókuszálunk." },
  { title: "Gyakorlati tapasztalat", text: "Saját karrierváltási tapasztalataimat is beépítem a coaching folyamatba." },
  { title: "Mérhető eredmények", text: "Konkrét eszközöket és nyomonkövetési módszereket alkalmazok." },
  { title: "Hosszú távú gondolkodás", text: "Nem gyors megoldásokat, hanem fenntartható stratégiákat kínálok." },
]

const lines = [
  "Nem csak a munkád változik – te magad is fejlődsz.",
  "A valódi siker akkor jön, amikor a karriered összhangban van az értékeiddel.",
  "Minden váltás lehetőség az újrakezdésre és növekedésre.",
]

export default function CoachingPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <PageHeader
        eyebrow="Karrier"
        title="Coaching"
        lead="Coachként segítek neked átlépni az akadályokat és megtalálni a számodra ideális utat a szakmai életedben."
      />

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <p className="text-lg leading-relaxed text-foreground/85">
          Az elfogadás és ítéletmentesség mellett a kedvességet is alapvető karizmatikus jegyemnek tartom, amely
          meghatározza a kapcsolatomat ügyfeleimmel. Hiszem, hogy a kedvesség ereje segíti a bizalom és a nyitottság
          kialakítását és hozzájárul ahhoz, hogy ügyfeleim önmagukat adhassák.
        </p>
        <Photo src="/images/onarckep.jpg" alt="Coaching támogatás" className="aspect-[5/4] w-full" />
      </div>

      <section className="mt-16">
        <SectionTitle>Kérdések, amelyek felmerülhetnek Benned</SectionTitle>
        <div className="flex flex-wrap gap-3">
          {questions.map((question) => (
            <span
              key={question}
              className="rounded-full border bg-card px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              {question}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle>Kinek segítek?</SectionTitle>
        <div className="grid gap-5 lg:grid-cols-3">
          {audiences.map((group) => (
            <article
              key={group.title}
              className="rounded-[1.6rem] border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-medium">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                {group.points.map((point) => (
                  <li key={point} className="border-t border-border/80 pt-3 first:border-0 first:pt-0">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle>Amit nyújtok</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2">
          {offers.map((offer, index) => (
            <article key={offer.title} className="rounded-[1.6rem] bg-secondary/80 p-6">
              <span className="font-display text-3xl text-primary/40">0{index + 1}</span>
              <h3 className="mt-3 text-2xl font-medium">{offer.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{offer.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle>Miért velem?</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article key={reason.title} className="rounded-[1.4rem] border bg-card p-5">
              <h3 className="font-display text-xl">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {lines.map((line) => (
          <p key={line} className="rounded-[1.6rem] bg-foreground px-6 py-8 font-display text-xl italic leading-snug text-background">
            „{line}”
          </p>
        ))}
      </div>

      <CtaBand text="Beszéljük meg, merre tart a szakmai utad, és hol tudok melléd állni." />
    </div>
  )
}
