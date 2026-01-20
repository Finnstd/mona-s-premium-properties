import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  'Verified & Licensed Realtor',
  'Local Ogun Market Expert',
  'Transparent Transactions',
  'After-Sale Support',
];

const trustIndicators = [
  { icon: Award, label: 'Verified Realtor', value: 'Certified' },
  { icon: Users, label: 'Happy Clients', value: '200+' },
  { icon: Shield, label: 'Properties Sold', value: '150+' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Monalisa - Real Estate Expert"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-elevated max-w-xs hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-navy">8+ Years</p>
                  <p className="text-muted-foreground">of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-semibold tracking-wider uppercase text-sm">
              About Monalisa
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-6">
              Your Trusted Real Estate Partner in Ogun State
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over 8 years of experience in the Nigerian real estate market, I'm dedicated 
              to helping you find your perfect property. Whether you're looking for a family home, 
              investment property, or prime land, I provide personalized service with complete 
              transparency.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As a female entrepreneur and local expert in Ogun State, I understand the unique 
              needs of buyers and investors in this region. My mission is to make property 
              ownership accessible, secure, and stress-free for every client.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-charcoal font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mb-8">
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 px-4 py-3 bg-cream rounded-xl"
                >
                  <item.icon className="w-6 h-6 text-gold" />
                  <div>
                    <p className="font-heading text-xl font-bold text-navy">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="gold" size="lg">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
