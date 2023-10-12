import Link from "next/link";

const AboutSection = () => {
    return (
        <section className="w-full">

            <div className="grid grid-cols-4 gap-0 h-5 w-full grid-flow-row">
                <div class="bg-white col-span-1 dark:bg-[#2E3040]"></div>
                <div class="bg-button-bg col-span-2"></div>
                <div class="bg-[#592EA9] col-span-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-20 px-20 py-24 ">
                <div className="flex flex-col space-y-4">
                    <span className="uppercase mb-6">About Us</span>
                    <h1 className="font-bold sm:text-[28px] lg:text-[32px] xl:text-[36px] tracking-tighter leading-tight">
                        We are a community of content writers who share their learnings
                    </h1>
                    <p className="max-w-5/12 text-base">
                        The featured post section description is a succinct follow-up to a compelling headline. Keep it brief, straightforward, and pointedly descriptive.
                    </p>

                    <Link href="#" className="py-3 space-y-3 sm:space-x-4 lg:space-y-0 text-[#592EA9] dark:text-[#ffffff8f] font-bold">
                        Read More &gt;
                    </Link>


                </div>
                <div className="flex flex-col">
                    <span className="uppercase mb-6">Our mission</span>
                    <h1 className="mb-3 font-bold sm:text-[28px] lg:text-[32px] xl:text-[36px] tracking-tighter leading-tight">
                        Creating valuable content for creatives all around the world
                    </h1>
                    <p className="mb-8 max-w-5/12 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

            </div>

        </section>
    )
}


export default AboutSection;