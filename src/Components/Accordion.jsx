import React, { useState } from 'react';

const Accordion = (props) => {
  // Initialize state to track the expanded state of the accordion
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Function to toggle the expansion state of the accordion
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

 

  return (
    <div className='rounded-lg border border-[#FFFFFF14]'>
        <h2 id="accordion-collapse-heading-1  ">
          <button
            type="button"
            className={`flex  items-center justify-between w-full p-5 font-medium rtl:text-right text-white ${isExpanded? 'bg-white/10 ' : 'bg-white/5'} gap-3`}
            onClick={toggleAccordion} // Toggle expansion when button is clicked
            aria-expanded={isExpanded} // Pass the expanded state to aria-expanded attribute
            aria-controls="accordion-collapse-body-1" 
          >
            <span className='sm:text-base font-medium md:text-xl text-lg  text-white'>{props.content.q}</span>
            {isExpanded ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-white md:text-3xl text-2xl mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></svg> : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-white md:text-3xl text-2xl mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path></svg>}
            
          </button>
        </h2>
        <div id="accordion-collapse-body-1" className={`px-8 drop-shadow-lg mt-[-8px]  bg-white/10 text-white ${isExpanded ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
          <p className="mb-2 text-white border-t border-t-white/30 font-light md:text-xl text-lg mt-2 py-4">{props.content.a}</p>
        </div>
    </div>
  );
};

export default Accordion;


