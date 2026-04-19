import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <a href="#" className="text-2xl font-bold text-white tracking-tighter mb-6 block">
            CAR<span className="text-blue-500">3D</span>
          </a>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Leading the way in high-fidelity 3D automotive visualization. High-poly models, real-time performance, and premium design.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
              <Github size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Press Kit</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#services" className="hover:text-blue-500 transition-colors">3D Modeling</a></li>
            <li><a href="#services" className="hover:text-blue-500 transition-colors">Custom Rendering</a></li>
            <li><a href="#services" className="hover:text-blue-500 transition-colors">VR/AR Apps</a></li>
            <li><a href="#services" className="hover:text-blue-500 transition-colors">Digital Twins</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-gray-500 text-sm mb-6">Subscribe to get the latest updates on new models and tech breakthroughs.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Email address" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 flex-1" />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-4">
        <p className="text-gray-600 text-xs">© 2024 CAR3D Inc. All rights reserved.</p>
        <div className="flex gap-8 text-xs text-gray-600">
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
