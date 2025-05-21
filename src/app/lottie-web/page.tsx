"use client";
import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

export default function LottieWebPage() {
  const container = useRef<HTMLDivElement>(null);
  const [loadTime, setLoadTime] = useState("");

  useEffect(() => {
    const start = performance.now();

    const anim = lottie.loadAnimation({
      container: container.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animation.json",
    });

    anim.addEventListener("DOMLoaded", () => {
      const end = performance.now();
      setLoadTime(`${(end - start).toFixed(2)} ms`);
    });

    return () => anim.destroy();
  }, []);

  return (
    <div>
      <h2>Lottie Web</h2>
      <div ref={container} style={{ width: 300, height: 300 }} />
      <p>Load Time: {loadTime}</p>
    </div>
  );
}
