import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Loader2Icon, UserCogIcon } from "lucide-react"; // Changed icon to UserCog for a single person working

export default function GroupsComingSoonPage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-xl mx-auto bg-white p-10 rounded-xl shadow-xl border border-gray-200 text-center animate-fade-in">
        <div className="mb-8">
          {/* Icon representing a single person working on something */}
          <UserCogIcon className="h-16 w-16 text-purple-600 mx-auto mb-4 animate-bounce-slow" />
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          A Csoportjaim Hamarosan Érkeznek!
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Izgatottan szervezem a csoportjaimat, hogy a legjobb élményt nyújthassam Önnek. Kérjük, legyen türelemmel, hamarosan készen állok!
        </p>
        <p className="text-md text-gray-600 mb-10">
          Nézzen vissza később, vagy kövessen engem a frissítésekért!
        </p>

        <Button asChild size="lg" className="px-8 py-3 text-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white shadow-md transition-all duration-300 transform hover:scale-105">
          <Link href="/" replace>
            Vissza a Főoldalra
          </Link>
        </Button>
      </div>
    </div>
  );
}