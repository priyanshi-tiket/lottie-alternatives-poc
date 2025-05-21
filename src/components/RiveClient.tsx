"use client";
import { useRive } from "@rive-app/react-canvas";
import { useState, useEffect, useRef } from "react";

export default function RiveClient() {
  const [loadTime, setLoadTime] = useState("");
  const startTimeRef = useRef(0);

  useEffect(() => {
    startTimeRef.current = performance.now();
  }, []);

  const { RiveComponent } = useRive({
    src: "/example.riv",
    autoplay: true,
    onLoad: () => {
      const end = performance.now();
      setLoadTime(`${(end - startTimeRef.current).toFixed(2)} ms`);
    },
  });

  return (
    <div>
      <h2>Rive Animation</h2>
      <div style={{ width: 300, height: 400 }}>
        <RiveComponent />
      </div>
      <p>Load Time: {loadTime}</p>
    </div>
  );
}
