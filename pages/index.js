import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Team from "../components/Team";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>
          Winniesoft | Game Development | Mobile App |Web Development
        </title>
        <meta
          content="
          We are working hard to give you best service. We work with the most up-to-date technologies and best solution partners.
          We develop games suitable for every platform according to your wishes.
          We develop mobile applications according to your wishes.We make fast, responsive, dynamic web apps and sites."
          name="description"
        ></meta>
      </Head>
      <Hero />
      <main id="main">
        <About />
        <Partners />
        <Services />
        <Projects />
        <Team />
        <Contact />
      </main>
    </div>
  );
}
