import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock3, Palette, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Csoportok – HAW",
  description: "A művészetterápiás csoportok szervezés alatt állnak. Hamarosan érkeznek a részletek.",
}

const upcoming = [
  {
    icon: Users,
    title: "Csoportos foglalkozások",
    text: "A közös alkotás ritmusa, témái és időpontjai most állnak össze.",
  },
  {
    icon: Palette,
    title: "Egyéni folyamat",
    text: "Addig is egyéni művészetterápiás kísérésben tudok veled dolgozni.",
  },
  {
    icon: Clock3,
    title: "Részletek hamarosan",
    text: "Amint a csoportok véglegesek, itt jelennek meg az időpontok és a jelentkezés.",
  },
]

export default function GroupsComingSoonPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl dark:bg-primary/10" />

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <Link
          href="/muveszetterapia"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Művészetterápia
        </Link>

        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow mb-4">Csoportok · hamarosan</p>
          <h1 className="text-4xl font-medium leading-tight md:text-6xl">A csoportjaim hamarosan érkeznek.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Jelenleg intenzíven dolgozom a csoportjaim szervezésén, hogy a lehető legjobb és leghatékonyabb élményt
            nyújthassam Önnek. Kérem, látogasson vissza később a részletekért.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {upcoming.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.6rem] border bg-card/80 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-2xl font-medium">{item.title}</h2>
              <p className="mt-3 text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/kapcsolat">Jelentkezem egyénire</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">Vissza a főoldalra</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
