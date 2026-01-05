import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d2d2d] text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">a</span>
              <span className="text-white">l</span>
              <span className="text-[#34a18f]">x</span>
            </div>
            <p className="text-sm leading-relaxed">
              ALX is a platform where travelers can discover and book unique, comfortable, and 
              affordable lodging options worldwide. From cozy city apartments and tranquil 
              countryside retreats to exotic beachside villas, ALX connects you with the perfect 
              place to stay for any trip.
            </p>
          </div>

          {/* Explore */}
          <div className=''>
            <h3 className="text-white font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-white transition">
                  Apartments in Dubai
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition">
                  Hotels in New York
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition">
                  Villa in Spain
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition">
                  Mansion in Indonesia
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-white transition">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition">
                  Brand
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Help</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-white transition">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition">
                  Cancel booking
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition">
                  Refunds Process
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              Some hotel requires you to cancel more than 24 hours before check-in. Details{' '}
              <a href="#" className="text-[#34a18f] hover:underline">
                here
              </a>
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Policy service
              </a>
              <a href="#" className="hover:text-white transition">
                Cookies Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Partners
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;