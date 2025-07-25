import React from 'react';
import { CheckCircle, Clock, Shield, Users, FileText, Calculator } from 'lucide-react';

const Contracts = () => {
  const contractTypes = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Construction Contracts",
      description: "Comprehensive construction agreements covering all aspects of building projects from planning to completion.",
      features: ["Project Planning", "Timeline Management", "Budget Control", "Quality Assurance"],
      duration: "3-24 months",
      coverage: "Full project lifecycle"
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Supply Contracts",
      description: "Reliable brick supply agreements ensuring consistent material availability for your projects.",
      features: ["Bulk Pricing", "Scheduled Delivery", "Quality Guarantee", "Flexible Terms"],
      duration: "6-36 months",
      coverage: "Material supply chain"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Maintenance Contracts",
      description: "Long-term maintenance agreements to keep your structures in optimal condition year-round.",
      features: ["Regular Inspections", "Preventive Care", "Emergency Response", "Performance Monitoring"],
      duration: "12-60 months",
      coverage: "Ongoing maintenance"
    }
  ];

  const contractBenefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Full Insurance Coverage",
      description: "Comprehensive insurance protection for all project phases and potential risks."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Guaranteed Timelines",
      description: "Committed delivery schedules with penalty clauses for delays on our part."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Written quality guarantees with performance bonds and warranty coverage."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Dedicated Support",
      description: "Assigned project managers and 24/7 customer support throughout the contract."
    }
  ];

  return (
    <section id="contracts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contract Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional contract management services ensuring transparent, efficient, and reliable project execution from start to finish
          </p>
        </div>

        {/* Contract Types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {contractTypes.map((contract, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6">
                <div className="text-orange-600">{contract.icon}</div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{contract.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{contract.description}</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Duration:</span>
                  <span className="text-gray-600">{contract.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Coverage:</span>
                  <span className="text-gray-600">{contract.coverage}</span>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {contract.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Get Quote
              </button>
            </div>
          ))}
        </div>

        {/* Contract Benefits */}
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Contracts?</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contractBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4">
                  <div className="text-orange-600">{benefit.icon}</div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-8 opacity-90">
              Get a customized contract proposal tailored to your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Proposal
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contracts;