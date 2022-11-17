import { Accordion } from "flowbite-react";
import { useRef, useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function AccordionComp() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.set("#accordion-all", { opacity: 0 });
    gsap.to("#accordion-all", {
      scrollTrigger: {
        trigger: "#accordion-all",
        scrub: 1,
        start: "top bottom",
        end: "top center",
      },
      opacity: 1,
      ease: "none",
      duration: 3,
    });
  }, []);

  return (
    <div className="flex justify-center">
      <div id="accordion-all" className="lg:w-2/3 my-20">
        <Accordion>
          <Accordion.Panel className="">
            <Accordion.Title>
              How long does it take to buy a home?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                From start (searching online) to finish (closing escrow), buying
                a home takes about 10 to 12 weeks. Once a home is selected an
                the offer is accepted, the average time to complete the escrow
                period on a home is 30 to 45 days (under normal market
                conditions). Though, well-prepared home buyers who pay cash have
                been known to purchase properties faster than that.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>What is a stratified market?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                A stratified market happens where supply and demand
                characteristics differ by price point, in the same area
                (typically by city). For example, home sales for properties
                above $1.5M may be brisk (seller’s market) while homes under
                $750k may be sluggish (buyer’s market). This scenario comes
                along every so often in West Coast cities where international
                investors - looking to park their money in the United States -
                buy expensive real estate. At the same time, home sales activity
                in mid-priced homes could be entirely different.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What kind of credit score do I need to buy a home?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Most loan programs require a FICO score of 620 or better.
                Borrowers with higher credit scores represent less risk to the
                lender, often resulting in a lower the down payment requirement
                and better interest rate. Conversely, home shoppers with lower
                credit scores may need to bring more money to the table (or
                accept a higher interest rate) to offset the lender’s risk.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
}
