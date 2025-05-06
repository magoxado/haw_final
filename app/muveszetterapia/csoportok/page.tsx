import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">Csoportok</h1>

      <div className="max-w-3xl mx-auto bg-muted p-8 rounded-lg mb-8">
        <p className="text-lg mb-6">
        A csoportok szervezés alatt vannak.
        Kérjük, nézz vissza később!
        </p>
      </div>

      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="/">Vissza a főoldalra</Link>
        </Button>
      </div>
    </div>
  )
}
