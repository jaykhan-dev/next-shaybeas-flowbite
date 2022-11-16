import Image from "next/image";

import styles from "./hero.module.css";
import CBLogo from "../public/images/logos/cb-logo.png";
import Century21Logo from "../public/images/logos/century-21-logo.png";
import EXPLogo from "../public/images/logos/exp-logo.png";
import KWLogo from "../public/images/logos/kw-logo.png";
import RemaxLogo from "../public/images/logos/remax-logo.png";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero-section">
      <div className="bg-gradient-to-b from-white/60 to-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="#"
            class="hover:translate-x-2 duration-300 inline-flex justify-between items-center py-1 px-1 pr-4 my-12 text-sm text-white bg-gradient-to-r from-blue-500 to-violet-600 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span class="text-xs bg-primary-600 rounded-full text-green-300 px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span class="text-sm font-medium">
              Flowbite is out! See whats new
            </span>
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
          <h1 class="my-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We invest in the world’s potential
          </h1>
          <p class="my-12 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              class="hover:scale-95 duration-300 bg-blue-500 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Learn more
              <svg
                class="ml-2 -mr-1 w-5 h-5"
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
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                class="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Watch video
            </a>
          </div>
          <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span class="font-semibold text-gray-400 uppercase">
              Partnered with
            </span>
            <div class="grid lg:grid-cols-5 place-items-center gap-4 mt-8 text-gray-500 sm:justify-between">
              <Image
                src={CBLogo}
                width={200}
                height={100}
                alt="Coldwell Bankers Logo"
              />
              <Image
                src={RemaxLogo}
                width={200}
                height={100}
                alt="Coldwell Bankers Logo"
              />
              <Image
                src={KWLogo}
                width={200}
                height={100}
                alt="Coldwell Bankers Logo"
              />
              <Image
                src={EXPLogo}
                width={200}
                height={100}
                alt="Coldwell Bankers Logo"
              />
              <Image
                src={Century21Logo}
                width={200}
                height={100}
                alt="Coldwell Bankers Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
