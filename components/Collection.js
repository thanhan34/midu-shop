import CollectionItem from "./CollectionItem"

function Collection() {
    const products = [
        {
            title: "Doly Dress",
            price: "$1500",
            img: "/product01.jpg",
        },
        {
            title: "Vest Dress",
            price: "$1900",
            img: "/product02.jpg",
        },
        {
            title: "Leva Dress",
            price: "$1300",
            img: "/product03.jpg",
        },
        {
            title: "Dako Dress",
            price: "$1100",
            img: "/product04.jpg",
        },
        {
            title: "Hoda Dress",
            price: "$1600",
            img: "/product05.jpg",
        },
        {
            title: "Lola Dress",
            price: "$1200",
            img: "/product06.jpg",
        },
        {
            title: "Lily Top",
            price: "$1700",
            img: "/product07.jpg",
        },
        {
            title: "Rose Dress",
            price: "$1400",
            img: "/product08.jpg",
        },
    ]
    return (
        <div className=" 2xl:container 2xl:mx-auto bg-gradient-to-r from-pink-400 to-pink-600">
            <div className="py-6 text-center bg-gray-50 lg:py-10 md:py-8">
                <p className="w-10/12 mx-auto text-3xl font-semibold leading-9 text-center text-gray-800 md:w-full lg:text-4xl lg:leading-9 md:leading-7">Our Selections</p>
                <p className="mt-4 text-xl font-semibold leading-5 text-gray-800 ">Discover our fashion collection. </p>
            </div>
            <div className="px-4 py-6 lg:px-20 md:px-6">
                <hr className="w-full my-6 bg-gray-200 " />
                <div className="grid grid-cols-1 mt-10 lg:grid-cols-4 sm:grid-cols-2 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12">
                    {
                        products.map(product => (
                            <CollectionItem
                                key={product.img}
                                title={product.title}
                                img={product.img}
                                price={product.price} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Collection
