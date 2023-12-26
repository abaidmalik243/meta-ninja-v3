import React, { useState, useRef, useEffect } from 'react';

const Dropdown = () => {
    const [isHovering, setIsHovering] = useState(false);
    const ref = useRef(null);

    // Event listeners to set hover state
    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    // Use Effect Hook to add event listeners to the ref
    useEffect(() => {
        const node = ref.current;
        if (node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);

            // Remove event listeners on cleanup
            return () => {
                node.removeEventListener('mouseover', handleMouseOver);
                node.removeEventListener('mouseout', handleMouseOut);
            };
        }
    }, []);

    return (
        <div ref={ref} className=''>
            <button className=" text-[#EC9C2E] font-medium  text-base  text-center inline-flex items-center " type="button">
                More
            
            </button>

            {isHovering && (
                <div className="absolute z-10 bg-black divide-y divide-gray-100 rounded-lg hadow w-44 -700">
                    <ul className=" text-base  text-[#EC9C2E] bg-black">
                        <li>
                            <a href="#" className="block px-4 my-2 py-2 ">UPDATE 2.1</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 my-2 py-2 ">BUILD  PLANNER</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 my-2 py-2 ">MY REWARDS</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 my-2 py-2 ">MEDIA</a>
                        </li>
                       
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
