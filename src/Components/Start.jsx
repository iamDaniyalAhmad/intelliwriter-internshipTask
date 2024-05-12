import React from 'react'

const Start = (props) => {
  return (
    <div className="w-full my-[80px] ">
      <img className='w-full h-[270px]' src="images/land_bg.webp" alt="" />
      <div className=' mt-[-190px] text-white md:flex text-center md:flex-col'>
        <h3 className='md:text-4xl text-3xl mx-auto'>{props.title}</h3>
        <button type="button" class=" mx-auto bg-gradient-to-bl transition-all duration-300 from-[#471c7c] to-[#7628d6] hover:opacity-90 py-2.5 tracking-wider lg:text-base text-sm text-white font-medium md:px-6 px-4 rounded-full mt-8 text-2xl "><span class="flex-1">Start Now !</span></button>
      </div>
    </div>
  )
}

export default Start
