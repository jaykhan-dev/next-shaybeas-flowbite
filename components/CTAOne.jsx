import Image from "next/image";
import PropertyGIF from "../public/lottie/property.gif";
import { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function CTAOne() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.set("#text-cta-1", { opacity: 0, x: -20 });
    gsap.to("#text-cta-1", {
      scrollTrigger: {
        trigger: "#text-cta-1",
        scrub: 1,
        start: "top bottom",
        end: "top top",
      },
      x: 0,
      opacity: 1,
    });
  });

  useEffect(() => {
    gsap.set("#gif", { scale: 0 });
    gsap.to("#gif", {
      scrollTrigger: {
        trigger: "#gif",
        scrub: 1,
        start: "top bottom",
        end: "top center",
      },
      scale: 1,
    });
  });

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7" id="text-cta-1">
          <h2 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">
            We want to speak with you and truly undestand if we can bring you a
            massive amount of value
          </h2>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            We help people move all over the country, military families,
            corporate relocations, and then help you as an agent to grow your
            personal space by helping our partnering agents aquire more listings
            as well.
          </p>
          <a
            href="#"
            class="hover:scale-95 duration-300 bg-blue-500 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              class="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div class="lg:mt-0 lg:col-span-5 lg:flex" id="gif">
          <Image
            src={PropertyGIF}
            width={400}
            height={400}
            alt="Property Lottie Files GIF"
          />
          {/* <Lottie animationData={RealEstate} /> */}
        </div>
      </div>
    </section>
  );
}
