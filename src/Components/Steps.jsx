import React from 'react'

const Steps = (props) => {
    // const obj = [
    //     {
    //         img : 'images/imageStep1.webp',
    //         title : 'Step#1',
    //         desc : 'Access Intelliwriter AI Image Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.'
    //     },
    //     {
    //         img : 'images/imageStep1.webp',
    //         title : 'Step#1',
    //         desc : 'Access Intelliwriter AI Image Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.'
    //     },
    //     {
    //         img : 'images/imageStep1.webp',
    //         title : 'Step#1',
    //         desc : 'Access Intelliwriter AI Image Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.'
    //     },
    //     {
    //         img : 'images/imageStep1.webp',
    //         title : 'Step#1',
    //         desc : 'Access Intelliwriter AI Image Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.'
    //     },
    // ]
  return (
    <>
    <div>
        <div className='w-11/12 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-16'>
            {
                props.obj.map((o) =>{
                    return <div className='w-full flex flex-col justify-center items-center text-white'>
                            <div className='rounded-md shadow-[#ac7aeb] shadow-2xl'>
                                <img className='' src={o.img} alt="" />
                            </div>
                            <div className='flex flex-col pt-5'>
                                <h3 className='text-lg md:text-xl font-semibold text-center my-2'>{o.title}</h3>
                                <p
                                    className='text-base md:text-lg text-center'>{o.desc}</p>
                            </div>
                        </div>
                })
            }
        </div>
    </div>

    </>
  )
}

export default Steps