import React from 'react'

const Hero = (props) => {
    return (
        <>
        <div>
            <div className='w-100  md:p-7  md:py-20 md:flex h-full text-white bg-gradient-to-b from-[#471c7c]/40 to-[#030616]/20 '>
                <div className='md:w-1/2 py-9 md:pr-[70px]  md:text-start text-center'>
                    <h1 className='md:text-5xl text-3xl px-10 font-semibold capitalize'>{props.heroContent.title}</h1>
                    <p className='mt-7 px-10 md:text-lg'>{props.heroContent.desc}</p>
                    <button className='  mt-7 rounded-3xl md:mx-10 md:px-10  px-3 bg-gradient-to-bl transition-all duration-300 from-[#471c7c] to-[#7628d6] hover:opacity-90  py-2.5' >{props.heroContent.btntext}</button>
                </div>
                <div className='w-full lg:w-1/2 pt-5 md:pt-5 lg:pt-0  justify-center'>
                    <img className=' h-[20rem] md:w-[30rem] md:h-[30rem] mx-auto z-10  rounded-2xl' src="images/imagecontent.jpeg" alt="" />
                </div>
            </div>
            </div>
        </>
    )
}

export default Hero