import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function GroupsComingSoonPage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center bg-white text-gray-800">
      <div className="max-w-3xl mx-auto p-12 rounded-lg text-center">
        
        <h1 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">
          A Csoportjaim Hamarosan Érkeznek.
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
          Jelenleg intenzíven dolgozom a csoportjaim szervezésén, hogy a lehető legjobb és leghatékonyabb élményt nyújthassam Önnek.
        </p>
        <p className="text-lg text-gray-600 mb-12">
          Kérem, látogasson vissza később a részletekért.
        </p>

        <Button asChild variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-100 px-8 py-3 text-lg font-normal">
          <Link href="/" replace>
            Vissza a Főoldalra
          </Link>
        </Button>
      </div>
    </div>
  );
}