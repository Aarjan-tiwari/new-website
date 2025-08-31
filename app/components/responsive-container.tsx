"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  minHeight?: boolean
}

export function ResponsiveContainer({ children, className, minHeight = false }: ResponsiveContainerProps) {
  const [viewportHeight, setViewportHeight] = useState<number | null>(null)

  useEffect(() => {
    // Function to update viewport height
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight)
    }

    // Set initial height
    updateViewportHeight()

    // Add event listener for resize
    window.addEventListener("resize", updateViewportHeight)

    // Clean up
    return () => window.removeEventListener("resize", updateViewportHeight)
  }, [])

  return (
    <div
      className={cn("w-full px-3 sm:px-4 md:px-6", minHeight && viewportHeight ? "flex flex-col" : "", className)}
      style={
        minHeight && viewportHeight
          ? {
              minHeight: `${viewportHeight}px`,
            }
          : {}
      }
    >
      {children}
    </div>
  )
}

