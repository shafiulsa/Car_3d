import React from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Left Side - Info */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-400 text-lg mb-12">
            Ready to start your next 3D project? Reach out to us for custom quotes or technical inquiries.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Email Us</h4>
                <p className="text-gray-400 text-sm">contact@car3d.dev</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Call Us</h4>
                <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Visit Us</h4>
                <p className="text-gray-400 text-sm">123 Tech Avenue, Silicon Valley, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 bg-slate-800/30 p-8 md:p-12 rounded-3xl border border-slate-700/50">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">First Name</label>
                <input type="text" placeholder="John" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Message</label>
              <textarea rows="4" placeholder="How can we help you?" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
            </div>
            <button className="w-full btn-primary flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
