import * as React from "react";
import { Section, Text, Container, Hr, Heading } from "@react-email/components";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailTemplateProps) {
  return (
    <Container
      style={{
        background: "#f9f9f9",
        borderRadius: 8,
        maxWidth: 600,
        padding: 24,
      }}
    >
      <Section>
        <Heading as="h2" style={{ color: "#2563eb", marginBottom: 16 }}>
          New Contact Message
        </Heading>
        <Text>
          <strong>Name:</strong> {name}
        </Text>
        <Text>
          <strong>Email:</strong> {email}
        </Text>
        <Text>
          <strong>Subject:</strong> {subject}
        </Text>
        <Hr style={{ margin: "20px 0" }} />
        <Section
          style={{
            background: "#fff",
            borderRadius: 6,
            border: "1px solid #e5e7eb",
            padding: 16,
          }}
        >
          <Text>
            <strong>Message:</strong>
          </Text>
          <Text style={{ whiteSpace: "pre-line", margin: 0 }}>{message}</Text>
        </Section>
      </Section>
    </Container>
  );
}
