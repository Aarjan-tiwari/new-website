import nodemailer from 'nodemailer';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Create Gmail SMTP transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'aarjan.tiwarii@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendContactEmail(data: ContactFormData) {
  try {
    const { name, email, message } = data;
    
    const mailOptions = {
      from: process.env.GMAIL_USER || 'aarjan.tiwarii@gmail.com',
      to: process.env.TO_EMAIL || 'aarjan.tiwarii@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Message</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 14px;">
            This message was sent from your website contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Message

Name: ${name}
Email: ${email}
Message: ${message}

This message was sent from your website contact form.
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
