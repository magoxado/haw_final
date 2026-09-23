"use server"

import { z } from "zod"
import { Resend } from "resend"
import { ContactEmailHtml } from "@/components/email/contact-email"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Define validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "A név legalább 2 karakter hosszú kell legyen" }),
  email: z.string().email({ message: "Érvénytelen email cím" }),
  subject: z.string().min(3, { message: "A tárgy legalább 3 karakter hosszú kell legyen" }),
  message: z.string().min(10, { message: "Az üzenet legalább 10 karakter hosszú kell legyen" }),
})

type ContactFormInputs = z.infer<typeof ContactFormSchema>

export async function submitContactForm(formData: FormData) {
  // Extract form data
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate form data
  const validationResult = ContactFormSchema.safeParse({
    name,
    email,
    subject,
    message,
  })

  // If validation fails, return errors
  if (!validationResult.success) {
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors,
    }
  }

  try {
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `HAW Kapcsolat <${process.env.EMAIL_FROM || "noreply@yourdomain.com"}>`,
      to: process.env.EMAIL_TO || "info@haw.hu",
      reply_to: email,
      subject: `Kapcsolati űrlap: ${subject}`,
      html: ContactEmailHtml({ name, email, subject, message }),
    })

    if (error) {
      console.error("Error sending email with Resend:", error)
      return {
        success: false,
        message: "Hiba történt az üzenet küldése közben. Próbáld újra később.",
      }
    }

    return {
      success: true,
      message: "Köszönöm! Az üzenetedet megkaptam.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
        message: "Hiba történt az üzenet küldése közben. Próbáld újra később.",
    }
  }
}
