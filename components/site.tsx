import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { surfaceClass } from "@/components/surface"
import { cn } from "@/lib/utils"

const pillars = [
  { label: "Ember", text: "Az ember az alap." },
  { label: "Idő", text: "Az idő és a hatékonyság versenyelőny." },
  { label: "Pénz", text: "A pénz a végső célok egyike." },
]

export function PageHeader({
  title,
  lead,
}: {
  title: string
  lead?: string
}) {
  return (
    <header className="mb-12 max-w-3xl">
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
    <section className={cn("mt-16", surfaceClass)}>
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
  contain,
  ratio = "aspect-[3/4]",
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  caption?: string
  contain?: boolean
  ratio?: string
}) {
  if (contain) {
    return (
      <figure className={surfaceClass}>
        <div className={cn("relative aspect-square w-full", className)}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain mix-blend-multiply"
            priority={priority}
            sizes="280px"
          />
        </div>
        {caption ? <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption> : null}
      </figure>
    )
  }

  return (
    <figure className={cn("w-full", className)}>
      <div className={cn("relative overflow-hidden rounded-3xl shadow-[0_12px_30px_-12px_rgba(27,58,75,0.35)]", ratio)}>
        <Image src={src} alt={alt} fill className="object-cover" priority={priority} sizes="(min-width: 768px) 480px, 100vw" />
      </div>
      {caption ? <figcaption className="mt-3 text-sm text-zinc-600">{caption}</figcaption> : null}
    </figure>
  )
}

export function PillarGrid() {
  return (
    <div className="mt-12">
      <p className="max-w-xl text-base leading-relaxed text-zinc-600">
        Nálam központban az ember, az idő és a pénz áll.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
      {pillars.map((pillar, index) => (
        <article key={pillar.label} className={surfaceClass}>
          <p className="font-mono text-sm text-zinc-400">0{index + 1}</p>
          <h2 className="mt-3 text-2xl font-semibold">{pillar.label}</h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-600">{pillar.text}</p>
        </article>
      ))}
      </div>
    </div>
  )
}

export function DetailPage({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-16 md:px-8">
      <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h1>
      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(240px,0.8fr)_1.2fr]">
        <div className="lg:sticky lg:top-24">
          <Photo src="/images/selfie.jpg" alt="Horváth Ágnes" priority />
        </div>
        <div className={cn(surfaceClass, "space-y-4 text-base leading-relaxed text-zinc-600 [&_h2]:text-foreground")}>
          {children}
        </div>
      </div>
      <PillarGrid />
    </div>
  )
}

export function BorderedList({ items }: { items: Array<string | { text: string; id?: string }> }) {
  return (
    <ol className={cn(surfaceClass, "divide-y divide-zinc-100")}>
      {items.map((item, index) => {
        const text = typeof item === "string" ? item : item.text
        const id = typeof item === "string" ? undefined : item.id
        return (
          <li key={text} id={id} className="flex scroll-mt-28 gap-4 py-4 first:pt-0 last:pb-0">
            <span className="w-8 shrink-0 font-mono text-sm tabular-nums text-zinc-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-sm leading-relaxed text-foreground md:text-base">{text}</p>
          </li>
        )
      })}
    </ol>
  )
}

export function ContactCard({ mark }: { mark?: string }) {
  return (
    <aside className={surfaceClass}>
      {mark ? (
        <a
          href="https://read-blog.blog.hu/2021/01/25/haw-the_way_rendszer_a_munkadban"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-5 inline-block"
        >
          <div className="relative h-16 w-16">
            <Image src={mark} alt="HAW" fill className="object-contain mix-blend-multiply" sizes="64px" />
          </div>
          <p className="mt-2 text-sm font-medium text-[#1B3A4B] underline underline-offset-4">HAW the way</p>
        </a>
      ) : null}
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
