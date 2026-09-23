import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { surfaceClass, surfaceHoverClass } from "@/components/surface"
import { cn } from "@/lib/utils"

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

const metrics = ["Húsz év tapasztalat", "Egyéni és céges munka", "Személyre szabott módszertan"]

export default function Home() {
  return (
    <div>
      <section>
        <div className="container mx-auto grid items-center gap-10 px-4 py-12 lg:grid-cols-12 md:py-14">
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
              <Button asChild className="h-11 rounded-full bg-[#1B3A4B] px-6 hover:bg-[#152E3D]">
                <Link href="/kapcsolat">Kapcsolatfelvétel</Link>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-full bg-white px-6">
                <Link href="#szolgaltatasok">Szolgáltatások</Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm lg:col-span-5 lg:mx-0 lg:justify-self-end">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_12px_30px_-12px_rgba(27,58,75,0.35)]">
              <Image src="/images/selfie.jpg" alt="Horváth Ágnes" fill className="object-cover" priority />
            </div>
            <p className="mt-3 text-sm text-zinc-600">
              Business coach, management tréner, szocio- és művészetterapeuta
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-4 px-4 md:grid-cols-3">
        {focuses.map((item) => (
          <article key={item.title} className={cn(surfaceClass, surfaceHoverClass, "md:p-6")}>
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="container mx-auto mt-4 grid gap-4 px-4 md:grid-cols-3">
        {metrics.map((item) => (
          <p key={item} className={cn(surfaceClass, "text-sm font-medium text-zinc-700 md:py-5")}>
            {item}
          </p>
        ))}
      </section>

      <section id="szolgaltatasok" className="container mx-auto px-4 py-12">
        <h2 className="mb-6 text-3xl font-semibold tracking-tight">Szolgáltatások</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex h-full flex-col justify-between rounded-3xl border border-zinc-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(27,58,75,0.12)]"
            >
              <div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-600">{service.text}</p>
              </div>
              <span className="inline-flex items-center text-sm font-medium text-[#1B3A4B]">
                Részletek
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Kinek tudok segíteni?</h2>
          <Link href="/kinek-tudok-segiteni" className="text-sm font-medium text-[#1B3A4B] underline underline-offset-4">
            Megtekintés
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {audiences.map((group) => (
            <article key={group.title} className={cn(surfaceClass, surfaceHoverClass, "md:p-6")}>
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                {group.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12">
        <h2 className="mb-6 text-2xl font-semibold">Alapelveim</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((item, index) => (
            <article key={item.title} className={cn(surfaceClass, "md:p-6")}>
              <span className="font-mono text-sm text-[#1B3A4B]">0{index + 1}</span>
              <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex gap-6 text-sm font-medium text-[#1B3A4B]">
          <Link href="/vizom" className="group inline-flex items-center">
            Vízióm
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link href="/rolam" className="group inline-flex items-center">
            Rólam
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-14">
        <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] sm:flex-row sm:items-center sm:justify-between md:p-8">
          <div>
            <h2 className="text-2xl font-semibold">Vegyük fel a kapcsolatot</h2>
            <p className="mt-2 text-zinc-600">Egy rövid, kötelezettségmentes beszélgetés a céljaidról.</p>
            <div className="mt-4 space-y-1 text-sm">
              <a href="tel:+36203974141" className="block text-[#1B3A4B] hover:underline">
                +36 20 397 4141
              </a>
              <a href="mailto:info@haw.hu" className="block text-[#1B3A4B] hover:underline">
                info@haw.hu
              </a>
            </div>
          </div>
          <Button asChild className="rounded-full bg-[#1B3A4B] px-6 hover:bg-[#152E3D]">
            <Link href="/kapcsolat">Kapcsolatfelvétel</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
