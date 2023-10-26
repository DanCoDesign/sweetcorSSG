"use client"
import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { ThemeChanger } from "./DarkSwitch";

const MobileDisclosure = (props) => {
    const dataArray = props.nav;

    return (
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

                        <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden justify-center ">
                            <><div className=""><ThemeChanger /></div>
                                {dataArray.map((item, index) => (
                                    <Link key={index} href={item.route} className="w-full px-4 py-2 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                                        {item.name}
                                    </Link>

                                ))}

                                <Link
                                    href="/contact"
                                    rel="noopener"
                                    className="px-12 py-3 text-regular font-bold text-main-color bg-white w-auto hover:text-button-bg hover:bg-transparent">
                                    <div className="flex justify-between items-center">
                                        Subscribe

                                    </div>

                                </Link>

                            </>
                        </Disclosure.Panel>
                    </div>
                </>
            )}


        </Disclosure>
    )
}
export default MobileDisclosure;