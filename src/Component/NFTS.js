
import Accordion from './Accordation';
import React from 'react';
import token1 from '../img/token1.png'
import token2 from '../img/token2.png'
import token3 from '../img/token3.png'
import token4 from '../img/token4.png'
import level1reward from '../img/level1reward.png'
import level2reward from '../img/level2reward.png'
import level3reward from '../img/level3reward.png'

const NFTS = () => {
    return (
        <>
        
            <div className='xl:w-[65%] w-[90%] mx-auto my-[1rem] '>
            <div className='lg:flex justify-between items-center py-[2rem]'>
                    <div className='md:flex justify-between mb-3'>
                        <div className='  md:w-[45%] w-[95%] m-auto mb-3 h-[300px] img-container'>
                            <img src={token1} alt="" className='object-cover w-full h-full  img-color-change cursor-pointer ' />
                        </div>
                        <div className='  md:w-[45%] w-[95%] m-auto mb-3 h-[300px] img-container'>
                            <img src={token2} alt="" className='object-cover w-full  h-full img-color-change cursor-pointer' />
                        </div>

                    </div>
                    <div className='md:flex justify-between mb-3'>
                        <div className='  md:w-[45%] w-[95%] m-auto mb-3 h-[300px] img-container'>
                            <img src={token3} alt="" className='object-cover w-full h-full  img-color-change cursor-pointer ' />
                        </div>
                        <div className='  md:w-[45%] w-[95%] m-auto mb-3 h-[300px] img-container'>
                            <img src={token4} alt="" className='object-cover w-full  h-full img-color-change cursor-pointer' />
                        </div>

                    </div>
                </div>
            </div>







            <div className='md:w-[80%] mx-auto w-[95%] bg-[black]  my-[1rem]'>
                <div className='for text'></div>
                <div className='lg:flex justify-between w-[90%] mx-auto'>
                    <div className='md:flex justify-around lg:w-[70%] w-full '>
                    <div className='lg:w-[45%] md:w-[48%]  w-full  mb-4  img-container'>
                        <img src={level1reward} alt="" className='img-color-change object-fill w-full h-[250px]' />
                    </div>

                    <div className='lg:w-[45%]  md:w-[48%]  mb-4  img-container'>
                        <img src={level2reward} alt="" className='img-color-change object-fill w-full h-[250px]' />
                    </div>
                    </div>
                    <div className='lg:w-[33%] mb-4  img-container'>
                        <img src={level3reward} alt="" className='img-color-change object-fill  w-full h-[250px]' />
                    </div>
                    
                </div>
            </div>




            <div className='w-[95%] mx-auto  bg-black'>
                <div className='for text'></div>
                <div className='py-4'> 
                    <Accordion heading={"Why is it called gaming?"} data={"The word gaming originated in the 15th century to refer to gambling in dice or card games. Gaming was used to refer to gambling until the late 1900s, where it was applied to playing recreational board games and pen-and-paper role-playing games."}/>
                    
                    
                </div>
            </div>
        </>
    );
}

export default NFTS;



