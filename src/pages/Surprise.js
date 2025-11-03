import React from "react";

export default function Surprise() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lightyellow p-6 text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">💖 Your Surprise 💖</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <video controls className="rounded-2xl shadow-md w-80" src="/videos/video1.mp4" />
        <video controls className="rounded-2xl shadow-md w-80" src="/videos/video2.mp4" />
      </div>

      <p className="max-w-xl text-gray-700 italic mt-4">
        (Your heartfelt message here — maybe something like “Every second with you is
        my favorite memory. Happy birthday, my forever.” 💫)
      </p>
    </div>
  );
}
