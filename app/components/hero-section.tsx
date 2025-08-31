import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HeroSection() {
  const [showDetails, setShowDetails] = useState(false)
  const [openSections, setOpenSections] = useState({
    tech: false,
    career: false
  })

  const toggleDetails = () => {
    setShowDetails(!showDetails)
    // Auto-expand first section when showing details
    if (!showDetails && !openSections.tech) {
      setOpenSections(prev => ({ ...prev, tech: true }))
    }
  }

  const toggleSection = (section: 'tech' | 'career') => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center">
      {/* Circular avatar using padding-bottom aspect ratio and absolute-fill Image */}
      <div
        className="relative aspect-ratio-container rounded-full overflow-hidden border-4 border-primary/20 shadow-lg"
        style={{ width: "clamp(12rem, 32vw, 14rem)", paddingBottom: "clamp(12rem, 32vw, 14rem)" }}
      >
        <Image
          src={`${process.env.NODE_ENV === 'production' ? '/new-website' : ''}/images/profile.jpg`}
          alt="Aarjan Tiwari"
          fill
          priority
          unoptimized
          sizes="(max-width: 640px) 32vw, 14rem"
          className="object-cover object-center"
          onError={(e) => {
            const base = process.env.NODE_ENV === 'production' ? '/new-website' : ''
            const target = e.currentTarget as HTMLImageElement
            const fallback = `${base}/placeholder-user.jpg`
            if (!target.src.endsWith('placeholder-user.jpg')) {
              target.src = fallback
            }
          }}
        />
      </div>
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-fluid-3xl font-bold tracking-tighter">Aarjan Tiwari</h1>
        <h2 className="text-fluid-xl font-medium text-primary">Data Analyst</h2>
        <div className="mx-auto max-w-[700px] text-fluid-base text-gray-500 dark:text-gray-400 px-fluid space-y-6">
          {/* Main intro card */}
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <p className="mb-4">
              Building advanced skills in Power BI, SQL, and Python. Policy Analyst leveraging fintech experience to pursue
              data analyst opportunities. Currently automating lending decisions via proprietary policy engines while
              developing comprehensive analytics expertise to drive data‑informed strategies.
            </p>
            <button
              onClick={toggleDetails}
              className="inline-flex items-center text-sm font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
            >
              {showDetails ? 'Show less' : 'Read more'}
              <ChevronDown 
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Collapsible details section */}
          <div className={`space-y-4 transition-all duration-300 ease-in-out overflow-hidden ${showDetails ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-4">
              <div className="bg-card/50 rounded-lg p-4 border">
                <button
                  type="button"
                  onClick={() => toggleSection('tech')}
                  aria-expanded={openSections.tech}
                  aria-controls="tech-panel"
                  className="w-full text-left cursor-pointer text-sm font-semibold text-foreground flex items-center justify-between"
                >
                  <span>Technical foundation</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${openSections.tech ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                
                <div 
                  id="tech-panel" 
                  className={`grid transition-all duration-300 ease-in-out ${openSections.tech ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted-foreground">
                      <li>Power BI and SQL certifications for visualization and database management</li>
                      <li>Python and Java for data manipulation and automation</li>
                      <li>Postman for API testing and data integrity across integrations</li>
                      <li>Proprietary decisioning software configuration (logic and problem‑solving)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 rounded-lg p-4 border">
                <button
                  type="button"
                  onClick={() => toggleSection('career')}
                  aria-expanded={openSections.career}
                  aria-controls="career-panel"
                  className="w-full text-left cursor-pointer text-sm font-semibold text-foreground flex items-center justify-between"
                >
                  <span>Career evolution</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${openSections.career ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                
                <div 
                  id="career-panel" 
                  className={`grid transition-all duration-300 ease-in-out ${openSections.career ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-muted-foreground">
                      Diverse background across Continental Trading Enterprises, Asian Paints Nepal, and Goyal Metal Industries,
                      through to automating lending workflows—building a strong grasp of how data structures and business logic
                      impact operational efficiency. Combined with a Master of Information Systems, I bring analytical rigor and
                      business acumen to data analyst roles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="font-medium text-primary">Ready to tackle your next data challenge? Let's connect.</p>
        </div>
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

