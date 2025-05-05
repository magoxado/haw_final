interface ContactEmailProps {
  name: string
  email: string
  subject: string
  message: string
}

export const ContactEmailHtml = ({ name, email, subject, message }: ContactEmailProps) => {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Új üzenet a kapcsolati űrlapról</h2>
      <p><strong>Név:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Tárgy:</strong> ${subject}</p>
      <p><strong>Üzenet:</strong></p>
      <div style="padding: 12px; background-color: #f5f5f5; border-radius: 4px;">
        ${message.replace(/\n/g, "<br>")}
      </div>
    </div>
  `
}
