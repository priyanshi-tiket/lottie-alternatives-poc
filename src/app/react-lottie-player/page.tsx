import dynamic from "next/dynamic";

const ReactLottiePlayer = dynamic(
  () => import("../../components/ReactLottiePlayer"),
  {
    ssr: false,
  }
);

export default function Page() {
  return <ReactLottiePlayer />;
}
