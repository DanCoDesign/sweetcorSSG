import Link from "next/link";

const Testimonial = () => {
    return (
        <section className="w-full">


            <div className="grid grid-cols-1 lg:grid-cols-8  gap-10 p-8 lg:px-20 lg:py-24 bg-[#FBF6EA] dark:bg-[#2E3040] min-h-[450px] place-items-center lg:place-items-start">
                <div className="flex flex-col space-y-4 lg:col-span-3" >
                    <span className="uppercase">Testimonials</span>
                    <h2 className="font-bold sm:text-[28px] lg:text-[32px] xl:text-[36px] tracking-tighter leading-tight">
                        What people say about our blog
                    </h2>
                    <p className="lg:max-w-5/12 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                </div>
                <div className="flex flex-col space-y-4 border-t py-8 lg:border-t-0 lg:border-l border-gray-300 lg:px-20 lg:col-span-5">
                    <h4 className="font-bold text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>

                    <Profile />
                </div>

            </div>

        </section>
    )
}

const Profile = () => {
    return (
        <div className="grid grid-rows-2 grid-flow-col gap-1 justify-start">
            <div className="bg-gray-300 rounded-full w-12 h-12 row-span-3 mx-3"></div>
            <h4 className="col-span-2">Jonathan Vallem</h4>
            <span className="col-span-2">New york, USA</span>
        </div>
    )
}

export default Testimonial;