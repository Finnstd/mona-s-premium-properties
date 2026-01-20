import { motion } from 'framer-motion';
import { MessageCircle, CalendarCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/2348000000000?text=Hello%20Mona,%20I%20want%20to%20book%20a%20consultation', '_blank');
  };

  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full font-semibold text-sm mb-6">
            Start Your Property Journey Today
          </span>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-6">
            Ready to Own or Invest in Property?
          </h2>
          
          <p className="text-cream/70 text-lg mb-10 leading-relaxed">
            Whether you're buying your first home, investing in land, or looking for rental properties, 
            I'm here to make your property dreams a reality. Let's talk!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="xl"
              className="group"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <CalendarCheck className="w-5 h-5" />
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="whatsapp"
              size="xl"
              onClick={openWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
