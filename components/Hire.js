
function Hire() {
  return (
    <div className='grid grid-cols-12 gap-6 mx-auto'>
        <div className='min-w-[352px] min-h-[264px] bg-[#f2f7f2] rounded-lg col-span-12 sm:col-span-12 lg:col-span-5'>

        </div>
        <div className='flex flex-col mt-5 col-span-12 md:col-span-7'>
            <h2 className='text-3xl font-semibold mb-[16px]'>Up your work game, it's free.</h2>
            <div className='flex mb-[24px]'>
                <div className='h-10 w-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.981 13.7v3.287a2.997 2.997 0 01-2.997 2.997H5.998A2.997 2.997 0 013 16.986v-9.99A2.997 2.997 0 015.997 4h4.995m5.25 2.059l2.737 2.757"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.99 15.358l-1.489.29a.999.999 0 01-.49 0 1.119 1.119 0 01-.42-.25 1 1 0 01-.249-.41.909.909 0 010-.489l.28-1.508c.085-.38.28-.728.56-1l7.362-7.362a1.85 1.85 0 01.649-.44c.247-.116.516-.18.79-.189.264.002.525.056.768.16.247.1.471.25.66.44a2 2 0 01.44.649 2.082 2.082 0 010 1.548 1.998 1.998 0 01-.44.65l-7.423 7.352c-.27.28-.618.474-.999.56z"></path></svg>
                </div>
                <div className='ml-3'>
                    <p className='text-lg font-semibold'>No cost to join.</p>
                    <span className='text-sm'>Register and browse professionals, explore projects, or even book a consultation.</span>
                </div>
            </div>
            <div className='flex mb-[24px]'>
                <div className='h-10 w-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 19l.3-.3c2.8-2.8 2.8-7.2 0-10C12.5 6 8 6 5.3 8.8L5 9l10 10z"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 11.5l3.3-3.3c.4-.4.4-1 0-1.4l-3.1-3.1c-.4-.4-1-.4-1.4 0L12.5 7M10 14l-7 7"></path></svg>
                </div>
                <div className='ml-3'>
                    <p className='text-lg font-semibold'>Post a job and hire top talent.</p>
                    <span className='text-sm'>Finding talent doesn’t have to be a chore. Post a job or we can search for you!</span>
                </div>
            </div>
            <div className='flex mb-[24px]'>
                <div className='h-10 w-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img">
                        <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.015 16.114l-7.039 4.578a1.908 1.908 0 01-2.079 0l-7.039-4.578A1.908 1.908 0 013 14.512V4.907A1.907 1.907 0 014.907 3h14.059a1.908 1.908 0 011.907 1.907v9.605a1.908 1.908 0 01-.858 1.602z" clip-rule="evenodd"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.939 5.33l1.392 3.596 3.854.21-2.995 2.441.992 3.73-3.243-2.1-3.243 2.1 1.002-3.73-3.005-2.442 3.863-.21 1.383-3.595z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <div className='ml-3'>
                    <p className='text-lg font-semibold'>Work with the best—without breaking the bank.</p>
                    <span className='text-sm'>Upwork makes it affordable to up your work and take advantage of low transaction rates.</span>
                </div>
            </div>
            <div className='flex text-md'>
                <button
                    className='hidden md:inline-block rounded-full mr-[16px] bg-[#108a00] text-white border-2 
                        hover:bg-[#14a800] py-2 px-[24px]'
                >
                    Sign up for free
                </button>
                <button
                    className='rounded-full text-[#108a00] border-2 border-[#108a00] 
                        hover:bg-[#f7faf7] py-2 px-[24px]'
                >
                    Learn how to hire
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hire;