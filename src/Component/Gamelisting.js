import React from 'react'
import game1 from '../img/game1.png'
import game2 from '../img/game2.png'
import game3 from '../img/game3.png'
import game4 from '../img/game4.png'

const Gamelisting = () => {


    return (
        <>

            <div className='w-[95%] mx-auto'>
                {/* <div className=' h-[200px] b '></div> */}
                <div className='lg:flex justify-between  py-[2rem]'>
                    <div className='md:flex justify-around'>
                        <div className='  md:w-[45%] w-[90%] m-auto mb-3 h-[300px] img-container'>
                            <img src={game1} alt="" className='object-cover w-full h-full  img-color-change cursor-pointer ' />
                        </div>
                        <div className='  md:w-[45%] w-[90%] m-auto mb-3 h-[300px] img-container'>
                            <img src={game2} alt="" className='object-cover w-full  h-full img-color-change cursor-pointer' />
                        </div>

                    </div>

                    <div className='md:flex justify-around'>
                        <div className='  md:w-[45%] w-[90%] m-auto mb-3 h-[300px] img-container'>
                            <img src={game3} alt="" className='object-cover w-full h-full  img-color-change cursor-pointer ' />
                        </div>
                        <div className='  md:w-[45%] w-[90%] m-auto mb-3 h-[300px] img-container'>
                            <img src={game4} alt="" className=' object-cover w-full  h-full img-color-change cursor-pointer' />
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default Gamelisting;