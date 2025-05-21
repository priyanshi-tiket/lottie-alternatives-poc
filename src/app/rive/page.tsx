import dynamic from "next/dynamic";

const RiveClient = dynamic(() => import("../../components/RiveClient"), {
  ssr: false,
});

export default function RivePage() {
  return <RiveClient />;
}
