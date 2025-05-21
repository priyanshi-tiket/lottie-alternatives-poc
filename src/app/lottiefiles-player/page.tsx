import dynamic from "next/dynamic";

const LottieFilesPlayerClient = dynamic(
  () => import("../../components/LottieFilesPlayerClient"),
  { ssr: false }
);

export default function Page() {
  return <LottieFilesPlayerClient />;
}
