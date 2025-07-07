import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Zap, Heart, Palette, X, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Works', icon: <Eye className="h-4 w-4" /> },
    { id: 'interactive', name: 'Interactive Art', icon: <Zap className="h-4 w-4" /> },
    { id: 'resin', name: 'Resin Creations', icon: <Palette className="h-4 w-4" /> },
    { id: 'smart', name: 'Smart Decor', icon: <Heart className="h-4 w-4" /> }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'interactive',
      title: 'Motion-Responsive Wall Art',
      description: 'LED-embedded resin installation that responds to movement and touch',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
      featured: true
    },
    {
      id: 2,
      category: 'resin',
      title: 'Ocean Memory Capsule',
      description: 'Handcrafted resin piece preserving beach memories with embedded shells',
      image: 'https://images.unsplash.com/photo-1632237405949-50d7c6fa975d',
      featured: false
    },
    {
      id: 3,
      category: 'smart',
      title: 'Smart Nightlight Collection',
      description: 'Color-changing resin lamps with app connectivity',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9',
      featured: true
    },
    {
      id: 4,
      category: 'interactive',
      title: 'Sound-Reactive Sculpture',
      description: 'Resin art that visualizes music through embedded LEDs',
      image: 'https://images.unsplash.com/photo-1662353535661-202681bc2247',
      featured: false
    },
    {
      id: 5,
      category: 'resin',
      title: 'Botanical Preservation Series',
      description: 'Real flowers and leaves preserved in crystal-clear resin',
      image: 'https://images.unsplash.com/photo-1653669486992-66a21d74d716',
      featured: false
    },
    {
      id: 6,
      category: 'smart',
      title: 'NFC-Enabled Photo Frame',
      description: 'Touch to share memories instantly via NFC technology',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
      featured: true
    },
    {
      id: 7,
      category: 'interactive',
      title: 'Biometric Art Installation',
      description: 'Art that changes based on viewer\'s heartbeat and emotions',
      image: 'https://images.unsplash.com/photo-1703158008829-28d3ca94cee8',
      featured: false
    },
    {
      id: 8,
      category: 'resin',
      title: 'Galaxy Resin Coasters',
      description: 'Cosmic-inspired resin coasters with metallic accents',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      featured: false
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/30 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our collection of createch masterpieces where art meets technology
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-black"
                    : "border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black"
                } rounded-full px-4 py-2 transition-all duration-300`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-effect rounded-xl overflow-hidden hover-lift group cursor-pointer ${
                  item.featured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => handleImageClick(item)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      item.featured ? 'h-80 md:h-96' : 'h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Eye className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-white mb-4">
              Want to See More?
            </h3>
            <p className="text-gray-300 mb-6">
              Visit our experience center to interact with these creations in person, or explore our full portfolio online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold px-6 py-3 rounded-full">
                <Play className="mr-2 h-4 w-4" />
                Experience Center
              </Button>
              <Button 
                variant="outline" 
                className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black px-6 py-3 rounded-full"
              >
                View Full Portfolio
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Modal for Image Preview */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-96 object-cover"
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-playfair font-bold text-white mb-4">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {selectedImage.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-black rounded-full text-sm font-semibold capitalize">
                      {selectedImage.category}
                    </span>
                    {selectedImage.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold">
                        Featured Work
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;