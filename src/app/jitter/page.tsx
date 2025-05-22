"use client";

import { useState, useEffect, useRef } from "react";
import HeavyPage from "../heavy/page";

export default function JitterPage() {
  const [loadTime, setLoadTime] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [start, setStart] = useState(0);

  useEffect(() => {
    setStart(performance.now());
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      const end = performance.now();
      setLoadTime(`${(end - start).toFixed(2)} ms`);
    };

    if (video.readyState >= 3) {
      handleLoadedData();
    } else {
      video.addEventListener("loadeddata", handleLoadedData);
    }

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [start]);

  return (
    <div>
      <h2>Jitter (WebM/MP4)</h2>
      <video ref={videoRef} src="/jitter.mp4" autoPlay loop muted width="300" />
      <p>Load Time: {loadTime}</p>
      <HeavyPage />
    </div>
  );
}
