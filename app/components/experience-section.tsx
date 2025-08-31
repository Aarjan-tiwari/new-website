import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface ExperienceProps {
  title: string
  company: string
  period: string
  location: string
  description: string
  logo: string
}

function ExperienceCard({ title, company, period, location, description, logo }: ExperienceProps) {
  return (
    <Card className="mb-3 sm:mb-4">
      <CardHeader className="pb-1 sm:pb-2 px-4 pt-4 flex flex-row items-start gap-3">
        <div className="flex-shrink-0">
          <div className="aspect-ratio-container" style={{ paddingBottom: "100%", width: "3.5rem" }}>
            <div className="relative w-full h-full overflow-hidden rounded-md border bg-white">
              <Image
                src={logo || "/placeholder.svg"}
                alt={`${company} logo`}
                fill
                className="object-contain p-1.5"
                sizes="(max-width: 640px) 15vw, (max-width: 768px) 10vw, 56px"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <CardTitle className="text-base sm:text-lg font-semibold">{title}</CardTitle>
          <div className="text-xs sm:text-sm text-muted-foreground">
            {company} • {period}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground">{location}</div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <p className="text-xs sm:text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}

export default function ExperienceSection() {
  return (
    <div className="space-y-4">
      <ExperienceCard
        title="Policy Analyst"
        company="LoanOptions.ai"
        period="Jan 2025 - Present"
        location="Sydney, New South Wales, Australia"
        description="Working as a Policy Analyst intern, applying data analysis skills to fintech decisioning platforms."
        logo="/images/companies/loanoptions-logo.png"
      />
      <ExperienceCard
        title="Regional Sales Officer"
        company="Continental Trading Enterprises Pvt. Ltd."
        period="Oct 2022 - Jun 2023"
        location="Butwal, Lumbiniī, Nepal"
        description="Managed regional sales for OTIS Elevators, the world's leading company for elevator and escalator manufacturing, installation and service."
        logo="/images/companies/continental-otis-logo.jpeg"
      />
      <ExperienceCard
        title="Territory Sales Incharge"
        company="Asian Paints Nepal"
        period="Feb 2022 - Jun 2022"
        location="Butwal, Lumbiniī, Nepal"
        description="Managed territory sales for Asian Paints, developing business strategies and managing customer relationships."
        logo="/images/companies/asian-paints-logo.jpeg"
      />
      <ExperienceCard
        title="Marketing Officer"
        company="GOYAL METAL INDUSTRIES PRIVATE LIMITED"
        period="Dec 2020 - Feb 2022"
        location="Kathmandu, Bāgmatī, Nepal"
        description="Handled marketing operations for a pioneer in producing stainless steel pipes in Nepal, working with brands like JINDAL, SALEM & VAISHNO."
        logo="/images/companies/goyal-logo.png"
      />
    </div>
  )
}

