import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Home, Users, Award, MapPin } from 'lucide-react';

const stats = [
  { icon: Home, value: 150, suffix: '+', label: 'Properties Sold' },
  { icon: Users, value: 200, suffix: '+', label: 'Happy Clients' },
  { icon: Award, value: 8, suffix: '+', label: 'Years Experience' },
  { icon: MapPin, value: 15, suffix: '+', label: 'Locations Covered' },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="stat-number">
      {count}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-navy py-16 lg:py-20" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold/10 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-gold" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              <p className="text-cream/70 mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
