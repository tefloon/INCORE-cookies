import Image from "next/image";
import HeroComponent from "./components/sections/home/heroComponent";

export default function Home() {
  return (
    <>
      {/* NavBar */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="text-center font-satoshi italic text-7xl">
          Siema (italic)
        </div>
        <div className="text-center font-satoshi text-7xl text-red-incore">
          Siema (normal)
        </div>
        <div className="text-center font-satoshi font-bold text-7xl">Siema</div>
        <HeroComponent />
        {/* Bento */}
        {/* Video */}
        {/* Pricing */}
        {/* Quote */}
        {/* FAQ */}
      </main>
      {/* Footer */}
    </>
  );
}
