import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const pillars = [
  { label: "Ember", text: "Az ember az alap." },
  { label: "Idő", text: "Az idő és a hatékonyság versenyelőny." },
  { label: "Pénz", text: "A pénz a végső célok egyike." },
]

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string
  title: string
  lead?: string
}) {
  return (
    <header className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm text-muted-foreground">{eyebrow}</p>
      <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h1>
      {lead ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{lead}</p> : null}
    </header>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="mb-6 text-2xl font-semibold tracking-tight">{children}</h2>
}

export function CtaBand({
  title = "Kezdjük el a közös munkát",
  text,
  href = "/kapcsolat",
  label = "Kapcsolatfelvétel",
}: {
  title?: string
  text?: string
  href?: string
  label?: string
}) {
  return (
    <section className="mt-16 border-t border-border pt-10">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {text ? <p className="mt-3 max-w-2xl text-muted-foreground">{text}</p> : null}
      <Button asChild className="mt-6">
        <Link href={href}>{label}</Link>
      </Button>
    </section>
  )
}

export function Photo({
  src,
  alt,
  className,
  priority,
  caption,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  caption?: string
}) {
  return (
    <figure>
      <div className={cn("relative min-h-72 overflow-hidden rounded-md border border-border bg-card", className)}>
        <Image src={src} alt={alt} fill className="object-cover" priority={priority} sizes="(min-width: 768px) 480px, 100vw" />
      </div>
      {caption ? <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption> : null}
    </figure>
  )
}

export function PillarGrid() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      {pillars.map((pillar, index) => (
        <article key={pillar.label} className="rounded-md border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">0{index + 1}</p>
          <h2 className="mt-3 text-xl font-semibold">{pillar.label}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{pillar.text}</p>
        </article>
      ))}
    </div>
  )
}

export function DetailPage({
  category,
  title,
  children,
}: {
  category: string
  title: string
  children: ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-16 md:px-8">
      <p className="inline-flex rounded-md border border-border px-2 py-1 text-xs uppercase text-muted-foreground">
        {category}
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h1>
      <div className="mt-10 grid items-start gap-6 lg:grid-cols-[280px_1fr]">
        <div className="rounded-md border border-border bg-card p-2">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src="/images/selfie.jpg" alt="Horváth Ágnes" fill className="object-cover" priority sizes="280px" />
          </div>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">{children}</div>
      </div>
      <PillarGrid />
    </div>
  )
}

export function BorderedList({ items }: { items: string[] }) {
  return (
    <ol className="border border-border">
      {items.map((item, index) => (
        <li key={item} className="flex gap-4 border-b border-border px-4 py-4 last:border-b-0">
          <span className="w-6 shrink-0 text-sm text-muted-foreground">0{index + 1}</span>
          <p className="text-sm leading-relaxed md:text-base">{item}</p>
        </li>
      ))}
    </ol>
  )
}

export function ContactCard() {
  return (
    <aside className="rounded-md border border-border bg-card p-6 lg:sticky lg:top-20">
      <h2 className="text-lg font-semibold">Kapcsolat</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Foglalj egy rövid, kötelezettségmentes konzultációt, és beszéljük át a céljaidat.
      </p>
      <div className="mt-5 space-y-2 text-sm">
        <a href="tel:+36203974141" className="block hover:underline">
          +36 20 397 4141
        </a>
        <a href="mailto:info@haw.hu" className="block hover:underline">
          info@haw.hu
        </a>
      </div>
      <Button asChild className="mt-6">
        <Link href="/kapcsolat">Kapcsolatfelvétel</Link>
      </Button>
    </aside>
  )
}
