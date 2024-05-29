const FeaturedSkeleton = ({ blog }) => {
    return (
        blog ? (
            <section className="basis-12/12 lg:basis-7/12">
                <div className="animate-pulse w-full p-20">
                    <div className="flex flex-row-reverse gap-8 py-16">
                        <div className="bg-gray-200 rounded-lg h-64 w-full"></div>
                        <div className="space-y-4 w-full">
                            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-300 rounded"></div>
                                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                            </div>
                            <div className="flex my-8">
                                <div className="px-12 py-4 bg-gray-300 rounded-md h-12 w-32"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ) : (
            <section className="basis-12/12 lg:basis-7/12">
                <div className="animate-pulse w-full">
                    <div className="flex flex-col space-y-4 py-16">
                        <div className="bg-gray-200 rounded-lg h-64 w-full"></div>
                        <div className="space-y-4 w-full">
                            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-300 rounded"></div>
                                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                            </div>
                            <div className="flex my-8">
                                <div className="px-12 py-4 bg-gray-300 rounded-md h-12 w-32"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    );
};

export default FeaturedSkeleton;
