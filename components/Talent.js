import talent from '../assets/images/talent.jpg';

function Talent() {
  return (
    <div className='flex flex-col md:flex-row'>
        <div>
            <img className='w-full min-h-[375px] h-full md:rounded-l-lg' src={talent.src} />
        </div>
        <div className='bg-[#1f57c3] text-white p-[15px] md:rounded-r-lg'>
            <div className='mb-[30px] pb-[40px]'>
                <p className='text-xl mb-[20px]'>For Talent</p>
                <h2 className='mb-[15px] text-4xl font-semibold'>Find great <br />work</h2>
                <span className='mb-[40px]'>Meet clients you’re excited to work with and take <br className='hidden lg:inline-block' />your career or business to new heights.</span>
            </div>
            <hr class="h-px my-8 bg-white border-0"></hr>
            <div className='grid grid-cols-12'>
                <div className='col-span-6 pr-[15px] pb-[20px]'>
                    <span>Find opportunities for every stage of your freelance career</span>
                </div>
                <div className='col-span-6 pr-[15px] pb-[20px]'>
                    <span>Control when, where, and how you work</span>
                </div>
                <div className='col-span-6 pr-[15px] pb-[20px]'>
                    <span>Explore different ways to earn</span>
                </div>
                <div className='col-span-12'>
                    <button className='rounded-full text-[#1f57c3] bg-white px-4 py-2 mt-[5px] mb-[20px]'>Find opportunities</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Talent;