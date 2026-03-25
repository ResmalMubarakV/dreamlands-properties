import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import contactBg from "../assets/contactpage.webp";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={contactBg}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-sm"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 page-section">
        <div className="section-container">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent uppercase tracking-wide">
              CONTACT US
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get in touch with us for any inquiries about our properties.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* FORM */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/40">
              <h2 className="text-xl md:text-2xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent uppercase tracking-wide">
                SEND A MESSAGE
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />

                <textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                />

                <button className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition duration-300">
                  <Send size={18} />
                  Send Message
                </button>

              </form>
            </div>

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-6">

              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/40">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent uppercase tracking-wide">
                  CONTACT DETAILS
                </h2>

                <div className="flex flex-col gap-4 text-muted-foreground">

                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-primary mt-0.5" />
                    <span>Dev Arcade, Palakkad</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-primary" />
                    <span>+91 6282844739</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-primary" />
                    <span>info@dreamlandsproperties.com</span>
                  </div>

                </div>
              </div>

              {/* MAP */}
              <div className="rounded-2xl overflow-hidden h-64 lg:flex-1 shadow-lg border border-white/40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.433039850577!2d76.66808009147641!3d10.783848815132187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86f3fe23d2dd5%3A0x8652eff8446d9f93!2sDreamlands%20Properties%20Plots%20and%20Villas!5e0!3m2!1sen!2sin!4v1774440299832!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dreamlands Properties Location"
              />
            </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;