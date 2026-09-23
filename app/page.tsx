import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Cégeknek",
    description: "Fejlődés. Növekedés. Változás. Újítás.",
    body: "Véleményem szerint növekedni, hatékonyabb vállalati teljesítményt elérni, kizárólag vezetői, munkatársi közös munkával, letisztázott, hatékony folyamatokkal, tiszta, érhető kommunikációval lehet.",
    href: "/cegeknek",
  },
  {
    title: "Álláskeresési tanácsadás",
    description: "Karriertervezés és álláskeresési támogatás",
    body: "Biztosan meglátom Benned az értéket és támogatlak, hogy képviselni is tudd. Segítek az önéletrajzod elkészítésében és az interjúra való felkészülésben.",
    href: "/allaskeresesi-tanacsadas",
  },
  {
    title: "Művészetterápia",
    description: "Egyéni és csoportos művészetterápiás foglalkozások",
    body: "A művészetterápia olyan terápiás folyamat, ahol a művészetet mintegy eszközként használjuk lelki történéseink megértéséhez vagy nonverbális kommunikációhoz.",
    href: "/muveszetterapia",
  },
]

export default function Home() {
  return (
    <div>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">
              Business coach, management tréner, szocio- és művészetterapeuta
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Horváth Ágnes</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Nálam központban az ember, az idő és a pénz áll. Az ember az alap, az idő és a hatékonyság versenyelőny, a
              pénz pedig a végső célok egyike.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/rolam">Tudj meg többet</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/kapcsolat">Kapcsolat</Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-md border border-border lg:ml-auto">
            <Image src="/images/selfie.jpg" alt="Horváth Ágnes" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="container mx-auto border-t border-border px-4 py-12">
        <blockquote>
          <p className="max-w-3xl text-lg leading-relaxed">
            „Munkám során mindig törekszem arra, hogy alaposan megismerjem a céget, megismerjem az embereket, akik a
            cégnél dolgoznak vagy dolgozni szeretnének. Fontos szempont számomra, hogy a megfelelő ember kerüljön a
            megfelelő helyre. Megfelelő emberek, munkatársak nélkül egyetlen cég sem érhet el hosszútávú sikereket.”
          </p>
          <footer className="mt-4 text-sm text-muted-foreground">Horváth Ágnes</footer>
        </blockquote>
      </section>

      <section className="container mx-auto border-t border-border px-4 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Szolgáltatások</h2>
        <div className="mt-6 grid grid-cols-1 border-t border-border md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="flex flex-col border-b border-border p-6 transition-colors hover:bg-card md:border-b-0 md:border-r md:last:border-r-0"
            >
              <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm">
                Részletek
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto border-t border-border px-4 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Rólam írták</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <blockquote className="border-t border-border pt-6">
            <p className="leading-relaxed">
              „Nagyon megoldásfókuszú vagyok. A felmerülő problémákra, mint lehetőségekre tekintek. Nagyon felvillanyoz,
              ahogy elkezdődik a folyamat, kerülnek felszínre az újabb és újabb javaslatok, ötletek és amelyekből a
              végén kikerekedik egy megvalósítható, minden oldalról jól megtámogatott terv. Csodálatos ez a folyamat.”
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              <a
                href="https://read-blog.blog.hu/2021/01/25/haw-the_way_rendszer_a_munkadban"
                className="hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                read-blog.blog.hu
              </a>
            </footer>
          </blockquote>

          <blockquote className="border-t border-border pt-6">
            <p className="leading-relaxed">
              „Azóta az önbizalmam is sokat erősödött. Jobban meg tudom fogalmazni, mit szeretnék. Nem vagyok görcsös,
              nem félek őszintének lenni az interjúkon, hiszen ahogy Ági mondta nekem: a HR-s is egy ember, a saját
              álmaival és érzelmeivel. Csak ajánlani tudom mindenkinek.”
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">Márton Róbert, Athénból</footer>
          </blockquote>
        </div>
      </section>

      <section className="container mx-auto border-t border-border px-4 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Kezdjük el a közös munkát</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Vegye fel velem a kapcsolatot, és beszéljük meg, hogyan segíthetek Önnek vagy vállalkozásának a fejlődésben.
        </p>
        <Button asChild className="mt-6">
          <Link href="/kapcsolat">Kapcsolatfelvétel</Link>
        </Button>
      </section>
    </div>
  )
}
