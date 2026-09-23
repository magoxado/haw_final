"use client"

import { useState } from "react"
import Link from "next/link"
import { BorderedList, ContactCard, Photo } from "@/components/site"
import { surfaceClass } from "@/components/surface"
import { cn } from "@/lib/utils"

const companies = [
  {
    id: "cegek",
    text: "Növekedési pályán, változás előtt álló cégeknek, vállalkozásoknak, vállalatoknak.",
  },
  { id: "vezetok", text: "Cégvezetőknek, akik fejlődni, fejleszteni szeretnének." },
  { id: "csapatok", text: "Csapatoknak, akiknél probléma van és belülről nem látnak rá a kiváltó okokra." },
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

const workGroups = [
  {
    title: "Folyamatok",
    items: [
      "Folyamatokat optimalizálok.",
      "Informatikai megoldásokat javasolok.",
      "Nyomtatványokat egységesítek, létrehozok újakat.",
      "Önjáró folyamatokat állítok össze.",
    ],
  },
  {
    title: "Emberek",
    items: [
      "Megtervezem és segítek bevezetni a teljesítményértékelő rendszert.",
      "Hatékonyabbá teszem a felvételi rendszert és a betanulást.",
      "Támogatom a vezetőket a hatékonyabb problémamegoldásban, vezetői folyamataikban.",
    ],
  },
  {
    title: "Kommunikáció",
    items: [
      "Segítek javítani a vállalati kommunikációt.",
      "Kiépítem a belső vállalati kommunikáció útját.",
      "Támogatom a változások sikeres végrehajtását.",
    ],
  },
  {
    title: "Kultúra",
    items: [
      "Erősítem a vállalati kultúrát.",
      "Segítek növelni a munkatársi elkötelezettséget. Támogatom a közösség kiépülését.",
    ],
  },
]

export default function AudiencePage({ initial }: { initial: "cegek" | "magan" }) {
  const [tab, setTab] = useState(initial)

  return (
    <div className="container mx-auto px-4 py-10 md:px-8 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Kinek tudok segíteni?</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Ugyanaz a munka két oldalról: cégeknek a működés és a csapat, magánszemélyeknek a karrier és a kiégés.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
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
              "rounded-full px-4 py-2 text-sm transition-colors",
              tab === id ? "bg-[#1B3A4B] text-white" : "border border-zinc-300 bg-white text-zinc-900 shadow-[0_8px_20px_-8px_rgba(27,58,75,0.25)] hover:border-[#1B3A4B]/40",
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
                <div className="grid gap-4 md:grid-cols-2">
                  {workGroups.map((group) => (
                    <article key={group.title} className={surfaceClass}>
                      <h3 className="text-lg font-semibold">{group.title}</h3>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-700">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
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
                <Link href="/coaching" className="font-medium text-[#1B3A4B] underline underline-offset-4">
                  Coaching
                </Link>
                <Link href="/allaskeresesi-tanacsadas" className="font-medium text-[#1B3A4B] underline underline-offset-4">
                  Álláskeresési tanácsadás
                </Link>
                <Link href="/muveszetterapia" className="font-medium text-[#1B3A4B] underline underline-offset-4">
                  Művészetterápia
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="lg:sticky lg:top-24">
          {tab === "magan" ? (
            <Photo
              src="/images/celtudatos.jpg"
              alt="Céltudatos"
              caption="Magánszemélyeknek"
              className="mb-4"
            />
          ) : null}
          <ContactCard mark={tab === "cegek" ? "/images/logo.jpg" : undefined} />
        </div>
      </div>
    </div>
  )
}
