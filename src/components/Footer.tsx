import React from 'react';
import { Instagram, Heart, Mail, Phone, Star } from 'lucide-react';
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-500 to-pink-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center shadow-lg">
                <img src={Logo} alt="Logo" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">AyosPunch</h3>
                <p className="text-purple-200">Craft Store</p>
              </div>
            </div>
            <p className="text-purple-100 leading-relaxed mb-6">
              Handcrafted punch needle art made with love and attention to detail. 
              Bringing warmth and personality to your space, one stitch at a time.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-pink-200">
              <Heart className="w-4 h-4 animate-pulse" />
              <span className="text-sm">Made with love in Algeria</span>
              <Star className="w-4 h-4 animate-pulse" />
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/ayospunch/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-purple-100 hover:text-white transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                @ayospunch
              </a>
              <div className="flex items-center justify-center gap-3 text-purple-100">
                <Mail className="w-5 h-5" />
                Contact via Instagram DM
              </div>
              <div className="flex items-center justify-center gap-3 text-purple-100">
                <Phone className="w-5 h-5" />
                WhatsApp available
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-6 text-center">Quick Links</h4>
            <div className="grid space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'How to Order', id: 'order' },
                { name: 'Payment Methods', id: 'payment' },
                { name: 'Delivery Info', id: 'delivery' }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-purple-100 hover:text-white transition-colors duration-300 hover:scale-105 transform"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-4 h-4 text-pink-400 animate-pulse" />
            <Star className="w-4 h-4 text-purple-400 animate-pulse" />
            <Star className="w-4 h-4 text-pink-400 animate-pulse" />
          </div>
          <p className="text-purple-200 text-sm">
            © 2024 AyosPunch Craft Store. All rights reserved. Made with{' '}
            <Heart className="inline w-4 h-4 text-pink-400 animate-pulse" /> for handmade art lovers.
          </p>
          <p className="text-purple-300 text-xs mt-2">
            Spreading joy through handmade creations across Algeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;