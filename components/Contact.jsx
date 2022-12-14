import Image from "next/image";
import CityScape from "../public/images/city-scape-footer.svg";
import { useEffect } from "react";
import ContactGraphic from "../public/lottie/contact-mail.gif";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Contact() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.set(".image", { opacity: 0, scale: 0 });
    gsap.to(".image", {
      scrollTrigger: {
        trigger: ".image",
        scrub: 1,
        start: "top bottom",
        end: "top center",
      },
      opacity: 1,
      scale: 1,
    });
  });

  return (
    <>
      <section
        className="flex justify-center"
        aria-label="contact"
        id="contact"
      >
        <div className="lg:w-1/2 w-full my-20 p-4">
          <div className="flex justify-center">
            <Image
              src={ContactGraphic}
              width={300}
              height={300}
              alt="Contact Lottie Files GIF"
            />
          </div>
          <form>
            <h1 className="lg:text-6xl text-4xl font-bold my-8 text-center">
              Contact Us
            </h1>

            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_last_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
            </div>
            {/* TEXT AREA */}
            <div className="my-10">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6"></div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <div className="image grid place-items-center bg-gradient-to-r from-white/0 via-white/50 to-white/0 relative">
        <Image src={CityScape} height={600} width={600} alt="Cityscape" />
        <div className="h-full lg:w-1/2 absolute w-full top-0 bg-gradient-to-r from-white via-white/20 to-white"></div>
      </div>
    </>
  );
}
