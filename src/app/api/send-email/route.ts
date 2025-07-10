// app/api/send-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ thông tin' },
        { status: 400 }
      );
    }

    // Create transporter với Gmail (nodemailer v7+)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
      secure: true, // Use TLS
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter connection
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'hntn3221@gmail.com', // Your email
      subject: `[Portfolio Contact] ${subject}`,
      replyTo: email, // Allow direct reply to sender
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Tin nhắn mới từ Portfolio
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Tên:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Chủ đề:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Nội dung:</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>Email này được gửi từ form liên hệ trên website portfolio của bạn.</p>
            <p>Thời gian: ${new Date().toLocaleString('vi-VN')}</p>
          </div>
        </div>
      `,
    };

    // Auto-reply to sender
    const autoReplyOptions = {
      from: `"Lê Thắng - Portfolio" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Cảm ơn bạn đã liên hệ - Portfolio Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #28a745; padding-bottom: 10px;">
            Cảm ơn bạn đã liên hệ!
          </h2>
          
          <p>Chào ${name},</p>
          
          <p>Tôi đã nhận được tin nhắn của bạn với nội dung:</p>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #28a745; margin: 15px 0;">
            <p><strong>Chủ đề:</strong> ${subject}</p>
            <p><strong>Nội dung:</strong> ${message}</p>
          </div>
          
          <p>Tôi sẽ phản hồi bạn trong thời gian sớm nhất có thể.</p>
          
          <p>Trân trọng,<br>
          <strong>Lê Thắng</strong></p>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>Email: hntn3221@gmail.com</p>
            <p>GitHub: https://github.com/lethang2003</p>
          </div>
        </div>
      `,
    };

    // Send both emails with Promise.all for better performance
    const [mainEmailResult, autoReplyResult] = await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);

    console.log('Main email sent:', mainEmailResult.messageId);
    console.log('Auto-reply sent:', autoReplyResult.messageId);

    return NextResponse.json(
      { 
        message: 'Email đã được gửi thành công!',
        messageId: mainEmailResult.messageId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    // More detailed error handling
    if (error.code === 'EAUTH') {
      return NextResponse.json(
        { error: 'Lỗi xác thực email. Vui lòng kiểm tra cấu hình.' },
        { status: 500 }
      );
    } else if (error.code === 'ECONNECTION') {
      return NextResponse.json(
        { error: 'Không thể kết nối đến máy chủ email.' },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: 'Có lỗi xảy ra khi gửi email. Vui lòng thử lại.' },
        { status: 500 }
      );
    }
  }
}