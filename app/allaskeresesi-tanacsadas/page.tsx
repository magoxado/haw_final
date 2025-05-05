import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function JobSearchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Álláskeresési- és karrier-tanácsadás</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Önéletrajz"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-64">
            <Image src="/placeholder.svg?height=300&width=400" alt="Interjú" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-2xl h-80">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Szakmai bemutató"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Ami mögöttem van:</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Sok év, toborzási és HR oldalon eltöltött tapasztalat</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Én is sokszor kerestem állást, sok interjún voltam</span>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-semibold text-center">
            Biztosan meglátom Benned az értéket és támogatlak, hogy képviselni is tudd.
          </h2>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Tanácsadás menete:</h2>
        <ol className="space-y-4 list-decimal list-inside text-lg">
          <li>
            Megírod, milyen állást keresel vagyis mi a célod. Átküldöd a már meglévő önéletrajzodat. Ha nincs, akkor
            csak a célodat írod meg.
          </li>
          <li>Időpontot egyeztetünk, amikor online beszélünk.</li>
          <li>Időponttal együtt kapsz egy feladatot is, amelyet el kell készítened a beszélgetésünkre.</li>
          <li>
            Online beszélgetés során átvesszük a fő pontokat, elmondom a javaslataimat az önéletrajzoddal kapcsolatosan.
          </li>
          <li>
            Ha az interjútechnikádat szeretnéd fejleszteni, próbainterjúzunk, én leszek a HR-es, Te pedig a jelentkező.
          </li>
        </ol>
      </div>

      <div className="mb-12 text-center">
        <h3 className="text-xl font-bold mb-6">Tanácsadás díja: 12.000 Ft/alkalom - 60 perc</h3>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/kapcsolat">Kapcsolatfelvétel</Link>
        </Button>
      </div>

      <div className="text-sm text-muted-foreground text-center">
        A Beküldés gomb lenyomásával elismeri, hogy megismerte és elfogadta az{" "}
        <Link href="/adatkezelesi-tajekoztato" className="text-primary hover:underline">
          Adatvédelmi Tájékoztatóban
        </Link>{" "}
        foglaltakat.
      </div>
    </div>
  )
}
