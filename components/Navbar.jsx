import { Navbar } from "flowbite-react";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Navigation() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="z-50 fixed top-0 w-full border-b border-black/10 bg-gray-200/60 backdrop-blur-md"
    >
      <Navbar.Brand href="/" className="flex items-center">
        {/* <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    /> */}
        <h1 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          ShayBeas Enterprises
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="text-white">
        <Navbar.Link href="/listings" className="">
          Listings
        </Navbar.Link>

        <Navbar.Link href="/blogs" scroll={true} className="">
          Blog
        </Navbar.Link>

        <Navbar.Link href="/contact" scroll={true}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
