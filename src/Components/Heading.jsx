import React from 'react'

const Heading = (props) => {
  return (
    <>
    <div className="">
        <div className='h-full py-16 w-11/12 mx-auto  '>
        <h2 class="lg:text-6xl text-4xl md:text5xl font-normal relative lg:p-10 md:p-6 p-2"><span class="border-text text-white opacity-50  md:top-3 lg:top-4 top-0 lg:left-10">{props.headingContent.title}</span><span class="gradient-span-1 text-white relative lg:p-6 p-3 font-[600]">{props.headingContent.title2}</span></h2>
        <p class="md:text-[21px] text-[15px] font-[500] leading-[36px] !text-white lg:px-10 md:p-6 p-4">{props.headingContent.desc}</p>
        </div>

    </div>
    </>
  )
}

export default Heading