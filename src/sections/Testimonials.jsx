import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Rivera',
    role: 'Lead Designer, AutoVore',
    content: 'The 3D models provided by CAR3D transformed our product showcase. The fidelity and performance are unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=alex',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO, MechDigital',
    content: 'Integrating their R3F models into our platform was seamless. Our user engagement has increased by 40%.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Marcus Thorne',
    role: 'Founder, SpeedConcepts',
    content: 'Unbelievable attention to detail. These are easily the best automotive assets we have ever purchased.',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Client Feedback</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by industry leaders worldwide to deliver high-end automotive visualizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700/50 flex flex-col items-center text-center">
              <div className="flex mb-6 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "{item.content}"
              </p>
              <div className="mt-auto">
                <img src={item.avatar} alt={item.name} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-blue-500/50 p-1" />
                <h4 className="text-white font-bold">{item.name}</h4>
                <p className="text-blue-500 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
