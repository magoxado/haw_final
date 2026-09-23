import { Phone, Mail, Facebook } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { PageHeader } from "@/components/site"

const channels = [
  {
    icon: Phone,
    label: "Telefonszám",
    value: "+36 20 397 4141",
    href: "tel:+36203974141",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@haw.hu",
    href: "mailto:info@haw.hu",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "facebook.com/hawhorvathagnes",
    href: "https://www.facebook.com/hawhorvathagnes/",
    external: true,
  },
]

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <PageHeader
        eyebrow="Írjon"
        title="Kapcsolat"
        lead="Vegye fel velem a kapcsolatot, és beszéljük meg, hogyan tudok segíteni."
      />

      <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-[2rem] bg-foreground p-8 text-background md:p-10">
          <p className="font-display text-3xl">Horváth Ágnes</p>
          <p className="mt-3 text-background/70">Business coach, management tréner, szocio- és művészetterapeuta</p>
          <div className="mt-8 space-y-3">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-2xl bg-background/10 px-4 py-4 transition hover:bg-background/15"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-background text-foreground">
                  <channel.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-background/55">{channel.label}</span>
                  <span className="mt-1 block text-lg">{channel.value}</span>
                </span>
              </a>
            ))}
          </div>
        </aside>

        <div className="rounded-[2rem] border bg-card p-6 shadow-sm md:p-10">
          <h2 className="mb-6 text-3xl font-medium">Üzenet</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
