"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

type Tab = {
  id: string
  label: string
  content: React.ReactNode
}

export const AnimatedTabs = ({
  tabs,
  defaultTabId,
  className,
}: {
  tabs: Tab[]
  defaultTabId?: string
  className?: string
}) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4">
        {tabs.map((tab, index) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow"
          >
            <div className="font-medium text-primary mb-3 pb-2 border-b text-sm sm:text-base">{tab.label}</div>
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

