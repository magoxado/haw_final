import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import { PageHeader } from "@/components/site"
import { surfaceClass } from "@/components/surface"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <PageHeader title="Adatkezelési tájékoztató" />

      <div className={`${surfaceClass} max-w-2xl`}>
        <p className="text-lg leading-relaxed">
          Adatkezelési tájékoztató az alábbi gombra kattintva, PDF formátumban tölthető le.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="gap-2">
            <a href="https://cdn.haw.hu/adatkezelesi-tajekoztato_haw.pdf" target="_blank" rel="noreferrer noopener">
              <FileDown className="h-4 w-4" />
              Letöltés
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">Vissza a főoldalra</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
