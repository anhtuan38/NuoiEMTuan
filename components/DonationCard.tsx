import React from 'react';
import { ChildProfile } from '../types';

// SVG Separator for the wave effect
const WaveSeparator = () => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -mt-1">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-yellow-400 fill-current">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
  </div>
);

interface DonationCardProps {
  profile: ChildProfile;
}

const DonationCard: React.FC<DonationCardProps> = ({ profile }) => {
  return (
    <div className="max-w-md w-full mx-auto relative shadow-2xl rounded-xl overflow-hidden transform transition-transform hover:scale-105 duration-300">
      {/* Background Container */}
      <div className="bg-yellow-400 min-h-[600px] flex flex-col items-center relative pb-8">
        
        {/* Top Image Section (Kids Eating) - Simulating Image 2's top part */}
        <div className="w-full h-48 relative">
           {/* Use a placeholder that resembles the group of kids eating */}
           <img 
            src="https://images.unsplash.com/photo-1549633030-89d0743bad01?q=80&w=2070&auto=format&fit=crop" 
            alt="Các em bé ăn cơm" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-0 w-full text-center">
             <span className="bg-black/20 text-white px-3 py-1 rounded-full font-bold text-sm backdrop-blur-sm shadow-lg">
                {profile.location}
             </span>
          </div>
        </div>

        {/* Wave blending image into yellow bg */}
        <div className="absolute top-44 w-full">
             <svg className="w-full h-12 text-yellow-400 fill-current" viewBox="0 0 1440 320">
                <path fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,202.7C672,203,768,181,864,165.3C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center z-10 -mt-2">
            
            {/* Title */}
            <h2 className="font-handwriting text-5xl text-gray-800 mb-1 text-center px-2">Nuôi ANH TUẤN</h2>
            <p className="font-script text-2xl text-gray-800 mb-6">Ánh sáng núi rừng</p>

            {/* Central Portrait - Replaces the center of Image 2 with Image 1 */}
            <div className="relative mb-4">
                <div className="w-48 h-48 rounded-full overflow-hidden border-[6px] border-white shadow-xl relative z-10">
                    <img 
                        src={profile.imageUrl} 
                        alt={profile.name} 
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Decorative flowers/leaves simulation (CSS shapes) */}
                <div className="absolute -bottom-2 -left-4 text-green-700 text-4xl opacity-80 transform -rotate-12">🌿</div>
                <div className="absolute -top-2 -right-4 text-green-700 text-4xl opacity-80 transform rotate-12">🍃</div>
            </div>

            {/* ID Code */}
            <div className="text-3xl font-bold text-gray-900 tracking-wider mb-1">
                {profile.id}
            </div>

            {/* Child Name */}
            <h3 className="font-handwriting text-4xl text-gray-900 mb-6">
                {profile.name}
            </h3>

            {/* Decor line */}
            <div className="flex items-center space-x-2 text-pink-500 mb-4 opacity-70">
                <span>❀</span><span>❀</span><span>❀</span><span>❀</span><span>❀</span>
            </div>

            {/* Sponsor Box */}
            {profile.sponsorName && (
                <div className="bg-yellow-200/50 rounded-lg px-6 py-3 border-2 border-yellow-500/30 flex flex-col items-center">
                    <div className="bg-white rounded-full p-2 mb-2 shadow-sm">
                         {/* Simple Family Icon SVG */}
                        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <span className="font-bold text-sm uppercase text-gray-600">Cảm ơn Anh/Chị:</span>
                    <span className="font-handwriting text-2xl text-nuoiem-red">{profile.sponsorName}</span>
                </div>
            )}
            
            {/* Footer Text */}
            <div className="mt-8 px-6 text-center">
                <p className="text-gray-800 text-sm font-semibold italic opacity-80">
                    *Theo thống kê,<br/>
                    Mỗi 1 chia sẻ hình ảnh này sẽ giúp thêm 1 bé được nhận Nuôi Cơm
                </p>
                <div className="mt-2 w-full h-1 bg-red-500 rounded-full mx-auto w-16"></div>
            </div>

            <div className="absolute bottom-2 text-xs font-bold text-gray-600">
                www.nuoiem.com
            </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;