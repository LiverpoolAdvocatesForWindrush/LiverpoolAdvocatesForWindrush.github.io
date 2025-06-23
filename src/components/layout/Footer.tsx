import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-500 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-yellow-500 font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-yellow-500" />
                +44 (0) 7902 157059
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-yellow-500" />
                info@liverpooladvocatesforwindrush.org
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                151 Dale Street, Liverpool L2 2AH
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-yellow-500 font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                  About Us
              </li>
              <li>
                 Privacy Policy
              </li>      
              <li>
                  Terms of Service
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-yellow-500 font-semibold text-lg mb-4">Follow Us</h3>
            <p className="text-sm">
              Stay updated with the latest news and updates about the Windrush scheme.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Windrush Support. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};