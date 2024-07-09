import Head from "next/head";
// import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Homepage from "./sections/landing/Homepage";
import Second from "./sections/landing/Second";
import Count from "./sections/landing/Count"
import Program from "./sections/landing/Program";
import Pricelist from "./sections/landing/Pricelist";
import Footer from "@/components/Footer";
import Testi from "./sections/landing/Testi";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ocean Statistics</title>
        <meta name="description" content="Jasa Olah Data Statistika" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-hidden bg-[url('/assets/background.png')] bg-cover">
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {/* Home */}
        <Homepage />
        <Second />
        <Program />
        <Pricelist />
        <Testi />
        
        {/* <Reviewpage /> */}
        <Footer />
      </div>
    </>
  );
}
