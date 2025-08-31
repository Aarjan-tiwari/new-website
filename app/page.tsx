"use client"

import Link from "next/link"

import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import ExperienceSection from "./components/experience-section"
import EducationCertification from "./components/education-certification"
import ThemeToggleHeader from "./components/theme-toggle-header"
import HeroSection from "./components/hero-section"
import AboutSection from "./components/about-section"
import ProjectDetailModal from "./components/project-detail-modal"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggleHeader />

      <main className="container px-3 sm:px-4 md:px-6">
        <motion.section
          id="about"
          className="py-fluid bg-muted/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container px-fluid">
            <HeroSection />
            <motion.div
              className="mt-8 sm:mt-12 md:mt-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <AboutSection />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="py-fluid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container px-fluid">
            <motion.h2
              className="text-fluid-2xl font-bold tracking-tighter mb-8 sm:mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Experience
            </motion.h2>
            <ExperienceSection />
          </div>
        </motion.section>

        <motion.section
          id="education"
          className="py-fluid bg-muted/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container px-fluid">
            <motion.h2
              className="text-fluid-2xl font-bold tracking-tighter mb-8 sm:mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Education & Certifications
            </motion.h2>
            <EducationCertification />
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="py-fluid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container px-fluid">
            <motion.h2
              className="text-fluid-2xl font-bold tracking-tighter mb-8 sm:mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Projects
            </motion.h2>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                className="flex flex-col h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <ProjectDetailModal
                  title="Pizza Sales Analysis"
                  description="Comprehensive SQL analysis of pizza sales data, examining order patterns, revenue metrics, and product performance to derive actionable business insights."
                  image="/images/pizza-analysis.jpg"
                  link="https://github.com/aarjan-tiwari"
                  tags={["SQL", "Data Analysis", "Business Intelligence", "SQL Server"]}
                  details={[
                    "Analyzed a dataset of 21,350 orders and 48,621 order details to extract business insights",
                    "Basic analysis: Total orders, revenue ($817,860.05), highest-priced pizza (The Greek Pizza, $35.95), most common size (Large, 18,526 orders), and top 5 pizzas by quantity",
                    "Intermediate analysis: Pizza category quantities, hourly order distribution, category-wise distribution, daily average orders (138 pizzas), and top 3 pizzas by revenue",
                    "Advanced analysis: Percentage revenue contribution by pizza type, cumulative revenue analysis, and top 3 pizzas by revenue per category",
                    "Used SQL Server Management Studio with complex queries including joins, subqueries, window functions, and aggregations",
                  ]}
                >
                  <ProjectCard
                    title="Pizza Sales Analysis"
                    description="Comprehensive SQL analysis of pizza sales data, examining order patterns, revenue metrics, and product performance to derive actionable business insights."
                    image="/images/pizza-analysis.jpg"
                    link="https://github.com/aarjan-tiwari"
                    tags={["SQL", "Data Analysis", "Business Intelligence", "SQL Server"]}
                  />
                </ProjectDetailModal>
              </motion.div>

              <motion.div
                className="flex flex-col h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <ProjectDetailModal
                  title="Databricks ETL Pipeline"
                  description="Designed and implemented data pipelines using Databricks to process financial data, enabling efficient analysis and reporting for decision-making."
                  image="/images/databricks-pipeline.jpg"
                  link="https://github.com/aarjan-tiwari"
                  tags={["Databricks", "ETL", "Data Engineering", "PySpark"]}
                  details={[
                    "Built end-to-end ETL pipelines using Databricks and PySpark for financial data processing",
                    "Implemented data transformation logic to clean, normalize, and prepare data for analysis",
                    "Created automated workflows for regular data updates and processing",
                    "Optimized query performance for large datasets using Spark SQL",
                    "Integrated with various data sources and destinations for comprehensive data processing",
                  ]}
                >
                  <ProjectCard
                    title="Databricks ETL Pipeline"
                    description="Designed and implemented data pipelines using Databricks to process financial data, enabling efficient analysis and reporting for decision-making."
                    image="/images/databricks-pipeline.jpg"
                    link="https://github.com/aarjan-tiwari"
                    tags={["Databricks", "ETL", "Data Engineering", "PySpark"]}
                  />
                </ProjectDetailModal>
              </motion.div>

              <motion.div
                className="flex flex-col h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <ProjectDetailModal
                  title="Financial KPI Dashboard"
                  description="Created interactive Power BI dashboards to visualize key financial metrics and business performance indicators for stakeholder reporting."
                  image="/images/power-bi-dashboard.jpg"
                  link="https://github.com/aarjan-tiwari"
                  tags={["Power BI", "Data Visualization", "Financial Analysis", "DAX"]}
                  details={[
                    "Developed interactive dashboards to track and visualize key financial metrics",
                    "Created custom DAX measures for complex financial calculations",
                    "Implemented drill-down capabilities for detailed analysis of financial data",
                    "Designed intuitive visualizations for executive reporting and decision-making",
                    "Set up automated data refresh schedules for up-to-date reporting",
                  ]}
                >
                  <ProjectCard
                    title="Financial KPI Dashboard"
                    description="Created interactive Power BI dashboards to visualize key financial metrics and business performance indicators for stakeholder reporting."
                    image="/images/power-bi-dashboard.jpg"
                    link="https://github.com/aarjan-tiwari"
                    tags={["Power BI", "Data Visualization", "Financial Analysis", "DAX"]}
                  />
                </ProjectDetailModal>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="py-fluid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container px-fluid">
            <motion.h2
              className="text-fluid-2xl font-bold tracking-tighter mb-8 sm:mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Tech Stack
            </motion.h2>
            <TechStack />
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="py-fluid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container px-fluid">
            <motion.h2
              className="text-fluid-2xl font-bold tracking-tighter mb-8 sm:mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.h2>
            <motion.div
              className="mx-auto max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.section>
      </main>

      <motion.footer
        className="border-t"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Aarjan.dev. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </motion.footer>
    </div>
  )
}

