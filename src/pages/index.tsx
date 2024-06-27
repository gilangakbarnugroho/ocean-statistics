import Head from "next/head";
// import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Homepage from "./sections/landing/Homepage";
import Second from "./sections/landing/Second";
import Timeline from "./sections/landing/Timeline";
import CTA from "./sections/landing/CTA";
import Count from "./sections/landing/Count"
import Pic from "./sections/landing/Pic";
import Partner from "./sections/landing/Partner";
import Community from "./sections/landing/Testi";
import Footer from "@/components/Footer";

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
      <div className="overflow-hidden">
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {/* Home */}
        <Homepage />
        
        {/* <Reviewpage /> */}
        <Footer />
      </div>
    </>
  );
}
