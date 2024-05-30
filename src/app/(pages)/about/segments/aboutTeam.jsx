const teamphoto = {
    backgroundImage:
        "url('./grouphands.png')",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right'
};

export default function AboutTeam() {
    return (
        <section className="flex flex-col md:flex-row gap-8 lg:gap-20 mt-20 xl:mt-32 justify-center ">
            <div className="flex flex-col px-10 md:px-0 space-y-4 md:w-1/2 justify-center py-8">
                <h2 className="text-3xl font-bold">Our team of creatives</h2>
                <p className="font-bold text-lg leading-tight">
                    Creates valuable content for creatives all around the world
                </p>
                <p className="max-w-5/12 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                </p>
            </div>
            <div
                className="flex w-full md:w-1/2 mx-auto h-[360px] md:h-[480px]"
                style={teamphoto}
            ><div className="hidden lg:block absolute h-14 lg:h-28 w-12 lg:w-24 bg-yellow-300 mt-28 lg:-ml-12 xl:ml-0 rounded-tl-[42px]"></div>
            </div>


        </section>
    )
}


