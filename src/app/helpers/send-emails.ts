import { resend } from "@/lib/resend";
import { ContactEmail } from "../../../emails/ContactEmail";

export async function sendContactEmail(
  name: string,
  email: string,
  subject: string,
  message: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      react: ContactEmail({ name, email, subject, message }),
    });
    if (error) {
      console.error(error, "Error while sending Email");
      return { success: false, error: (error as Error).message || "Failed to send email" };
    }
    return { success: true, data, message: "Email sent successfully!" }
  } catch (emailError) {
    console.error(emailError, "Error while sending Email");
    return { success: false, error: "Failed to send email" };
  }
}