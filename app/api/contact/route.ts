import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    // =========================
    // 1. EMAIL TO YOU
    // =========================
    await resend.emails.send({
      from: "Web Portfolio Contact <onboarding@resend.dev>",
      to: "dssenkungu@gmail.com", // 🔁 change this
      subject: `📩 New Message from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h2>New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
      replyTo: email,
    });

    // =========================
    // 2. AUTO-REPLY TO SENDER
    // =========================
    await resend.emails.send({
      from: "Denis Portfolio <onboarding@resend.dev>",
      to: email,
      subject: "✅ I received your message",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h2>Thanks for reaching out, ${name} 👋</h2>

          <p>I’ve received your message and will get back to you shortly.</p>

          <hr />

          <p><strong>Your message:</strong></p>
          <p style="color:#555">${message}</p>

          <br />

          <p>Best regards,<br/>
          <strong>Ssenkungu M. Denis</strong></p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}