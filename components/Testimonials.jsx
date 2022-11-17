import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Testimonials() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.set("#testimonial-text", { opacity: 0 });
    gsap.to("#testimonial-text", {
      scrollTrigger: {
        trigger: "#testimonial-text",
        scrub: 1,
        start: "top bottom",
        end: "top top",
      },
      opacity: 1,
      ease: "none",
      duration: 3,
    });
  }, []);

  return (
    <section class="bg-white dark:bg-gray-900">
      <div
        id="testimonial-text"
        class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
      >
        <figure class="max-w-screen-md mx-auto">
          <svg
            class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p class="text-2xl font-medium text-gray-900 dark:text-white">
              ShayBeas helped me find a home for my family in a timely and
              respectful manner.
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <Image
              class="w-24 h-24 rounded-full"
              src="/images/dune.jpeg"
              alt="profile picture"
              width={50}
              height={50}
            />
            <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div class="pr-3 font-medium text-gray-900 dark:text-white">
                Micheal Gough
              </div>
              <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                Florida Resident
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
