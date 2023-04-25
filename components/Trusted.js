import airbnb from '../assets/images/airbnb.svg';
import microsoft from '../assets/images/microsoft.svg';
import bissell from '../assets/images/bissell.svg';
import coty from '../assets/images/coty.svg';
import nasdaq from '../assets/images/nasdaq.svg';
import automatic from '../assets/images/automatic.svg';
import Image from 'next/image';



function Trusted() {
  return (
    <div className='flex mx-auto justify-center items-center text-[#5e6d55]'>
        <p className='mr-5 text-sm sm:text-lg whitespace-nowrap'>Trusted by</p>
        <div className='flex justify-between items-center w-full max-w-[1444px]'>
            <Image src={microsoft.src} width={100} height={100} className='h-20 w-20 sm:h-28 sm:w-28' />
            <Image src={airbnb.src} width={100} height={100} className='h-20 w-20 sm:h-28 sm:w-28' />
            <Image src={nasdaq.src} width={100} height={100} />
            <Image className='hidden sm:inline-block h-20 w-20 sm:h-28 sm:w-28' src={automatic.src} width={100} height={100} />
            <Image className='hidden lg:inline-block h-20 w-20 sm:h-28 sm:w-28' src={bissell.src} width={100} height={100} />
            <Image className='hidden lg:inline-block h-20 w-20 sm:h-28 sm:w-28' src={coty.src} width={100} height={100} />
        </div>
    </div>
  )
}

export default Trusted;