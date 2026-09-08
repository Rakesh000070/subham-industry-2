import express from 'express';
import nodemailer from 'nodemailer';
import validator from 'validator';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Basic rate limiting: 5 requests per 15 minutes per IP
const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many requests from this IP, please try again after 15 minutes' },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/enquiries', enquiryLimiter, async (req, res) => {
  try {
    const { name, company, phone, email, productSlug, message } = req.body;

    // 1. Validation
    if (!name || !company || !phone || !email || !message) {
      return res.status(400).json({ success: false, message: 'All required fields must be provided' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email address' });
    }

    // Basic phone validation (digits, +, -, spaces)
    const phoneClean = phone.replace(/[\s-+]/g, '');
    if (!validator.isNumeric(phoneClean) || phoneClean.length < 10) {
      return res.status(400).json({ success: false, message: 'Invalid phone number' });
    }

    // 2. Sanitization
    const sanitizedName = validator.escape(name.trim());
    const sanitizedCompany = validator.escape(company.trim());
    const sanitizedPhone = validator.escape(phone.trim());
    const sanitizedEmail = validator.normalizeEmail(email) || email;
    const sanitizedMessage = validator.escape(message.trim());
    const sanitizedProduct = productSlug ? validator.escape(productSlug.trim()) : 'General Inquiry';

    // 3. Email Configuration
    // Using lazy initialization as per guidelines
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Website Enquiry: ${sanitizedProduct} - ${sanitizedName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #c21a1a; border-bottom: 2px solid #eee; padding-bottom: 10px;">Subham Industries - Website Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 30%;">Customer Name</td>
              <td style="padding: 10px; border: 1px solid #eee;">${sanitizedName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Company Name</td>
              <td style="padding: 10px; border: 1px solid #eee;">${sanitizedCompany}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Phone Number</td>
              <td style="padding: 10px; border: 1px solid #eee;">${sanitizedPhone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Email Address</td>
              <td style="padding: 10px; border: 1px solid #eee;">${sanitizedEmail}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Machine/Product</td>
              <td style="padding: 10px; border: 1px solid #eee;">${sanitizedProduct}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Timestamp</td>
              <td style="padding: 10px; border: 1px solid #eee;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px;">
            <h4 style="margin-bottom: 10px;">Requirement Message:</h4>
            <div style="padding: 20px; background: #f9f9f9; border-left: 4px solid #c21a1a;">
              ${sanitizedMessage.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p style="margin-top: 40px; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 20px;">
            This enquiry was generated from the Subham Industries official website.
          </p>
        </div>
      `,
    };

    // Only attempt to send if credentials exist, otherwise log to console for development
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
      console.log('Enquiry email sent successfully to', process.env.EMAIL_TO);
    } else {
      console.log('EMAIL_USER or EMAIL_PASS not set. Logging enquiry to console instead:');
      console.log(JSON.stringify({ name, company, phone, email, productSlug, message }, null, 2));
      // In development, we can still return success but warn in logs
    }

    return res.status(200).json({ success: true, message: 'Enquiry submitted successfully' });

  } catch (error) {
    console.error('Enquiry submission error:', error);
    return res.status(500).json({ success: false, message: 'An internal server error occurred. Please try again later.' });
  }
});

export default router;
