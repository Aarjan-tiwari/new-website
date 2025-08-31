import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  details?: string[]
  expanded?: boolean
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
  details = [],
  expanded = false,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <img
          src={`${process.env.NODE_ENV === 'production' ? '/new-website' : ''}${image || "/placeholder.svg"}`}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            if (e.currentTarget.src !== '/placeholder.svg') {
              e.currentTarget.src = '/placeholder.svg';
            }
          }}
        />
      </div>
      <CardContent className="p-3 sm:p-4 flex-grow">
        <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-3">{description}</p>

        {expanded && details.length > 0 && (
          <div className="mt-3 sm:mt-4">
            <h4 className="font-medium text-xs sm:text-sm mb-1 sm:mb-2">Project Details:</h4>
            <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm space-y-1">
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        )}

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
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
          <Github className="h-4 w-4" />
          View on GitHub
        </Link>
      </CardFooter>
    </Card>
  )
}

