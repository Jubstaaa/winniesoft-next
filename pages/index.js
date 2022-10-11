import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Partners from "../components/Partners";
import Steps from "../components/Steps";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <div className="app">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Winniesoft</title>
        <meta content="Winniesoft" name="description"></meta>
      </Head>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Partners />
        {/* <Steps /> */}
        <Services />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
