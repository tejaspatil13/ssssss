import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
  const targetDate = new Date("November 4, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
  const [isFinished, setIsFinished] = useState(false);
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsFinished(true);
      setTimeLeft(0);
      startEmojiBlast();
      return;
    }

    const timer = setInterval(() => {
      const difference = targetDate - new Date().getTime();
      if (difference <= 0) {
        clearInterval(timer);
        setIsFinished(true);
        startEmojiBlast();
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const startEmojiBlast = () => {
    const symbols = ["🎂", "🎉", "💖", "💞", "💫", "💝", "✨", "🎈", "💐"];
    let count = 0;

    const blastInterval = setInterval(() => {
      setEmojis((prev) => [
        ...prev,
        {
          id: Date.now(),
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          left: Math.random() * 100,
        },
      ]);
      count++;
      if (count > 50) clearInterval(blastInterval);
    }, 150);
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="relative text-center font-sans">
      {!isFinished ? (
        <div>
          {/* Heading in white + calligraphy font */}
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: '"Great Vibes", cursive' }}
          >
            💖 Happy Birthday, My Love! 💖
          </h2>

          {/* Countdown in white + calligraphy font */}
          <div
            className="text-3xl md:text-4xl flex justify-center gap-4 text-white"
            style={{ fontFamily: '"Great Vibes", cursive' }}
          >
            <div>{days}d</div>
            <div>{hours}h</div>
            <div>{minutes}m</div>
            <div>{seconds}s</div>
          </div>
        </div>
      ) : (
        <motion.div
          className="mt-6 text-5xl md:text-6xl font-bold text-white bg-white/20 backdrop-blur-sm p-4 rounded-2xl shadow-md"
          style={{ fontFamily: '"Great Vibes", cursive' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          🎉 Happy Birthday My Love 💕
        </motion.div>
      )}

      {/* Emoji Blast */}
      {emojis.map((emoji) => (
        <motion.div
          key={emoji.id}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -800, opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute text-4xl"
          style={{
            left: `${emoji.left}%`,
            bottom: "0%",
          }}
        >
          {emoji.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default Countdown;
