import React, { useState, useEffect } from "react";

const images = ["/photos/photo1.jpg", "/photos/photo2.jpg", "/photos/photo3.jpg"];

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % images.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[index]})` }}
    />
  );
}
