import Link from "next/link"
import { BookOpen, Eye, Footprints, Heart, Lock, Music, Palette, Sparkles, Sprout, UserRound } from "lucide-react"
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
  {
    icon: Sparkles,
    text: "A terápiás folyamat során szabadon alkothatsz, megnyilvánulhatsz, mozoghatsz. Nem foglak sem befolyásolni, sem irányítani. Önmagad lehetsz.",
  },
  {
    icon: Heart,
    text: "Ítélkezés nélkül foglak visszatükrözni, így jobban el tudod magad fogadni. A különböző élményeidet átértékelheted, és elfogadhatod olyannak, amilyenek.",
  },
  {
    icon: Sprout,
    text: "A megélt tapasztalataid alapján fejlődsz. Nyitottan látod őket, és be tudod illeszteni az énképedbe.",
  },
  {
    icon: UserRound,
    text: "A terápia középpontjában nem a problémáid állnak, hanem te.",
  },
  {
    icon: Palette,
    text: "Szimbólumokon és metaforákon keresztül kommunikálhatsz, ahelyett hogy mindent szavakba kellene öntenünk. Így hozzáférhetsz olyan emlékekhez is, amelyek beszéddel nehezen jönnek elő.",
  },
  {
    icon: Sparkles,
    text: "Feltétel nélküli elfogadással dolgozom: úgy vagy jó, ahogy vagy. Szabadon vállalhatod önmagad, bármit előhozhatsz magadból. Biztonságot nyújtok, feléd fordulok.",
  },
  {
    icon: Eye,
    text: "Amit még tőlem kapsz, az az aktív, értő figyelem.",
  },
  {
    icon: Lock,
    text: "A terápián történteket és az elhangzottakat teljes diszkréció védi.",
  },
]

const tools = [
  { title: "Képzőművészet", icon: Palette, text: "Festék, rajzolás, tépés, ragasztás." },
  {
    title: "Zene",
    icon: Music,
    text: "Hozott, vagy a csoport témájához választott zene. Lehet passzív zenehallgatás, vagy aktív közös zenélés.",
  },
  {
    title: "Mozgás",
    icon: Footprints,
    text: "A mozgás és a képzelet találkozásán keresztül felszabadul a kreatív erőd, és újra tudod teremteni a belső harmóniádat. A test mindenre emlékszik. A mozgásterápia ezt a testi nyelvet állítja a gyógyulás szolgálatába, akkor is, ha az emlék előtte nehéz volt.",
  },
  {
    title: "Irodalom",
    icon: BookOpen,
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
        className="mx-auto max-w-sm"
        ratio="aspect-[4/5]"
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
        <div className="grid gap-4 md:grid-cols-2">
          {process.map((item, index) => (
            <article key={item.text} className={surfaceClass}>
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-[#1B3A4B]" />
                <span className="font-mono text-sm tabular-nums text-zinc-400">0{index + 1}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle>Milyen eszközöket használok?</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <article key={tool.title} className={cn(surfaceClass, surfaceHoverClass)}>
              <tool.icon className="h-6 w-6 text-[#1B3A4B]" />
              <h3 className="mt-4 text-lg font-semibold">{tool.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{tool.text}</p>
              {"source" in tool && tool.source ? <p className="mt-3 text-sm font-medium text-[#1B3A4B]">{tool.source}</p> : null}
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
