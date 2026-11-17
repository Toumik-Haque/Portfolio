const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const name = String(req.body?.name || "").trim();
  const email = String(req.body?.email || "").trim();
  const message = String(req.body?.message || "").trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "Portfolio Contact";
  const toEmail = process.env.TO_EMAIL;

  if (!apiKey || !senderEmail || !toEmail) {
    return res.status(500).json({
      error:
        "Email service is not configured. Set BREVO_API_KEY, BREVO_SENDER_EMAIL and TO_EMAIL.",
    });
  }

  try {
    const response = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email: toEmail }],
        replyTo: { name, email },
        subject: `Contact via Portfolio - ${name}`,
        textContent: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      console.error("Brevo email error:", response.status, data);
      return res.status(502).json({
        error: data?.message || "Brevo could not send the email.",
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Brevo request failed:", error);
    return res.status(502).json({
      error: "Could not reach the email service. Please try again.",
    });
  }
}
