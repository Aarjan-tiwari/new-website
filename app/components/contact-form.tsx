"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setPending(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      
      if (response.ok) {
        setMessage(result.message)
        setFormData({ name: "", email: "", message: "" }) // Reset form
      } else {
        setMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-4 sm:p-6">
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
            Name
          </label>
          <Input 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleInputChange}
            required 
            className="text-sm" 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
            Email
          </label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email}
            onChange={handleInputChange}
            required 
            className="text-sm" 
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
            Message
          </label>
          <Textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleInputChange}
            required 
            className="text-sm" 
          />
        </div>
        <Button type="submit" className="w-full text-sm" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && (
          <p className={`text-xs sm:text-sm text-center mt-3 sm:mt-4 ${
            message.includes("Thanks") ? "text-green-600" : "text-red-600"
          }`}>
            {message}
          </p>
        )}
      </form>
    </Card>
  )
}

