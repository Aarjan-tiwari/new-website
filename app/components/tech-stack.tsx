import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Data Analysis",
    skills: ["SQL", "Power BI", "Databricks", "Microsoft Dynamics 365", "Excel", "Data Visualization"],
  },
  {
    category: "Business Skills",
    skills: [
      "Business Development",
      "Financial Analysis",
      "Sales Management",
      "Territory Management",
      "Customer Interaction",
      "Strategic Planning",
    ],
  },
  {
    category: "Technical",
    skills: [
      "Python",
      "Database Management",
      "Data Modeling",
      "ETL Processes",
      "Data Cleaning",
      "Statistical Analysis",
    ],
  },
  {
    category: "Tools",
    skills: ["Microsoft Office", "Tableau", "Git", "Jira", "Postman", "VS Code"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

