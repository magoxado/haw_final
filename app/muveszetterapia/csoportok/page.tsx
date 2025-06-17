import { Button } from "@/components/ui/button";
import Link from "next/link";
// We'll stick to a very subtle icon or no icon, to match the existing site's understated visual language.
// If an icon is desired, it should be simple, like a very light grey gears or person icon,
// but for true minimalism, no icon might be best. Let's try without one first.

export default function GroupsComingSoonPage() {
  return (
    // Replicating the minimal background and overall container feel of the site
    <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center bg-white text-gray-800">
      <div className="max-w-3xl mx-auto p-12 rounded-lg text-center">
        {/*
          Removing the large, colored icons and animations to match the clean aesthetic.
          If an icon were added, it would be subtle, maybe a very light gray.
        */}
        
        <h1 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">
          A Csoportjaim Hamarosan Érkeznek.
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
          Jelenleg intenzíven dolgozom a csoportjaim szervezésén, hogy a lehető legjobb és leghatékonyabb élményt nyújthassam Önnek.
        </p>
        <p className="text-lg text-gray-600 mb-12">
          Kérem, látogasson vissza később a részletekért.
        </p>

        {/* Button styled to match the existing site's subtle button */}
        <Button asChild variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-100 px-8 py-3 text-lg font-normal">
          <Link href="/" replace>
            Vissza a Főoldalra
          </Link>
        </Button>
      </div>
    </div>
  );
}