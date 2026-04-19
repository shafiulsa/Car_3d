import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Explorer',
    price: '$49',
    description: 'Perfect for enthusiasts and digital collectors starting their journey.',
    features: ['3 High-Poly Models', 'Standard Rendering', 'Personal License', 'Community Support'],
    cta: 'Start Now',
    popular: false,
  },
  {
    name: 'Pro Series',
    price: '$129',
    description: 'Advanced features for professional designers and agency teams.',
    features: ['Unlimited Model Access', 'Ray-Traced Rendering', 'Commercial License', 'Priority Support', 'Custom Textures'],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$499',
    description: 'Bespoke solutions for automotive manufacturers and large studios.',
    features: ['Custom CAD Conversion', 'VR/AR Integration', 'White-label Delivery', 'Dedicated Manager', 'API Access'],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your project. All tiers include access to our high-fidelity 3D rendering engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden group ${
                plan.popular 
                  ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-blue-500/50 shadow-2xl shadow-blue-500/10' 
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 py-1.5 px-4 bg-blue-600 text-white text-[10px] uppercase font-black rounded-bl-xl tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-500">/monthly</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <Check size={12} />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group-hover:gap-3 ${
                plan.popular 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                {plan.cta} <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
