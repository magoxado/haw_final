"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const surfaceClass =
  "rounded-3xl bg-white p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] md:p-8"

export const surfaceHoverClass =
  "transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-4px_rgba(0,0,0,0.08)]"

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Surface({
  children,
  className,
  delay = 0,
  hover = false,
}: {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
}) {
  return (
    <FadeIn delay={delay} className={cn(hover && "h-full")}>
      <div className={cn(surfaceClass, hover && surfaceHoverClass, className)}>{children}</div>
    </FadeIn>
  )
}
