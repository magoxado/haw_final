import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Adatkezelési tájékoztató</h1>

      <div className="max-w-3xl mx-auto bg-muted p-8 rounded-lg mb-8">
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
