
function CollectionItem({ img, title, price }) {
    return (
        <div className="relative ">
            <div className="relative group">
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50"></div>
                <img className="w-full " src={img} alt="A girl Posing Img" />
                <div className="absolute bottom-0 w-full p-8 opacity-0 group-hover:opacity-100">
                    <button className="w-full py-3 text-base font-medium leading-4 text-gray-800 bg-white ">Add to bag</button>
                    <button className="w-full py-3 mt-2 text-base font-medium leading-4 text-white bg-transparent border-2 border-white ">Quick View</button>
                </div>
            </div>
            <p className="mt-4 text-xl font-normal leading-5 text-gray-800 md:mt-6">{title}</p>
            <p className="mt-4 text-xl font-semibold leading-5 text-gray-800 ">{price}</p>

        </div>
    )
}

export default CollectionItem
