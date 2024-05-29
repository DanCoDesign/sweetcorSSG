const PostsSkeleton = () => {
    return (
        <section className="basis-12/12 lg:basis-5/12">


            <div className="flex py-6 animate-pulse">
                <div className="bg-gray-200 dark:bg-[#2E3040] rounded-lg w-full p-4">
                    <div className="flex space-x-4 items-start">
                        <div className="flex-1 space-y-4 py-1">
                            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                            <div className="h-8 bg-gray-300 rounded"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-300 rounded"></div>
                                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostsSkeleton