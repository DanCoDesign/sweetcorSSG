import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "../Container";

export default function Footer() {
  const navigation = [
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'Blog',
      route: '/#features'
    },
    {
      name: 'About Us',
      route: '/about'
    },
    {
      name: 'Contact Us',
      route: '/contact'
    },
    {
      name: 'Privacy Policy',
      route: '/privacy'
    }
  ];
  return (
    <div className="relative bg-main-color px-8">
      <Container>
        <nav className="relative flex flex-wrap items-center mx-auto xl:px-0 text-white py-14">
          <div className="w-full lg:w-auto text-center lg:text-left">
            <Link href="/">
              <span className="flex items-center justify-center lg:justify-start">
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
          </div>
          {/* menu  */}
          <div className="w-full lg:w-auto flex flex-grow justify-center lg:justify-end items-center mt-6 lg:mt-0">
            <ul className="items-center justify-center lg:justify-end pt-6 lg:pt-0 lg:flex">
              {navigation.map((menu, index) => (
                <li key={index } className="text-center">
                  <Link href={menu.route} className="inline-block lg:pl-8 py-2 text-base font-normal no-underline hover:text-button-bg focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-10 py-12 lg:px-20 lg:py-24 bg-[#2E3040]">
          <div className="flex flex-col space-y-4">
            <h1 className="font-bold text-[28px] xl:text-[36px] tracking-tighter leading-tight  text-white">
              Subscribe to our news letter to get latest updates and news
            </h1>
          </div>
          <div>
            <form action="#" className="flex flex-col lg:flex-row items-center lg:items-end justify-end">

              <input type="email" placeholder="Enter Your Email" className=" lg:basis-4/6 px-4 py-4 bg-transparent text-white lg:mr-6 focus:outline-none border border-[#4C4C4C]" />

              <Link
                href="/contact"
                rel="noopener"
                className="my-4 lg:my-0 px-12 py-4 font-bold j text-main-color bg-button-bg w-auto max-w-[180px] rounded-md">
                <div className="flex justify-between items-center text-base">
                  Subscribe

                </div>

              </Link>
            </form>
          </div>

        </div>


        <div className="flex justify-between py-10 flex-col lg:flex-row text-center ">
          <p className="text-sm text-gray-100">
            Copyright © {new Date().getFullYear()}. DanCoDesign. All right reserved.<br />
            contact@dancodesign.com
          </p>

          <div className="flex  justify-end mt-5 space-x-5 text-gray-300">
            <Link
              href="https://twitter.com/#"
              target="_blank"
              rel="noopener">
              <span className="sr-only">Twitter</span>
              <Twitter />
            </Link>
            <Link
              href="https://facebook.com/"
              target="_blank"
              rel="noopener">
              <span className="sr-only">Facebook</span>
              <Facebook />
            </Link>
            <Link
              href="https://instagram.com/"
              target="_blank"
              rel="noopener">
              <span className="sr-only">Instagram</span>
              <Instagram />
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener">
              <span className="sr-only">Linkedin</span>
              <Linkedin />
            </Link>
          </div>

        </div>

      </Container>


      {/* Do not remove this */}
      <Backlink />
    </div>
  );
}

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

const Backlink = () => {
  return (
    <Link
      href="https://dancodesign.com"
      target="_blank"
      rel="noopener"
      className="absolute flex px-2 py-1 space-x-2 text-sm font-semibold rounded shadow-sm place-items-center left-5 bottom-5 bg-gray-700 text-gray-200">
      <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13.4881 6.44591C13.8882 6.55311 14.1256 6.96437 14.0184 7.36447L11.4302 17.0237C11.323 17.4238 10.9117 17.6613 10.5116 17.5541C10.1115 17.4468 9.8741 17.0356 9.98131 16.6355L12.5695 6.97624C12.6767 6.57614 13.088 6.3387 13.4881 6.44591ZM14.9697 8.46967C15.2626 8.17678 15.7374 8.17678 16.0303 8.46967L16.2387 8.67801C16.874 9.3133 17.4038 9.84308 17.7678 10.3202C18.1521 10.8238 18.4216 11.3559 18.4216 12C18.4216 12.6441 18.1521 13.1762 17.7678 13.6798C17.4038 14.1569 16.874 14.6867 16.2387 15.322L16.0303 15.5303C15.7374 15.8232 15.2626 15.8232 14.9697 15.5303C14.6768 15.2374 14.6768 14.7626 14.9697 14.4697L15.1412 14.2981C15.8229 13.6164 16.2797 13.1574 16.5753 12.7699C16.8577 12.3998 16.9216 12.1843 16.9216 12C16.9216 11.8157 16.8577 11.6002 16.5753 11.2301C16.2797 10.8426 15.8229 10.3836 15.1412 9.70191L14.9697 9.53033C14.6768 9.23744 14.6768 8.76257 14.9697 8.46967ZM7.96986 8.46967C8.26275 8.17678 8.73762 8.17678 9.03052 8.46967C9.32341 8.76257 9.32341 9.23744 9.03052 9.53033L8.85894 9.70191C8.17729 10.3836 7.72052 10.8426 7.42488 11.2301C7.14245 11.6002 7.07861 11.8157 7.07861 12C7.07861 12.1843 7.14245 12.3998 7.42488 12.7699C7.72052 13.1574 8.17729 13.6164 8.85894 14.2981L9.03052 14.4697C9.32341 14.7626 9.32341 15.2374 9.03052 15.5303C8.73762 15.8232 8.26275 15.8232 7.96986 15.5303L7.76151 15.322C7.12617 14.6867 6.59638 14.1569 6.23235 13.6798C5.84811 13.1762 5.57861 12.6441 5.57861 12C5.57861 11.3559 5.84811 10.8238 6.23235 10.3202C6.59638 9.84308 7.12617 9.31331 7.76151 8.67801L7.96986 8.46967Z" fill="#1C274C"></path> </g></svg><span>DancoDesign</span>
    </Link>
  );
};
