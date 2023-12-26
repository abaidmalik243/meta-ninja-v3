import React, { useState } from 'react'
import ninja from '../img/character2.jpg'
import gameupdates from '../img/character1.jpg'



const Stakehome = () => {


    return (
        <>
            <div className=' text-center sm:py-[3rem] py-[1rem] md:my-0 my-[2rem]'>
                <div className='lg:flex block lg:p-0 px-[1rem] justify-around items-center mb-[rem]'>
                    <div className='lg:w-[40%] w-[90%] md:w-[95%] m-auto img-container'>
                        <img src={gameupdates} className='object-fit img-color-change cursor-pointer w-[100%] md:h-[500px] h-[300px]' alt="" />
                    </div>
                    <div className='lg:w-[50%] w-[100%] m-auto mt-[2rem] my-[2rem]'>
                        <div className='md:flex justify-around my-[2rem]'>
                            <div className=' img-container md:w-[45%] w-[90%] m-auto lg:my-0  my-0.52rem]'>
                                <img src={ninja} className='object-fit img-color-change cursor-pointer w-[100%] sm:h-[300px] md:h-[200px] h-[220px]' alt="" />
                                <h1 className='sm:text-xl lg:text-sm xl:text-xl text-[orange] py-2 font-semibold'>Meta Ninja 2084:ULTIMATE...</h1>
                            </div>
                            <div className=' img-container md:w-[45%] w-[90%] m-auto lg:my-0 my-[0.5rem]'>
                                <img src={ninja} className='object-fit img-color-change cursor-pointer w-[100%] sm:h-[300px] md:h-[200px] h-[220px]' alt="" />
                                <h1 className='sm:text-xl lg:text-sm xl:text-xl text-[orange] py-2 font-semibold'>Meta Ninja 2084:ULTIMATE...</h1>
                            </div>

                        </div>
                        <div className='md:flex justify-around my-[2rem]'>
                            <div className=' img-container md:w-[45%] w-[90%] m-auto lg:my-0 my-[0.5rem]'>
                                <img src={ninja} className='object-fit img-color-change cursor-pointer w-[100%] sm:h-[300px] md:h-[200px] h-[220px]' alt="" />
                                <h1 className='sm:text-xl lg:text-sm xl:text-xl text-[orange] py-2 font-semibold'>Meta Ninja 2084:ULTIMATE...</h1>
                            </div>
                            <div className=' img-container md:w-[45%] w-[90%] m-auto lg:my-0 my-[0.5rem]'>
                                <img src={ninja} className='object-fit img-color-change cursor-pointer w-[100%] sm:h-[300px] md:h-[200px] h-[220px]' alt="" />
                                <h1 className='sm:text-xl lg:text-sm xl:text-xl text-[orange] py-2 font-semibold'>Meta Ninja 2084:ULTIMATE...</h1>
                            </div>

                        </div>
                    </div>

                </div>

                <button className='bg-[orange] btn-cutting px-8 py-3 text-white rounded-lg'>More News</button>

            </div>
        </>
    )
}

export default Stakehome;