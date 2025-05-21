"use client";

import Lottie from "react-lottie-player";
import { useEffect, useRef, useState } from "react";

export default function ReactLottiePlayer() {
  const [animationData, setAnimationData] = useState(null);
  const [fetchTime, setFetchTime] = useState("");
  const [renderTime, setRenderTime] = useState("");
  const renderStartRef = useRef(0);

  useEffect(() => {
    const startFetch = performance.now();

    fetch("/animation.json")
      .then((res) => res.json())
      .then((data) => {
        const endFetch = performance.now();
        setFetchTime(`${(endFetch - startFetch).toFixed(2)} ms`);
        renderStartRef.current = performance.now();
        setAnimationData(data);
      });
  }, []);

  useEffect(() => {
    if (!animationData) return;

    requestAnimationFrame(() => {
      const endRender = performance.now();
      setRenderTime(`${(endRender - renderStartRef.current).toFixed(2)} ms`);
    });
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
      <p>Render Time After JSON Load: {renderTime}</p>
    </div>
  );
}
