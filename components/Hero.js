import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { shuffle } from "lodash"
import HeroImage from './HeroImage'
const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]


function Hero() {
    const [isChangeHero, setIsChangeHero] = useState(false)
    const [images, setImages] = useState(["/hero01.jpg", "/hero02.jpg", "/hero03.jpg", "/hero04.jpg", "/hero05.jpg", "/hero06.jpg", "/hero07.jpg"])
    useEffect(() => {
        setImages(shuffle(images))
    }, [isChangeHero])

    return (
        <div className="relative h-full overflow-hidden bg-gradient-to-r from-pink-400 to-pink-600">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 sm:static lg:text-left ">
                    <div className=" lg:max-w-lg">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white font sm:text-6xl">
                            Summer styles are finally here
                        </h1>
                        <p className="mt-4 text-xl text-gray-300">
                            This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                            if you live or die.
                        </p>
                        <a

                            className="inline-block w-full px-8 py-3 mt-10 text-sm leading-none text-center text-black border border-gray-800 lg:w-auto hover:text-gray-50 hover:bg-gray-800 focus:outline-none lg:px-10 lg:py-4"
                            onClick={() => setIsChangeHero(!isChangeHero)}
                        >
                            Shop Collection
                        </a>
                    </div>
                    <div>
                        <div className="mt-10 text-center ">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full "
                            >
                                <div className="transform lg:absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 md:rotate-6">
                                    <div className="flex flex-col items-center space-x-6 space-y-6 xl:flex-row lg:space-x-8">
                                        <div className="flex gap-x-4 xl:grid xl:flex-shrink-0 xl:grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <HeroImage img={images[0]} />
                                            <HeroImage img={images[1]} />
                                        </div>
                                        <div className="flex gap-x-4 xl:grid xl:flex-shrink-0 xl:grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <HeroImage img={images[2]} />
                                            <HeroImage img={images[3]} />
                                            <HeroImage img={images[4]} />
                                        </div>
                                        <div className="flex gap-x-4 xl:grid xl:flex-shrink-0 xl:grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <HeroImage img={images[5]} />
                                            <HeroImage img={images[6]} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
