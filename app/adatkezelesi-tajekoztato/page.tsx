import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <p className="eyebrow mb-3 text-center">Jogi</p>
      <h1 className="mb-12 text-center text-4xl font-medium md:text-6xl">Adatkezelési tájékoztató</h1>

      <div className="max-w-3xl mx-auto rounded-[1.6rem] border bg-card p-8 mb-8 shadow-sm md:p-12">
        <p className="text-lg mb-6">
          <strong>Adatkezelési tájékoztató</strong> az alábbi gombra kattintva, PDF formátumban tölthető le:
        </p>

        <div className="flex justify-center">
          <Button asChild className="gap-2">
            <a href="https://cdn.haw.hu/adatkezelesi-tajekoztato_haw.pdf" target="_blank" rel="noreferrer noopener">
              <FileDown className="h-4 w-4" />
              Letöltés
            </a>
          </Button>
        </div>
      </div>

      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="/">Vissza a főoldalra</Link>
        </Button>
      </div>
    </div>
  )
}
