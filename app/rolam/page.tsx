import { CtaBand, PageHeader, Photo, SectionTitle } from "@/components/site"

const notes = [
  "Nagyon fontosnak tartom a folyamatszabályozást, azt gondolom, hogy a dolgok csak úgy működnek jól, ha rendszerben látjuk az egészet, és azt is több oldalról körüljárva.",
  "Nagyon fontos számomra a tanulás, minél tágabb nézőpont, ezért sok szakmai fórumon megfordultam, tervezem a környezetemben is hasonlót életre hívni.",
  "A tanulás, a különböző témák több oldalról történő megközelítése mindig izgalommal tölt el, motivál.",
  "Munkám során nagyon sokszor használom az intuícióimat, begyűjtöm az információkat, figyelek, kutatok, és utána állok elő egy kész tervvel, javaslattal.",
  "Az elmúlt öt év során jelentős tapasztalatot szereztem az emberi erőforrás területén, különös hangsúlyt fektetve az interjúztatásra, tréningekre, valamint különböző rendszerek és folyamatok szakmai támogatására.",
  "Nemrégiben szocio- és művészetterapeuta képesítést is szereztem, ami tovább erősítette képességeimet az emberi kapcsolatok és az emberek hatékonyságának javítása terén. Számomra az emberek és a hatékonyság összekapcsolása a fő fókusz és szenvedélyesen hiszem, hogy az innovatív megközelítések és folyamatok segíthetnek elérni a kiváló eredményeket a különböző üzleti területeken.",
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <PageHeader eyebrow="Bemutatkozás" title="Rólam" />

      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Photo src="/images/selfie.jpg" alt="Horváth Ágnes" className="mx-auto aspect-[4/5] w-full max-w-md" priority />
        <div>
          <h2 className="text-3xl font-medium leading-tight md:text-4xl">
            Horváth Ágnes – Fejlesztő, tanácsadó. (Megújítás mestere)
          </h2>
          <p className="mt-4 text-lg text-primary">
            Business coach, management tréner, szocio- és művészetterapeuta
          </p>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/85">
            <p>
              Agrármenedzser és közgazdász végzettséggel rendelkezem és munkám során mindig kiemelt figyelmet fordítok az
              emberi kapcsolatokra és az innovációra.
            </p>
            <p>
              Évek során tudatosan építettem fel a karrierem; dolgoztam 2 fős cégtől a 400 fősig. Többféle típusú
              vezetővel, különböző típusú munkatársakkal dolgoztam együtt. Ezekre a munkákra, feladatokra, mindig úgy
              tekintettem, mint egy-egy megtanulandó fejezet a szakmámhoz, még akkor is, ha ez sokszor nehéz volt.
            </p>
            <p>
              2003-ban végeztem a SZIE-VTI-n agrármenedzserként, utána SZIE-GTK-n közgazdászként. Azóta szerelem nekem ez
              a terület. Szakdolgozataimat is ezen a területen írtam (coaching, vezetési tanácsadás, valamint ERP).
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-2">
        {notes.map((note, index) => (
          <article
            key={note}
            className="rounded-md border bg-card p-6"
          >
            <span className="text-sm text-muted-foreground">0{index + 1}</span>
            <p className="mt-3 leading-relaxed text-foreground/85">{note}</p>
          </article>
        ))}
      </div>

      <section className="mt-16 border-t border-border pt-10">
        <SectionTitle>Miért a művészetterápia?</SectionTitle>
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Nagyon sokszor tapasztaltam, hogy minden megvan, minden egyben van, mégsem történik meg a változás. Ennek
          középpontjában is az ember áll. Művészetterápia eszközeivel át lehet segíteni a személyt, a csoportot a
          nehézségeken, az akadályokon, amelyek segítik a változást, a megújulást. Ezáltal egy komplex fejlesztési
          szolgáltatást tudok nyújtani a hozzám fordulóknak.
        </p>
      </section>

      <section className="mt-16">
        <SectionTitle>Rólam írták</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2">
          <blockquote className="rounded-md border bg-card p-8">
            <p className="text-lg leading-relaxed">
              „Nagyon megoldásfókuszú vagyok. A felmerülő problémákra, mint lehetőségekre tekintek. Nagyon felvillanyoz,
              ahogy elkezdődik a folyamat, kerülnek felszínre az újabb és újabb javaslatok, ötletek és amelyekből a
              végén kikerekedik egy megvalósítható, minden oldalról jól megtámogatott terv. Csodálatos ez a folyamat.”
            </p>
            <footer className="mt-6">
              <a
                href="https://read-blog.blog.hu/2021/01/25/haw-the_way_rendszer_a_munkadban"
                className="text-sm font-medium text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                read-blog.blog.hu
              </a>
            </footer>
          </blockquote>
          <blockquote className="rounded-md border bg-secondary/70 p-8">
            <p className="text-lg leading-relaxed">
              „Azóta az önbizalmam is sokat erősödött. Jobban meg tudom fogalmazni, mit szeretnék. Nem vagyok görcsös,
              nem félek őszintének lenni az interjúkon, hiszen ahogy Ági mondta nekem: a HR-s is egy ember, a saját
              álmaival és érzelmeivel. Csak ajánlani tudom mindenkinek.”
            </p>
            <footer className="mt-6 text-sm font-medium">Márton Róbert, Athénból</footer>
          </blockquote>
        </div>
      </section>

      <CtaBand text="Ha szeretné megismerni, hogyan tudok segíteni, írjon, és egyeztetünk egy beszélgetést." />
    </div>
  )
}
