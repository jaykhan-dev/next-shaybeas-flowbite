import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

export default function Houses() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.set("#header-text", { x: 50, opacity: 0 });
    gsap.to("#header-text", {
      scrollTrigger: {
        trigger: "#header-text",
        scrub: 1,
        start: "top bottom",
        end: "top center",
      },
      opacity: 1,
      x: 0,
    });
  }, []);

  useEffect(() => {
    gsap.set("#search-bar", { opacity: 0 });
    gsap.to("#search-bar", {
      scrollTrigger: {
        trigger: "#search-bar",
        scrub: 1,
        start: "top bottom",
        end: "top center",
      },
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    gsap.set("#houses", { scale: 0.75 });
    gsap.to("#houses", {
      scrollTrigger: {
        trigger: "#houses",
        scrub: 1,
        start: "top bottom",
        end: "top center",
      },
      scale: 1,
    });
  }, []);

  return (
    <section class="bg-white dark:bg-gray-900" id="listings">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div
          id="header-text"
          class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"
        >
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Featured Leads
          </h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore our leads and listings and if you have more questions, let
            us know below!.
          </p>
        </div>
        {/* SEARCH */}
        <div
          id="search-bar"
          className="grid my-20 p-4 bg-blue-500 rounded shadow-xl"
        >
          <div>
            <form
              action=""
              className="grid lg:grid-cols-3 place-items-center gap-4"
            >
              {/* SEARCH BAR */}
              <div className="lg:col-span-2 w-full">
                <div className="flex items-center space-x-2">
                  <div>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </button>
                  </div>
                  <input
                    type="search"
                    placeholder="Search by location, postal code"
                    className="w-full border border-black/20 rounded"
                  />
                </div>
              </div>

              {/* SELECT OPTION */}
              <div className="flex justify-center w-full">
                <select
                  id="countries"
                  class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Buy</option>
                  <option>Sell</option>
                  <option>Rent</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div id="houses" class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="/images/florida_house1.png"
                alt="Bonnie Avatar"
                width={400}
                height={400}
              />
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Southern Pines</a>
              </h3>
              <span class="text-gray-500 text-xl font-bold my-4 dark:text-gray-400">
                $380, 000
              </span>
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Self-guided Model Open Daily
              </p>
              <Link href="/listings/house-1">
                <button className="uppercase my-4 hover:translate-x-4 duration-300">
                  Go to listing
                </button>
              </Link>
            </div>
          </div>
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="/images/florida_house2.png"
                alt="Jese Avatar"
                width={400}
                height={400}
              />
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Stepping Stone</a>
              </h3>
              <span class="text-gray-500 text-xl font-bold my-4 dark:text-gray-400">
                $465,000
              </span>
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Model available to tour
              </p>
              <button className="uppercase my-4 hover:translate-x-4 duration-300">
                Go to listing
              </button>
            </div>
          </div>
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="/images/florida_house3.png"
                alt="Michael Avatar"
                width={400}
                height={400}
              />
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Parkside at Blueberry Hill</a>
              </h3>
              <span class="text-gray-500 text-xl font-bold my-4 dark:text-gray-400">
                $500,000
              </span>
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Selling from an interim location!
              </p>
              <button className="uppercase my-4 hover:translate-x-4 duration-300">
                Go to listing
              </button>
            </div>
          </div>
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="/images/florida_house4.png"
                alt="Sofia Avatar"
                width={400}
                height={400}
              />
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Tierra del Sol</a>
              </h3>
              <span class="text-gray-500 text-xl font-bold my-4 dark:text-gray-400">
                $640,000
              </span>
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Model available to tour
              </p>
              <button className="uppercase my-4 hover:translate-x-4 duration-300">
                Go to listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
