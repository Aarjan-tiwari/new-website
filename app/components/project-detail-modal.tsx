"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import Image from "next/image"
import { Github } from "lucide-react"
import Link from "next/link"

interface ProjectDetailModalProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  details: string[]
  children?: React.ReactNode
}

export default function ProjectDetailModal({
  title,
  description,
  image,
  link,
  tags,
  details,
  children,
}: ProjectDetailModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children || <Button variant="outline">View Details</Button>}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px] max-h-[80vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="mb-2 sm:mb-4">
          <DialogTitle className="text-lg sm:text-xl">{title}</DialogTitle>
          <DialogDescription className="text-xs sm:text-sm">{description}</DialogDescription>
        </DialogHeader>
        <div className="relative aspect-video w-full mt-2 sm:mt-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 640px) 100vw, 625px"
          />
        </div>
        <div className="mt-3 sm:mt-4">
          <h4 className="font-medium text-xs sm:text-sm mb-1 sm:mb-2">Project Details:</h4>
          <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm space-y-0.5 sm:space-y-1">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-3 sm:mt-4 flex justify-end">
          <Link href={link} target="_blank">
            <Button variant="outline" className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
              <Github className="h-3 w-3 sm:h-4 sm:w-4" />
              View on GitHub
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}

