import { sendContactEmail } from '@/app/helpers/send-emails';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, message, subject } = reqBody;

    // Validate required fields
    if (!name || !email || !message || !subject) {
      return NextResponse.json({
        message: 'Please fill in all required fields.',
        success: false,
      });
    }

    // Assuming sendContactEmail expects four separate arguments, not an object

    const result = await sendContactEmail(name, email, subject, message);

    if (result.success) {
      return NextResponse.json({
        message: 'Your message has been sent successfully.',
        success: true,
      });
    } else {
      return NextResponse.json({
        message: 'Failed to send your message. Please try again later.',
        success: false,
      });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({
      message: 'An error occurred while sending your message.',
      success: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

