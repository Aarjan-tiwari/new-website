# Gmail SMTP Setup Guide

## 🚀 Your Contact Form is Now Set Up with Gmail SMTP!

### ✅ What You Get:
- **Completely FREE** email service
- **500 emails per day** limit
- **15,000 emails per month** limit
- **Professional email delivery** to your Gmail

### 🔧 Setup Steps:

#### 1. Create Gmail App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click "Security" → "2-Step Verification" (enable if not already)
3. Click "App passwords"
4. Select "Mail" and "Other (Custom name)"
5. Name it "Website Contact Form"
6. Copy the 16-character password

#### 2. Create Environment File
Create a file called `.env.local` in your project root with:

```env
# Gmail SMTP Configuration (Completely Free - 500 emails/day)
GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password

# Your Gmail address where you want to receive emails
TO_EMAIL=your_email@gmail.com
```

#### 3. Replace Placeholder Values
- `your_email@gmail.com` → Your actual Gmail address
- `your_16_character_app_password` → The app password from step 1

### 🎯 How It Works:
1. User fills out contact form on your website
2. Form sends data to `/api/contact` endpoint
3. Gmail SMTP sends email to your Gmail
4. You receive professional-looking emails with all contact details

### 📧 Email Limits:
- **Daily**: 500 emails (resets at midnight)
- **Monthly**: 15,000 emails (resets on 1st of month)
- **Cost**: $0 forever!

### 🚨 What Happens If You Exceed Limits:
- Emails bounce back to sender
- No charges ever
- Service resumes next day/month

### 🧪 Test Your Setup:
1. Start your development server: `npm run dev`
2. Fill out the contact form on your website
3. Check your Gmail for the test message
4. You should receive a beautifully formatted email!

### 🔒 Security:
- Uses Gmail's secure SMTP
- App passwords are safer than regular passwords
- No sensitive data stored on your server

### 🆘 Need Help?
If emails aren't working:
1. Check your `.env.local` file exists
2. Verify app password is correct
3. Make sure 2FA is enabled on Gmail
4. Check browser console for errors

---

**🎉 You're all set! Your contact form will now send emails to your Gmail for free!**
