import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Intro from "@/components/Intro";
import Mission from "@/components/Mission";
import Assurance from "@/components/Assurance";
import ContactUs from "@/components/ContactUs";
import Clients from "@/components/Clients";
import Carousel from "@/components/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Upper Level Security</title>
        <meta name="description" content="Upper Level Security Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carousel />
      <Intro />
      <Mission />
      <Assurance />
      <ContactUs />
      <Clients />
    </>
  );
}
