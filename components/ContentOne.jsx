import Image from "next/image";

export default function ContentOne() {
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
            src="/images/eagle.jpeg"
            alt="office content 1"
            width={400}
            height={600}
          />
          <Image
            class="mt-4 w-full lg:mt-10 rounded-lg"
            src="/images/fireflies.jpeg"
            alt="office content 2"
            width={400}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
