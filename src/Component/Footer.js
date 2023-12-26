import React from 'react'
import CyberPunk from '../img/Cyberpunk.png'
import WatchDogs from '../img/Watch_Dogs.png'
import CallOfDuty from '../img/CallofDuty.png'
import JustCause from '../img/JustCause.png'
import GhostRecorde from '../img/ChostRecon.png' 
import SpiderMan from '../img/SpiderMan.png'
import Hitman from '../img/Hitman.png'
import MetaNinga from '../img/MetaNinjaLogo.png'


const Footer = () => {
  return (
   <>
   <div className='footer-cutting-parent bg-[#EC9C2E] p-1'>
   <div className='footer-cutting h-[300px] m-auto bg-[#212121] grid gap-y-10 p-8 '>
    <div className='mx-auto my-auto'>
<img src={MetaNinga} alt='' className='h-[200px]'/>
{/* <img src={WatchDogs} alt='' className='h-[120px]'/>
<img src={CallOfDuty} alt='' className='h-[100px]'/>
<img src={JustCause} alt='' className='h-[100px]'/> */}
</div>
{/* <div className='grid md:grid-cols-3 gap-x-10 place-items-center grid-cols-2'>
<img src={GhostRecorde} alt='' className='h-[100px] md:w-[50%]'/>
<img src={SpiderMan} alt='' className='h-[100px] md:w-[70%]'/>
<img src={Hitman} alt='' className='h-[100px] md:w-[70%]'/>
</div> */}
       </div>
       </div>
   </>
  )
}

export default Footer
