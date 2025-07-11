import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import Logo from '../assets/logo.png'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center shadow-lg">
               <img src={Logo} alt="Logo" className=''/>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                AyosPunch
              </h1>
              <p className="text-sm text-gray-600">Craft Store</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {['home', 'gallery','order', 'payment', 'delivery'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-purple-600 font-medium capitalize transition-colors duration-300 hover:scale-105 transform"
              >
                {item === 'home' ? 'Home' : item}
              </button>
            ))}
            <a
              href="https://www.instagram.com/ayospunch/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium hover:scale-105 transform transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              Follow Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-purple-100 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {['home', 'gallery', 'testimonials', 'order', 'payment', 'delivery'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-gray-700 hover:text-purple-600 font-medium capitalize py-2 px-4 rounded-lg hover:bg-purple-50 transition-all duration-300"
                >
                  {item === 'home' ? 'Home' : item}
                </button>
              ))}
              <a
                href="https://www.instagram.com/ayospunch/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium hover:scale-105 transform transition-all duration-300 shadow-lg flex items-center gap-2 justify-center mx-4"
              >
                <Instagram className="w-4 h-4" />
                Follow Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;