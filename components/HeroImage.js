
function HeroImage({ img }) {
    return (
        <div className="w-32 h-48 overflow-hidden rounded-lg ">
            <img
                src={img}
                alt=""
                className="object-cover object-center w-full h-full"
            />
        </div>
    )
}

export default HeroImage
