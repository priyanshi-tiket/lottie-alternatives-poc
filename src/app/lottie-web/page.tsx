import dynamic from "next/dynamic";
import { Suspense } from "react";

const LottieWebClient = dynamic(() => import("../../components/LottieWeb"), {
  ssr: false,
});

export default function LottieWebPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LottieWebClient />
    </Suspense>
  );
}
