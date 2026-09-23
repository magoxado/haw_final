import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CoachingPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <p className="eyebrow mb-3 text-center">Karrier</p>
      <h1 className="mb-12 text-center text-4xl font-medium md:text-6xl">Coaching</h1>

      <div className="bg-secondary/80 p-8 rounded-lg mb-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Coachként segítek neked átlépni az akadályokat és megtalálni a számodra ideális utat a szakmai életedben.</h2>
          <p className="text-lg">
            Az elfogadás és ítéletmentesség mellett a kedvességet is alapvető karizmatikus jegyemnek tartom, amely meghatározza a kapcsolatomat ügyfeleimmel.
            Hiszem, hogy a kedvesség ereje segíti a bizalom és a nyitottság kialakítását és hozzájárul ahhoz, hogy ügyfeleim önmagukat adhassák.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Kérdések, amelyek felmerülhetnek Benned:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Hogyan találjak új karrierutat?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Hogyan kérjek előléptetést?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Mit tegyek, ha kiégtem a munkahelyemen?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Milyen karriert válasszak?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Mikor érdemes karriert váltani?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Hogyan építsek önbizalmat az állásinterjú előtt?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Hogyan egyensúlyozzam a munkát és a magánéletet?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Miért nem haladok előre a karrieremben?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Hogyan találjam meg a valódi szenvedélyemet a munkámban?</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-80">
              <Image
                src="/images/onarckep.jpg" 
                alt="Coaching támogatás"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Kinek segítek?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
          <div>
            <h3 className="text-xl font-semibold mb-4">Karrierváltás előtt állsz?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Érzed, hogy nem a megfelelő területen dolgozol?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Szeretnél új szakmai kihívásokat, de nem tudod, merre indulj?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Vonz egy új terület, de bizonytalan vagy a lépésekben?</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Előrelépésre vágysz?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Megrekedtél a jelenlegi pozíciódban?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Vezetői ambícióid vannak, de hiányoznak bizonyos készségek vagy az önbizalom?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Szeretnéd jobban érvényesíteni tudásodat és értékeidet?</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Kiégéssel küzdesz?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Elvesztetted a lelkesedésedet a munkád iránt?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Folyamatos stressz és nyomás alatt dolgozol?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Nehezen találod az egyensúlyt a munka és magánélet között?</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Amit nyújtok</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span><span className="font-bold">Személyre szabott karrierút-tervezés</span><br/>Közösen fedezzük fel valódi tehetségedet és szenvedélyeidet, majd ezekhez igazítjuk karriercéljaidat.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span><span className="font-bold">Változásmenedzsment támogatás</span><br/>Biztonságos környezetet teremtek, ahol feldolgozhatod a munkahelyváltással járó bizonytalanságokat és félelmeket.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span><span className="font-bold">Erőforrás-aktiválás</span><br/>Segítek felismerni és hasznosítani a benned rejlő, de kihasználatlan képességeket és erőforrásokat.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span><span className="font-bold">Kiégés-megelőzés és kezelés</span><br/>Praktikus eszközöket kapsz a munkahelyi stressz kezeléséhez és az egyensúly megteremtéséhez.</span>
          </li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Miért velem?</h2>
        <ul className="space-y-3 text-lg">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span><span className="font-bold">Holisztikus megközelítés</span>: nem csak a munkára, hanem az egész életedre fókuszálunk</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span><span className="font-bold">Gyakorlati tapasztalat</span>: saját karrierváltási tapasztalataimat is beépítem a coaching folyamatba</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span><span className="font-bold">Mérhető eredmények</span>: konkrét eszközöket és nyomonkövetési módszereket alkalmazok</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span><span className="font-bold">Hosszú távú gondolkodás</span>: nem gyors megoldásokat, hanem fenntartható stratégiákat kínálok</span>
          </li>
        </ul>
      </div>

      <div className="text-center bg-secondary/80 p-8 rounded-lg mb-12">
        <p className="text-lg mb-4 italic">"Nem csak a munkád változik – te magad is fejlődsz"</p>
        <p className="text-lg mb-4 italic">"A valódi siker akkor jön, amikor a karriered összhangban van az értékeiddel"</p>
        <p className="text-lg italic">"Minden váltás lehetőség az újrakezdésre és növekedésre"</p>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Kezdjük el a közös munkát!</h2>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/kapcsolat">Kapcsolatfelvétel</Link>
        </Button>
      </div>
    </div>
  )
}