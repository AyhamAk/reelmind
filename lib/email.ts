import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPasswordResetEmail(
  to: string,
  resetUrl: string,
  userName: string
) {
  // In development, just log the reset URL
  if (process.env.NODE_ENV === "development" && !process.env.RESEND_API_KEY) {
    console.log("\n===========================================");
    console.log("PASSWORD RESET EMAIL");
    console.log("===========================================");
    console.log(`To: ${to}`);
    console.log(`Name: ${userName}`);
    console.log(`Reset URL: ${resetUrl}`);
    console.log("===========================================\n");
    return;
  }

  try {
    const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Reset Your Password</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <tr>
              <td style="padding: 40px 30px;">
                <h1 style="color: #333333; font-size: 24px; margin: 0 0 20px 0;">Reset Your Password</h1>
                <p style="color: #666666; font-size: 16px; line-height: 24px; margin: 0 0 20px 0;">
                  Hi ${userName},
                </p>
                <p style="color: #666666; font-size: 16px; line-height: 24px; margin: 0 0 20px 0;">
                  We received a request to reset your password for your ReelMind account. Click the button below to reset it.
                </p>
                <table border="0" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                  <tr>
                    <td style="border-radius: 4px; background-color: #000000;">
                      <a href="${resetUrl}" target="_blank" style="display: inline-block; padding: 14px 40px; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 4px;">
                        Reset Password
                      </a>
                    </td>
                  </tr>
                </table>
                <p style="color: #666666; font-size: 14px; line-height: 20px; margin: 0 0 10px 0;">
                  Or copy and paste this link into your browser:
                </p>
                <p style="color: #999999; font-size: 14px; line-height: 20px; margin: 0 0 20px 0; word-break: break-all;">
                  ${resetUrl}
                </p>
                <p style="color: #666666; font-size: 14px; line-height: 20px; margin: 0 0 10px 0;">
                  This link will expire in 1 hour for security reasons.
                </p>
                <p style="color: #666666; font-size: 14px; line-height: 20px; margin: 0;">
                  If you didn't request a password reset, you can safely ignore this email.
                </p>
                <hr style="border: none; border-top: 1px solid #eeeeee; margin: 30px 0;">
                <p style="color: #999999; font-size: 12px; line-height: 18px; margin: 0;">
                  ReelMind - Social Media Management Tool
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;

    const emailText = `
Hi ${userName},

We received a request to reset your password for your ReelMind account.

Click the link below to reset your password:
${resetUrl}

This link will expire in 1 hour for security reasons.

If you didn't request a password reset, you can safely ignore this email.

ReelMind - Social Media Management Tool
    `;

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "ReelMind <onboarding@resend.dev>",
      to,
      subject: "Reset your password - ReelMind",
      html: emailHtml,
      text: emailText,
    });

    console.log(`Password reset email sent to ${to}`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send password reset email");
  }
}
