"use client";
import HeavyPage from "@/app/heavy/page";
import { useRive } from "@rive-app/react-canvas";
import { useState, useEffect, useRef } from "react";

export default function RiveClient() {
  const [loadTime, setLoadTime] = useState("");
  const startTimeRef = useRef(0);
  const animations = Array.from({ length: 10 });

  useEffect(() => {
    startTimeRef.current = performance.now();
  }, []);

  return (
    <div>
      <h2>Rive Animation</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {animations.map((_, index) => {
          const { RiveComponent } = useRive({
            src: "/example.riv",
            autoplay: true,
            onLoad: () => {
              if (index === 0) {
                const end = performance.now();
                setLoadTime(`${(end - startTimeRef.current).toFixed(2)} ms`);
              }
            },
          });
          return (
            <div key={index} style={{ width: 150, height: 150, margin: 10 }}>
              <RiveComponent />
            </div>
          );
        })}
      </div>
      <HeavyPage />
      <p>Load Time: {loadTime}</p>
    </div>
  );
}
