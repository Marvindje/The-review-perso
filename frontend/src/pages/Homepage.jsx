import React from "react";
import logo from "../assets/the-review-high-resolution-color-logo.png";
import image from "../assets/heroes.png";

export default function Home() {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-400 to-light-blue-500 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20" style={cardStyle}>
          <div className="mx-auto">
            <h1 className="text-2xl font-semibold text-white">
              Bienvenue dans notre Tech Blog !
            </h1>
            <p className="mt-4 text-white">
              Reste informé des dernières nouveautés technologiques 
            </p>
            <div className="mt-8">
              <a
                href="/blog"
                className="px-5 py-3 shadow-lg rounded-lg text-sm font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
              >
                lire des articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
