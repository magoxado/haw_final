"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { submitContactForm } from "@/app/actions/contact-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ReloadIcon } from "@radix-ui/react-icons"
import Link from "next/link"

type FormState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
  }
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Küldés...
        </>
      ) : (
        "Üzenet elküldése"
      )}
    </Button>
  )
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({})

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData)
    setFormState(result)

    // If successful, reset the form
    if (result.success) {
      const form = document.getElementById("contact-form") as HTMLFormElement
      form.reset()
    }
  }

  return (
    <form id="contact-form" action={handleSubmit} className="space-y-4">
      {formState.success && (
        <Alert className="border-border bg-card">
          <AlertDescription>{formState.message}</AlertDescription>
        </Alert>
      )}

      {formState.message && !formState.success && (
        <Alert className="border-destructive/40 bg-card">
          <AlertDescription>{formState.message}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Név
          </label>
          <Input id="name" name="name" placeholder="Minta János" />
          {formState.errors?.name && <p className="text-sm text-red-500">{formState.errors.name[0]}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            E-mail cím
          </label>
          <Input id="email" name="email" type="email" placeholder="janos@ceg.hu" />
          {formState.errors?.email && <p className="text-sm text-red-500">{formState.errors.email[0]}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Tárgy
        </label>
        <Input id="subject" name="subject" placeholder="Vezetői coaching érdeklődés" />
        {formState.errors?.subject && <p className="text-sm text-red-500">{formState.errors.subject[0]}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Üzenet
        </label>
        <Textarea id="message" name="message" placeholder="Miben segíthetek?" rows={5} />
        {formState.errors?.message && <p className="text-sm text-red-500">{formState.errors.message[0]}</p>}
      </div>

      <div className="text-sm text-muted-foreground">
        Az elküldéssel elfogadod az{" "}
        <Link href="/adatkezelesi-tajekoztato" className="text-primary hover:underline">
          Adatkezelési tájékoztatót
        </Link>
        .
      </div>

      <SubmitButton />
    </form>
  )
}
