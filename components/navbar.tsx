"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const mainLinks = [
  { name: "Főoldal", href: "/" },
  { name: "Rólam", href: "/rolam" },
  { name: "Vízióm", href: "/vizom" },
  { name: "Coaching", href: "/coaching" },
  { name: "Management", href: "/management-trening" },
  { name: "Szervezet", href: "/szervezetfejlesztes" },
  { name: "Művészetterápia", href: "/muveszetterapia" },
  { name: "Álláskeresés", href: "/allaskeresesi-tanacsadas" },
  { name: "Kinek tudok segíteni?", href: "/kinek-tudok-segiteni" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 text-foreground backdrop-blur-md dark:border-border dark:bg-card/80">
      <div className="container flex h-16 items-center justify-between gap-3 px-4">
        <Link href="/" className="flex items-center gap-3 shrink-0 text-sm font-semibold">
          HAW
          <span className="hidden font-normal text-muted-foreground sm:inline">Horváth Ágnes</span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {mainLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 hover:text-[#1B3A4B]",
                isActive(pathname, item.href) && "bg-[#1B3A4B] text-white hover:bg-[#152E3D] hover:text-white",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden rounded-full px-4 sm:inline-flex">
            <Link href="/kapcsolat">Kapcsolat</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menü</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw,22rem)] overflow-y-auto bg-card text-card-foreground">
              <div className="mt-8 flex flex-col gap-1 pb-8">
                {[...mainLinks, { name: "Kapcsolat", href: "/kapcsolat" }].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-100 hover:text-[#1B3A4B]",
                      isActive(pathname, item.href) && "bg-[#1B3A4B] text-white hover:bg-[#152E3D] hover:text-white",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
