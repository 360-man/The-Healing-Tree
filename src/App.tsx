import React from 'react';
import { 
  Leaf, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  Star,
  ShoppingCart,
  ChevronRight
} from 'lucide-react';

const products = [
  {
    name: "Organic Elderberry Syrup",
    description: "Immune system support with natural antioxidants",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1612778992781-44f08fc3f967?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Premium Ashwagandha",
    description: "Stress relief and adaptogenic support",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Golden Turmeric Blend",
    description: "Anti-inflammatory and joint support",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Essential Wellness Kit",
    description: "Complete holistic health starter pack",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1624453962832-f343d8e22b8a?auto=format&fit=crop&q=80&w=400"
  }
];

const testimonials = [
  {
    text: "The Healing Tree has transformed my health! Their staff is knowledgeable, and their products are high-quality.",
    author: "Sarah J.",
    rating: 5
  },
  {
    text: "Finally found a natural wellness store that truly cares about their customers. Amazing selection and service!",
    author: "Michael R.",
    rating: 5
  },
  {
    text: "Their herbal remedies have made such a difference in my life. So grateful for their expertise!",
    author: "Emma L.",
    rating: 5
  }
];

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-700">
        <nav className="absolute w-full py-6 px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-400" />
            <span className="ml-2 text-2xl font-semibold text-white">The Healing Tree</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#about" className="hover:text-green-400 transition">About</a>
            <a href="#products" className="hover:text-green-400 transition">Shop</a>
            <a href="#testimonials" className="hover:text-green-400 transition">Testimonials</a>
            <a href="#contact" className="hover:text-green-400 transition">Contact</a>
          </div>
        </nav>

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Source for Natural Wellness & Holistic Health
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Premium Supplements, Herbal Remedies & Expert Guidance for a Healthier You
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-400 transition">
                Shop Now
              </button>
              <button className="bg-white text-green-800 px-8 py-3 rounded-full hover:bg-green-50 transition">
                Visit Us
              </button>
            </div>
            <div className="mt-12 text-green-200 text-sm flex justify-center space-x-8">
              <span>Locally Owned</span>
              <span>•</span>
              <span>Organic & Natural</span>
              <span>•</span>
              <span>Trusted Since 2010</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-16">
            Why Choose The Healing Tree?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80"
                alt="Wellness lifestyle"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Healing begins from within. At The Healing Tree, we believe in harnessing nature's power
                to support your health journey. Our carefully curated selection of natural and organic
                supplements is backed by science and tradition.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We work closely with local suppliers and leading wellness experts to bring you the highest
                quality products for your holistic health needs.
              </p>
              <button className="flex items-center text-green-700 hover:text-green-800 transition">
                Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-16">
            Shop Our Best-Selling Natural Supplements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700 font-bold">{product.price}</span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition flex items-center">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-16">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="text-green-700 font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Store Section */}
      <section id="contact" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-8">
                Come See Us in Person!
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Experience the healing power of nature firsthand. Our friendly team is here
                to guide you on your wellness journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-green-600 mr-4" />
                  <span>123 Wellness Street, Natural City, NC 12345</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-green-600 mr-4" />
                  <span>Mon-Sat: 9AM-7PM | Sun: 10AM-5PM</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-green-600 mr-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-green-600 mr-4" />
                  <span>hello@thehealingtree.com</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-6">
                Get Exclusive Deals & Wellness Tips
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your email"
                  />
                </div>
                <button className="w-full bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
                  Subscribe & Get 10% Off
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <span className="ml-2 text-xl font-semibold">The Healing Tree</span>
              </div>
              <p className="text-green-200">
                Your trusted source for natural wellness and holistic health solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition">Home</a></li>
                <li><a href="#about" className="text-green-200 hover:text-white transition">About</a></li>
                <li><a href="#products" className="text-green-200 hover:text-white transition">Shop</a></li>
                <li><a href="#contact" className="text-green-200 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-green-200 hover:text-white transition">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-green-200 hover:text-white transition">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-green-200 hover:text-white transition">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">We Accept</h4>
              <div className="flex space-x-2">
                <span className="bg-white text-green-800 px-2 py-1 rounded text-sm">Visa</span>
                <span className="bg-white text-green-800 px-2 py-1 rounded text-sm">Mastercard</span>
                <span className="bg-white text-green-800 px-2 py-1 rounded text-sm">PayPal</span>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>© 2024 The Healing Tree. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;