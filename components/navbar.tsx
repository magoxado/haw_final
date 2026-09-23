"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const mainLinks = [
  { name: "Főoldal", href: "/" },
  { name: "Rólam", href: "/rolam" },
  { name: "Vízióm", href: "/vizom" },
  { name: "Kinek tudok segíteni?", href: "/kinek-tudok-segiteni" },
]

const serviceLinks = [
  { name: "Coaching", href: "/coaching" },
  { name: "Művészetterápia", href: "/muveszetterapia" },
  { name: "Álláskeresési tanácsadás", href: "/allaskeresesi-tanacsadas" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const servicesActive = serviceLinks.some((item) => isActive(pathname, item.href))

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container flex h-14 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0 text-sm font-semibold">
          HAW
          <span className="hidden font-normal text-muted-foreground sm:inline">Horváth Ágnes</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {mainLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium text-foreground/65 transition-colors hover:text-foreground",
                isActive(pathname, item.href) && "text-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "relative inline-flex items-center gap-1 text-sm font-medium text-foreground/65 outline-none transition-colors hover:text-foreground",
                servicesActive && "text-foreground",
              )}
            >
              Szolgáltatások
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 rounded-md p-1">
              {serviceLinks.map((item) => (
                <DropdownMenuItem key={item.href} className="rounded-sm p-0">
                  <Link
                    href={item.href}
                    className={cn(
                      "w-full px-3 py-2",
                      isActive(pathname, item.href) && "text-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/kapcsolat">Kapcsolat</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menü</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[380px]">
              <div className="mt-8 flex flex-col gap-1">
                {[...mainLinks, ...serviceLinks, { name: "Kapcsolat", href: "/kapcsolat" }].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-xl px-3 py-3 text-lg font-medium transition-colors hover:bg-accent",
                      isActive(pathname, item.href) ? "text-primary" : "text-foreground/80",
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
