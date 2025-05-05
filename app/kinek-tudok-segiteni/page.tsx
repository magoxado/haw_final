import Image from "next/image"

export default function WhoCanIHelpPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Kinek tudok segíteni?</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <ul className="space-y-4 text-lg">
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
              src="https://pub-467a699223cd4cc99c2ddee563145e7c.r2.dev/Celtudatos-1.jpg"
              alt="Céltudatos"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-muted p-6 rounded-lg mb-12">
        <p className="text-lg mb-4">
          Véleményem szerint növekedni, hatékonyabb vállalati teljesítményt elérni, kizárólag vezetői, munkatársi közös
          munkával, letisztázott, hatékony folyamatokkal, tiszta, érhető kommunikációval lehet. A problémák, kellő
          odafigyeléssel, elemzéssel, nem gátló, hanem támogató folyamatokká alakíthatók át.
        </p>

        <p className="text-lg">
          Húsz éves tapasztalattal, éles szemmel, logikus gondolkodással, széles ismeretekkel támogatom a vállalatokat,
          hogy a jelenlegi helyzeten túllendülve, a fejlődés útjára lépjenek.
        </p>
      </div>
    </div>
  )
}
