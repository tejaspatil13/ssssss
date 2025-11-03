import React from "react";
import { useNavigate } from "react-router-dom";

const Memories = () => {
  const navigate = useNavigate();

  const newLocal = "Not just for these sweet moments  ✨";
  // Moments stored in /public/moments
  const moments = [
    { src: "/moments/moment1.jpg", caption: "I remember us from these...💕" },
    { src: "/moments/moment2.jpg", caption: "Not just for these sweet moments..." },
    { src: "/moments/moment3.jpg", caption: "But also the worst one ... 💖" },
    { src: "/moments/moment4.jpg", caption: "But i still want to hold up .. 🌙" },
    { src: "/moments/moment5.jpg", caption: "& never want to let it go... 💫" },
    { src: "/moments/moment6.jpg", caption: "Away from me like this.... ✨" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-pink-50 to-yellow-50 font-sans flex flex-col items-center py-10 px-4">
      {/* Title */}
      <h1
        className="text-4xl md:text-5xl font-bold text-pink-600 mb-10"
        style={{ fontFamily: '"Great Vibes", cursive' }}
      >
        💖 Our Precious Moments 💖
      </h1>

      {/* Aesthetic Line */}
      <p className="text-gray-600 italic text-lg mb-10 text-center max-w-2xl">
        “Every picture holds a memory, and every memory holds my heart.” 🌸
      </p>

      {/* Memory Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {moments.map((moment, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl shadow-lg transform transition duration-500 hover:scale-150 hover:shadow-2xl cursor-pointer">
              <img
                src={moment.src}
                alt={`Moment ${index + 1}`}
                className="w-full h-72 object-cover"
              />
            </div>
            <p className="mt-3 text-gray-700 text-base md:text-lg italic text-center px-2">
              {moment.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Surprise Section */}
      <div className="mt-16 text-center">
        <p className="text-pink-600 text-2xl mb-6">
          💫 Are you ready for your surprise? 💫
        </p>
        <button
          onClick={() => {
            if (window.confirm("🎁 Made with you, just for you 💕")) {
              navigate("/surprise");
            }
          }}
          className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition"
        >
          Here’s your surprise 💝
        </button>
      </div>
    </div>
  );
};

export default Memories;
