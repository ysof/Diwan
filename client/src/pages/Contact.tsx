/**
 * Contact Page - تواصل
 * Contact form and information
 * Design: Editorial, clean, functional
 */

import { Layout } from "@/components/Layout";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            تواصل معنا
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            نود أن نسمع منك. أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <div className="editorial-card">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  البريد الإلكتروني
                </h3>
              </div>
              <p className="text-muted-foreground">info@diwan.com</p>
            </div>

            <div className="editorial-card">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">الهاتف</h3>
              </div>
              <p className="text-muted-foreground">+966 50 000 0000</p>
            </div>

            <div className="editorial-card">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">الموقع</h3>
              </div>
              <p className="text-muted-foreground">الامارات العربية المتحدة</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="editorial-card max-w-2xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-green-600 text-lg font-semibold mb-2">
                  شكراً لك! تم استقبال رسالتك.
                </div>
                <p className="text-muted-foreground">
                  سنرد عليك في أقرب وقت ممكن.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="أدخل اسمك"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="بريدك الإلكتروني"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    الموضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="موضوع الرسالة"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition-colors duration-300"
                >
                  إرسال الرسالة
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
