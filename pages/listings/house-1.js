import Tabs from "../../components/Tabs";

export default function House1() {
  return (
    <>
      <section class="flex justify-center bg-white dark:bg-gray-900">
        <div className="lg:w-2/3 my-20 py-10">
          <div class="py-8 px-4 max-w-2xl lg:py-16">
            <h2 class="mb-2 text-4xl font-semibold leading-none text-gray-900 dark:text-white">
              Apple iMac 25
            </h2>
            <p class="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">
              $2999
            </p>
            <dl>
              <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Details
              </dt>
              <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
                processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
                Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
              </dd>
            </dl>
            <dl class="flex items-center space-x-6">
              <div>
                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Category
                </dt>
                <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                  Electronics/PC
                </dd>
              </div>
              <div>
                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Item weight
                </dt>
                <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                  12kg
                </dd>
              </div>
            </dl>
            <div class="flex items-center space-x-4">
              <button
                type="button"
                class="text-white inline-flex items-center bg-blue-500 hover:scale-95 duration-300 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg
                  aria-hidden="true"
                  class="mr-1 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Contact Seller
              </button>
            </div>
          </div>
          <Tabs />
        </div>
      </section>
    </>
  );
}
