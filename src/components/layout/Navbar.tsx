import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Properties', href: '#properties' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            isScrolled ? 'bg-navy' : 'bg-gold'
          }`}>
            <Home className={`w-5 h-5 ${isScrolled ? 'text-gold' : 'text-navy'}`} />
          </div>
          <span className={`font-heading text-xl font-bold ${
            isScrolled ? 'text-navy' : 'text-white'
          }`}>
            RealEstate<span className="text-gold">Mona</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`link-underline font-medium transition-colors ${
                isScrolled ? 'text-charcoal hover:text-navy' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant={isScrolled ? 'navyOutline' : 'heroOutline'}
            size="sm"
            className="gap-2"
            onClick={() => window.open('tel:+2348000000000')}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
          <Button
            variant="gold"
            size="sm"
            onClick={() => scrollToSection('#properties')}
          >
            View Properties
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-navy' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-navy' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border"
          >
            <div className="container-custom py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-2 text-charcoal hover:text-navy font-medium"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button variant="navyOutline" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
                <Button variant="gold" className="w-full">
                  View Properties
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
