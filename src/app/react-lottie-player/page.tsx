"use client";

import Lottie from "react-lottie-player";
import { useEffect, useState } from "react";

export default function ReactLottiePlayerPage() {
  const [animationData, setAnimationData] = useState(null);
  const [fetchTime, setFetchTime] = useState("");
  const [renderTime, setRenderTime] = useState("");

  useEffect(() => {
    const startFetch = performance.now();

    fetch("/animation.json")
      .then((res) => res.json())
      .then((data) => {
        const endFetch = performance.now();
        setFetchTime(`${(endFetch - startFetch).toFixed(2)} ms`);
        setAnimationData(data);
      });
  }, []);

  useEffect(() => {
    if (animationData) {
      const startRender = performance.now();

      Promise.resolve().then(() => {
        const endRender = performance.now();
        setRenderTime(`${(endRender - startRender).toFixed(2)} ms`);
      });
    }
  }, [animationData]);

  return (
    <div>
      <h2>React Lottie Player</h2>
      {animationData && (
        <Lottie
          loop
          animationData={animationData}
          play
          style={{ width: 300, height: 300 }}
        />
      )}
      <p>Fetch JSON Time: {fetchTime}</p>
      <p>Render Init Time: {renderTime}</p>
    </div>
  );
}
