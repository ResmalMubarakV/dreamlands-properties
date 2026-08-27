import React, { useState, useEffect } from 'react';
import { Phone, MapPin, CheckCircle2, MessageSquare, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface EnquirySectionProps {
  initialPropertyInterest?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ initialPropertyInterest = 'Villa Construction' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'Villa Construction',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPropertyInterest) {
      if (initialPropertyInterest.includes('Plot') || initialPropertyInterest.includes('Land')) {
        setFormData((prev) => ({ ...prev, serviceInterest: 'Land Development' }));
      } else if (initialPropertyInterest.includes('Consult')) {
        setFormData((prev) => ({ ...prev, serviceInterest: 'Property Consultation' }));
      } else if (initialPropertyInterest.includes('Renov')) {
        setFormData((prev) => ({ ...prev, serviceInterest: 'Renovation Works' }));
      } else if (initialPropertyInterest.includes('Interior')) {
        setFormData((prev) => ({ ...prev, serviceInterest: 'Interior Designing' }));
      } else {
        setFormData((prev) => ({ ...prev, serviceInterest: 'Villa Construction' }));
      }
    }
  }, [initialPropertyInterest]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const nameStr = formData.name ? `Name: ${formData.name}` : '';
    const phoneStr = formData.phone ? `Phone: ${formData.phone}` : '';
    const emailStr = formData.email ? `Email: ${formData.email}` : '';
    const serviceStr = `Service Interest: ${formData.serviceInterest}`;
    const msgStr = formData.message ? `Message: ${formData.message}` : '';

    const textPayload = [
      `*New Property Enquiry - Dreamland Properties*`,
      nameStr,
      phoneStr,
      emailStr,
      serviceStr,
      msgStr
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/916282844739?text=${encodeURIComponent(textPayload)}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 md:py-16 bg-[#0d0e12] relative overflow-hidden border-b border-white/5">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Form Box */}
        <div className="bg-[#121418] border border-[#c5a880]/30 shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Contact Details & Brand Info (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-12 bg-[#0a0b0d] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <img src="/Logo.png" alt="Dreamland Properties Logo" className="h-10 w-auto object-contain" />
                  <span className="text-xs font-semibold tracking-[0.25em] text-[#c5a880] uppercase">
                    DIRECT ENQUIRY
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#f4f1ea] leading-tight mb-4">
                  Let's discuss your next space.
                </h2>

                <p className="text-sm text-[#9e9a90] font-light leading-relaxed mb-8">
                  Fill in your details below. Your enquiry will be sent directly to our team via WhatsApp for an immediate response.
                </p>

                {/* Direct Contact Points */}
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 glass-panel border border-[#c5a880]/30 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#c5a880]" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#9e9a90] block mb-0.5">
                        Office Address
                      </span>
                      <p className="text-xs text-[#f4f1ea] font-sans leading-relaxed">
                        Dev Arcade, Near Polytechnic College, Marutharode, Koottupaatha, Palakkad
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 glass-panel border border-[#c5a880]/30 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#25D366]" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#9e9a90] block mb-0.5">
                        Phone / WhatsApp
                      </span>
                      <div className="flex flex-col gap-0.5 text-xs text-[#f4f1ea] font-mono">
                        <a href="https://wa.me/916282844739" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                          +91 62828 44739
                        </a>
                        <a href="https://wa.me/916282844608" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                          +91 62828 44608
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 glass-panel border border-[#c5a880]/30 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#c5a880]" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#9e9a90] block mb-0.5">
                        Email Address
                      </span>
                      <a href="mailto:dreamlandspropertiespkd@gmail.com" className="text-xs text-[#f4f1ea] font-mono hover:text-[#c5a880] transition-colors">
                        dreamlandspropertiespkd@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Brochure Download Action */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="/brochure.pdf"
                  download="Dreamland_Properties_Brochure.pdf"
                  className="w-full py-3 px-4 bg-[#c5a880] hover:bg-[#e2c99b] text-[#0a0b0d] text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Brochure</span>
                </a>
              </div>
            </div>

            {/* Right Form Component (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-[#0a0b0d] border border-[#c5a880]/40 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#f4f1ea] mb-2">
                    WhatsApp Enquiry Sent!
                  </h3>
                  <p className="text-sm text-[#9e9a90] font-light leading-relaxed mb-6">
                    Your details have been compiled and opened in WhatsApp (+91 62828 44739). Our Palakkad team will respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#c5a880] text-[#0a0b0d] text-xs font-semibold uppercase tracking-[0.2em]"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSendToWhatsApp} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#c5a880] font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full px-4 py-3.5 bg-[#0a0b0d] border border-white/10 focus:border-[#c5a880] text-sm text-[#f4f1ea] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#c5a880] font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 Phone Number"
                        className="w-full px-4 py-3.5 bg-[#0a0b0d] border border-white/10 focus:border-[#c5a880] text-sm text-[#f4f1ea] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#c5a880] font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="w-full px-4 py-3.5 bg-[#0a0b0d] border border-white/10 focus:border-[#c5a880] text-sm text-[#f4f1ea] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#c5a880] font-medium mb-2">
                        Service Interest *
                      </label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-[#0a0b0d] border border-white/10 focus:border-[#c5a880] text-sm text-[#f4f1ea] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Villa Construction">Villa Construction</option>
                        <option value="Land Development">Land Development</option>
                        <option value="Property Consultation">Property Consultation</option>
                        <option value="Renovation Works">Renovation Works</option>
                        <option value="Interior Designing">Interior Designing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#c5a880] font-medium mb-2">
                      Message / Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your specific project details or property preferences..."
                      className="w-full px-4 py-3.5 bg-[#0a0b0d] border border-white/10 focus:border-[#c5a880] text-sm text-[#f4f1ea] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-[#0a0b0d] text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 shadow-[0_0_25px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2.5"
                  >
                    <MessageSquare className="w-4 h-4 fill-[#0a0b0d]" />
                    <span>Send Enquiry via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
