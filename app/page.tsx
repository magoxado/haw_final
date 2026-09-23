import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Briefcase, Palette } from "lucide-react"

const services = [
  {
    icon: Briefcase,
    title: "Cégeknek",
    description: "Fejlődés. Növekedés. Változás. Újítás.",
    body: "Véleményem szerint növekedni, hatékonyabb vállalati teljesítményt elérni, kizárólag vezetői, munkatársi közös munkával, letisztázott, hatékony folyamatokkal, tiszta, érhető kommunikációval lehet.",
    href: "/cegeknek",
  },
  {
    icon: Users,
    title: "Álláskeresési tanácsadás",
    description: "Karriertervezés és álláskeresési támogatás",
    body: "Biztosan meglátom Benned az értéket és támogatlak, hogy képviselni is tudd. Segítek az önéletrajzod elkészítésében és az interjúra való felkészülésben.",
    href: "/allaskeresesi-tanacsadas",
  },
  {
    icon: Palette,
    title: "Művészetterápia",
    description: "Egyéni és csoportos művészetterápiás foglalkozások",
    body: "A művészetterápia olyan terápiás folyamat, ahol a művészetet mintegy eszközként használjuk lelki történéseink megértéséhez vagy nonverbális kommunikációhoz.",
    href: "/muveszetterapia",
  },
]

export default function Home() {
  return (
    <div>
      <section className="container mx-auto px-4 pb-8 pt-10 md:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-up">
            <p className="eyebrow mb-5">Business coach · tréner · terapeuta</p>
            <h1 className="max-w-3xl text-5xl font-medium leading-[0.95] md:text-7xl">
              Horváth Ágnes
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Nálam központban az ember, az idő és a pénz áll. Az ember az alap, az idő és a hatékonyság versenyelőny, a
              pénz pedig a végső célok egyike.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/rolam">
                  Tudj meg többet <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/kapcsolat">Kapcsolat</Link>
              </Button>
            </div>
          </div>

          <div className="animate-fade-up relative mx-auto w-full max-w-md [animation-delay:140ms]">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[2rem] bg-primary/15" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-xl">
              <Image src="/images/selfie.jpg" alt="Horváth Ágnes" fill className="object-cover" priority />
            </div>
            <div className="animate-float absolute -bottom-5 -left-2 max-w-[220px] rounded-2xl border bg-card/95 px-4 py-3 shadow-lg backdrop-blur md:-left-8">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Fókusz</p>
              <p className="mt-1 font-display text-lg leading-snug">Ember, idő, pénz</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <blockquote className="rounded-[2rem] bg-foreground px-6 py-12 text-background md:px-16">
          <p className="mx-auto max-w-4xl text-center font-display text-2xl italic leading-snug md:text-3xl">
            „Munkám során mindig törekszem arra, hogy alaposan megismerjem a céget, megismerjem az embereket, akik a
            cégnél dolgoznak vagy dolgozni szeretnének. Fontos szempont számomra, hogy a megfelelő ember kerüljön a
            megfelelő helyre. Megfelelő emberek, munkatársak nélkül egyetlen cég sem érhet el hosszútávú sikereket.”
          </p>
          <footer className="mt-6 text-center text-sm uppercase tracking-[0.18em] text-background/60">
            Horváth Ágnes
          </footer>
        </blockquote>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-3">Amiben segítek</p>
            <h2 className="text-4xl font-medium md:text-5xl">Szolgáltatások</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Vállalati fejlődés, karrier és művészetterápia — egy helyen, az emberre hangolva.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col rounded-[1.6rem] border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-3xl text-foreground/15">0{index + 1}</span>
              </div>
              <h3 className="text-2xl font-medium">{service.title}</h3>
              <p className="mt-2 text-sm text-primary">{service.description}</p>
              <p className="mt-4 flex-1 text-muted-foreground">{service.body}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                Részletek
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-8">
        <h2 className="mb-8 text-center text-4xl font-medium md:text-5xl">Rólam írták</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <blockquote className="rounded-[1.6rem] border bg-card p-8">
            <p className="text-lg leading-relaxed">
              „Nagyon megoldásfókuszú vagyok. A felmerülő problémákra, mint lehetőségekre tekintek. Nagyon felvillanyoz,
              ahogy elkezdődik a folyamat, kerülnek felszínre az újabb és újabb javaslatok, ötletek és amelyekből a
              végén kikerekedik egy megvalósítható, minden oldalról jól megtámogatott terv. Csodálatos ez a folyamat.”
            </p>
            <footer className="mt-6 text-right">
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

          <blockquote className="rounded-[1.6rem] border bg-secondary/70 p-8">
            <p className="text-lg leading-relaxed">
              „Azóta az önbizalmam is sokat erősödött. Jobban meg tudom fogalmazni, mit szeretnék. Nem vagyok görcsös,
              nem félek őszintének lenni az interjúkon, hiszen ahogy Ági mondta nekem: a HR-s is egy ember, a saját
              álmaival és érzelmeivel. Csak ajánlani tudom mindenkinek.”
            </p>
            <footer className="mt-6 text-right text-sm font-medium">Márton Róbert, Athénból</footer>
          </blockquote>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-foreground md:px-16">
          <h2 className="text-4xl font-medium md:text-5xl">Kezdjük el a közös munkát</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/85">
            Vegye fel velem a kapcsolatot, és beszéljük meg, hogyan segíthetek Önnek vagy vállalkozásának a fejlődésben.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href="/kapcsolat">Kapcsolatfelvétel</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
