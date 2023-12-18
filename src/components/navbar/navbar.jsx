"use client"
import Link from "next/link";
import Image from "next/image";
import { ThemeChanger } from "./DarkSwitch";
import { ThemeProvider } from "./theme-provider";
import Container from "../Container";
import AuthButton from "./AuthButton";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = [
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'Blog',
      route: '/blog'
    },
    {
      name: 'About Us',
      route: '/about'
    },
    {
      name: 'Contact Us',
      route: '/contact'
    }
  ];



  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="w-full bg-main-color px-8">
        <Container className="py-6">
          <nav className="relative flex flex-wrap items-center mx-auto xl:px-0 text-white">

            {/* Logo  */}
            <Disclosure className="flex-initial">
              {({ open }) => (
                <>
                  <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                    <Link href="/">
                      <span className="flex items-center">
                        <span>
                          <Image
                            src="/logo-white.png"
                            alt="N"
                            width="130"
                            height="20"
                          />
                        </span>
                      </span>
                    </Link>

                    <Disclosure.Button
                      aria-label="Toggle Menu"
                      className="px-2 py-1 ml-auto    lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                      <svg
                        className="w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        {open && (
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                          />
                        )}
                        {!open && (
                          <path
                            fillRule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                          />
                        )}
                      </svg>
                    </Disclosure.Button>

                    <Disclosure.Panel className="flex flex-col w-full my-5 lg:hidden justify-center ">
                      <>
                        {navigation.map((item, index) => (
                          <Link key={index} href={item.route} className="w-full px-4 py-2 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                            {item.name}
                          </Link>

                        ))}
                        <AuthButton />
                        <ThemeChanger />
                      </>
                    </Disclosure.Panel>
                  </div>
                </>
              )}


            </Disclosure>

            {/* menu  */}
            <div className="hidden text-center lg:flex lg:flex-grow lg:justify-end lg:items-center lg:ml-14">
              <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                {navigation.map((menu, index) => (
                  <li className="mr-3 nav__item" key={index}>
                    <Link href={menu.route} className="inline-block px-4 py-2 text-base font-normal no-underline hover:text-button-bg focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 focus:rounded-md">
                      {menu.name}
                    </Link>

                  </li>

                ))}
                <li className="mr-4 nav__item"> <AuthButton /></li>
                <li className="mr-4 nav__item"> <ThemeChanger /></li>
              </ul>
            </div>
          </nav>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default Navbar;

