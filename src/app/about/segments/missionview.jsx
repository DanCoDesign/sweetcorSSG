export default function MissionView() {
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 px-10 py-12 lg:px-20 lg:py-24 bg-[#F4F0F8] dark:bg-[#2E3040]">
            <div className="flex flex-col space-y-4">
                <span className="uppercase font-semibold">Our mission</span>
                <h3 className="font-bold text-[28px] lg:text-[32px] ] tracking-tighter leading-tight">
                    Creating valuable content for creatives all around the world
                </h3>
                <p className="max-w-5/12 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>

            </div>
            <div className="flex flex-col space-y-4">
                <span className="uppercase font-semibold">Our vision</span>
                <h3 className="mb-3 font-bold text-[28px] lg:text-[32px] tracking-tighter leading-tight">
                    A platform that empowers individuals to improve
                </h3>
                <p className=" max-w-5/12 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </section>
    )
}


