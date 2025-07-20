import * as React from "react";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate({
  name,
  email,
  subject,
  message,
}: ContactEmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#222",
        background: "#f9f9f9",
        padding: 24,
        borderRadius: 8,
        maxWidth: 600,
      }}
    >
      <h2 style={{ color: "#2563eb", marginBottom: 16 }}>
        New Contact Message
      </h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Subject:</strong> {subject}
      </p>
      <div
        style={{
          marginTop: 16,
          padding: 16,
          background: "#fff",
          borderRadius: 6,
          border: "1px solid #e5e7eb",
        }}
      >
        <strong>Message:</strong>
        <p style={{ margin: 0, whiteSpace: "pre-line" }}>{message}</p>
      </div>
    </div>
  );
}
