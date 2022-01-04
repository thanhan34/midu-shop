
function Feature() {
    return (
        <div className="xl:mx-auto xl:container">
            <div className="px-4 py-8 lg:px-20 md:px-6 md:py-12">
                <div className="flex flex-col-reverse items-center lg:flex-row">
                    <div className="w-full py-6 lg:w-1/2 md:py-9">
                        <img src="/feature2 (2).jpg" alt="bag" className="object-cover object-center w-full h-full lg:w-full" />
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 lg:pr-24">
                        <p className="pb-2 text-sm leading-none text-gray-600">Featured</p>
                        <p className="pb-2 text-2xl font-semibold text-gray-800 md:text-3xl lg:text-4xl lg:leading-9 lg:pb-6 md:pb-4">Luxe New York Streak</p>
                        <p className="pb-8 text-sm leading-5 text-gray-600 md:pb-10">Start off the new year by hitting the ground running with this purpose built workman’s bag. A culmination of productivity and luxury</p>
                        <div className="flex items-center justify-center md:block">
                            <button className="w-full py-3 text-sm leading-none text-gray-800 border border-gray-800 lg:w-auto hover:text-gray-50 hover:bg-gray-800 focus:outline-none lg:px-10 px-7 lg:py-4">Shop best sellers</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
