import { Navbar } from "flowbite-react";
import Image from "next/image";

export default function Navigation() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="z-50 fixed top-0 w-full border-b border-black/10 bg-gray-200/20 backdrop-blur-md"
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
        <Navbar.Link href="/navbars" active={true} className="">
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="">
          About
        </Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
