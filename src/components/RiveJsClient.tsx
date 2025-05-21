"use client";

import { useEffect, useRef, useState } from "react";
import Rive from "rive-js";

export default function RiveJsClient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadTime, setLoadTime] = useState("");

  useEffect(() => {
    const start = performance.now();

    const rive = new Rive.Rive({
      src: "/example.riv",
      canvas: canvasRef.current as HTMLCanvasElement,
      autoplay: true,
      onLoad: () => {
        const end = performance.now();
        setLoadTime(`${(end - start).toFixed(2)} ms`);
      },
    });

    return () => rive.cleanup();
  }, []);

  return (
    <div>
      <h2>Rive JS</h2>
      <canvas ref={canvasRef} width={300} height={400}></canvas>
      <p>Load Time: {loadTime}</p>
    </div>
  );
}
