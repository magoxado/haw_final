import Image from "next/image"

export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Vízióm</h1>

      <blockquote className="text-center italic text-xl mb-12">
        <p>"Amit érdemes csinálni, azt érdemes jól csinálni."</p>
        <footer className="mt-2 font-medium">Lord Chesterfield</footer>
      </blockquote>

      <div className="mb-12">
        <p className="text-lg mb-6">
          Nálam központban az ember, az idő és a pénz áll. Az ember az alap, az idő és a hatékonyság versenyelőny, a
          pénz pedig a végső célok egyike.
        </p>

        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-2xl h-64">
              <Image
                src="images/szikla.jpg"
                alt="Szikla"
                fill
                className="object-cover"
                priority
              />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <blockquote className="bg-primary/10 p-6 rounded-lg h-full">
            <p className="italic mb-4">
              "
              <strong>
                Munkám során mindig törekszem arra, hogy alaposan megismerjem a céget, megismerjem az embereket, akik a
                cégnél dolgoznak vagy dolgozni szeretnének. Fontos szempont számomra, hogy a megfelelő ember kerüljön a
                megfelelő helyre. Megfelelő emberek, munkatársak nélkül egyetlen cég sem érhet el hosszútávú sikereket
              </strong>
              ."
            </p>
            <footer className="text-right font-medium">Horváth Ágnes</footer>
          </blockquote>
        </div>

        <div>
          <blockquote className="bg-secondary/10 p-6 rounded-lg h-full">
            <p className="italic mb-4">
              "Tanácsadóként az igazi erősségem az, hogy tudatlan vagyok, és felteszek néhány kérdést."
            </p>
            <footer className="text-right font-medium">Peter Drucker</footer>
          </blockquote>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <blockquote className="bg-primary/10 p-6 rounded-lg h-full">
            <p className="italic mb-4">
              "Olyan tanácsadó vagyok, aki a figyelmével és az intuíciójával dolgozik. <br />
              Megfigyelem az adott helyzetet, problémát, ezek alapján fel tudom állítani a tényálláshoz legjobban
              illeszkedő tervet, és a legmegfelelőbb innovációs ötlet kidolgozására motiválom a résztvevőket."
            </p>
            <footer className="text-right font-medium">Horváth Ágnes</footer>
          </blockquote>
        </div>

        <div>
          <blockquote className="bg-secondary/10 p-6 rounded-lg h-full">
            <p className="italic mb-4">
              "Tanácsadói erősségem, hogy határozott célok felállításához tudom hozzásegíteni a hozzám fordulókat és az
              ehhez szükséges lépéseket világos és határozott mederbe tudom terelni."
            </p>
            <footer className="text-right font-medium">Horváth Ágnes</footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
