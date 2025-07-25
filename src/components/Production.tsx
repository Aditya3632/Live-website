import React from 'react';
import { Factory, Gauge, Award, Truck } from 'lucide-react';

const Production = () => {
  const productionStats = [
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Production Capacity",
      value: "1M+",
      subtitle: "Bricks per month",
      description: "State-of-the-art manufacturing facility with automated production lines"
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Quality Standards",
      value: "99.8%",
      subtitle: "Quality rate",
      description: "Rigorous testing and quality control at every production stage"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certifications",
      value: "ISO 9001",
      subtitle: "Quality certified",
      description: "International quality management system certification"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Delivery Network",
      value: "24/7",
      subtitle: "Logistics support",
      description: "Reliable delivery network covering major metropolitan areas"
    }
  ];

  const brickTypes = [
    {
      name: "Standard Building Bricks",
      specs: "240mm x 115mm x 71mm",
      strength: "20-40 N/mm²",
      applications: "General construction, load-bearing walls",
      image: "https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Engineering Bricks",
      specs: "215mm x 102.5mm x 65mm",
      strength: "50-100 N/mm²",
      applications: "Structural work, foundations, damp-proof courses",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Facing Bricks",
      specs: "215mm x 102.5mm x 65mm",
      strength: "15-30 N/mm²",
      applications: "External walls, architectural features",
      image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Fire Bricks",
      specs: "230mm x 114mm x 64mm",
      strength: "25-35 N/mm²",
      applications: "Furnaces, kilns, fireplace construction",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="production" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Production Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced manufacturing processes and premium materials ensure superior quality bricks for all construction needs
          </p>
        </div>

        {/* Production Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {productionStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mx-auto mb-4">
                <div className="text-orange-600">{stat.icon}</div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-orange-600 mb-2">{stat.subtitle}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Production Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Production Process</h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Raw Material Selection</h4>
                  <p className="text-gray-600">Premium clay and additives carefully selected and tested for optimal quality.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Mixing & Molding</h4>
                  <p className="text-gray-600">Automated mixing systems ensure consistent composition and precise molding.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Drying & Firing</h4>
                  <p className="text-gray-600">Controlled drying and high-temperature firing for maximum strength and durability.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Control</h4>
                  <p className="text-gray-600">Rigorous testing and inspection before packaging and delivery.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/162557/architecture-building-amsterdam-blue-162557.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Production facility"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Brick Types */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Brick Products</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brickTypes.map((brick, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={brick.image}
                  alt={brick.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-bold text-gray-900 mb-2">{brick.name}</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Dimensions: </span>
                    <span className="text-gray-600">{brick.specs}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Strength: </span>
                    <span className="text-gray-600">{brick.strength}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Applications: </span>
                    <span className="text-gray-600">{brick.applications}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;