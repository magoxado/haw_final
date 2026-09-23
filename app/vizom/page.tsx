import { DetailPage } from "@/components/site"

const quotes = [
  {
    text: "Munkám során mindig törekszem arra, hogy alaposan megismerjem a céget, megismerjem az embereket, akik a cégnél dolgoznak vagy dolgozni szeretnének. Fontos szempont számomra, hogy a megfelelő ember kerüljön a megfelelő helyre. Megfelelő emberek, munkatársak nélkül egyetlen cég sem érhet el hosszútávú sikereket.",
    author: "Horváth Ágnes",
  },
  {
    text: "Tanácsadóként az igazi erősségem az, hogy tudatlan vagyok, és felteszek néhány kérdést.",
    author: "Peter Drucker",
  },
  {
    text: "Olyan tanácsadó vagyok, aki a figyelmével és az intuíciójával dolgozik. Megfigyelem az adott helyzetet, problémát, ezek alapján fel tudom állítani a tényálláshoz legjobban illeszkedő tervet, és a legmegfelelőbb innovációs ötlet kidolgozására motiválom a résztvevőket.",
    author: "Horváth Ágnes",
  },
  {
    text: "Tanácsadói erősségem, hogy határozott célok felállításához tudom hozzásegíteni a hozzám fordulókat és az ehhez szükséges lépéseket világos és határozott mederbe tudom terelni.",
    author: "Horváth Ágnes",
  },
]

export default function VisionPage() {
  return (
    <DetailPage category="Vízió" title="Vízióm">
      <p>Nálam központban az ember, az idő és a pénz áll.</p>
      <p>„Amit érdemes csinálni, azt érdemes jól csinálni.” — Lord Chesterfield</p>
      <div className="space-y-4">
        {quotes.map((quote) => (
          <blockquote key={quote.text} className="border border-border bg-card px-4 py-4">
            <p>„{quote.text}”</p>
            <footer className="mt-3 text-sm">{quote.author}</footer>
          </blockquote>
        ))}
      </div>
    </DetailPage>
  )
}
