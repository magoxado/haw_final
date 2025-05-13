import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CompaniesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Cégeknek</h1>

      <div className="bg-[#f8f4e4] p-8 rounded-lg mb-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Fejlődés. Növekedés. Változás. Újítás.</h2>
          <p className="text-lg">
            Véleményem szerint növekedni, hatékonyabb vállalati teljesítményt elérni, kizárólag vezetői, munkatársi
            közös munkával, letisztázott, hatékony folyamatokkal, tiszta, érhető kommunikációval lehet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Kiknek tudok segíteni?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Növekedési pályán, változás előtt álló cégeknek, vállalkozásoknak, vállalatoknak.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Cégvezetőknek, akik fejlődni, fejleszteni szeretnének.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Csapatoknak, akiknél probléma van és belülről nem látnak rá a kiváltó okokra.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Tulajdonosoknak, akik növelni szeretnék a céget, de nem találják a kollégákhoz vezető utat.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Vezetőknek, akik csapatot, közösséget szeretnének építeni, munkaerőt akarnak megtartani.</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-80">
              <Image
                src="https://cdn.haw.hu/logo.png"
                alt="Céges tanácsadás"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Mit csinálok?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Folyamatokat optimalizálok.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Informatikai megoldásokat javasolok.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Nyomtatványokat egységesítek, létrehozok újakat.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Önjáró folyamatokat állítok össze.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Megtervezem és segítek bevezetni a teljesítményértékelő rendszert.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Hatékonyabbá teszem a felvételi rendszert és a betanulást.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Segítek javítani a vállalati kommunikációt.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Kiépítem a belső vállalati kommunikáció útját.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Támogatom a változások sikeres végrehajtását.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Támogatom a vezetőket a hatékonyabb problémamegoldásban, vezetői folyamataikban.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Erősítem a vállalati kultúrát.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Segítem növeli a munkatársi elkötelezettséget. Támogatom a közösség kiépülését.</span>
          </li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Mit várok el, ha velem dolgozol?</h2>
        <ul className="space-y-3 text-lg">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Aktivitást</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Nyitottságot</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Elkötelezettséget</span>
          </li>
        </ul>
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
