const whyimg = {
    backgroundImage:
        "url('./whyphoto.png')",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left'
};

export default function WhyStarted() {
    return (
        <section className="flex flex-col-reverse md:flex-row sm:gap-8 mt-20 xl:mt-32 justify-center ">

            <div className="flex w-full md:w-1/2 h-[360px] md:h-[480px]" style={whyimg}>
            </div>
            <div className="flex flex-col px-10 md:px-0 space-y-4 md:w-1/2 justify-center py-8 lg:py-20">
                <h2 className="text-3xl font-bold">Why we started this Blog</h2>
                <p className="font-bold text-lg leading-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p className="max-w-5/12 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                </p>

            </div>
        </section>
    )
}


