import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Play, Pause, ShoppingBag, Star } from 'lucide-react';

// Import all images
import img3 from './assets/3.webp';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img8 from './assets/8.jpg';
import img9 from './assets/9.jpg';
import img10 from './assets/10.jpg';
import img11 from './assets/11.jpg';
import img12 from './assets/12.jpg';
import img13 from './assets/13.webp';
import img14 from './assets/14.webp';
import img15 from './assets/15.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Gallery items with imported images
  const galleryImages = [
    // Carousel images (1-5)
    {
      src: img14,
      alt: "Colorful punch needle wall art",
      price: "2500 DA",
      category: "Wall Art"
    },
    {
      src: img9,
      alt: "Handmade textile art",
      price: "3200 DA",
      category: "Textile Art"
    },
    {
      src: img3,
      alt: "Punch needle flowers",
      price: "1800 DA",
      category: "Flowers"
    },
    {
      src: img12,
      alt: "Embroidery hoop art",
      price: "2200 DA",
      category: "Hoop Art"
    },
    {
      src: img5,
      alt: "Handcrafted decorations",
      price: "2800 DA",
      category: "Decorations"
    },
    // Grid images (6-15)
    {
      src: img6,
      alt: "Punch needle patterns",
      price: "3500 DA",
      category: "Custom Patterns"
    },
    {
      src: img7,
      alt: "Custom designs",
      price: "4000 DA",
      category: "Custom Design"
    },
    {
      src: img8,
      alt: "Beautiful crafts",
      price: "2600 DA",
      category: "Crafts"
    },
    {
      src: img9,
      alt: "Mini punch needle art",
      price: "1500 DA",
      category: "Mini Art"
    },
    {
      src: img10,
      alt: "Large wall piece",
      price: "5500 DA",
      category: "Large Pieces"
    },
    {
      src: img11,
      alt: "Cute animal design",
      price: "2100 DA",
      category: "Animals"
    },
    {
      src: img12,
      alt: "Personalized gift",
      price: "3800 DA",
      category: "Personalized"
    },
    {
      src: img13,
      alt: "Punch needle wall hanging",
      price: "3000 DA",
      category: "Wall Art"
    },
    {
      src: img14,
      alt: "Textile decoration",
      price: "2700 DA",
      category: "Decorations"
    },
    {
      src: img15,
      alt: "Custom hoop art",
      price: "3300 DA",
      category: "Hoop Art"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 5); // Limit to first 5 images for carousel
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 5); // Limit to first 5 images for carousel
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 4 : prev - 1)); // Limit to first 5 images for carousel
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of handmade punch needle creations. Each piece tells a story and brings joy to any space.
          </p>
        </div>
       
       
        {/* Grid Gallery - Smaller Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {galleryImages.slice(0).map((image, index) => (
            <div 
              key={index + 5}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square  flex items-center justify-center p-2">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 rounded-lg"
                />
              </div>
              
              {/* Price overlay */}
              <div className="absolute top-2 right-2 bg-white/95 text-purple-600 px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                {image.price}
              </div>
              
              {/* Category badge */}
              <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>
              
              {/* Bottom info overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-3 text-white w-full">
                  <p className="font-medium text-sm mb-1">{image.alt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200 text-xs">{image.category}</span>
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Price Range Info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg max-w-2xl mx-auto border-2 border-purple-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Price Range</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h4 className="font-semibold text-purple-600 mb-2">Small Items</h4>
                <p className="text-2xl font-bold text-gray-800">1500 - 2500 DA</p>
                <p className="text-gray-600 text-sm">Mini art, simple designs</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h4 className="font-semibold text-pink-600 mb-2">Medium Items</h4>
                <p className="text-2xl font-bold text-gray-800">2500 - 4000 DA</p>
                <p className="text-gray-600 text-sm">Wall art, decorations</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h4 className="font-semibold text-purple-600 mb-2">Large Items</h4>
                <p className="text-2xl font-bold text-gray-800">4000+ DA</p>
                <p className="text-gray-600 text-sm">Custom, large pieces</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Prices may vary based on size, complexity, and customization. Contact us for exact quotes!
            </p>
          </div>
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-pink-300 transition-colors duration-300 z-10 bg-black/50 rounded-full p-2"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 transition-colors duration-300 z-10 bg-black/50 rounded-full p-2"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 transition-colors duration-300 z-10 bg-black/50 rounded-full p-2"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              
              <img 
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="bg-black/70 rounded-xl px-6 py-4 inline-block">
                  <p className="text-white text-lg font-medium mb-2">{galleryImages[selectedImage].alt}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <span className="text-purple-300">{galleryImages[selectedImage].category}</span>
                    <span className="text-pink-300 font-semibold">{galleryImages[selectedImage].price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;