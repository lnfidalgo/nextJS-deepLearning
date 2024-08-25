import MainScreen from "../ui/screen/MainScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deep Learning Nextjs",
};

export default function Home() {
  return (
    <>
      <MainScreen />
    </>
  );
}
