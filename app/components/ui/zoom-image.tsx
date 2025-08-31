"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

interface ZoomImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

export const ZoomImage = ({ src, alt, className, width, height, priority = false }: ZoomImageProps) => {
  const [isZoomed, setIsZoomed] = useState(false)

  const toggleZoom = () => setIsZoomed(!isZoomed)

  return (
    <>
      <div className={cn("relative cursor-pointer overflow-hidden rounded-md", className)}>
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={cn("h-auto w-full object-cover transition-all duration-200", {
            "hover:scale-105 cursor-zoom-in": !isZoomed,
            "cursor-zoom-out": isZoomed,
          })}
          onClick={toggleZoom}
        />
        {!isZoomed && (
          <div className="absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-black/60 text-white rounded-full p-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="15" x2="12" y2="9"></line>
                <line x1="12" y1="9" x2="9" y2="12"></line>
                <line x1="12" y1="9" x2="15" y2="12"></line>
              </svg>
            </div>
          </div>
        )}
      </div>

      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={toggleZoom}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={src || "/placeholder.svg"} 
              alt={alt} 
              className="w-full h-full object-contain"
              onClick={toggleZoom}
            />
            <button
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={toggleZoom}
              aria-label="Close zoomed image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

