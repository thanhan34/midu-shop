import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
function Carousels() {
    return (
        <div className="container mx-auto">
            <div className="py-6 mt-32 text-center bg-gray-50 lg:py-10 md:py-8">
                <p className="w-10/12 mx-auto text-3xl font-semibold leading-9 text-center text-gray-800 md:w-full lg:text-4xl lg:leading-9 md:leading-7">New Arrivals</p>
                <p className="mt-4 text-xl font-semibold leading-5 text-gray-800">Stay ahead of the style curve with our latest arrivals</p>
            </div>
            <div className="flex items-center justify-center w-full h-full px-4 py-24 sm:py-8">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="hidden lg:block"
                    naturalSlideWidth={100}
                    isIntrinsicHeight={true}
                    totalSlides={12}
                    visibleSlides={4}
                    isPlaying={true}
                    step={1}
                    infinite={true}>
                    <div className="relative flex items-center justify-center w-full">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute left-0 z-30 ml-8 cursor-pointer focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="flex items-center justify-start h-full transition duration-700 ease-out lg:gap-8 md:gap-6 gap-14">
                                    <Slide index={0}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C1.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C2.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C3.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C4.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C5.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C6.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C7.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C8.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C9.jpg" alt="black chair and white table" className="object-cover object-center w-full" />

                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C10.jpg" alt="sitting area" className="object-cover object-center w-full" />

                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C11.jpg" alt="sitting area" className="object-cover object-center w-full" />

                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C12.jpg" alt="sitting area" className="object-cover object-center w-full" />

                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute right-0 z-30 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="hidden lg:hidden md:block" isPlaying={true} naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
                    <div className="relative flex items-center justify-center w-full">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute left-0 z-30 ml-8 cursor-pointer focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="flex items-center justify-start h-full transition duration-700 ease-out lg:gap-8 md:gap-6 gap-14">
                                    <Slide index={0}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C1.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C2.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C3.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C4.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C5.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C6.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C7.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C8.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C9.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C10.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C11.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C12.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute right-0 z-30 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " isPlaying={true} naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
                    <div className="relative flex items-center justify-center w-full">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute left-0 z-30 ml-8 cursor-pointer focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="flex items-center justify-start w-full h-full transition duration-700 ease-out lg:gap-8 md:gap-6">
                                    <Slide index={0}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C1.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C2.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C3.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C4.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C5.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C6.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C7.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C8.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C9.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C10.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C11.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                            <img src="/C12.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute right-0 z-30 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    )
}

export default Carousels
