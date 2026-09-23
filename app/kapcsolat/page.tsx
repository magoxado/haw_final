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
      <p className="text-sm text-zinc-600">
        <Link href="/" className="hover:text-foreground">
          Főoldal
        </Link>
        <span className="px-2">/</span>
        Kapcsolat
      </p>
      <h1 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">Vegyük fel a kapcsolatot</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
        Írj üzenetet, vagy hívd fel a számot egy rövid, kötelezettségmentes beszélgetéshez.
      </p>

      <div className="mt-10 grid items-start gap-10 border-t border-border pt-10 lg:grid-cols-2">
        <aside>
          <p className="text-lg font-semibold">Horváth Ágnes</p>
          <p className="mt-2 text-sm text-zinc-600">Business coach és szervezetfejlesztő</p>

          <p className="mt-8 text-xs uppercase tracking-wide text-zinc-500">Elérhetőség</p>
          <div className="mt-3 divide-y divide-border border-y border-border">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 py-3 text-sm hover:text-foreground"
              >
                <channel.icon className="h-4 w-4 text-zinc-500" />
                <span>
                  <span className="block text-zinc-500">{channel.label}</span>
                  <span className="mt-0.5 block">{channel.value}</span>
                </span>
              </a>
            ))}
            <div className="py-3 text-sm">
              <span className="block text-zinc-500">Helyszín</span>
              <span className="mt-0.5 block">Budapest és online</span>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Válaszidő</p>
            <p className="mt-2 text-sm">Munkanapokon 24 órán belül.</p>
          </div>
        </aside>

        <div className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
