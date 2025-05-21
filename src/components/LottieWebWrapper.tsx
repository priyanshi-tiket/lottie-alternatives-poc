"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const LottieWebClient = dynamic(() => import("./LottieWeb"), {
  ssr: false,
});

export default function LottieWebWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LottieWebClient />
    </Suspense>
  );
}
