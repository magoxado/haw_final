import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CtaBand, PageHeader, SectionTitle } from "@/components/site"

const benefits = [
  "Segítségével a saját erőforrásokat aktivizálni tudjunk.",
  "Segít abban, hogy az önmagunkról alkotott képen javítani tudjuk.",
  "Amikor alkotunk, akkor öngyógyító folyamatok zajlanak és ezek hatásai meg is maradnak.",
]

const process = [
  <>
    A terápiás folyamat során szabadon alkothatsz, megnyilvánulhatsz, mozoghatsz, nem foglak sem befolyásolni, sem
    irányítani. <strong>Önmagad lehetsz.</strong>
  </>,
  <>
    Ítélkezés nélkül foglak visszatükrözni, ezáltal jobban <strong>el tudod magad fogadni</strong>, igyekszem, hogy
    rávezesselek arra, hogy a különböző élményeidet, folyamataidat átértékeld és elfogadd olyannak, amilyenek.
  </>,
  <>
    A folyamat során megélt tapasztalataid alapján fejlődni, növekedni fogsz. Tapasztalataidat nyitottan, szabadon fogod
    látni és ezeket be is tudod az <strong>énkép</strong>edbe illeszteni.
  </>,
  <>
    A terápia középppontjában nem a problémáid, lelki zavaraid állnak, hanem <strong>Te</strong>.
  </>,
  <>
    A művészetterápia lehetővé teszi, hogy szimbólumokon és metaforákon keresztül kommunikálj ahelyett, hogy
    verbalizálni próbálnád, amit érzel. A művészet abban is segíthet, hogy hozzáférjen az eltárolt emlékekhez, amelyek
    esetleg nem csak beszéddel jönnek elő.
  </>,
  <>
    Terápia során a feltétel nélküli <strong>elfogadás</strong>sal dolgozom, ami azt jelenti, úgy vagy jó, ahogy vagy.
    Szabadon vállalhatod önmagad, bármit előhozhatsz Magadból, fájdalmas, szégyenletes, félelmetes dolgokat is.
    Biztonságot nyújtok, Feléd fordulok.
  </>,
  <>
    Amit még tőlem kapsz, az az aktív, értő <strong>figyelem</strong>.
  </>,
  <>
    A terápián történteket és az elhangzottakat teljes <strong>diszkréció</strong> védi.
  </>,
]

const refrain = "Valljuk be, erre nagy szükség van mostanában."

const tools = [
  { title: "Képzőművészet", text: "Festék, rajzolás, tépés, ragasztás." },
  {
    title: "Zene",
    text: "Hozott vagy a csoport témájához kapcsolódóan választott. A zene lehet passzív, avagy zenehallgatás vagy aktív, ami közös zenélést jelent.",
  },
  {
    title: "Mozgás",
    text: 'Mozgásterápia során egy olyan folyamaton mehetsz keresztül, amely során a mozgás és a képzelet találkozásán keresztül felszabadul az éned kreatív ereje és képessé válsz a belső harmóniád újrateremtésére. Testünk mindenre emlékszik és lehetőségünk van arra, hogy ezeket az emlékeket "át tudjuk írni" kellemesre, harmónikusra, még akkor is ha az előtte traumatikus volt. Testünk és lelkünk egy egységet alkot. Rendelkezünk egy olyan "nyelvvel", amely a személyiségünkből, élettörtenetünkből származik. Mozgásterápia során ezt a nyelvet "használjuk", azaz a testünk nyelvét és ezáltal testünket a gyógyulás szolgálatába állítjuk.',
  },
  {
    title: "Irodalom",
    text: "„Mindannyian olvassuk magunkat és a világot avégett, hogy megragadhassuk, mik vagyunk és hol vagyunk. Azért olvasunk, hogy megértsünk valamit, vagy hogy elinduljunk a megértés útján.” /Manguel/",
  },
]

export default function ArtTherapyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <PageHeader
        eyebrow="Terápia"
        title="Művészetterápia"
        lead="Miért művészetterápia? Van benne valami természetes, valami magától értetődő, mégis felszabadító és gondolkodásra késztető."
      />

      <p className="text-muted-foreground">Szia! Örülök, hogy itt vagy!</p>

      <section className="mt-16">
        <SectionTitle>Mire jó?</SectionTitle>
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((item) => (
            <article
              key={item}
              className="flex flex-col rounded-md border bg-card p-6"
            >
              <p className="flex-1 text-lg leading-relaxed">{item}</p>
              <p className="mt-5 text-sm text-primary">{refrain}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle>Mit történik?</SectionTitle>
        <div className="space-y-4">
          {process.map((item, index) => (
            <article key={index} className="grid gap-4 rounded-md border bg-card p-6 md:grid-cols-[4rem_1fr]">
              <span className="text-sm text-muted-foreground">0{index + 1}</span>
              <div>
                <p className="text-lg leading-relaxed">{item}</p>
                {index !== 4 && index !== 7 ? <p className="mt-3 text-sm text-primary">{refrain}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle>Milyen eszközöket használok?</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2">
          {tools.map((tool) => (
            <article key={tool.title} className="rounded-md bg-secondary/80 p-6 md:p-8">
              <h3 className="text-2xl font-medium">{tool.title}</h3>
              <p className="mt-3 leading-relaxed text-foreground/80">{tool.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-10">
        <p>A terápia történhet csoportos vagy egyéni formában.</p>
        <blockquote className="mt-6 max-w-2xl border-t border-border pt-6 text-lg leading-relaxed">
          „A művészetterápia a folyamatról szól, nem a termékről.”
          <footer className="mt-3 text-sm text-muted-foreground">Sorbara</footer>
        </blockquote>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/muveszetterapia/csoportok">Aktuális csoportok</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/muveszetterapia/gyermek">Gyermek művészetterápia</Link>
          </Button>
        </div>
      </section>

      <CtaBand text="Ha egyéni folyamat érdekel, írj, és megbeszéljük, hogyan induljunk." />
    </div>
  )
}
