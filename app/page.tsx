import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Briefcase, Palette } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Horváth Ágnes</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
              Business coach, management tréner, szocio- és művészetterapeuta
            </h2>
            <p className="text-lg mb-8">
              Nálam központban az ember, az idő és a pénz áll. Az ember az alap, az idő és a hatékonyság versenyelőny, a
              pénz pedig a végső célok egyike.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/rolam">Tudj meg többet</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/kapcsolat">Kapcsolat</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="https://pub-467a699223cd4cc99c2ddee563145e7c.r2.dev/selfie.jpg"
                alt="Horváth Ágnes"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-muted rounded-lg my-12 px-6">
        <blockquote className="text-center">
          <p className="text-xl md:text-2xl italic mb-4">
            "Munkám során mindig törekszem arra, hogy alaposan megismerjem a céget, megismerjem az embereket, akik a
            cégnél dolgoznak vagy dolgozni szeretnének. Fontos szempont számomra, hogy a megfelelő ember kerüljön a
            megfelelő helyre. Megfelelő emberek, munkatársak nélkül egyetlen cég sem érhet el hosszútávú sikereket."
          </p>
          <footer className="text-lg font-semibold">Horváth Ágnes</footer>
        </blockquote>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Szolgáltatások</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Cégeknek</CardTitle>
              <CardDescription>Fejlődés. Növekedés. Változás. Újítás.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Véleményem szerint növekedni, hatékonyabb vállalati teljesítményt elérni, kizárólag vezetői, munkatársi
                közös munkával, letisztázott, hatékony folyamatokkal, tiszta, érhető kommunikációval lehet.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="gap-2">
                <Link href="/cegeknek">
                  Részletek <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Álláskeresési tanácsadás</CardTitle>
              <CardDescription>Karriertervezés és álláskeresési támogatás</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Biztosan meglátom Benned az értéket és támogatlak, hogy képviselni is tudd. Segítek az önéletrajzod
                elkészítésében és az interjúra való felkészülésben.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="gap-2">
                <Link href="/allaskeresesi-tanacsadas">
                  Részletek <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Művészetterápia</CardTitle>
              <CardDescription>Egyéni és csoportos művészetterápiás foglalkozások</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                A művészetterápia olyan terápiás folyamat, ahol a művészetet mintegy eszközként használjuk lelki
                történéseink megértéséhez vagy nonverbális kommunikációhoz.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="gap-2">
                <Link href="/muveszetterapia">
                  Részletek <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 bg-secondary/10 rounded-lg my-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Rólam írták</h2>
        <div className="max-w-3xl mx-auto">
          <blockquote className="mb-8">
            <p className="text-lg italic mb-4">
              "Nagyon megoldásfókuszú vagyok. A felmerülő problémákra, mint lehetőségekre tekintek. Nagyon felvillanyoz,
              ahogy elkezdődik a folyamat, kerülnek felszínre az újabb és újabb javaslatok, ötletek és amelyekből a
              végén kikerekedik egy megvalósítható, minden oldalról jól megtámogatott terv. Csodálatos ez a folyamat."
            </p>
            <footer className="text-right font-medium">
              <a
                href="https://read-blog.blog.hu/2021/01/25/haw-the_way_rendszer_a_munkadban"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                read-blog.blog.hu
              </a>
            </footer>
          </blockquote>

          <blockquote>
            <p className="text-lg italic mb-4">
              "Azóta az önbizalmam is sokat erősödött. Jobban meg tudom fogalmazni, mit szeretnék. Nem vagyok görcsös,
              nem félek őszintének lenni az interjúkon, hiszen ahogy Ági mondta nekem: a HR-s is egy ember, a saját
              álmaival és érzelmeivel. Csak ajánlani tudom mindenkinek."
            </p>
            <footer className="text-right font-medium">Márton Róbert, Athénból</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Kezdjük el a közös munkát!</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Vegye fel velem a kapcsolatot, és beszéljük meg, hogyan segíthetek Önnek vagy vállalkozásának a fejlődésben.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/kapcsolat">Kapcsolatfelvétel</Link>
        </Button>
      </section>
    </div>
  )
}
