import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Office Complex",
      location: "Downtown Business District",
      completion: "2024",
      image: "https://images.pexels.com/photos/442574/pexels-photo-442574.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "50-story commercial building with sustainable brick facade and modern amenities.",
      category: "Commercial"
    },
    {
      id: 2,
      title: "Luxury Residential Estate",
      location: "Riverside Heights",
      completion: "2023",
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Premium residential development featuring custom brick work and architectural excellence.",
      category: "Residential"
    },
    {
      id: 3,
      title: "Educational Campus",
      location: "University District",
      completion: "2023",
      image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "State-of-the-art educational facility with traditional brick architecture and modern functionality.",
      category: "Educational"
    },
    {
      id: 4,
      title: "Industrial Manufacturing Plant",
      location: "Industrial Zone",
      completion: "2024",
      image: "https://images.pexels.com/photos/236381/pexels-photo-236381.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Large-scale manufacturing facility with specialized brick construction for durability.",
      category: "Industrial"
    },
    {
      id: 5,
      title: "Heritage Restoration Project",
      location: "Historic District",
      completion: "2023",
      image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Careful restoration of century-old building using traditional brick craftsmanship.",
      category: "Restoration"
    },
    {
      id: 6,
      title: "Shopping Center Development",
      location: "City Center",
      completion: "2024",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Contemporary retail complex with innovative brick design and sustainable features.",
      category: "Retail"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects showcasing our expertise in brick building and construction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    Completed in {project.completion}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;