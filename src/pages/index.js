import Head from "next/head";
import Intro from "@/components/Intro";
import Assurance from "@/components/Assurance";
import ContactUs from "@/components/ContactUs";
import Clients from "@/components/Clients";
import Carousel from "@/components/Carousel";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import Featured from "@/components/Featured";
import BackToTop from "@/components/BackToTop";

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
        {/* Google verification */}
        <meta
          name="google-site-verification"
          content="J3NvBHqFM5m-dZwgWKbRShz4I_cMt-IFlTGBoTqeoWk"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carousel />
      <Featured />
      <Intro />
      <ExecutiveSummary />
      <Assurance />
      <ContactUs />
      <Clients />
      <BackToTop />
    </>
  );
}
