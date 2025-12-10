import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
               {/* Logo placeholder */}
               <div className="w-10 h-10 bg-nuoiem-yellow rounded-full flex items-center justify-center text-white font-bold text-xl">
                 NE
               </div>
               <span className="font-handwriting text-2xl text-nuoiem-red font-bold hidden md:block">Nuôi ANH TUẤN</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-nuoiem-red font-semibold transition">Trang Chủ</a>
            <a href="#card-generator" className="text-gray-700 hover:text-nuoiem-red font-semibold transition">Mã Nuôi ANH TUẤN</a>
            <a href="#story" className="text-gray-700 hover:text-nuoiem-red font-semibold transition">Câu Chuyện</a>
            <button className="bg-nuoiem-red text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition shadow-lg transform hover:-translate-y-0.5">
              Đăng Ký Nuôi ANH TUẤN
            </button>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className={isOpen ? 'hidden' : 'inline-flex'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                <path className={isOpen ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-yellow-50">Trang Chủ</a>
          <a href="#card-generator" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-yellow-50">Mã Nuôi ANH TUẤN</a>
          <a href="#story" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-yellow-50">Câu Chuyện</a>
          <div className="pt-4">
             <button className="w-full bg-nuoiem-red text-white px-6 py-3 rounded-full font-bold">
              Đăng Ký Nuôi ANH TUẤN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;