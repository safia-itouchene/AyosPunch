import React from 'react';
import { MessageCircle, Palette, Package, Heart, Instagram } from 'lucide-react';

const OrderProcess = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Contact Us",
      description: "Send us a message on Instagram @ayospunch or WhatsApp with your idea or design preference. We love hearing your creative ideas!",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "Design Discussion",
      description: "We'll discuss colors, size, patterns, and any custom requirements to make your vision come to life. Every detail matters!",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Package,
      title: "Crafting & Creation",
      description: "Your piece will be carefully handcrafted with love and attention to detail. We'll keep you updated on progress with photos!",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Delivery",
      description: "Your beautiful punch needle creation will be carefully packaged with extra love and delivered to your doorstep!",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="order" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            How to Order
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting your custom punch needle art is easy and fun! Follow these simple steps to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="text-center group animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
               
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 h-full hover:shadow-lg transition-shadow duration-300 border-2 border-purple-100 hover:border-purple-200">
                
                   <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white`}>
                     <IconComponent className="w-10 h-10 text-white" />
                   </div>
                  
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
};

export default OrderProcess;