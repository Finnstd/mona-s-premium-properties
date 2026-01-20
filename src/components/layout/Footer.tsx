import { motion } from 'framer-motion';
import { Home, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  quickLinks: [
    { name: 'Properties', href: '#properties' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Buy Property', href: '#services' },
    { name: 'Sell Property', href: '#services' },
    { name: 'Rent / Lease', href: '#services' },
    { name: 'Short-Let', href: '#services' },
    { name: 'Land Sales', href: '#services' },
  ],
  locations: [
    { name: 'Abeokuta', href: '#' },
    { name: 'Sagamu', href: '#' },
    { name: 'Ijebu-Ode', href: '#' },
    { name: 'Ota', href: '#' },
    { name: 'Mowe', href: '#' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/realestatemona' },
  { icon: Facebook, href: 'https://facebook.com/realestatemona' },
  { icon: Twitter, href: 'https://twitter.com/realestatemona' },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy pt-20 pb-8">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                <Home className="w-5 h-5 text-navy" />
              </div>
              <span className="font-heading text-xl font-bold text-cream">
                RealEstate<span className="text-gold">Mona</span>
              </span>
            </a>
            <p className="text-cream/60 mb-6 leading-relaxed">
              Your trusted real estate partner in Ogun State. Premium properties, transparent dealings, 
              and personalized service.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-cream/60 hover:bg-gold hover:text-navy transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg font-semibold text-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-semibold text-cream mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-heading text-lg font-semibold text-cream mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-cream/60">
                  123 Real Estate Avenue, Abeokuta, Ogun State, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+2348000000000" className="text-cream/60 hover:text-gold transition-colors">
                  +234 800 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:hello@realestatemona.com" className="text-cream/60 hover:text-gold transition-colors">
                  hello@realestatemona.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm">
            © {new Date().getFullYear()} RealEstateMona. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-cream/40 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-cream/40 hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
