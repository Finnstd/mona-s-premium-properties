import { motion } from 'framer-motion';
import { 
  Home, 
  KeyRound, 
  Building, 
  Landmark, 
  Map, 
  Hammer 
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Buy Property',
    description: 'Find your dream home from our curated selection of verified properties across Ogun State.',
  },
  {
    icon: KeyRound,
    title: 'Sell Property',
    description: 'Get the best value for your property with our expert marketing and negotiation services.',
  },
  {
    icon: Building,
    title: 'Rent / Lease',
    description: 'Quality rental properties for families and professionals seeking comfortable living.',
  },
  {
    icon: Landmark,
    title: 'Short-Let Management',
    description: 'Premium short-term rentals for business travelers and vacationers.',
  },
  {
    icon: Map,
    title: 'Land Sales',
    description: 'Prime residential and commercial land in strategic locations with verified documentation.',
  },
  {
    icon: Hammer,
    title: 'Property Development',
    description: 'End-to-end support for property development projects from land acquisition to completion.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-navy">
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
            What I Offer
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mt-3 mb-4">
            Real Estate Services
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to meet your unique needs and investment goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-cream mb-3">
                {service.title}
              </h3>
              <p className="text-cream/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
