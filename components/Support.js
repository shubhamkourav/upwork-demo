function Support() {
  return (
    <div className='bg-[#f7faf7] rounded-lg'>
        <div className='mt-[100px] p-[24px] grid gap-y-[24px] relative'>
            <div>
                <h2 className='mb-[8px] text-2xl font-semibold'>We support Ukraine</h2>
                <h6 className='text-[#5e6d55] w-full mb-[8px]'>We are taking action to help our freelancers, our clients, and the people of Ukraine—and so can you.</h6>
            </div>
            <div>
                <button className='rounded-full border-2 border-[#108a00] text-[#108a00] px-4 py-2'>Learn more</button>
            </div>
            <div className='bg-no-repeat bg-left-[5px] bottom-0 right-[25px] bg-[url("../assets/images/ukraine-help.svg")] 
                flex flex-start md:h-full w-[125px] h-[80px] absolute row-start-5 col-start-3 row-end-[-1] col-end-[-1]'
            >

            </div>
        </div>
    </div>
  )
}

export default Support;