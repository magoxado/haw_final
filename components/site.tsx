import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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
