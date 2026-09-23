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
    <header className="mx-auto mb-14 max-w-3xl animate-fade-up text-center">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h1 className="text-4xl font-medium leading-[1.02] md:text-6xl">{title}</h1>
      {lead ? <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">{lead}</p> : null}
    </header>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="mb-6 text-3xl font-medium md:text-4xl">{children}</h2>
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
    <section className="mt-16 overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-foreground md:px-12">
      <h2 className="text-3xl font-medium md:text-5xl">{title}</h2>
      {text ? <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/85">{text}</p> : null}
      <Button asChild size="lg" variant="secondary" className="mt-8">
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
      <div className={cn("relative min-h-72 overflow-hidden rounded-[1.75rem] bg-secondary shadow-xl", className)}>
        <Image src={src} alt={alt} fill className="object-cover" priority={priority} sizes="(min-width: 768px) 480px, 100vw" />
      </div>
      {caption ? <figcaption className="mt-3 text-center text-sm text-muted-foreground">{caption}</figcaption> : null}
    </figure>
  )
}
