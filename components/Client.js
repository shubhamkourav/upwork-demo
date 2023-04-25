import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Client() {
  return (
    <div className='bg-no-repeat bg-cover bg-[url("../assets/images/client-mobile.jpg")] sm:bg-[url("../assets/images/client.jpg")] p-[20px] md:p-[50px] md:rounded-lg'>
        <div className='grid grid-cols-12'>
            <div className='col-span-9 md:col-span-7'>
                <p className='mb-[100px] text-white'>For clients</p>
                <h2 className='text-white text-3xl font-semibold mb-[30px]'>Find talent <br /> your way</h2>
            </div>
        </div>
        <div className='grid grid-cols-12'>
            <div className='col-span-12 md:col-span-7'>
                <p className='text-white mb-[20px]'>Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.</p>
            </div>
        </div>
        <div className='grid grid-cols-12 md:gap-6'>
            <div className='mt-2 col-span-12 md:col-span-4'>
                <button className='hover:text-[#108a00] hover:bg-white flex text-white 
                    flex-col p-[15px] justify-start text-left rounded-lg h-full w-full bg-[#108a00] transition duration-200 ease-in-out'
                >
                    <span className='mt-[20px] md:mb-[20px] text-md md:text-3xl font-semibold'>Post a job<br />and hire a pro</span>
                    <span className='text-sm text-right md:text-left w-full mt-[-18px]'>Talent Marketplace<sup>TM</sup><ArrowForwardOutlinedIcon /></span>
                </button>
            </div>
            <div className='mt-2 col-span-12 md:col-span-4'>
                <button className='hover:text-[#108a00]  hover:bg-white flex text-white 
                    flex-col p-[15px] justify-start text-left rounded-lg h-full w-full bg-[#108a00] transition duration-200 ease-in-out'
                >
                    <span className='mt-[20px] md:mb-[20px] text-md md:text-3xl font-semibold'>Browse and<br /> buy projects</span>
                    <span className='text-sm text-right md:text-left w-full mt-[-18px]'>Project Catalog<sup>TM</sup><ArrowForwardOutlinedIcon /></span>
                </button>
            </div>
            <div className='mt-2 col-span-12 md:col-span-4'>
                <button className='hover:text-[#108a00] hover:bg-white flex text-white 
                    flex-col p-[15px] justify-start text-left rounded-lg h-full w-full bg-[#108a00] transition duration-200 ease-in-out'
                >
                    <span className='mt-[20px] md:mb-[20px] text-md md:text-3xl font-semibold'>Let us help you<br /> find the right talent</span>
                    <span className='text-sm text-right md:text-left w-full mt-[-18px]'>Talent Scout<sup>TM</sup><ArrowForwardOutlinedIcon /></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Client;