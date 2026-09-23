import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <p className="eyebrow mb-3 text-center">Bemutatkozás</p>
      <h1 className="mb-12 text-center text-4xl font-medium md:text-6xl">Rólam</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Horváth Ágnes - Fejlesztő, tanácsadó.
             (Megújítás mestere)</h2>
          <h3 className="text-xl font-medium mb-6">Business coach, management tréner, szocio- és művészetterapeuta</h3>

          <p className="mb-4">
            Agrármenedzser és közgazdász végzettséggel rendelkezem és munkám során mindig kiemelt figyelmet fordítok az
            emberi kapcsolatokra és az innovációra.
          </p>

          <p className="mb-4">
            Évek során tudatosan építettem fel a karrierem; dolgoztam 2 fős cégtől a 400 fősig. Többféle típusú
            vezetővel, különböző típusú munkatársakkal dolgoztam együtt. Ezekre a munkákra, feladatokra, mindig úgy
            tekintettem, mint egy-egy megtanulandó fejezet a szakmámhoz, még akkor is, ha ez sokszor nehéz volt.
          </p>

          <p className="mb-4">
            2003-ban végeztem a SZIE-VTI-n agrármenedzserként, utána SZIE-GTK-n közgazdászként. Azóta szerelem nekem ez
            a terület. Szakdolgozataimat is ezen a területen írtam (coaching, vezetési tanácsadás, valamint ERP).
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-64 h-80 rounded-lg overflow-hidden">
                          <Image
                            src="/images/selfie.jpg"
                            alt="Horváth Ágnes"
                            fill
                            className="object-cover"
                            priority
                          />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <p className="mb-4">
          Nagyon fontosnak tartom a folyamatszabályozást, azt gondolom, hogy a dolgok csak úgy működnek jól, ha
          rendszerben látjuk az egészet, és azt is több oldalról körüljárva.
        </p>

        <p className="mb-4">
          Nagyon fontos számomra a tanulás, minél tágabb nézőpont, ezért sok szakmai fórumon megfordultam, tervezem a
          környezetemben is hasonlót életre hívni.
        </p>

        <p className="mb-4">
          A tanulás, a különböző témák több oldalról történő megközelítése mindig izgalommal tölt el, motivál.
        </p>

        <p className="mb-4">
          Munkám során nagyon sokszor használom az intuícióimat, begyűjtöm az információkat, figyelek, kutatok, és utána
          állok elő egy kész tervvel, javaslattal.
        </p>

        <p className="mb-4">
          Az elmúlt öt év során jelentős tapasztalatot szereztem az emberi erőforrás területén, különös hangsúlyt
          fektetve az interjúztatásra, tréningekre, valamint különböző rendszerek és folyamatok szakmai támogatására.
        </p>

        <p className="mb-4">
          Nemrégiben szocio- és művészetterapeuta képesítést is szereztem, ami tovább erősítette képességeimet az emberi
          kapcsolatok és az emberek hatékonyságának javítása terén. Számomra az emberek és a hatékonyság összekapcsolása
          a fő fókusz és szenvedélyesen hiszem, hogy az innovatív megközelítések és folyamatok segíthetnek elérni a
          kiváló eredményeket a különböző üzleti területeken.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Miért a művészetterápia?</h2>
        <p>
          Nagyon sokszor tapasztaltam, hogy minden megvan, minden egyben van, mégsem történik meg a változás. Ennek
          középpontjában is az ember áll. Művészetterápia eszközeivel át lehet segíteni a személyt, a csoportot a
          nehézségeken, az akadályokon, amelyek segítik a változást, a megújulást. Ezáltal egy komplex fejlesztési
          szolgáltatást tudok nyújtani a hozzám fordulóknak.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Rólam írták</h2>

        <blockquote className="border-l-4 border-primary pl-4 mb-6">
          <p className="italic mb-2">
            "Nagyon megoldásfókuszú vagyok. A felmerülő problémákra, mint lehetőségekre tekintek. Nagyon felvillanyoz,
            ahogy elkezdődik a folyamat, kerülnek felszínre az újabb és újabb javaslatok, ötletek és amelyekből a végén
            kikerekedik egy megvalósítható, minden oldalról jól megtámogatott terv. Csodálatos ez a folyamat."
          </p>
          <cite>
            <a
              href="https://read-blog.blog.hu/2021/01/25/haw-the_way_rendszer_a_munkadban"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://read-blog.blog.hu/2021/01/25/haw-the_way_rendszer_a_munkadban
            </a>
          </cite>
        </blockquote>

        <blockquote className="border-l-4 border-primary pl-4">
          <p className="italic mb-2">
            "Azóta az önbizalmam is sokat erősödött. Jobban meg tudom fogalmazni, mit szeretnék. Nem vagyok görcsös, nem
            félek őszintének lenni az interjúkon, hiszen ahogy Ági mondta nekem: a HR-s is egy ember, a saját álmaival
            és érzelmeivel. Csak ajánlani tudom mindenkinek."
          </p>
          <cite>Márton Róbert, Athénból</cite>
        </blockquote>
      </div>
    </div>
  )
}
