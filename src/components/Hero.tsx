import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';
import Logo from '../assets/logo.png'
const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-300 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-pink-300 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-pink-400 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-200 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-200 rounded-full animate-float-delayed"></div>
        
        {/* Decorative stars */}
        <Star className="absolute top-16 right-16 w-6 h-6 text-pink-300 animate-pulse" />
        <Star className="absolute bottom-16 left-16 w-4 h-4 text-purple-300 animate-pulse" />
        <Star className="absolute top-1/2 right-10 w-5 h-5 text-pink-200 animate-pulse" />
      </div>

      <div className="container mt-9 px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fadeInUp">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-500 mb-6">
      
              <img src={Logo} alt="Logo" className='w-32 h-32'/>
               
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp animation-delay-200">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              AyosPunch
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6 animate-fadeInUp animation-delay-300">
            <Star className="w-5 h-5 text-pink-400 fill-current" />
            <p className="text-sl md:text-2xl text-gray-700">
              Handcrafted with <Heart className="inline w-6 h-6 text-pink-500 animate-pulse" /> Made with Love
            </p>
            <Star className="w-5 h-5 text-purple-400 fill-current" />
          </div>
          
          <p className="text-sl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-600">
            Discover beautiful, handmade punch needle creations that bring warmth and personality to your space. 
            Each piece is carefully crafted with attention to detail and love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-800">
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              View Gallery
            </button>
            <button 
              onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transform transition-all duration-300 hover:scale-105"
            >
               Start Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;