import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

function Hero() {
  return (
    <div className='p-4 flex flex-col mx-auto max-w-[1000px] mt-[50px]'>
        <h1 className='font-serif text-4xl sm:text-6xl text-center p-10'>
            Find the best <br className='sm:hidden' /> people <br className='hidden sm:inline-block' /> for <br className='sm:hidden' />your job
        </h1>
        <div className='rounded-full flex relative border-2 w-full max-w-[648px] mx-auto border-gray-200 p-3 sm:p-4'>
            <input type='text' className='flex-grow outline-none' placeholder='Try "data entry" or "build a website"'></input>
            <div className='absolute rounded-full transition duration-200 bg-[#14a800] hover:bg-[#3c8224] h-10 w-10 flex 
                justify-center cursor-pointer items-center sm:w-[120px] sm:h-12 right-2 top-1'
            >
                <ArrowLongRightIcon className='text-white sm:hidden p-2 cursor-pointer' />
                <p className='text-white hidden sm:inline-block font-bold'>Get started</p>
            </div>
        </div>
    </div>
  )
}

export default Hero;