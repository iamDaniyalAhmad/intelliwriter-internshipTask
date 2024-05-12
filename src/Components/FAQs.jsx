import React from 'react'
import Accordion from './Accordion';

const FAQs = (props) => {
    
  return (
    <div className=' w-11/12 px-4 mx-auto'>
    <div id="accordion-collapse" data-accordion="collapse">
            {props.question.map((ques, index) => ( 
              <div className="mb-3">  
              <Accordion key={index} content={ques} />
              </div>
           ))}
    </div>
    </div>

  )
}

export default FAQs
