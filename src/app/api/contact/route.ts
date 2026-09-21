import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      company,
      country,
      projectType,
      projectStage,
      budget,
      description,
    } = body;

    // Validate essential fields
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: "Missing required fields: Name, Email, and Description are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "nithbyte@gmail.com";

    // If API key is not configured, log and return informative response
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not set in environment variables. Inquiry received:", {
        name,
        email,
        projectType,
        projectStage,
      });

      return NextResponse.json({
        success: true,
        mode: "simulated",
        message:
          "Inquiry received successfully (Simulated mode: set RESEND_API_KEY in .env.local for production email transmission).",
      });
    }

    const resend = new Resend(apiKey);

    const emailSubject = `[NithByte Enquiry] ${projectType || "New Project"} — ${name}${company ? ` (${company})` : ""}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0B0B0B; color: #F5F3EE; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #151515; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; }
          .header { background: #0B0B0B; padding: 24px; border-bottom: 2px solid #FF6A00; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 700; color: #FFFFFF; letter-spacing: 1px; }
          .header p { margin: 4px 0 0 0; font-size: 12px; color: #77736D; font-family: monospace; }
          .content { padding: 24px; }
          .field-group { margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .field-label { font-size: 11px; font-weight: 700; color: #FF6A00; text-transform: uppercase; font-family: monospace; margin-bottom: 4px; }
          .field-value { font-size: 14px; color: #FFFFFF; font-weight: 500; }
          .description-box { background: #0B0B0B; padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); font-size: 13px; line-height: 1.6; color: #F5F3EE; white-space: pre-wrap; margin-top: 8px; }
          .footer { padding: 16px 24px; background: #0B0B0B; border-top: 1px solid rgba(255,255,255,0.08); font-size: 11px; color: #77736D; font-family: monospace; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>NITHBYTE // NEW PROJECT INQUIRY</h1>
            <p>TRANSMISSION RECEIVED • ${new Date().toUTCString()}</p>
          </div>
          <div class="content">
            <div class="field-group">
              <div class="field-label">Sender Details</div>
              <div class="field-value">${name} &lt;${email}&gt;</div>
              ${company ? `<div style="font-size:12px; color:#A0A0A0; margin-top:2px;">Company: ${company}</div>` : ""}
              ${country ? `<div style="font-size:12px; color:#A0A0A0; margin-top:2px;">Location / Timezone: ${country}</div>` : ""}
            </div>

            <div class="field-group">
              <div class="field-label">Project Type & Stage</div>
              <div class="field-value">${projectType || "Not Specified"} • ${projectStage || "Early Concept"}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Budget Range</div>
              <div class="field-value">${budget || "Flexible / Discovery"}</div>
            </div>

            <div style="margin-top: 16px;">
              <div class="field-label">Scope & Requirements Description</div>
              <div class="description-box">${description}</div>
            </div>
          </div>
          <div class="footer">
            NithByte Engineering Transmission System • Reply directly to this email to contact ${name}.
          </div>
        </div>
      </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: "NithByte Inquiries <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: emailSubject,
      html: htmlContent,
    });

    if (data.error) {
      console.error("Resend API error:", data.error);
      return NextResponse.json(
        { error: data.error.message || "Failed to send email via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data.data?.id,
      message: "Your project inquiry has been successfully transmitted.",
    });
  } catch (error: any) {
    console.error("Contact API internal error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error occurred." },
      { status: 500 }
    );
  }
}
