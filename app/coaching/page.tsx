import { CtaBand, PageHeader, Photo, SectionTitle } from "@/components/site"
import { surfaceClass, surfaceHoverClass } from "@/components/surface"
import { QuestionList } from "@/components/question-list"
import { cn } from "@/lib/utils"

const questions = [
  {
    q: "Hogyan találjak új karrierutat?",
    a: "A tehetségedből és a céljaidból indulunk, és abból rakjuk össze a következő lépést.",
  },
  {
    q: "Hogyan kérjek előléptetést?",
    a: "Megnézzük, mit tudsz már képviselni, és hogyan mondod el ezt egy vezetőnek.",
  },
  {
    q: "Mit tegyek, ha kiégtem a munkahelyemen?",
    a: "A stressz és a lelkesedés visszaszerzése praktikus eszközökkel indul, nem egy újabb elváráslistával.",
  },
  {
    q: "Milyen karriert válasszak?",
    a: "Először azt tisztázzuk, mi illik az értékeidhez, és csak utána a pozíció nevét.",
  },
  {
    q: "Mikor érdemes karriert váltani?",
    a: "Akkor, ha a jelenlegi hely már nem ad irányt, és van egy lépés, amit tényleg meg tudsz tenni.",
  },
  {
    q: "Hogyan építsek önbizalmat az állásinterjú előtt?",
    a: "A saját eredményeidből indulunk, hogy az interjún ne egy idegen szerepet kelljen eljátszanod.",
  },
  {
    q: "Hogyan egyensúlyozzam a munkát és a magánéletet?",
    a: "A határokat a naptáradban és a feladataidban keressük meg, nem egy elvont elvben.",
  },
  {
    q: "Miért nem haladok előre a karrieremben?",
    a: "Megnézzük, mi tart a helyeden: készség, önbizalom, vagy egy rendszer, ami nem enged tovább.",
  },
  {
    q: "Hogyan találjam meg a valódi szenvedélyemet a munkámban?",
    a: "Azt keressük, ami energizál, és amit a munkád már most is előhív belőled.",
  },
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
  "Nem csak a munkád változik. Te magad is fejlődsz.",
  "A valódi siker akkor jön, amikor a karriered összhangban van az értékeiddel.",
  "Minden váltás lehetőség az újrakezdésre és növekedésre.",
]

export default function CoachingPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <PageHeader
        title="Coaching"
        lead="Coachként segítek neked átlépni az akadályokat és megtalálni a számodra ideális utat a szakmai életedben."
      />

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <p className={cn(surfaceClass, "text-lg leading-relaxed")}>
          Az elfogadás és ítéletmentesség mellett a kedvességet is alapvető karizmatikus jegyemnek tartom, amely
          meghatározza a kapcsolatomat ügyfeleimmel. Hiszem, hogy a kedvesség ereje segíti a bizalom és a nyitottság
          kialakítását és hozzájárul ahhoz, hogy ügyfeleim önmagukat adhassák.
        </p>
        <Photo
          src="/images/onarckep.jpg"
          alt="Coaching támogatás"
          ratio="aspect-[5/4]"
          caption="Kedvesség, elfogadás, ítéletmentesség."
        />
      </div>

      <section className="mt-16">
        <SectionTitle>Kérdések, amelyek felmerülhetnek benned</SectionTitle>
        <QuestionList items={questions} />
      </section>

      <section className="mt-16">
        <SectionTitle>Kinek segítek?</SectionTitle>
        <div className="grid gap-4 lg:grid-cols-3">
          {audiences.map((group) => (
            <article key={group.title} className={cn(surfaceClass, surfaceHoverClass)}>
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600">
                {group.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle>Amit nyújtok</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          {offers.map((offer, index) => (
            <article key={offer.title} className={cn(surfaceClass, surfaceHoverClass)}>
              <span className="font-mono text-sm tabular-nums text-zinc-400">0{index + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{offer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{offer.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle>Miért velem?</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article key={reason.title} className={cn(surfaceClass, surfaceHoverClass)}>
              <h3 className="text-lg font-semibold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {lines.map((line) => (
          <p key={line} className={cn(surfaceClass, "text-base leading-relaxed")}>
            „{line}”
          </p>
        ))}
      </div>

      <CtaBand text="Beszéljük meg, merre tart a szakmai utad, és hol tudok melléd állni." />
    </div>
  )
}
