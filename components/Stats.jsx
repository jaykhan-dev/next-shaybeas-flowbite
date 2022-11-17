import { useRef, useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Stats() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.set("#blue-bar", { x: -1920 });
    gsap.to("#blue-bar", {
      scrollTrigger: {
        trigger: "#blue-bar",
        scrub: 1,
        start: "top bottom",
        end: "top center",
      },
      x: 0,
      ease: "none",
      duration: 3,
    });
  }, []);
  return (
    <section
      id="blue-bar"
      class="bg-gradient-to-r from-blue-500 to-blue-600 text-white dark:bg-gray-900"
    >
      <div
        id=""
        class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
      >
        <dl class="grid max-w-screen-md gap-8 mx-auto sm:grid-cols-3 dark:text-white">
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">73+</dt>
            <dd class="font-light dark:text-gray-400">leads</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">10M</dt>
            <dd class="font-light dark:text-gray-400">property value sold!</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">$400,000</dt>
            <dd class="font-light dark:text-gray-400">
              donated to local charities
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
