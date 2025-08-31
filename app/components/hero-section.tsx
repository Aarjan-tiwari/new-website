import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  // Set initial height for animation
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const toggleSection = (e: React.MouseEvent, section: 'tech' | 'career') => {
    e.stopPropagation()
    // Implementation for section toggling if needed
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
      <div className="space-y-8 w-full">
        {/* Circular avatar */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mx-auto">
          <Image
            src={`${process.env.NODE_ENV === 'production' ? '/new-website' : ''}/images/profile.jpg`}
            alt="Aarjan Tiwari"
            fill
            priority
            unoptimized
            sizes="(max-width: 640px) 8rem, 10rem"
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
        
        <div className="w-full">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-3">Aarjan Tiwari</h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-primary mb-8">Data Analyst</h2>
        
          {/* Expandable Intro Card */}
          <div className="bg-white/9 backdrop-blur-xl border border-white/2 rounded-2xl shadow-4xl overflow-hidden transition-all duration-300 ease-in-out p-1.5 relative">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
            
            <p className="text-lg leading-relaxed text-foreground/90 mb-6 relative z-10 text-center">
              Building advanced skills in Power BI, SQL, and Python. Policy Analyst leveraging fintech experience to pursue
              data analyst opportunities. Currently automating lending decisions via proprietary policy engines while
              developing comprehensive analytics expertise to drive data‑informed strategies.
            </p>
            
            {/* Collapsible Content */}
            <div 
              className={cn(
                "overflow-hidden transition-all duration-500 ease-in-out",
                isExpanded ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"
              )}


              
              ref={contentRef}
              aria-hidden={!isExpanded ? "true" : "false"}
              id="expandable-content"
            >
              <div className="space-y-1 pt-2 pb-1 text-center">
                {/* Technical Foundation */}
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1 text-center">Technical foundation</h3>
                  <ul className="space-y-0.5 text-foreground/80 list-none text-center mx-auto max-w-sm text-sm">
                    <li>Power BI and SQL certifications for visualization and database management</li>
                    <li>Python and Java for data manipulation and automation</li>
                    <li>Postman for API testing and data integrity across integrations</li>
                    <li>Proprietary decisioning software configuration (logic and problem‑solving)</li>
                  </ul>
                </div>

                {/* Career Evolution */}
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1 text-center">Career evolution</h3>
                  <p className="text-foreground/80 leading-relaxed text-center mx-auto max-w-sm text-sm">
                    Diverse background across Continental Trading Enterprises, Asian Paints Nepal, and Goyal Metal Industries,
                    through to automating lending workflows—building a strong grasp of how data structures and business logic
                    impact operational efficiency. Combined with a Master of Information Systems, I bring analytical rigor and
                    business acumen to data analyst roles.
                  </p>
                </div>
              </div>
            </div>

            {/* Gradient Overlay and Toggle Button */}
            <div 
              className={cn(
                "relative -mx-1 -mb-5 pt-1 pb-2 px-4 cursor-pointer transition-opacity duration-200",
                isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
              onClick={toggleExpand}
              role="button"
              aria-expanded={isExpanded ? "true" : "false"}
              aria-controls="expandable-content"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? toggleExpand() : null}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent pointer-events-none" />
              <div className="relative flex justify-center pt-6">
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-foreground/60 transition-transform duration-300",
                    isExpanded ? "rotate-180" : ""
                  )}
                  aria-hidden="true"
                />
              </div>
              <span className="sr-only">
                {isExpanded 
                  ? "Show less about technical foundation and career evolution" 
                  : "Read more about technical foundation and career evolution"}
              </span>
            </div>
            
            {/* Collapse Button (visible when expanded) */}
            {isExpanded && (
              <button
                onClick={toggleExpand}
                className="w-full py-3 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors flex items-center justify-center gap-2 border-t border-border/50"
                aria-label="Show less about technical foundation and career evolution"
              >
                Show less
                <ChevronDown className="h-4 w-4 mt-0.5 rotate-180" />
              </button>
            )}

            <p className="mt-10 text-xl font-medium text-primary">Ready to tackle your next data challenge? Let's connect.</p>
            
            <div className="flex space-x-4 sm:space-x-6 pt-4 justify-center">
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
            
            <div className="pt-4 sm:pt-6">
              <Button asChild className="rounded-full px-6 sm:px-8 text-sm sm:text-base">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
