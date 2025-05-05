import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Facebook } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Kapcsolat</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Telefonszám</h3>
                  <p className="text-lg font-semibold">+36 20 397 4141</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                  <p className="text-lg font-semibold">info@haw.hu</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Facebook className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Facebook</h3>
                  <a
                    href="https://www.facebook.com/hawhorvathagnes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-primary hover:underline"
                  >
                    facebook.com/hawhorvathagnes
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <ContactForm />
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Link href="/adatkezelesi-tajekoztato" className="text-primary hover:underline">
          Adatkezelési tájékoztató
        </Link>
      </div>
    </div>
  )
}
