import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CoachingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Coaching Szolgáltatások</h1>

      {/* Introduction and Core Values Section */}
      <div className="bg-[#f8f4e4] p-8 rounded-lg mb-12 shadow-lg">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Személyre Szabott Támogatás a Karrierútodon</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Coachként célom, hogy segítsek neked **átlépni az akadályokat** és megtalálni a számodra **ideális utat a szakmai életedben**. Az együttműködésünk alapja a **kölcsönös bizalom, tisztelet és empátia**. Alapvető karizmatikus jegyemnek tartom a **kedvességet, az elfogadást és az ítéletmentességet**, amelyek meghatározzák a kapcsolatomat ügyfeleimmel.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Hiszem, hogy a kedvesség és a biztonságos környezet ereje segíti a **bizalom és a nyitottság kialakítását**, hozzájárulva ahhoz, hogy önmagadat adhasd. Kiemelten fontos számomra, hogy a folyamat során **megéld szabad akaratodat** – megoszd, amit fontosnak érzel, vagy bátran nemet mondj és határokat szabj. Célom, hogy a coaching során lehetőséget biztosítsak számodra ennek a **belső szabadságnak a gyakorlására**, mely később a mindennapi életedbe is átvihető.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-5 text-gray-800">Gyakori Kérdések és Dilemmák:</h3>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Hogyan találjak **új karrierutat**?</li>
              <li>Milyen stratégiával kérhetek **előléptetést**?</li>
              <li>Mit tegyek, ha **kiégés jeleit** tapasztalom a munkahelyemen?</li>
              <li>Hogyan válasszam ki a számomra legmegfelelőbb **karriert**?</li>
              <li>Mikor van itt az ideje a **karrierváltásnak**?</li>
              <li>Hogyan építhetem fel az **önbizalmamat** az állásinterjúk előtt?</li>
              <li>Hogyan teremtsek **egyensúlyt a munka és a magánélet** között?</li>
              <li>Mi akadályozza **karrierem előrehaladását**?</li>
              <li>Hogyan fedezhetem fel **valódi szenvedélyemet** a munkámban?</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-80">
              <Image
                src="/images/professional-coaching-image.jpg" // **Updated placeholder: Replace with a high-quality professional image**
                alt="Professzionális Coaching Támogatás"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Target Audience Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Kinek Szólnak Szolgáltatásaim?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
          {/* Karrierváltás Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Karrierváltás Előtt Állsz?</h3>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Érzed, hogy nem a megfelelő területen dolgozol?</li>
              <li>Szeretnél új szakmai kihívásokat, de bizonytalan vagy az irányban?</li>
              <li>Vonz egy új terület, de hiányzik a magabiztosság a lépésekhez?</li>
            </ul>
          </div>

          {/* Előrelépés Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Előrelépésre Vágysz?</h3>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Megrekedtél a jelenlegi pozíciódban?</li>
              <li>Vezetői ambícióid vannak, de hiányoznak bizonyos készségek vagy az önbizalom?</li>
              <li>Szeretnéd hatékonyabban érvényesíteni tudásodat és értékeidet?</li>
            </ul>
          </div>

          {/* Kiégés Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Kiégéssel Küzdesz?</h3>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Elvesztetted a lelkesedésedet a munkád iránt?</li>
              <li>Folyamatos stressz és nyomás alatt dolgozol?</li>
              <li>Nehezen találod az egyensúlyt a munka és a magánélet között?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What I Offer Section */}
      <div className="mb-12 bg-gray-50 p-8 rounded-lg shadow-inner">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Amit Nyújtok a Coaching Folyamán</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <li className="flex items-start">
            <span className="text-primary mr-3 text-2xl">•</span>
            <span><span className="font-bold text-gray-900">Személyre Szabott Karrierút-tervezés:</span> Közösen fedezzük fel valódi tehetségedet és szenvedélyeidet, majd ezekhez igazítjuk karriercéljaidat.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3 text-2xl">•</span>
            <span><span className="font-bold text-gray-900">Változásmenedzsment Támogatás:</span> Biztonságos környezetet teremtek, ahol feldolgozhatod a munkahelyváltással járó bizonytalanságokat és félelmeket.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3 text-2xl">•</span>
            <span><span className="font-bold text-gray-900">Erőforrás-aktiválás:</span> Segítek felismerni és hasznosítani a benned rejlő, de kihasználatlan képességeket és erőforrásokat.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3 text-2xl">•</span>
            <span><span className="font-bold text-gray-900">Kiégés-megelőzés és Kezelés:</span> Praktikus eszközöket kapsz a munkahelyi stressz kezeléséhez és az egyensúly megteremtéséhez.</span>
          </li>
        </ul>
      </div>

      {/* Why Choose Me Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Miért Engem Válassz?</h2>
        <ul className="space-y-4 text-lg bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <li className="flex items-start">
            <span className="text-primary mr-3 text-2xl">•</span>
            <span><span className="font-bold text-gray-900">Holisztikus Megközelítés:</span> Nem csupán a munkára, hanem az életed egészére fókuszálunk, komplex megoldásokat kínálva.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3 text-2xl">•</span>
            <span><span className="font-bold text-gray-900">Gyakorlati Tapasztalat:</span> Saját karrierváltási és szakmai tapasztalataimat is beépítem a coaching folyamatba, hiteles támogatást nyújtva.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3 text-2xl">•</span>
            <span><span className="font-bold text-gray-900">Mérhető Eredmények:</span> Konkrét, gyakorlati eszközöket és nyomonkövetési módszereket alkalmazok a fejlődésed biztosítása érdekében.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3 text-2xl">•</span>
            <span><span className="font-bold text-gray-900">Hosszú Távú Gondolkodás:</span> Nem gyors, felületes megoldásokat, hanem fenntartható stratégiákat kínálok a tartós siker eléréséhez.</span>
          </li>
        </ul>
      </div>

      {/* Testimonials/Quotes Section */}
      <div className="text-center bg-[#f8f4e4] p-8 rounded-lg mb-12 shadow-md">
        <p className="text-xl mb-4 italic text-gray-700">"Nem csak a munkád változik – te magad is fejlődsz."</p>
        <p className="text-xl mb-4 italic text-gray-700">"A valódi siker akkor jön, amikor a karriered összhangban van az értékeiddel."</p>
        <p className="text-xl italic text-gray-700">"Minden váltás lehetőség az újrakezdésre és növekedésre."</p>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Kezdjük el a közös munkát!</h2>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-xl rounded-full transition-colors duration-300 ease-in-out">
          <Link href="/kapcsolat">Kapcsolatfelvétel</Link>
        </Button>
      </div>
    </div>
  )
}