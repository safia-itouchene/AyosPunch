import React, { useState, useMemo } from 'react';
import { Truck, Clock, Shield, MapPin, Search, Package, Star } from 'lucide-react';

const DeliveryPricing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWilaya, setSelectedWilaya] = useState('');

  const allWilayas = [
    { code: "01", name: "Adrar", price: "800 DA", days: "4-5 days" },
    { code: "02", name: "Chlef", price: "600 DA", days: "3-4 days" },
    { code: "03", name: "Laghouat", price: "650 DA", days: "3-4 days" },
    { code: "04", name: "Oum El Bouaghi", price: "600 DA", days: "3-4 days" },
    { code: "05", name: "Batna", price: "600 DA", days: "3-4 days" },
    { code: "06", name: "Béjaïa", price: "550 DA", days: "2-3 days" },
    { code: "07", name: "Biskra", price: "650 DA", days: "3-4 days" },
    { code: "08", name: "Béchar", price: "800 DA", days: "4-5 days" },
    { code: "09", name: "Blida", price: "450 DA", days: "1-2 days" },
    { code: "10", name: "Bouira", price: "500 DA", days: "2-3 days" },
    { code: "11", name: "Tamanrasset", price: "1000 DA", days: "5-6 days" },
    { code: "12", name: "Tébessa", price: "650 DA", days: "3-4 days" },
    { code: "13", name: "Tlemcen", price: "650 DA", days: "3-4 days" },
    { code: "14", name: "Tiaret", price: "600 DA", days: "3-4 days" },
    { code: "15", name: "Tizi Ouzou", price: "500 DA", days: "2-3 days" },
    { code: "16", name: "Algiers", price: "400 DA", days: "1-2 days" },
    { code: "17", name: "Djelfa", price: "550 DA", days: "2-3 days" },
    { code: "18", name: "Jijel", price: "550 DA", days: "2-3 days" },
    { code: "19", name: "Sétif", price: "550 DA", days: "2-3 days" },
    { code: "20", name: "Saïda", price: "650 DA", days: "3-4 days" },
    { code: "21", name: "Skikda", price: "550 DA", days: "2-3 days" },
    { code: "22", name: "Sidi Bel Abbès", price: "600 DA", days: "3-4 days" },
    { code: "23", name: "Annaba", price: "600 DA", days: "3-4 days" },
    { code: "24", name: "Guelma", price: "600 DA", days: "3-4 days" },
    { code: "25", name: "Constantine", price: "500 DA", days: "2-3 days" },
    { code: "26", name: "Médéa", price: "500 DA", days: "2-3 days" },
    { code: "27", name: "Mostaganem", price: "600 DA", days: "3-4 days" },
    { code: "28", name: "M'Sila", price: "600 DA", days: "3-4 days" },
    { code: "29", name: "Mascara", price: "600 DA", days: "3-4 days" },
    { code: "30", name: "Ouargla", price: "700 DA", days: "4-5 days" },
    { code: "31", name: "Oran", price: "500 DA", days: "2-3 days" },
    { code: "32", name: "El Bayadh", price: "700 DA", days: "4-5 days" },
    { code: "33", name: "Illizi", price: "900 DA", days: "5-6 days" },
    { code: "34", name: "Bordj Bou Arréridj", price: "550 DA", days: "2-3 days" },
    { code: "35", name: "Boumerdès", price: "450 DA", days: "1-2 days" },
    { code: "36", name: "El Tarf", price: "650 DA", days: "3-4 days" },
    { code: "37", name: "Tindouf", price: "900 DA", days: "5-6 days" },
    { code: "38", name: "Tissemsilt", price: "600 DA", days: "3-4 days" },
    { code: "39", name: "El Oued", price: "700 DA", days: "4-5 days" },
    { code: "40", name: "Khenchela", price: "650 DA", days: "3-4 days" },
    { code: "41", name: "Souk Ahras", price: "650 DA", days: "3-4 days" },
    { code: "42", name: "Tipaza", price: "450 DA", days: "1-2 days" },
    { code: "43", name: "Mila", price: "600 DA", days: "3-4 days" },
    { code: "44", name: "Aïn Defla", price: "550 DA", days: "2-3 days" },
    { code: "45", name: "Naâma", price: "750 DA", days: "4-5 days" },
    { code: "46", name: "Aïn Témouchent", price: "600 DA", days: "3-4 days" },
    { code: "47", name: "Ghardaïa", price: "700 DA", days: "4-5 days" },
    { code: "48", name: "Relizane", price: "600 DA", days: "3-4 days" },
    { code: "49", name: "Timimoun", price: "850 DA", days: "4-5 days" },
    { code: "50", name: "Bordj Badji Mokhtar", price: "950 DA", days: "5-6 days" },
    { code: "51", name: "Ouled Djellal", price: "650 DA", days: "3-4 days" },
    { code: "52", name: "Béni Abbès", price: "850 DA", days: "4-5 days" },
    { code: "53", name: "In Salah", price: "900 DA", days: "5-6 days" },
    { code: "54", name: "In Guezzam", price: "950 DA", days: "5-6 days" },
    { code: "55", name: "Touggourt", price: "700 DA", days: "4-5 days" },
    { code: "56", name: "Djanet", price: "950 DA", days: "5-6 days" },
    { code: "57", name: "El M'Ghair", price: "700 DA", days: "4-5 days" },
    { code: "58", name: "El Meniaa", price: "750 DA", days: "4-5 days" }
  ];

  const filteredWilayas = useMemo(() => {
    return allWilayas.filter(wilaya =>
      wilaya.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wilaya.code.includes(searchTerm)
    );
  }, [searchTerm]);

  const selectedWilayaData = allWilayas.find(w => w.name === selectedWilaya);

  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery across all 58 wilayas of Algeria"
    },
    {
      icon: Shield,
      title: "Secure Packaging",
      description: "Your items are carefully packaged with love to ensure safe arrival"
    },
    {
      icon: Clock,
      title: "Tracking Available",
      description: "Track your order from dispatch to delivery with Zexpress"
    }
  ];

  return (
    <section id="delivery" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-300 rounded-full animate-float opacity-30"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-pink-300 rounded-full animate-float-delayed opacity-30"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-purple-400 rounded-full animate-float opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-pink-400 rounded-full animate-float-delayed opacity-30"></div>
        <Star className="absolute top-16 right-16 w-6 h-6 text-pink-300 animate-pulse opacity-30" />
        <Star className="absolute bottom-16 left-16 w-4 h-4 text-purple-300 animate-pulse opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl leading-normal md:text-5xl font-bold mb-10 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Delivery & Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver nationwide using Zexpress to all 58 wilayas! Check our delivery prices and estimated delivery times.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all duration-300 animate-fadeInUp border-2 border-purple-100 hover:border-purple-200"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Search and Select Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl mb-8 border-2 border-purple-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 right-4 w-2 h-2 bg-purple-300 rounded-full animate-float opacity-40"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-pink-300 rounded-full animate-float-delayed opacity-40"></div>
            <Star className="absolute top-6 left-6 w-3 h-3 text-purple-300 animate-pulse opacity-40" />
          </div>

          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 flex items-center justify-center gap-3">
            <MapPin className="w-6 h-6 text-purple-600" />
            Find Your Wilaya to View Delivery Prices
          </h3>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <select
                value={selectedWilaya}
                onChange={(e) => setSelectedWilaya(e.target.value)}
                className="w-full p-4 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none text-lg appearance-none bg-white cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <option value="">Select your wilaya...</option>
                {allWilayas.map((wilaya) => (
                  <option key={wilaya.code} value={wilaya.name}>
                    {wilaya.code} - {wilaya.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-500"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Selected Wilaya Display */}
          {selectedWilayaData && (
            <div className="max-w-lg mx-auto animate-fadeInUp">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-100 relative overflow-hidden">
                {/* Background decoration for the card */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 pointer-events-none"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-purple-300 rounded-full animate-float opacity-30"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-pink-300 rounded-full animate-float-delayed opacity-30"></div>
                
                <div className="relative z-10">
                  {/* Header with location icon */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                      {selectedWilayaData.name}
                    </h4>
                   
                  </div>

                  {/* Delivery details grid */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                            <Package className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-lg font-medium text-gray-700">Delivery Price</span>
                        </div>
                        <span className="text-xl font-bold text-purple-600">
                          {selectedWilayaData.price}
                        </span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-lg font-medium text-gray-700">Delivery Time</span>
                        </div>
                        <span className="text-xl font-bold text-pink-600">
                          {selectedWilayaData.days}
                        </span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                            <Truck className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-lg font-medium text-gray-700">Delivery Partner</span>
                        </div>
                        <span className="text-xl font-bold ">
                         <span className='text-yellow-400'>Zed</span>Express
                        </span>
                      </div>
                    </div>
                  </div>

                
                </div>
              </div>
            </div>
          )}

          {/* Call to action when no wilaya selected */}
          {!selectedWilayaData && (
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center">
                <Search className="w-10 h-10 text-purple-600" />
              </div>
              <p className="text-gray-600 text-lg">
                Select your wilaya above to see delivery details
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeliveryPricing;