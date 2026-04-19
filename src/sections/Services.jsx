import React from 'react';
import { Package, Shield, Settings, Zap, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'High-Poly Models',
    description: 'Ultra-realistic 3D car models with meticulous attention to detail and texture precision.',
    icon: <Package className="text-blue-500" size={32} />,
  },
  {
    title: 'Custom Engineering',
    description: 'Bespoke design solutions tailored to meet your specific technical requirements.',
    icon: <Settings className="text-blue-500" size={32} />,
  },
  {
    title: 'Fast Performance',
    description: 'Optimized models for real-time applications ensuring smooth interactions at 60 FPS.',
    icon: <Zap className="text-blue-500" size={32} />,
  },
  {
    title: 'Global Delivery',
    description: 'Seamless integration and delivery across all major platforms and frameworks.',
    icon: <Globe className="text-blue-500" size={32} />,
  },
  {
    title: 'AI Assisted Design',
    description: 'Leveraging cutting-edge AI to refine aerodynamics and structural integrity.',
    icon: <Cpu className="text-blue-500" size={32} />,
  },
  {
    title: 'Secure Licensing',
    description: 'Verified digital ownership and flexible licensing for all commercial projects.',
    icon: <Shield className="text-blue-500" size={32} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide comprehensive 3D automotive solutions that combine artistic excellence with technical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="mb-6 p-4 rounded-2xl bg-slate-700/30 w-fit group-hover:bg-blue-500/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
