import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side - Visual bit */}
        <div className="flex-1 relative w-full aspect-video rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10" />
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" 
            alt="Premium Automotive Concept" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-white/5 z-20">
            <p className="text-white font-medium italic">"Designing the future of automotive digital experiences."</p>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="flex-1">
          <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Crafting Digital <br /> Excellence Since 2024
          </h2>
          <div className="space-y-6 text-gray-400">
            <p className="text-lg">
              We started with a simple vision: to bridge the gap between physical engineering and digital representation. Today, we are leaders in 3D car visualization.
            </p>
            <p>
              Our team consists of expert 3D artists, technical directors, and software engineers dedicated to pushing the boundaries of what is possible in a web browser.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 pt-10 border-t border-slate-800">
            <div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-500 text-sm">Models Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">99%</div>
              <div className="text-gray-500 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
