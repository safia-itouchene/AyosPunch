import React from 'react';
import { CreditCard, Smartphone, MapPin, CheckCircle, Heart } from 'lucide-react';

const PaymentMethods = () => {
  const paymentMethods = [
    {
      icon: CreditCard,
      title: "Bank Transfer",
      description: "Secure bank transfer to our account. Details will be provided after order confirmation with love!",
      features: ["Secure", "Direct", "Reliable"]
    },
    {
      icon: Smartphone,
      title: "Mobile Payment",
      description: "Pay using CCP, Baridimob, or other mobile payment solutions available in Algeria. So convenient!",
      features: ["Quick", "Convenient", "Mobile-friendly"]
    },
    {
      icon: MapPin,
      title: "Cash on Delivery",
      description: "Pay when you receive your beautiful creation! Available for most locations across Algeria.",
      features: ["No advance payment", "Secure", "Trusted"]
    }
  ];

  return (
    <section id="payment" className="py-10 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Payment Methods
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer flexible payment options to make your purchase convenient and secure. Choose what works best for you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {paymentMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fadeInUp border-2 border-purple-100 hover:border-purple-200"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{method.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{method.description}</p>
                </div>

                <div className="space-y-3">
                  {method.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border-2 border-purple-100">
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800 flex items-center justify-center gap-2">
            Payment Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center border-2 border-purple-200">
                <span className="text-purple-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-800">Order Confirmation</h4>
              <p className="text-gray-600 text-sm">We'll confirm your order details and provide total cost with a summary!</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 mx-auto bg-pink-100 rounded-full flex items-center justify-center border-2 border-pink-200">
                <span className="text-pink-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-800">Choose Payment</h4>
              <p className="text-gray-600 text-sm">Select your preferred payment method from the options above. All are secure!</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center border-2 border-purple-200">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-800">Start Crafting</h4>
              <p className="text-gray-600 text-sm">Once payment is confirmed, we begin creating your piece with lots of love!</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto border-2 border-pink-100">
            <Heart className="w-8 h-8 text-pink-500 mx-auto mb-3 animate-pulse" />
            <h4 className="font-semibold text-gray-800 mb-2">Payment Tip</h4>
            <p className="text-gray-600 text-sm">
              All payments are processed securely and we'll send you updates throughout the process!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;