import React from 'react';
import { Building2, Truck, FileText, Wrench, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Construction Services",
      description: "Complete construction solutions from residential to commercial projects with expert craftsmanship.",
      features: ["Residential Construction", "Commercial Buildings", "Renovation Projects", "Architectural Support"]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Brick Production",
      description: "State-of-the-art brick manufacturing with premium quality materials and precise specifications.",
      features: ["Premium Quality Bricks", "Custom Specifications", "Bulk Production", "Quality Assurance"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Contract Management",
      description: "Professional contract services ensuring transparent, efficient, and reliable project execution.",
      features: ["Project Planning", "Timeline Management", "Budget Control", "Quality Monitoring"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance services to keep your structures in perfect condition year-round.",
      features: ["Regular Inspections", "Preventive Maintenance", "Emergency Repairs", "Structural Upgrades"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring every project meets the highest industry standards.",
      features: ["Material Testing", "Safety Compliance", "Performance Monitoring", "Warranty Support"]
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your construction and production needs.",
      features: ["Emergency Response", "Technical Support", "Project Consultation", "Customer Service"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction and production services tailored to meet your specific project requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6 group-hover:bg-orange-600 transition-colors">
                <div className="text-orange-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;