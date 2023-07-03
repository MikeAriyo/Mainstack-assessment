import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <p className="text-red-700 font-semibold text-3xl">Initial Setups</p>
    </main>
  );
}
