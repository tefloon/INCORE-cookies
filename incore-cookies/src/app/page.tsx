import Image from "next/image";
import HeroComponent from "./components/sections/home/heroComponent";
import MenuBar from "./components/elements/menu/menuBar";

export default function Home() {
  return (
    <div className="flex mx-0 max-w-[1920px]">
      <MenuBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <div className="text-center font-satoshi italic text-7xl">
          Siema (italic)
        </div>
        <div className="text-center font-satoshi text-7xl text-red-incore">
        Siema (normal)
        </div>
      <div className="text-center font-satoshi font-bold text-7xl">Siema</div> */}
        <HeroComponent />
        {/* Bento */}
        {/* Video */}
        {/* Pricing */}
        {/* Quote */}
        {/* FAQ */}
      </main>
      {/* Footer */}
    </div>
  );
}
