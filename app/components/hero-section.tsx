import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center">
      <div
        className="relative aspect-ratio-container rounded-full overflow-hidden border-4 border-primary/20 shadow-lg"
        style={{ width: "clamp(8rem, 25vw, 10rem)", height: "clamp(8rem, 25vw, 10rem)" }}
      >
        <img
          src="/images/hero-bg.jpg"
          alt="Aarjan Tiwari"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-fluid-3xl font-bold tracking-tighter">Aarjan Tiwari</h1>
        <h2 className="text-fluid-xl font-medium text-primary">Data Analyst</h2>
        <p className="mx-auto max-w-[700px] text-fluid-base text-gray-500 dark:text-gray-400 px-fluid">
          Fintech | Decisioning Platform Expertise | Certified in Power BI, Databricks & SQL | Transforming Data into
          Strategic Solutions
        </p>
      </div>
      <div className="flex space-x-3 sm:space-x-4">
        <Link href="https://github.com/aarjan-tiwari" target="_blank">
          <Button variant="outline" size="icon" className="rounded-full h-9 w-9 sm:h-10 sm:w-10">
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/aarjan-tiwari" target="_blank">
          <Button variant="outline" size="icon" className="rounded-full h-9 w-9 sm:h-10 sm:w-10">
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
        <Link href="mailto:aarjan.tiwari@example.com">
          <Button variant="outline" size="icon" className="rounded-full h-9 w-9 sm:h-10 sm:w-10">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </Link>
      </div>
      <div className="pt-2 sm:pt-4">
        <Button asChild className="rounded-full px-6 sm:px-8 text-sm sm:text-base">
          <Link href="#contact">Get In Touch</Link>
        </Button>
      </div>
    </div>
  )
}

