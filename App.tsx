import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import DonationCard from './components/DonationCard';
import { ChildProfile } from './types';
import { generateStory, generateThankYou } from './services/geminiService';

// Updated image source to the specific image requested.
// Please ensure you save the image file as 'phan_anh_tuan.jpg' in your public folder 
// or replace this string with the direct URL/path to your image.
const USER_IMAGE_1_PORTRAIT = "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/554957436_122138698862891527_5038133078651506456_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Woo0J5MXj9gQ7kNvwE4f5wN&_nc_oc=AdlKtc75XtNeSTtu97DmhFjhU5cjTGYuwKqPmz7XJGMzc0upuBlsffUjD7O0vpqoDqhe0G6YLJt1pbnL_-U992Le&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=UvNZTI5vL_4QhzY6IbGg0w&oh=00_AflT1KLN2PqzL8Ikl7KVAhpgDjpjmoQorOVPgBszpuuP0g&oe=693F4059"; 

function App() {
  const [sponsorName, setSponsorName] = useState("Lờ Inh Linh");
  const [story, setStory] = useState("");
  const [loadingStory, setLoadingStory] = useState(false);
  const [thankYouNote, setThankYouNote] = useState("");

  const childProfile: ChildProfile = {
    id: "NE 417",
    name: "Phan Anh Tuấn",
    location: "Huyện Nậm Pồ, Điện Biên",
    school: "Điểm trường Huổi Lụ",
    imageUrl: USER_IMAGE_1_PORTRAIT, // Using the updated image
    sponsorName: sponsorName
  };

  const handleGenerateStory = async () => {
    setLoadingStory(true);
    const result = await generateStory(childProfile.name, childProfile.location);
    setStory(result);
    setLoadingStory(false);
  };

  const handleSponsorChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSponsorName(e.target.value);
  };
  
  // Debounce effect for thank you note generation when name changes
  useEffect(() => {
    const timer = setTimeout(async () => {
      if(sponsorName.length > 2) {
         const note = await generateThankYou(sponsorName, childProfile.name);
         setThankYouNote(note);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [sponsorName]);


  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <span className="text-nuoiem-red font-bold tracking-widest uppercase text-sm mb-2 block">Dự án thiện nguyện</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-handwriting">
              Nuôi ANH TUẤN <br/><span className="text-nuoiem-dark">Ánh Sáng Núi Rừng</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Mỗi bữa cơm trưa 8.500đ giúp các em nhỏ vùng cao có thêm động lực đến trường.
              Hãy cùng chung tay để không em nhỏ nào bị bỏ lại phía sau.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <button className="bg-nuoiem-red text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-red-700 transition">
                Nhận Nuôi ANH TUẤN Ngay
              </button>
              <button className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition">
                Tìm Hiểu Thêm
              </button>
            </div>
          </div>
          {/* Hero Visual - Just a nice collage or image */}
          <div className="md:w-1/2 flex justify-center">
             <div className="grid grid-cols-2 gap-4">
                <img className="rounded-2xl shadow-lg mt-8" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop" alt="Kids 1" />
                <img className="rounded-2xl shadow-lg mb-8" src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=400&auto=format&fit=crop" alt="Kids 2" />
             </div>
          </div>
        </div>
      </div>

      {/* The Core Request: Card Generator Section */}
      <section id="card-generator" className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-handwriting mb-4">Mã Nuôi ANH TUẤN Của Bạn</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nhập tên của bạn để tạo thẻ xác nhận nuôi ANH TUẤN. Hãy chia sẻ thẻ này để lan tỏa yêu thương!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          
          {/* Controls */}
          <div className="w-full lg:w-1/3 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
             <div className="mb-6">
               <label className="block text-gray-700 font-bold mb-2">Tên Người Nuôi (Sponsor Name)</label>
               <input 
                  type="text" 
                  value={sponsorName}
                  onChange={handleSponsorChange}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-nuoiem-yellow transition text-lg"
                  placeholder="Nhập tên của bạn..."
               />
             </div>
             
             <div className="mb-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
               <h4 className="font-bold text-yellow-800 mb-2 flex items-center">
                 <span className="mr-2">✨</span> Lời nhắn từ ANH TUẤN:
               </h4>
               <p className="text-gray-700 italic text-sm min-h-[60px]">
                 {thankYouNote || "Đang viết thư cảm ơn..."}
               </p>
             </div>

             <div className="space-y-3">
               <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                 Tải Xuống Ảnh
               </button>
               <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                 Chia Sẻ Facebook
               </button>
             </div>
          </div>

          {/* The Recreated Card (Target of the prompt) */}
          <div className="w-full lg:w-1/3 flex justify-center">
             <DonationCard profile={childProfile} />
          </div>

        </div>
      </section>

      {/* Story Section using Gemini */}
      <section id="story" className="bg-white py-20 border-t border-gray-100">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 font-handwriting mb-8">Hành Trình Của Tuấn</h2>
            
            {story ? (
              <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200 relative">
                <span className="absolute top-4 left-4 text-6xl text-orange-200 font-serif">"</span>
                <p className="text-lg text-gray-800 leading-relaxed whitespace-pre-line font-medium relative z-10">
                  {story}
                </p>
                <span className="absolute bottom-[-20px] right-8 text-6xl text-orange-200 font-serif rotate-180">"</span>
              </div>
            ) : (
              <div className="bg-gray-100 p-12 rounded-2xl flex flex-col items-center justify-center min-h-[200px]">
                <p className="text-gray-500 mb-6">Bạn có muốn nghe câu chuyện về hành trình đi học của Phan Anh Tuấn không?</p>
                <button 
                  onClick={handleGenerateStory}
                  disabled={loadingStory}
                  className="bg-nuoiem-dark text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition flex items-center gap-2 disabled:opacity-50"
                >
                  {loadingStory ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Đang kể chuyện...
                    </>
                  ) : (
                    <>✨ Kể chuyện cho tôi</>
                  )}
                </button>
              </div>
            )}
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
           <div>
             <h3 className="font-handwriting text-3xl text-nuoiem-yellow mb-4">Nuôi Em</h3>
             <p className="text-gray-400">Dự án thiện nguyện mang bữa cơm trưa có thịt đến với trẻ em vùng cao.</p>
           </div>
           <div>
             <h4 className="font-bold text-lg mb-4">Liên Hệ</h4>
             <p className="text-gray-400">Hotline: 098.765.4321</p>
             <p className="text-gray-400">Email: team@nuoiem.com</p>
           </div>
           <div>
             <h4 className="font-bold text-lg mb-4">Theo Dõi</h4>
             <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Youtube</a>
             </div>
           </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-800 text-gray-600 text-sm">
           © 2024 Nuôi Em. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;