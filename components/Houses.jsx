import Image from "next/image";
import Link from "next/link";

export default function Houses() {
  return (
    <section class="bg-white dark:bg-gray-900" id="listings">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Featured Leads
          </h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        {/* SEARCH */}
        <div className="grid my-20 p-4 bg-blue-500 rounded shadow-xl">
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
        <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
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
                <a href="#">Bonnie Green</a>
              </h3>
              <span class="text-gray-500 dark:text-gray-400">
                CEO & Web Developer
              </span>
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Bonnie drives the technical strategy of the flowbite platform
                and brand.
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
                <a href="#">Jese Leos</a>
              </h3>
              <span class="text-gray-500 dark:text-gray-400">CTO</span>
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Jese drives the technical strategy of the flowbite platform and
                brand.
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
                <a href="#">Michael Gough</a>
              </h3>
              <span class="text-gray-500 dark:text-gray-400">
                Senior Front-end Developer
              </span>
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Michael drives the technical strategy of the flowbite platform
                and brand.
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
                <a href="#">Lana Byrd</a>
              </h3>
              <span class="text-gray-500 dark:text-gray-400">
                Marketing & Sale
              </span>
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Lana drives the technical strategy of the flowbite platform and
                brand.
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
