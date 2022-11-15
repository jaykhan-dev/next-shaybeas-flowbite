import Image from "next/image";

// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function ContentOne() {
  gsap.registerPlugin(ScrollTrigger);

  // const imageTwo = useRef(null)
  // const ref = useRef(null);

  useEffect(() => {
    gsap.set("#imageOne", { y: 0 });
    gsap.to("#imageOne", {
      scrollTrigger: {
        trigger: "#imageOne",
        scrub: 1,
        start: "top bottom",
        end: "top top",
      },
      y: 20,
      ease: "none",
      duration: 3,
    });
  }, []);

  useEffect(() => {
    gsap.set("#imageTwo", { y: -20 });
    gsap.to("#imageTwo", {
      scrollTrigger: {
        trigger: "#imageTwo",
        scrub: 1,
        start: "top bottom",
        end: "top top",
      },
      y: 20,
      ease: "none",
      duration: 3,
    });
  }, []);

  return (
    <section class="bg-white dark:bg-gray-900 my-20">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            We didnt reinvent the wheel
          </h2>
          <p class="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <Image
            class="w-full rounded-lg"
            src="/images/lifeguard-100.jpg"
            alt="Florida Beach"
            width={400}
            height={600}
            id="imageOne"
          />
          <Image
            class="mt-4 w-full lg:mt-10 rounded-lg"
            src="/images/pier-100.jpg"
            alt="Florida Beach 2"
            width={400}
            height={600}
            id="imageTwo"
          />
        </div>
      </div>
    </section>
  );
}
