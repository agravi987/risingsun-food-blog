"use client";

import { useRouter } from "next/navigation";
import "./HomeHero.css";

export default function HomeHero() {
  const router = useRouter();

  const handleExplore = () => {
    router.push("/foodmenu");
  };

  return (
    <section className="home-container">
      <img
        src="./hero-image.png"
        alt="Delicious Food"
        className="home-hero-image"
      />
      <h1 className="home-title">RisingSun Food Blog</h1>
      <p className="home-desc">
        Discover mouth-watering meals, healthy choices, and our curated food
        stories. Powered by RisingSun Foods to brighten your tastebuds!
      </p>
      <button className="explore-btn" onClick={handleExplore}>
        Explore Foods
      </button>
    </section>
  );
}
