import React, { useState } from "react";
import Countdown from "../components/Countdown";
import Slideshow from "../components/Slideshow";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isCountdownFinished, setIsCountdownFinished] = useState(true); // set true for now

  return (
    <div className="relative w-full min-h-screen bg-offwhite font-sans overflow-hidden">
      {/* Background slideshow stays fixed */}
      <div className="fixed inset-0 z-0">
        <Slideshow />
      </div>

      {/* Foreground scrollable content */}
      <div className="relative z-10 flex flex-col items-center justify-start text-center px-6 py-12 space-y-10 overflow-y-auto h-screen scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-transparent">
        
        {/* Countdown */}
        <div>
          <Countdown />
        </div>

        {/* Transparent Message Box */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
              Happiest birthday Mruuu 💟
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            {/* Your message here */}
           🎂 Happy Birthday, Mrunaaaal ! ❤️✨

I love you more than anyone ever could 💕. May all your wishes come true 🌠, may you achieve every bit of success you deserve 🏆, and may all your plans work out perfectly 🌸.

I want to give you never-ending love from my side 💖. No one knows how deeply I feel for you 💭💞, and they don’t need to—because only you know how much I love you 💌, and that is more than enough for me, because you are my world 🌍.

I once told you that you are my best birthday gift 🎁, and I still mean it—I want to be your birthday gift too 🎀.

No words can ever express the depth of my love for you 💓; you mean everything to me 🌟. No matter what happens, I will never leave you 🤝.

I want to keep this friendship 🤗, this bond 💫, and this love ❤️ till the very end 🔒. I want to be the one who is always by your side 👩‍❤️‍👨, your bestest friend 🌸, your biggest supporter 🙌, and the one who loves you endlessly 💕.

💍 I dedicate myself to you, Baala 💖. I love you endlessly ♾️💝.

🎉🎂 Happy Birthday to the cutest 🐣, sweetest 🍭, and most precious 💎 person in my life! 💕🌹✨

With all my love
          </p>
        </div>

        {/* Memories Button */}
        {isCountdownFinished && (
          <button
            onClick={() => navigate("/memories")}
            className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition"
          >
            Can we check out our memories? 💫
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
