"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useState } from "react"
import { Award, Calendar, GraduationCap } from "lucide-react"
import { RevealOnScroll } from "./ui/reveal-on-scroll"
import { AnimatedTabs } from "./ui/animated-tabs"
import Image from "next/image"

const certifications = [
  {
    id: "amz",
    title: "Data Analyst Job-Ready Program",
    issuer: "AMZ (Analytics Made Easy)",
    date: "March 8, 2025",
    duration: "16-week program",
    image: "/images/amz-cert.png",
    skills: ["Power BI", "Excel", "SQL", "Python", "Descriptive Statistics"],
    description:
      "Comprehensive program covering in-depth proficiency in Power BI, Excel, SQL, Python, and Descriptive Statistics for data analysis and business intelligence.",
  },
  {
    id: "tutor10x",
    title: "Data Analyst Certificate",
    issuer: "Tutor10x",
    date: "March 4, 2025",
    duration: "One-Day Internship",
    image: "/images/tutor10x-cert.png",
    skills: ["Data Analysis", "Business Intelligence"],
    description:
      "Intensive one-day internship program focused on practical data analysis skills and business intelligence applications.",
  },
  {
    id: "databricks",
    title: "Databricks Fundamentals Accreditation",
    issuer: "Databricks Academy",
    date: "November 10, 2024",
    duration: "",
    image: "/images/databricks-cert.png",
    skills: ["Data Management", "Databricks"],
    description:
      "Validates understanding of the Databricks platform, including working with data, running jobs, and using machine learning tools.",
  },
  {
    id: "powerbi",
    title: "Getting Started with Power BI",
    issuer: "LinkedIn Learning",
    date: "February 15, 2024",
    duration: "1 hour 32 minutes",
    image: "/images/power-bi-cert.png",
    skills: ["Microsoft Power BI", "Data Visualization"],
    description:
      "Introduction to Microsoft Power BI for creating interactive data visualizations and business intelligence reports.",
  },
  {
    id: "sql",
    title: "SQL Practice: Basic Queries",
    issuer: "LinkedIn Learning",
    date: "February 24, 2024",
    duration: "17 minutes",
    image: "/images/sql-cert.png",
    skills: ["SQL", "Database Queries"],
    description: "Practical SQL training focused on writing and optimizing database queries for data analysis.",
  },
]

export default function EducationCertification() {
  const [selectedCert, setSelectedCert] = useState(certifications[0])

  const tabs = certifications.map((cert) => ({
    id: cert.id,
    label: cert.title.split(":")[0].split(" ").slice(0, 2).join(" "),
    content: (
      <div className="space-y-2 sm:space-y-3">
        <div className="relative w-full h-0" style={{ paddingBottom: "75%" }}>
          <Image
            src={cert.image || "/placeholder.svg"}
            alt={cert.title}
            fill
            className="object-contain absolute inset-0"
            priority={cert.id === "databricks"}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center"
            onClick={() => {
              window.open(cert.image, "_blank")
            }}
          >
            <span className="text-xs bg-black/70 text-white px-2 py-1 rounded-full">Click to view</span>
          </div>
        </div>
        <div className="space-y-1 sm:space-y-2">
          <h3 className="text-xs sm:text-sm font-semibold line-clamp-2">{cert.title}</h3>
          <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {cert.date}
            </span>
          </div>
          <div className="flex flex-wrap gap-1 mt-1">
            {cert.skills.slice(0, 2).map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {cert.skills.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{cert.skills.length - 2} more
              </Badge>
            )}
          </div>
        </div>
      </div>
    ),
  }))

  return (
    <div className="space-y-12">
      <RevealOnScroll>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Card className="p-6 h-full">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-6">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="aspect-ratio-container" style={{ paddingBottom: "100%" }}>
                        <div className="relative w-full h-full overflow-hidden rounded-md border bg-white">
                          <Image
                            src="/images/education/koi-logo.png"
                            alt="King's Own Institute logo"
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 640px) 20vw, (max-width: 768px) 15vw, 64px"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Master's degree, Management Information Systems</h3>
                      <p className="text-sm text-muted-foreground">King's Own Institute</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> Jul 2023 - Aug 2025
                      </p>
                      <p className="text-sm mt-2">Event manager at KOI student society</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="aspect-ratio-container" style={{ paddingBottom: "100%" }}>
                        <div className="relative w-full h-full overflow-hidden rounded-md border bg-white">
                          <Image
                            src="/images/education/lumbini-logo.jpeg"
                            alt="Lumbini Banijya Campus logo"
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 640px) 20vw, (max-width: 768px) 15vw, 64px"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Bachelor's degree, Business Studies</h3>
                      <p className="text-sm text-muted-foreground">Lumbini Banijya Campus</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> Mar 2016 - Jan 2020
                      </p>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Card className="p-6 h-full">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={cert.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="group"
                    >
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className={`w-full text-left p-3 rounded-md transition-all ${
                          selectedCert.id === cert.id
                            ? "bg-primary/10 border-l-2 border-primary"
                            : "hover:bg-muted/50 border-l-2 border-transparent"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium group-hover:text-primary transition-colors">{cert.title}</h3>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          </div>
                          <Badge
                            variant={selectedCert.id === cert.id ? "default" : "outline"}
                            className="transition-all"
                          >
                            {cert.date.split(" ")[0]}
                          </Badge>
                        </div>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.3}>
        <Card className="p-6 overflow-hidden">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-xl mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Certification Gallery</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <AnimatedTabs tabs={tabs} defaultTabId="databricks" />
          </CardContent>
        </Card>
      </RevealOnScroll>
    </div>
  )
}

