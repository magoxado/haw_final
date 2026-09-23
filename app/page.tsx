import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ContactForm from "@/components/contact-form"

const services = [
  {
    title: "Business coaching",
    text: "Vezetői hatékonyság, karrierút-tervezés és szakmai elakadások feloldása.",
    href: "/coaching",
  },
  {
    title: "Management tréning",
    text: "Vezetői készségek, delegálás és hatékony csapatirányítás.",
    href: "/kinek-tudok-segiteni?cel=cegek",
  },
  {
    title: "Szervezetfejlesztés",
    text: "Folyamatok és együttműködés optimalizálása, a megfelelő ember a megfelelő helyen.",
    href: "/kinek-tudok-segiteni?cel=cegek",
  },
  {
    title: "Művészetterápia",
    text: "Egyéni és csoportos folyamat, ahol az alkotás a belső munka eszköze.",
    href: "/muveszetterapia",
  },
]

const audiences = [
  {
    title: "Vezetőknek",
    points: ["Kiégés megelőzése", "Karrierváltás és új utak", "Vezetői önbizalom"],
  },
  {
    title: "Cégeknek",
    points: ["Megfelelő ember a megfelelő helyen", "Teljesítménynövelés", "Fluktuáció csökkentése"],
  },
  {
    title: "Csapatoknak",
    points: ["Kommunikáció", "Konfliktuskezelés", "Együttműködés"],
  },
]

const focuses = [
  {
    title: "Személyre szabott",
    text: "Egyéni vezetői coaching és fejlesztési folyamatok.",
  },
  {
    title: "Hatékonyság",
    text: "Munkatársi potenciál és időgazdálkodás.",
  },
  {
    title: "Szervezeti egyensúly",
    text: "Fenntartható működés és erős csapategység.",
  },
]

export default function Home() {
  return (
    <div>
      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs uppercase text-muted-foreground">Üzleti coaching és szervezetfejlesztés</p>
            <h1 className="mt-3 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
              Emberközpontú vezetés. Mérhető hatékonyság.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Horváth Ágnes — business coach és szervezetfejlesztési tanácsadó. Segítek a vezetőknek és csapatoknak a
              maximális teljesítmény elérésében.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/kapcsolat">Kapcsolatfelvétel</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#szolgaltatasok">Szolgáltatások</Link>
              </Button>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="w-full max-w-sm rounded-md border border-border bg-card p-2">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/selfie.jpg" alt="Horváth Ágnes" fill className="object-cover" priority />
              </div>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Business coach, management tréner, szocio- és művészetterapeuta
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="container mx-auto grid gap-6 px-4 py-6 md:grid-cols-3">
          {focuses.map((item) => (
            <div key={item.title} className="border-l-2 border-[#9a7b4f] pl-4">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container mx-auto grid gap-4 px-4 py-5 text-sm text-muted-foreground md:grid-cols-3">
          <p>Húsz év tapasztalat</p>
          <p>Egyéni és céges munka</p>
          <p>Személyre szabott módszertan</p>
        </div>
      </section>

      <section id="szolgaltatasok" className="container mx-auto px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Szolgáltatások</h2>
          <Link href="/coaching" className="text-sm text-muted-foreground hover:text-white">
            Coaching
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="flex flex-col rounded-md border border-border bg-card p-5 hover:border-[#9a7b4f]"
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-white">
                Részletek <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Kinek tudok segíteni?</h2>
            <Link href="/kinek-tudok-segiteni" className="text-sm text-muted-foreground hover:text-white">
              Megtekintés
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {audiences.map((group) => (
              <div key={group.title} className="rounded-md border border-border bg-card p-5">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {group.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto grid gap-8 px-4 py-14 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Ember, idő, pénz</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Az ember az alap, az idő és a hatékonyság versenyelőny, a pénz pedig a végső célok egyike. A munka akkor
              marad meg, ha a megfelelő ember kerül a megfelelő helyre.
            </p>
            <Link href="/vizom" className="mt-5 inline-flex items-center gap-2 text-sm text-white hover:underline">
              Vízióm <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-md border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">Rólam</p>
            <p className="mt-3 leading-relaxed">
              „Nálam központban az ember, az idő és a pénz áll.”
            </p>
            <Link href="/rolam" className="mt-5 inline-flex items-center gap-2 text-sm text-white hover:underline">
              Teljes történet <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto grid gap-10 px-4 py-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-semibold">Vegyük fel a kapcsolatot</h2>
            <p className="mt-4 text-muted-foreground">
              Foglalj egy rövid, kötelezettségmentes konzultációt, és beszéljük át a céljaidat.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href="tel:+36203974141" className="block text-white hover:underline">
                +36 20 397 4141
              </a>
              <a href="mailto:info@haw.hu" className="block text-white hover:underline">
                info@haw.hu
              </a>
            </div>
          </div>
          <div className="rounded-md border border-border bg-card p-5 md:p-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
