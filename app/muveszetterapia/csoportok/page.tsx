import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">

      <div className="max-w-3xl mx-auto bg-muted p-8 rounded-lg mb-8">
        <p className="text-lg mb-6 flex items-center justify-center h-32 font-bold text-center">
          neked barmikro hivd anyut
          <br />
          csok
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
