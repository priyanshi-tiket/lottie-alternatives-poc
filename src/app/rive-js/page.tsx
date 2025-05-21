'use client";';
import dynamic from "next/dynamic";

const RiveJsClient = dynamic(() => import("../../components/RiveJsClient"), {
  ssr: false,
});

export default function RiveJsPage() {
  return <RiveJsClient />;
}
