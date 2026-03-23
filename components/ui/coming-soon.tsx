"use client"

import { motion } from "motion/react"
import { Construction, Sparkles, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ComingSoon({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="size-24 rounded-3xl bg-amber-500/10 flex items-center justify-center mb-8 border border-amber-500/20"
      >
        <Construction className="size-12 text-amber-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4 max-w-md"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest text-primary">
          <Sparkles className="size-3" />
          Under Development
        </div>
        <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 capitalize">
          {name.replace(/-/g, ' ')}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
          The code for this set is still being polished. Check back soon for high-end components and stunning animations.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 flex gap-4"
      >
        <Button variant="outline" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Catalog
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
