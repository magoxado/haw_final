import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { surfaceClass } from "@/components/surface"
import { ArrowLeft, Clock3, Palette, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Csoportok - HAW",
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
    <div>
      <div className="container mx-auto px-4 py-10 md:py-16">
        <Link
          href="/muveszetterapia"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Művészetterápia
        </Link>

        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">A csoportjaim hamarosan érkeznek.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Jelenleg intenzíven dolgozom a csoportjaim szervezésén, hogy a lehető legjobb és leghatékonyabb élményt
            nyújthassak neked. Nézz vissza később a részletekért.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {upcoming.map((item) => (
            <article key={item.title} className={surfaceClass}>
              <item.icon className="h-4 w-4 text-muted-foreground" />
              <h2 className="mt-3 text-lg font-semibold tracking-tight">{item.title}</h2>
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
