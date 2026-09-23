import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import { PageHeader } from "@/components/site"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <PageHeader eyebrow="Jogi" title="Adatkezelési tájékoztató" />

      <div className="mx-auto max-w-2xl rounded-[2rem] border bg-card px-6 py-12 text-center shadow-sm md:px-12">
        <p className="text-lg leading-relaxed">
          Adatkezelési tájékoztató az alábbi gombra kattintva, PDF formátumban tölthető le.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
