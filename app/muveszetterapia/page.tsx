import Link from "next/link"
import { CtaBand, PageHeader, Photo, SectionTitle } from "@/components/site"
import { surfaceClass, surfaceHoverClass } from "@/components/surface"
import { cn } from "@/lib/utils"

const benefits = [
  {
    title: "Saját erőforrások",
    text: "A folyamatban a meglévő erőidet mozgósítod, ahelyett hogy kívülről kapnál kész megoldást.",
  },
  {
    title: "Önmagadról alkotott kép",
    text: "Alkotás közben tisztábban látod, hogyan gondolsz magadra, és hol érdemes ezen finomítani.",
  },
  {
    title: "Megmaradó hatás",
    text: "Amikor alkotsz, öngyógyító folyamatok indulnak, és a hatásuk a foglalkozás után is veled marad.",
  },
]

const process = [
  "A terápiás folyamat során szabadon alkothatsz, megnyilvánulhatsz, mozoghatsz. Nem foglak sem befolyásolni, sem irányítani. Önmagad lehetsz.",
  "Ítélkezés nélkül foglak visszatükrözni, így jobban el tudod magad fogadni. A különböző élményeidet átértékelheted, és elfogadhatod olyannak, amilyenek.",
  "A megélt tapasztalataid alapján fejlődsz. Nyitottan látod őket, és be tudod illeszteni az énképedbe.",
  "A terápia középpontjában nem a problémáid állnak, hanem te.",
  "Szimbólumokon és metaforákon keresztül kommunikálhatsz, ahelyett hogy mindent szavakba kellene öntenünk. Így hozzáférhetsz olyan emlékekhez is, amelyek beszéddel nehezen jönnek elő.",
  "Feltétel nélküli elfogadással dolgozom: úgy vagy jó, ahogy vagy. Szabadon vállalhatod önmagad, bármit előhozhatsz magadból. Biztonságot nyújtok, feléd fordulok.",
  "Amit még tőlem kapsz, az az aktív, értő figyelem.",
  "A terápián történteket és az elhangzottakat teljes diszkréció védi.",
]

const tools = [
  { title: "Képzőművészet", text: "Festék, rajzolás, tépés, ragasztás." },
  {
    title: "Zene",
    text: "Hozott, vagy a csoport témájához választott zene. Lehet passzív zenehallgatás, vagy aktív közös zenélés.",
  },
  {
    title: "Mozgás",
    text: "A mozgás és a képzelet találkozásán keresztül felszabadul a kreatív erőd, és újra tudod teremteni a belső harmóniádat. A test mindenre emlékszik. A mozgásterápia ezt a testi nyelvet állítja a gyógyulás szolgálatába, akkor is, ha az emlék előtte nehéz volt.",
  },
  {
    title: "Irodalom",
    text: "Mindannyian olvassuk magunkat és a világot avégett, hogy megragadhassuk, mik vagyunk és hol vagyunk. Azért olvasunk, hogy megértsünk valamit, vagy hogy elinduljunk a megértés útján.",
    source: "Alberto Manguel",
  },
]

const paths = [
  {
    href: "/muveszetterapia/csoportok",
    title: "Aktuális csoportok",
    text: "A közös alkotás időpontjai és témái itt jelennek meg, amint a csoportok összeállnak.",
  },
  {
    href: "/muveszetterapia/gyermek",
    title: "Gyermek művészetterápia",
    text: "Külön folyamat gyerekeknek, ahol a rajz és a kézművesség a kifejezés nyelve.",
  },
]

export default function ArtTherapyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <PageHeader
        title="Művészetterápia"
        lead="Van benne valami természetes és magától értetődő, mégis felszabadító, és gondolkodásra késztet."
      />

      <Photo
        src="/images/muveszet.jpg"
        alt="Művészetterápia"
        caption="Szia! Örülök, hogy itt vagy!"
        className="mx-auto aspect-[4/5] w-full max-w-sm min-h-0"
        priority
      />

      <section className="mt-16">
        <SectionTitle>Mire jó?</SectionTitle>
        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((item, index) => (
            <article key={item.title} className={cn(surfaceClass, surfaceHoverClass)}>
              <p className="font-mono text-sm tabular-nums text-zinc-400">0{index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle>Mi történik?</SectionTitle>
        <ol className={cn(surfaceClass, "divide-y divide-zinc-100")}>
          {process.map((item, index) => (
            <li key={item} className="grid gap-3 py-5 md:grid-cols-[4rem_1fr]">
              <span className="font-mono text-sm tabular-nums text-zinc-400">0{index + 1}</span>
              <p className="leading-relaxed">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <SectionTitle>Milyen eszközöket használok?</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          {tools.map((tool) => (
            <article key={tool.title} className={cn(surfaceClass, surfaceHoverClass)}>
              <h3 className="text-lg font-semibold">{tool.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{tool.text}</p>
              {"source" in tool && tool.source ? <p className="mt-3 text-sm font-medium">{tool.source}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle>Csoport vagy egyéni folyamat</SectionTitle>
        <p className="max-w-2xl text-muted-foreground">A terápia történhet csoportos vagy egyéni formában.</p>
        <blockquote className={cn(surfaceClass, "mt-8 max-w-2xl text-lg leading-relaxed")}>
          „A művészetterápia a folyamatról szól, nem a termékről.”
          <footer className="mt-3 text-sm text-zinc-500">Sorbara</footer>
        </blockquote>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {paths.map((path) => (
            <Link key={path.href} href={path.href} className={cn(surfaceClass, surfaceHoverClass, "group block")}>
              <h3 className="text-lg font-semibold">{path.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{path.text}</p>
              <span className="mt-5 inline-flex items-center text-sm font-medium">
                Megnézem
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1.5">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand text="Ha egyéni folyamat érdekel, írj, és megbeszéljük, hogyan induljunk." />
    </div>
  )
}
