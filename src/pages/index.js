import Head from "next/head";
import { Inter } from "next/font/google";
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
        <title>Upper Level Security | Security Company in Brakpan</title>
        <meta
          name="description"
          content="Upper Level Security, Security Company in Johannesburg, Gauteng,Brakpan, East Rand"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        {/* Chrome, Firefox OS and Opera  */}
        <meta name="theme-color" content="#ffffff" />
        {/* Windows Phone  */}
        <meta name="msapplication-navbutton-color" content="#ffffff" />
        {/* iOS Safari  */}
        <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" />
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
