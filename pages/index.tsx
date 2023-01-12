import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Intro } from "../components/Intro";
import { Words } from "../components/Words";
import { Dedicated } from "../components/Dedicated";
import { Unique } from "../components/Unique";
import { Cases } from "../components/ Cases";
import { Header } from "../components/Header";
import { Feedbacks } from "../components/Feedbacks";
import { Footer } from "../components/Footer";
import "react-slideshow-image/dist/styles.css";
import { FAQ } from "../components/FAQ";

export default function Home() {
  return (
    <>
      <Head>
      <title>Vorkweb</title>
        <meta content="Vorkweb" property="og:title" />
        <meta
          content="Desenvolvimento de sites"
          property="og:description"
        />
        <meta content="/banner.jpg" property="og:image" />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
      </Head>
      <main>
        <Box bg="black" color="white" p="0px 20px">
          <Header />
          <Intro />
          <Words />
          <Dedicated />
          <Unique />
          <Cases />
          <Feedbacks />
          <FAQ />
          <Footer />
        </Box>
      </main>
    </>
  );
}
