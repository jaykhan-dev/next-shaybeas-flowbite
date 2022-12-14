import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/Carousel";
import ContentOne from "../components/ContentOne";
import Hero from "../components/Hero";
import ContentGrid from "../components/ContentGrid";
import Subscribe from "../components/Subscribe";
import TabsFlowBite from "../components/Tabs";
import CTAOne from "../components/CTAOne";
import Accordion from "../components/Accordion";
import Prices from "../components/Prices";
import { useEffect } from "react";
import Stats from "../components/Stats";
import Houses from "../components/Houses";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  return (
    <>
      <Head>
        <title>ShayBeas Enterprises</title>
      </Head>
      <Hero />
      <Houses />
      <CTAOne />
      <Stats />
      <ContentOne />
      <Carousel />
      <ContentGrid />
      <Prices />
      <Blog />
      <Testimonials />
      <Subscribe />
      <Accordion />
    </>
  );
}
