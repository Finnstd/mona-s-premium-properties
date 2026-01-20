import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+234 800 000 0000',
    href: 'tel:+2348000000000',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+234 800 000 0000',
    href: 'https://wa.me/2348000000000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@realestatemona.com',
    href: 'mailto:hello@realestatemona.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@realestatemona',
    href: 'https://instagram.com/realestatemona',
  },
];

const propertyTypes = ['Land', 'House', 'Apartment', 'Short-Let', 'Commercial'];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    propertyType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', budget: '', propertyType: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold tracking-wider uppercase text-sm">
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">
            Contact Me Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your property journey? Fill out the form or reach out directly. 
            I'm here to help you every step of the way.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="+234 800 000 0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  >
                    <option value="">Select budget</option>
                    <option value="under-5m">Under ₦5 Million</option>
                    <option value="5m-20m">₦5M - ₦20 Million</option>
                    <option value="20m-50m">₦20M - ₦50 Million</option>
                    <option value="50m-100m">₦50M - ₦100 Million</option>
                    <option value="above-100m">Above ₦100 Million</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  >
                    <option value="">Select type</option>
                    {propertyTypes.map((type) => (
                      <option key={type} value={type.toLowerCase()}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                  placeholder="Tell us more about what you're looking for..."
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-cream hover:bg-navy group transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground group-hover:text-cream/70">
                      {item.label}
                    </p>
                    <p className="font-medium text-charcoal group-hover:text-cream">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-card h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253736.3459474285!2d3.1438708!3d7.1564927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4c6a1a73f3d7%3A0x8b2c79d0b3d8f8e1!2sAbeokuta%2C%20Ogun%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1704567890123!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Office Address */}
            <div className="flex items-start gap-4 p-6 rounded-xl bg-navy">
              <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-lg font-semibold text-cream mb-1">
                  Office Address
                </h4>
                <p className="text-cream/70">
                  123 Real Estate Avenue, Abeokuta,<br />
                  Ogun State, Nigeria
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
