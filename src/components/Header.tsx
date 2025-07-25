import React, { useState } from 'react';
import { Menu, X, Hammer, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Hammer className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">BrickCraft</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Services</a>
            <a href="#projects" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Projects</a>
            <a href="#production" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Production</a>
            <a href="#contracts" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contracts</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Mail className="h-4 w-4" />
              <span>info@brickcraft.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-orange-600 py-2 px-3 rounded-md transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 py-2 px-3 rounded-md transition-colors">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-orange-600 py-2 px-3 rounded-md transition-colors">Projects</a>
              <a href="#production" className="text-gray-700 hover:text-orange-600 py-2 px-3 rounded-md transition-colors">Production</a>
              <a href="#contracts" className="text-gray-700 hover:text-orange-600 py-2 px-3 rounded-md transition-colors">Contracts</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 py-2 px-3 rounded-md transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;