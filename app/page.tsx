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

const principles = [
  {
    title: "Ember",
    text: "Az ember az alap. A szervezet sikerének kulcsa a megfelelő ember a megfelelő helyen.",
  },
  {
    title: "Idő",
    text: "Az idő és a hatékonyság a legfőbb versenyelőny a mai üzleti környezetben.",
  },
  {
    title: "Pénz",
    text: "A fenntartható működés és a növekedés a közös munka mérhető végeredménye.",
  },
]

export default function Home() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="container mx-auto grid items-center gap-12 px-4 py-16 lg:grid-cols-12 md:py-20">
          <div className="space-y-6 lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Üzleti coaching és szervezetfejlesztés
            </p>
            <h1 className="max-w-xl text-4xl font-medium leading-tight md:text-5xl">
              Emberközpontú vezetés.
              <br />
              <span className="text-zinc-500">Mérhető hatékonyság.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
              Horváth Ágnes, business coach és szervezetfejlesztési tanácsadó. Segítek a vezetőknek és a csapatoknak a
              maximális teljesítmény elérésében.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button asChild className="h-11 rounded-lg px-6">
                <Link href="/kapcsolat">Kapcsolatfelvétel</Link>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-lg bg-white px-6">
                <Link href="#szolgaltatasok">Szolgáltatások</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-100 p-2 shadow-sm">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image src="/images/selfie.jpg" alt="Horváth Ágnes" fill className="object-cover" priority />
              </div>
            </div>
            <p className="mt-3 text-sm text-zinc-600">
              Business coach, management tréner, szocio- és művészetterapeuta
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container mx-auto grid gap-8 px-4 py-8 md:grid-cols-3">
          {focuses.map((item) => (
            <div key={item.title} className="border-t border-border pt-4">
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="mt-1 text-sm text-zinc-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container mx-auto grid gap-4 px-4 py-5 text-sm text-zinc-600 md:grid-cols-3">
          <p>Húsz év tapasztalat</p>
          <p>Egyéni és céges munka</p>
          <p>Személyre szabott módszertan</p>
        </div>
      </section>

      <section id="szolgaltatasok" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-medium">Szolgáltatások</h2>
        <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group flex flex-col">
              <h3 className="text-lg font-semibold group-hover:underline">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">{service.text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                Részletek <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-medium">Kinek tudok segíteni?</h2>
            <Link href="/kinek-tudok-segiteni" className="text-sm text-zinc-600 underline underline-offset-4">
              Megtekintés
            </Link>
          </div>
          <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-3">
            {audiences.map((group) => (
              <div key={group.title}>
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600">
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
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-medium">Alapelveim</h2>
          <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-3">
            {principles.map((item, index) => (
              <article key={item.title}>
                <span className="font-mono text-sm text-zinc-400">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex gap-6 text-sm font-medium">
            <Link href="/vizom" className="inline-flex items-center gap-2 hover:underline">
              Vízióm <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/rolam" className="inline-flex items-center gap-2 hover:underline">
              Rólam <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto grid gap-10 px-4 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-medium">Vegyük fel a kapcsolatot</h2>
            <p className="mt-4 text-zinc-600">
              Foglalj egy rövid, kötelezettségmentes konzultációt, és beszéljük át a céljaidat.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href="tel:+36203974141" className="block hover:underline">
                +36 20 397 4141
              </a>
              <a href="mailto:info@haw.hu" className="block hover:underline">
                info@haw.hu
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
