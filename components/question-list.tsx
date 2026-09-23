"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { surfaceClass } from "@/components/surface"

export function QuestionList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className={surfaceClass}>
      {items.map((item, index) => (
        <AccordionItem key={item.q} value={`q-${index}`} className="border-zinc-200">
          <AccordionTrigger className="text-left hover:no-underline">
            <span className="flex items-start gap-4">
              <span className="mt-0.5 w-8 shrink-0 font-mono text-sm tabular-nums text-zinc-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.q}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="pl-12 text-zinc-600">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
