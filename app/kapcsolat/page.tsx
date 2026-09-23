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
        <aside className="border border-border p-6 md:p-8">
          <p className="text-lg font-semibold">Horváth Ágnes</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Business coach, management tréner, szocio- és művészetterapeuta
          </p>
          <div className="mt-8 divide-y divide-border border-t border-border">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 py-4 text-sm hover:text-foreground"
              >
                <channel.icon className="h-4 w-4 text-muted-foreground" />
                <span>
                  <span className="block text-muted-foreground">{channel.label}</span>
                  <span className="mt-1 block">{channel.value}</span>
                </span>
              </a>
            ))}
          </div>
        </aside>

        <div className="rounded-md border bg-card p-6 md:p-10">
          <h2 className="mb-6 text-3xl font-medium">Üzenet</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
