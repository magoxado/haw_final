import Link from "next/link"
import { Phone, Mail, Facebook } from "lucide-react"
import ContactForm from "@/components/contact-form"

const channels = [
  { label: "Telefon", value: "+36 20 397 4141", href: "tel:+36203974141", icon: Phone },
  { label: "E-mail", value: "info@haw.hu", href: "mailto:info@haw.hu", icon: Mail },
  {
    label: "Közösségi média",
    value: "facebook.com/hawhorvathagnes",
    href: "https://www.facebook.com/hawhorvathagnes/",
    icon: Facebook,
    external: true,
  },
]

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-8">
      <p className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-white">
          Főoldal
        </Link>
        <span className="px-2">/</span>
        Kapcsolat
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Vegyük fel a kapcsolatot</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Írj üzenetet, vagy hívd fel a számot egy rövid, kötelezettségmentes beszélgetéshez.
      </p>

      <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
        <aside className="rounded-md border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-lg font-semibold">Horváth Ágnes</p>
          <p className="mt-2 text-sm text-muted-foreground">Business coach és szervezetfejlesztő</p>

          <p className="mt-8 text-xs uppercase text-muted-foreground">Elérhetőség</p>
          <div className="mt-3 space-y-3">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 rounded-md border border-transparent px-2 py-2 text-sm hover:border-zinc-800 hover:bg-zinc-950"
              >
                <channel.icon className="h-4 w-4 text-muted-foreground" />
                <span>
                  <span className="block text-muted-foreground">{channel.label}</span>
                  <span className="mt-0.5 block text-white">{channel.value}</span>
                </span>
              </a>
            ))}
            <div className="px-2 py-2 text-sm">
              <span className="block text-muted-foreground">Helyszín</span>
              <span className="mt-0.5 block text-white">Budapest és online</span>
            </div>
          </div>

          <div className="mt-8 border-t border-zinc-800 pt-6">
            <p className="text-xs uppercase text-muted-foreground">Válaszidő</p>
            <p className="mt-2 text-sm text-white">Munkanapokon 24 órán belül.</p>
          </div>
        </aside>

        <div className="rounded-md border border-zinc-800 bg-zinc-900 p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
