import nasdaq from '../assets/images/nasdaq.svg';
import microsoft from '../assets/images/microsoft.svg';
import airbnb from '../assets/images/airbnb.svg';
import bissell from '../assets/images/bissell.svg';
import coty from '../assets/images/coty.svg';
import automatic from '../assets/images/automatic.svg';

function Testimonial() {
  return (
    <div>
        <h2 className='pr-[20px] mb-[20px] font-semibold text-5xl'>Trusted by leading <br className='hidden md:inline-block' /> brands and startups</h2>
        <div>
            <ul className='flex snap-x snap-mandatory overflow-x-scroll overflow-y-hidden space-x-4 scrollbar-hide'>
                <li className='basis-[78%] flex-shrink-0 snap-start max-w-[600px]'>
                    <div className='flex flex-col rounded-lg justify-between bg-[#13544e] min-h-[485px] h-full p-[15px]'>
                        <div className='text-white'>
                            <img className='mb-[15px] h-[30px]' src={nasdaq.src} />
                            <h4 className='text-xl mb-[10px]'>“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”</h4>
                            <div className='text-[#d5e0d4] text-sm'>Josh Machiz, Chief Digital Officer</div>
                        </div>
                        <div className='min-h-[125px]'>
                            <div className='text-[#d5e0d4]'>Results</div>
                            <hr class="h-px bg-white border-0 mb-[10px] mt-[5px]"></hr>
                            <div>
                                <div className='pb-[16px] pr-[40px]'>
                                    <h4 className='text-white mb-[5px] text-2xl'>Emmy Winning</h4>
                                    <div className='text-[#d5e0d4]'>Facebook Watch program</div>
                                </div>
                                <div className='pr-[40px]'>
                                    <h4 className='text-white mb-[5px] text-2xl'>Millions</h4>
                                    <div className='text-[#d5e0d4]'>of impressions generated per client per IPO</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='basis-[78%] flex-shrink-0 snap-start max-w-[600px]'>
                    <div className='flex flex-col rounded-lg justify-between bg-[#bc511b] min-h-[485px] h-full p-[15px]'>
                        <div className='text-white'>
                            <img className='mb-[15px] h-[30px]' src={microsoft.src} />
                            <h4 className='text-xl mb-[10px]'>“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”</h4>
                            <div className='text-[#d5e0d4] text-sm'>Carol Taylor, Director of Content Experience</div>
                        </div>
                        <div className='min-h-[125px]'>
                            <div className='text-[#d5e0d4]'>Results</div>
                            <hr class="h-px bg-white border-0 mb-[10px] mt-[5px]"></hr>
                            <div>
                                <div className='pb-[16px] pr-[40px]'>
                                    <h4 className='text-white mb-[5px] text-2xl'>50% Faster</h4>
                                    <div className='text-[#d5e0d4]'>launch of projects</div>
                                </div>
                                <div className='pr-[40px]'>
                                    <h4 className='text-white mb-[5px] text-2xl'>10,000</h4>
                                    <div className='text-[#d5e0d4]'>projects completed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='basis-[78%] flex flex-shrink-0 snap-start max-w-[600px]'>
                    <div className='hidden bg-[url("../assets/images/testimonial.jpg")] rounded-l-lg bg-no-repeat bg-cover md:inline-block flex-1 max-w-[300px]'></div>
                    <div className='flex flex-col rounded-lg md:rounded-l-none flex-1 justify-evenly bg-[#001e00] min-h-[485px] h-full p-[15px]'>
                        <div className='text-white mx-auto'>And many more</div>
                        <div className='text-white mx-auto w-[92px] h-[45px] items-center flex justify-center'><img src={nasdaq.src} /></div>
                        <div className='text-white mx-auto w-[92px] h-[45px] items-center flex justify-center'><img src={automatic.src} /></div>
                        <div className='text-white mx-auto w-[92px] h-[45px] items-center flex justify-center'><img src={bissell.src} /></div>
                        <div className='text-white mx-auto w-[92px] h-[45px] items-center flex justify-center'><img src={coty.src} /></div>
                        <div className='text-white mx-auto w-[92px] h-[45px] items-center flex justify-center'><img src={airbnb.src} /></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial;