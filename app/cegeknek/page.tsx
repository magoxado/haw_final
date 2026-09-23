import { CtaBand, PageHeader, Photo, SectionTitle } from "@/components/site"

const audiences = [
  "Növekedési pályán, változás előtt álló cégeknek, vállalkozásoknak, vállalatoknak.",
  "Cégvezetőknek, akik fejlődni, fejleszteni szeretnének.",
  "Csapatoknak, akiknél probléma van és belülről nem látnak rá a kiváltó okokra.",
  "Tulajdonosoknak, akik növelni szeretnék a céget, de nem találják a kollégákhoz vezető utat.",
  "Vezetőknek, akik csapatot, közösséget szeretnének építeni, munkaerőt akarnak megtartani.",
]

const work = [
  "Folyamatokat optimalizálok.",
  "Informatikai megoldásokat javasolok.",
  "Nyomtatványokat egységesítek, létrehozok újakat.",
  "Önjáró folyamatokat állítok össze.",
  "Megtervezem és segítek bevezetni a teljesítményértékelő rendszert.",
  "Hatékonyabbá teszem a felvételi rendszert és a betanulást.",
  "Segítek javítani a vállalati kommunikációt.",
  "Kiépítem a belső vállalati kommunikáció útját.",
  "Támogatom a változások sikeres végrehajtását.",
  "Támogatom a vezetőket a hatékonyabb problémamegoldásban, vezetői folyamataikban.",
  "Erősítem a vállalati kultúrát.",
  "Segítem növeli a munkatársi elkötelezettséget. Támogatom a közösség kiépülését.",
]

const expectations = ["Aktivitást", "Nyitottságot", "Elkötelezettséget"]

export default function CompaniesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <PageHeader
        eyebrow="Vállalatoknak"
        title="Cégeknek"
        lead="Fejlődés. Növekedés. Változás. Újítás."
      />

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-lg leading-relaxed text-foreground/85">
            Véleményem szerint növekedni, hatékonyabb vállalati teljesítményt elérni, kizárólag vezetői, munkatársi
            közös munkával, letisztázott, hatékony folyamatokkal, tiszta, érhető kommunikációval lehet.
          </p>
          <div className="mt-8 space-y-3">
            {audiences.map((item, index) => (
              <div key={item} className="flex gap-4 border-t border-border py-4">
                <span className="text-sm text-muted-foreground">0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <Photo src="/images/logo.jpg" alt="Céges tanácsadás" className="aspect-[4/5] w-full" />
      </div>

      <section className="mt-16">
        <SectionTitle>Mit csinálok?</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((item) => (
            <article
              key={item}
              className="rounded-md border bg-card p-5 leading-relaxed"
            >
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle>Mit várok el, ha velem dolgozol?</SectionTitle>
        <div className="grid gap-4 md:grid-cols-3">
          {expectations.map((item) => (
            <p
              key={item}
              className="border-t border-border py-6 text-lg font-semibold"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <CtaBand text="Nézzük meg együtt, hol akad el a működés, és hogyan lehet belőle fejlődés." />
    </div>
  )
}
