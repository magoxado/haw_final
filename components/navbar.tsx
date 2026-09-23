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
  { name: "Cégeknek", href: "/cegeknek" },
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
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-[4.25rem] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-[11px] font-semibold tracking-[0.14em] text-background">
            HAW
          </span>
          <span className="hidden sm:block font-display text-lg leading-none">Horváth Ágnes</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {mainLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium text-foreground/65 transition-colors hover:text-foreground",
                isActive(pathname, item.href) &&
                  "text-foreground after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary",
              )}
            >
              {item.name}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "relative inline-flex items-center gap-1 text-sm font-medium text-foreground/65 outline-none transition-colors hover:text-foreground",
                servicesActive &&
                  "text-foreground after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-[calc(100%-1rem)] after:rounded-full after:bg-primary",
              )}
            >
              Szolgáltatások
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 rounded-2xl p-2">
              {serviceLinks.map((item) => (
                <DropdownMenuItem key={item.href} className="rounded-xl p-0">
                  <Link
                    href={item.href}
                    className={cn(
                      "w-full rounded-xl px-3 py-2.5",
                      isActive(pathname, item.href) && "font-medium text-primary",
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
              <Button variant="outline" size="icon" className="rounded-full">
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
