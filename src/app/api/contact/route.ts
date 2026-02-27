import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, phone, subject, message } = body;

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("SLACK_WEBHOOK_URL not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const subjectLabels: Record<string, string> = {
      general: "General Inquiry",
      bug: "Bug Report",
      feature: "Feature Request",
      partnership: "Partnership",
      enterprise: "Enterprise / Team Plan",
      other: "Other",
    };

    const payload = {
      text: "New Brewnet Contact",
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*New Brewnet Contact Form Submission*\n\n*From:* ${email}\n*Phone:* ${phone || "N/A"}\n*Subject:* ${subjectLabels[subject] || subject}\n*Message:*\n${message}`,
          },
        },
      ],
    };

    const slackRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!slackRes.ok) {
      console.error("Slack webhook failed:", slackRes.status);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
