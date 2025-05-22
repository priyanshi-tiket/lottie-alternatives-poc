"use client";

import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import HeavyPage from "@/app/heavy/page";

export default function LottieWebClient() {
  const containers = useRef<(HTMLDivElement | null)[]>([]);
  const [loadTime, setLoadTime] = useState("");

  useEffect(() => {
    const start = performance.now();
    const animations = containers.current.map((container) =>
      lottie.loadAnimation({
        container: container!,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animation.json",
      })
    );

    const checkLoaded = () => {
      const end = performance.now();
      setLoadTime(`${(end - start).toFixed(2)} ms`);
    };

    animations[0]?.addEventListener("DOMLoaded", checkLoaded);

    return () => {
      animations.forEach((anim) => anim.destroy());
    };
  }, []);

  return (
    <div>
      <h2>Lottie Web</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              containers.current[i] = el;
            }}
            style={{ width: 300, height: 300 }}
          />
        ))}
      </div>
      <HeavyPage />
      <p>Load Time: {loadTime}</p>
    </div>
  );
}
