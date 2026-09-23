import { PageHeader, Photo } from "@/components/site"

const pillars = [
  { label: "Ember", text: "Az ember az alap." },
  { label: "Idő", text: "Az idő és a hatékonyság versenyelőny." },
  { label: "Pénz", text: "A pénz a végső célok egyike." },
]

const quotes = [
  {
    text: "Munkám során mindig törekszem arra, hogy alaposan megismerjem a céget, megismerjem az embereket, akik a cégnél dolgoznak vagy dolgozni szeretnének. Fontos szempont számomra, hogy a megfelelő ember kerüljön a megfelelő helyre. Megfelelő emberek, munkatársak nélkül egyetlen cég sem érhet el hosszútávú sikereket.",
    author: "Horváth Ágnes",
    dark: true,
  },
  {
    text: "Tanácsadóként az igazi erősségem az, hogy tudatlan vagyok, és felteszek néhány kérdést.",
    author: "Peter Drucker",
    dark: false,
  },
  {
    text: "Olyan tanácsadó vagyok, aki a figyelmével és az intuíciójával dolgozik. Megfigyelem az adott helyzetet, problémát, ezek alapján fel tudom állítani a tényálláshoz legjobban illeszkedő tervet, és a legmegfelelőbb innovációs ötlet kidolgozására motiválom a résztvevőket.",
    author: "Horváth Ágnes",
    dark: false,
  },
  {
    text: "Tanácsadói erősségem, hogy határozott célok felállításához tudom hozzásegíteni a hozzám fordulókat és az ehhez szükséges lépéseket világos és határozott mederbe tudom terelni.",
    author: "Horváth Ágnes",
    dark: true,
  },
]

export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <PageHeader
        eyebrow="Irány"
        title="Vízióm"
        lead="Nálam központban az ember, az idő és a pénz áll."
      />

      <blockquote className="max-w-3xl border-t border-border pt-8">
        <p className="text-lg leading-relaxed">
          „Amit érdemes csinálni, azt érdemes jól csinálni.”
        </p>
        <footer className="mt-4 text-sm text-muted-foreground">Lord Chesterfield</footer>
      </blockquote>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <article
            key={pillar.label}
            className="rounded-md border bg-card p-6"
          >
            <span className="text-sm text-muted-foreground">0{index + 1}</span>
            <h2 className="mt-3 text-xl font-semibold tracking-tight">{pillar.label}</h2>
            <p className="mt-2 text-muted-foreground">{pillar.text}</p>
          </article>
        ))}
      </div>

      <Photo src="/images/szikla.jpg" alt="Szikla" className="mx-auto mt-14 aspect-[16/7] w-full max-w-5xl" priority />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {quotes.map((quote) => (
          <blockquote
            key={quote.author + quote.text.slice(0, 24)}
            className="flex h-full flex-col border-t border-border py-6"
          >
            <p className="flex-1 leading-relaxed">„{quote.text}”</p>
            <footer className="mt-6 text-sm text-muted-foreground">
              {quote.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  )
}
