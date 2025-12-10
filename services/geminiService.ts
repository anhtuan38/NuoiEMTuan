import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateStory = async (childName: string, location: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `Viết một câu chuyện ngắn, cảm động và đầy cảm hứng (khoảng 150 từ) về hành trình đến trường của em bé tên là ${childName} sống tại ${location}. Câu chuyện nên nhấn mạnh niềm vui của em khi được nhận nuôi cơm trưa (Dự án Nuôi Em). Giọng văn ấm áp, chia sẻ.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Không thể tạo nội dung lúc này.";
  } catch (error) {
    console.error("Error generating story:", error);
    return "Hệ thống đang bận, vui lòng thử lại sau.";
  }
};

export const generateThankYou = async (sponsorName: string, childName: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `Viết một lá thư cảm ơn ngắn (dưới 100 từ) từ em bé ${childName} gửi tới người nhận nuôi là ${sponsorName}. Giọng văn ngây thơ, đáng yêu và chân thành.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Không thể tạo nội dung lúc này.";
  } catch (error) {
    console.error("Error generating thank you:", error);
    return "Cảm ơn bạn rất nhiều vì đã đồng hành cùng em!";
  }
};
