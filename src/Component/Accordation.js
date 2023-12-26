import React, { useState } from 'react';

const Accordion = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
<div className='flex md:w-[50%] w-[80%] mx-auto my-5'>
<div className='w-[3px] h-[65px] bg-[orange] text-white mr-2'></div>
         <div className="w-[100%] " id="accordion-collapse" data-accordion="collapse">
             <h2 id="accordion-collapse-heading-1">
                <button
                    type="button"
                    onClick={toggleAccordion}
                    className="flex items-center justify-between w-full mx-auto p-5 font-medium bg-[orange] text-white "
                    aria-expanded={isOpen}
                    aria-controls="accordion-collapse-body-1"
                >
                    <span className='text-base'>{props.heading}</span>
                    <svg
                        data-accordion-icon
                        className={`w-3 h-3 text-white ${isOpen ? '' : 'rotate-180'} shrink-0`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            {isOpen && (
                <div id="accordion-collapse-body-1" className='w-[100%]' aria-labelledby="accordion-collapse-heading-1">
                    <div className="p-5 text-xs leading-6 text-[orange]   bg-[black] border border-[orange] opacity-75">

                        <h1>{props.data}</h1>
                    </div>
                </div>
            )}
        </div>

        </div>
</>

    );
};

export default Accordion;
