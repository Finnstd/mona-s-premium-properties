import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Luxury Estate Development',
    location: 'Abeokuta',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    category: 'Completed',
  },
  {
    id: 2,
    title: 'Commercial Plaza',
    location: 'Sagamu',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    category: 'In Progress',
  },
  {
    id: 3,
    title: 'Residential Complex',
    location: 'Ijebu-Ode',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    category: 'Completed',
  },
  {
    id: 4,
    title: 'Gated Community',
    location: 'Mowe',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80',
    category: 'In Progress',
  },
  {
    id: 5,
    title: 'Premium Townhouses',
    location: 'Ota',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    category: 'Completed',
  },
  {
    id: 6,
    title: 'Land Development',
    location: 'Abeokuta',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'In Progress',
  },
];

export const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="section-padding bg-white">
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
            Our Portfolio
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">
            Recent Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our completed and ongoing property development projects across Ogun State.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 || index === 5 ? 'row-span-2 h-full min-h-[400px]' : 'h-64'
              }`}
              onClick={() => setSelectedImage(project.image)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit mb-2 ${
                  project.category === 'Completed' 
                    ? 'bg-gold text-navy' 
                    : 'bg-white/20 text-white'
                }`}>
                  {project.category}
                </span>
                <h3 className="font-heading text-xl font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm">{project.location}</p>
              </div>

              {/* View Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Eye className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                alt="Project"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
