import React from 'react'

const Tools = (props) => {
    
  return (
    <div>
        <div className='w-full md:w-11/12 px-4 justify-center items-center md:mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
            {
                props.Aitools.map((tool) =>{
                    return <div className='flex items-center bg-blue-900 p-3 gap-3 bg-opacity-20 w-[95%] lg:w-[100%] mx-auto '>
                        <span className='items-center justify-center block w-8 h-8 rounded-md text-lg p-2' style={{background:tool.bgColor, color:tool.color}}>
                            {tool.source}
                        </span>
                        <div className="text text-white mx-2">
                            <h4 className='text-xl'> {tool.title}</h4>
                        </div>

                    </div>
                })
            }
        </div>
      
    </div>
  )
}

export default Tools
