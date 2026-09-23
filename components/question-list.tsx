"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { surfaceClass } from "@/components/surface"

export function QuestionList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className={surfaceClass}>
      {items.map((item, index) => (
        <AccordionItem key={item.q} value={`q-${index}`} className="border-zinc-200">
          <AccordionTrigger className="items-start gap-3 py-4 text-left hover:no-underline [&>svg]:mt-1">
            <span className="flex min-w-0 flex-1 items-start gap-3">
              <span className="mt-0.5 w-7 shrink-0 font-mono text-sm tabular-nums text-zinc-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1 leading-snug">{item.q}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="pl-10 text-zinc-600">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
