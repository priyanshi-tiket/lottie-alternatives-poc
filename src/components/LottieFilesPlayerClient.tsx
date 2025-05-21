"use client";

import { useEffect, useState } from "react";

export default function LottieFilesPlayerClient() {
  const [loadTime, setLoadTime] = useState("");

  useEffect(() => {
    const loadScript = async () => {
      await import("@lottiefiles/lottie-player");
    };
    loadScript();
  }, []);

  useEffect(() => {
    const start = performance.now();

    const checkPlayer = () => {
      const player = document.querySelector("lottie-player");
      if (player) {
        player.addEventListener("load", () => {
          const end = performance.now();
          setLoadTime(`${(end - start).toFixed(2)} ms`);
        });
      }
    };

    setTimeout(checkPlayer, 100);
  }, []);

  return (
    <div>
      <h2>LottieFiles Player</h2>
      {/* @ts-ignore */}
      <lottie-player
        src="/animation.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        style={{ width: 300, height: 300 }}
      />
      <p>Load Time: {loadTime}</p>
    </div>
  );
}
