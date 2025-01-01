import React from 'react'

const Hero = ({
    image,
    mainHeader,
    secondaryHeader
}) => {
    return (
        <div>
            <div className="relative h-screen w-full">
                <Image src={image}/> 
                <div className='absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center gap-8'>
                    <h2 className='tedt-white text-6xl font-bold'>
                        {mainHeader}
                    </h2>
                    <h2 className='tedt-white text-6xl font-bold'>
                        {secondaryHeader}
                    </h2>

                </div>
            </div>
        </div>
    )
}

export default Hero
