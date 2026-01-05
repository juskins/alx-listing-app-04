import React from 'react';
import { Search } from 'lucide-react';

const Header: React.FC = () => {
   return (
      <header className="w-full">
         {/* Top Banner */}
         <div className="bg-[#34a18f] text-white py-3 px-6 flex items-center justify-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">Overseas trip? Get the latest information on travel guides</span>
            <button className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-900 transition">
               More Info
            </button>
         </div>

         {/* Main Header */}
         <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 py-4">
               <div className="flex items-center justify-between gap-8">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                     <div className="text-3xl font-bold">
                        <span className="text-black">a</span>
                        <span className="text-black">l</span>
                        <span className="text-[#34a18f]">x</span>
                     </div>
                  </div>

                  {/* Search Section */}
                  <div className="flex-1 flex items-center gap-4 max-w-3xl">
                     {/* Location */}
                     <div className="flex-1 min-w-0">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Location</label>
                        <input 
                           type="text" 
                           placeholder="Search for destination"
                           className="w-full text-sm text-gray-500 focus:outline-none"
                        />
                     </div>

                     {/* Check in */}
                     <div className="flex-1 min-w-0 border-l pl-4">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Check in</label>
                        <input 
                           type="text" 
                           placeholder="Add date"
                           className="w-full text-sm text-gray-400 focus:outline-none"
                        />
                     </div>

                     {/* Check out */}
                     <div className="flex-1 min-w-0 border-l pl-4">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Check out</label>
                        <input 
                           type="text" 
                           placeholder="Add date"
                           className="w-full text-sm text-gray-400 focus:outline-none"
                        />
                     </div>

                     {/* People */}
                     <div className="flex-1 min-w-0 border-l pl-4">
                        <label className="block text-xs font-medium text-gray-700 mb-1">People</label>
                        <input 
                           type="text" 
                           placeholder="Add guest"
                           className="w-full text-sm text-gray-400 focus:outline-none"
                        />
                     </div>

                     {/* Search Button */}
                     <button className="bg-[#f5a623] hover:bg-[#e69715] p-3 rounded-full transition flex-shrink-0">
                        <Search className="w-5 h-5 text-white" />
                     </button>
                  </div>

                  {/* Auth Buttons */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                     <button className="bg-[#34a18f] hover:bg-[#2d8a7a] text-white px-6 py-2 rounded-full text-sm font-medium transition">
                        Sign in
                     </button>
                     <button className="text-black hover:text-gray-700 px-6 py-2 text-sm font-medium transition">
                        Sign up
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* Category Filters */}
         <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 py-4">
               <div className="flex items-center gap-8 overflow-x-auto hide-scrollbar px-2">
                  <style>{`
                     .hide-scrollbar {
                        -ms-overflow-style: none; /* IE and Edge */
                        scrollbar-width: none; /* Firefox */
                     }
                     .hide-scrollbar::-webkit-scrollbar {
                        display: none; /* Chrome, Safari, Opera */
                     }
                  `}</style>

                  {[
                      { icon: '🏠', label: 'Rooms' },
                      { icon: '🏛️', label: 'Mansion' },
                      { icon: '🏞️', label: 'Countryside' },
                      { icon: '🏰', label: 'Villa' },
                      { icon: '🌴', label: 'Tropical' },
                      { icon: '✨', label: 'New' },
                      { icon: '🏊', label: 'Amazing pool' },
                      { icon: '🏖️', label: 'Beach house' },
                      { icon: '🏝️', label: 'Island' },
                      { icon: '⛺', label: 'Camping' },
                      { icon: '🏢', label: 'Apartment' },
                      { icon: '🏡', label: 'House' },
                      { icon: '🚤', label: 'Lakefront' },
                      { icon: '🏚️', label: 'Farm house' },
                      { icon: '🌲', label: 'Treehouse' },
                      { icon: '🛖', label: 'Cabins' },
                      { icon: '🏰', label: 'Castles' },
                  ].map((category) => (
                      <button
                           key={category.label}
                           className="flex flex-col items-center gap-2 min-w-fit hover:text-[#34a18f] transition group"
                      >
                           <span className="text-2xl grayscale group-hover:grayscale-0 transition">{category.icon}</span>
                           <span className="text-xs text-gray-600 group-hover:text-[#34a18f] whitespace-nowrap">{category.label}</span>
                      </button>
                  ))}
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;