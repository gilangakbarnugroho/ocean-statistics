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
        <title>Web3 on Campus</title>
        <meta name="description" content="A roadshow program aimed at socializing and educating about Web3 dan NFT industry to students in biggest universities in Indonesia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-hidden">
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {/* Home */}
        <Homepage />
        <Second />
        <Timeline />
        <CTA />
        <Count />
        <Pic />
        <Partner />
        <Community />
        {/* <Reviewpage /> */}
        <Footer />
      </div>
    </>
  );
}
