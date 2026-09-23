"use client"

import { useState } from "react"
import Link from "next/link"
import { BorderedList, ContactCard, Photo } from "@/components/site"
import { cn } from "@/lib/utils"

const companies = [
  "Növekedési pályán, változás előtt álló cégeknek, vállalkozásoknak, vállalatoknak.",
  "Cégvezetőknek, akik fejlődni, fejleszteni szeretnének.",
  "Csapatoknak, akiknél probléma van és belülről nem látnak rá a kiváltó okokra.",
  "Tulajdonosoknak, akik növelni szeretnék a céget, de nem találják a kollégákhoz vezető utat.",
  "Vezetőknek, akik csapatot, közösséget szeretnének építeni, munkaerőt akarnak megtartani.",
]

const individuals = [
  "Karrierváltás előtt állsz, és nem tudod, merre indulj.",
  "Előrelépésre vágysz, de hiányzik a következő lépés vagy az önbizalom.",
  "Kiégéssel küzdesz, és elveszett a lelkesedésed a munkád iránt.",
  "Állást keresel, és támogatást szeretnél az önéletrajzhoz és az interjúhoz.",
  "Egyensúlyt keresel a munka és a magánélet között.",
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
  "Segítek növelni a munkatársi elkötelezettséget. Támogatom a közösség kiépülését.",
]

export default function AudiencePage({ initial }: { initial: "cegek" | "magan" }) {
  const [tab, setTab] = useState(initial)

  return (
    <div className="container mx-auto px-4 py-16 md:px-8">
      <p className="inline-flex rounded-md border border-border px-2 py-1 text-xs uppercase text-muted-foreground">
        Együttműködés
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Kinek tudok segíteni?</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Ugyanaz a munka két oldalról: cégeknek a működés és a csapat, magánszemélyeknek a karrier és a kiégés.
      </p>

      <div className="mt-8 flex gap-2">
        {(
          [
            ["cegek", "Cégeknek"],
            ["magan", "Magánszemélyeknek"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              "rounded-md border px-3 py-2 text-sm",
              tab === id ? "border-foreground bg-foreground text-background" : "border-border bg-transparent text-muted-foreground",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-10">
          {tab === "cegek" ? (
            <>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Növekedni, hatékonyabb vállalati teljesítményt elérni kizárólag vezetői, munkatársi közös munkával,
                letisztázott folyamatokkal és tiszta kommunikációval lehet. Húsz éves tapasztalattal támogatom a
                vállalatokat, hogy a fejlődés útjára lépjenek.
              </p>
              <BorderedList items={companies} />
              <div>
                <h2 className="mb-6 text-2xl font-semibold">Mit csinálok?</h2>
                <BorderedList items={work} />
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-semibold">Mit várok el, ha velem dolgozol?</h2>
                <BorderedList items={["Aktivitást", "Nyitottságot", "Elkötelezettséget"]} />
              </div>
            </>
          ) : (
            <>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Coachként segítek átlépni az akadályokat, és megtalálni a számodra ideális utat a szakmai életedben.
              </p>
              <BorderedList items={individuals} />
              <div className="flex flex-col gap-3 text-sm sm:flex-row">
                <Link href="/coaching" className="underline">
                  Coaching
                </Link>
                <Link href="/allaskeresesi-tanacsadas" className="underline">
                  Álláskeresési tanácsadás
                </Link>
                <Link href="/muveszetterapia" className="underline">
                  Művészetterápia
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="flex h-full flex-col gap-6">
          <Photo
            src={tab === "cegek" ? "/images/logo.jpg" : "/images/celtudatos.jpg"}
            alt={tab === "cegek" ? "Céges tanácsadás" : "Céltudatos"}
            className="aspect-[4/5] w-full min-h-0"
          />
          <ContactCard />
        </div>
      </div>
    </div>
  )
}
