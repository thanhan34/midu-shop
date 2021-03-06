

function Header() {

    return (
        <header className="text-gray-600 body-font ">
            <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="57.000000pt" height="57.000000pt" viewBox="0 0 657.000000 657.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,657.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M2242 3756 c-116 -212 -124 -247 -68 -314 52 -60 298 -200 506 -287 69 -29 165 -82 215 -119 55 -41 58 -39 28 15 -17 30 -54 97 -83 149 -29 52 -66 112 -82 133 -17 21 -96 82 -177 137 -171 116 -248 181 -267 227 -21 49 -18 137 7 184 11 23 19 42 17 44 -2 1 -45 -74 -96 -169z" />
                            <path d="M492 3268 l3 -603 373 -3 372 -2 0 40 0 40 -335 0 -335 0 0 565 0 565 -40 0 -40 0 2 -602z" />
                            <path d="M3420 3265 l0 -605 375 0 375 0 0 40 0 40 -337 2 -338 3 -3 563 -2 562 -35 0 -35 0 0 -605z" />
                            <path d="M4280 3265 l0 -605 375 0 375 0 0 40 0 40 -335 0 -335 0 0 565 0 565 -40 0 -40 0 0 -605z" />
                            <path d="M5587 3863 c-4 -6 -463 -1135 -484 -1189 -3 -8 8 -11 39 -10 l43 1 77 190 76 190 280 3 280 2 62 -157 c92 -232 93 -233 136 -233 34 0 36 2 30 25 -4 14 -78 206 -166 427 -87 222 -190 482 -228 578 l-69 175 -35 3 c-20 2 -38 -1 -41 -5z m173 -455 c59 -153 105 -280 102 -283 -7 -7 -477 -7 -484 0 -3 3 47 137 112 298 64 161 120 301 124 312 10 25 5 38 146 -327z" />
                            <path d="M2007 3318 c-177 -303 -264 -464 -256 -472 6 -6 12 -6 18 0 17 17 273 506 268 511 -3 2 -17 -15 -30 -39z" />
                            <path d="M2685 3114 c-43 -35 -183 -90 -455 -181 -281 -95 -474 -170 -558 -219 -24 -14 -56 -44 -73 -67 -35 -48 -118 -200 -148 -271 l-21 -48 37 33 c66 57 190 107 411 164 260 67 776 209 856 236 150 51 257 139 236 196 -9 23 -100 90 -191 141 -65 37 -67 37 -94 16z" />
                            <path d="M3010 2872 c0 -27 241 -493 253 -489 17 6 13 16 -57 146 -35 64 -89 166 -121 226 -60 115 -75 138 -75 117z" />
                        </g>
                    </svg>

                    {/* <span className="ml-3 text-xl uppercase">Lalla</span> */}
                </a>
                <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400">
                    <a className="mr-5 hover:text-gray-900">Home</a>
                    <a className="mr-5 hover:text-gray-900">Best Seller</a>
                    <a className="mr-5 hover:text-gray-900">New Arrivals</a>
                    {/* <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
                </nav>
                <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-pink-600 border-0 rounded-full hover:border-2 hover:border-pink-700 animate-pulse focus:outline-none hover:bg-white md:mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Header
