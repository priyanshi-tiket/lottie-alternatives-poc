"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LottiePlayerScript = dynamic(
  () =>
    Promise.resolve(function LottiePlayerWrapper() {
      useEffect(() => {
        import("@lottiefiles/lottie-player");
      }, []);
      return null;
    }),
  { ssr: false }
);

export default function LottieFilesPlayerPage() {
  const [loadTime, setLoadTime] = useState("");

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  useEffect(() => {
    const start = performance.now();
    const player = document.querySelector("lottie-player");
    if (player) {
      player.addEventListener("load", () => {
        const end = performance.now();
        setLoadTime(`${(end - start).toFixed(2)} ms`);
      });
    }
  }, []);

  return (
    <div>
      <h2>LottieFiles Player</h2>
      <LottiePlayerScript />
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
