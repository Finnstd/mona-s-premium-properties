import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const propertyTypes = ['All', 'For Sale', 'For Rent', 'Short-Let', 'Land'];

const properties = [
  {
    id: 1,
    title: '4 Bedroom Luxury Duplex',
    location: 'Abeokuta, Ogun State',
    price: '₦45,000,000',
    type: 'For Sale',
    beds: 4,
    baths: 3,
    sqft: 350,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: '3 Bedroom Apartment',
    location: 'Ijebu-Ode, Ogun State',
    price: '₦1,500,000/yr',
    type: 'For Rent',
    beds: 3,
    baths: 2,
    sqft: 180,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    featured: false,
  },
  {
    id: 3,
    title: 'Premium Short-Let Villa',
    location: 'Sagamu, Ogun State',
    price: '₦120,000/night',
    type: 'Short-Let',
    beds: 5,
    baths: 4,
    sqft: 500,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    featured: true,
  },
  {
    id: 4,
    title: '500sqm Residential Land',
    location: 'Mowe, Ogun State',
    price: '₦8,000,000',
    type: 'Land',
    beds: 0,
    baths: 0,
    sqft: 500,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    featured: false,
  },
  {
    id: 5,
    title: '5 Bedroom Mansion',
    location: 'GRA, Abeokuta',
    price: '₦120,000,000',
    type: 'For Sale',
    beds: 5,
    baths: 5,
    sqft: 650,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    featured: true,
  },
  {
    id: 6,
    title: '2 Bedroom Flat',
    location: 'Ota, Ogun State',
    price: '₦800,000/yr',
    type: 'For Rent',
    beds: 2,
    baths: 2,
    sqft: 120,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    featured: false,
  },
];

export const PropertiesSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProperties = activeFilter === 'All' 
    ? properties 
    : properties.filter(p => p.type === activeFilter);

  return (
    <section id="properties" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold font-semibold tracking-wider uppercase text-sm">
            Featured Listings
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">
            Explore Our Properties
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover premium properties across Ogun State. From luxury homes to affordable lands, 
            we have the perfect investment for you.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === type
                  ? 'bg-navy text-cream shadow-lg'
                  : 'bg-white text-charcoal hover:bg-navy/10'
              }`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Properties Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="property-card bg-white rounded-2xl overflow-hidden shadow-card group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="property-image w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-gold text-navy text-xs font-semibold rounded-full">
                    {property.type}
                  </span>
                  {property.featured && (
                    <span className="px-3 py-1 bg-navy text-cream text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Price Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="gold" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Features */}
                {property.type !== 'Land' && (
                  <div className="flex items-center gap-4 mb-4 text-sm text-charcoal">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4 text-gold" />
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4 text-gold" />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4 text-gold" />
                      <span>{property.sqft} sqm</span>
                    </div>
                  </div>
                )}

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-heading text-2xl font-bold text-gold">
                    {property.price}
                  </span>
                  <button className="text-navy hover:text-gold transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="navyOutline" size="lg">
            View All Properties
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
