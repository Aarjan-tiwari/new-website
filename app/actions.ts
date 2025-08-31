// Client-safe helper for contact form submission (no Server Actions)
export async function submitContactForm(formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // In static export, handle on client only (e.g., send to third-party API)
  console.log("Form submission:", { name, email, message })

  return {
    message: "Thanks for your message! I'll get back to you soon.",
  }
}

