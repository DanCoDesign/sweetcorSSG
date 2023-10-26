"use client"
import Link from "next/link";
import { ThemeChanger } from "./DarkSwitch";
import { ThemeProvider } from "./theme-provider";
import Container from "../Container";
import MobileDisclosure from "./MobileDisclosure";

import AuthButton from "./AuthButton";

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
        <Container className="py-4">
          <nav className="relative flex flex-wrap items-center mx-auto xl:px-0 text-white">

            {/* Logo  */}
            <MobileDisclosure nav={navigation} />

            {/* menu  */}
            <div className="hidden text-center lg:flex lg:flex-grow lg:justify-end lg:items-center lg:ml-14">
              <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                {navigation.map((menu, index) => (
                  <li className="mr-3 nav__item" key={index}>
                    <Link href={menu.route} className="inline-block px-4 py-2 text-base font-normal no-underline hover:text-button-bg focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mr-3 space-x-4 lg:flex nav__item mx-auto">

              <AuthButton />

              

              <ThemeChanger />


            </div>
          </nav>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default Navbar;

