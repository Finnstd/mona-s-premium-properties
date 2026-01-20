import { motion } from 'framer-motion';
import { 
  MapPinned, 
  FileCheck, 
  BadgeCheck, 
  Zap, 
  HeartHandshake,
  Shield
} from 'lucide-react';

const reasons = [
  {
    icon: MapPinned,
    title: 'Local Market Expert',
    description: 'Deep knowledge of Ogun State neighborhoods, pricing trends, and investment opportunities.',
  },
  {
    icon: FileCheck,
    title: 'Secure Documentation',
    description: 'All properties come with verified titles, surveys, and legally compliant documentation.',
  },
  {
    icon: BadgeCheck,
    title: 'Verified Listings',
    description: 'Every property is personally inspected and verified before listing.',
  },
  {
    icon: Zap,
    title: 'Fast Closing',
    description: 'Streamlined processes ensure quick and hassle-free property transactions.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Service',
    description: 'Dedicated attention to understand and meet your unique property needs.',
  },
  {
    icon: Shield,
    title: 'After-Sale Support',
    description: 'Continued assistance and support even after the transaction is complete.',
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-cream">
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
            Why Work With Me
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">
            Your Success Is My Priority
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of working with a dedicated professional who puts your interests first.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white shadow-card hover:shadow-elevated transition-all duration-500"
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              
              <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                <reason.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
