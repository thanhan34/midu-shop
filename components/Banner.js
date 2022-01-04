
function Banner() {
    return (
        <div className="container flex flex-col items-center justify-center px-6 py-12 mx-auto xl:px-0">
            <div className="flex flex-row items-stretch justify-between bg-gray-50">
                <div className="flex items-center justify-center bg-gray-800">
                    <p className="flex flex-shrink-0 text-2xl font-semibold leading-normal tracking-wide text-white transform -rotate-90">50% OFF</p>
                </div>
                <div className="flex flex-col items-start justify-center px-6 py-5 xl:w-2/5 md:w-5/12 xl:px-7 md:px-0 md:py-0">
                    <div>
                        <p className="text-3xl font-semibold leading-9 text-gray-800 xl:text-4xl">Act before it’s too late! <br /> GET UP TO 50% OFF NOW</p>
                    </div>
                    <div className="mt-2 xl:mt-4">
                        <p className="pr-4 text-base leading-7 text-gray-600 xl:text-xl">The greatest selection of sale piecies from the world's best designers. Avail the 50% offer now.</p>
                    </div>
                </div>
                <div className="hidden md:block h-44 md:h-80 xl:h-96">
                    <img className="hidden h-full xl:block" src="/banner.jpg" alt="pexels-dmitry-zvolskiy-2082090-1" />
                    <img className="h-full xl:hidden" src="/banner.jpg" alt="pexels-dmitry-zvolskiy-2082090-1-1" />
                </div>
            </div>
            <div className="w-full mt-6 md:hidden">
                <img src="/banner.jpg" alt="pexels-dmitry-zvolskiy-2082090-1" className="w-full" />
            </div>
        </div>
    )
}

export default Banner
