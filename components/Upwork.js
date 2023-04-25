import Image from "next/image";
import upwork from '../assets/images/upwork.png';

function Upwork() {
  return (
    <div>
        <div className='flex flex-col md:flex-row justify-between md:space-x-10'>
            <div className='md:bg-[#f2f7f2] p-5 md:p-10 rounded-lg'>
                <h2 className='text-4xl mt-[30px] mb-[30px]'>Why businesses <br />turn to Upwork</h2>
                <div className='max-w-[840px] md:pr-[300px]'>
                    <div className='flex mb-[20px]'>
                        <div>
                            <div className='h-[20px] w-[20px] mr-[15px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path d="M9.76 11.144L7 9.574l-2.76 1.57.496-3.268L2.5 5.63l3.063-.506L7 2.144l1.436 2.98 3.064.507-2.236 2.245.496 3.268zM7 0a7 7 0 100 14A7 7 0 007 0z"></path></svg>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-2xl mb-2'>Proof of quality</h3>
                            <p className='text-[#5e6d55] text-sm'>Check any pro’s work samples, client reviews, and identity verification.</p>
                        </div>
                    </div>
                    <div className='flex mb-[20px]'>
                        <div>
                            <div className='h-[20px] w-[20px] mr-[15px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path fill-rule="evenodd" d="M9.933 8.63c.011-1.221-.748-1.903-2.476-2.332V4.03c.53.11 1.057.374 1.574.748l.627-1.023a4.357 4.357 0 00-2.157-.87v-.692h-.967v.67c-1.43.112-2.399.948-2.399 2.168v.023c0 1.276.771 1.89 2.443 2.32v2.333c-.759-.121-1.386-.473-2.036-1.012l-.704 1a5.148 5.148 0 002.696 1.145v1.144h.967v-1.122c1.453-.131 2.432-.957 2.432-2.211V8.63zM14 7A7 7 0 110 7a7 7 0 0114 0zm-6.543.585v2.167c.76-.077 1.19-.451 1.19-1.023v-.022c0-.517-.265-.848-1.19-1.122zm-.879-3.62v2.112c-.936-.285-1.156-.604-1.156-1.11v-.012c-.01-.516.407-.913 1.156-.99z"></path></svg>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-2xl mb-2'>No cost until you hire</h3>
                            <p className='text-[#5e6d55] text-sm'>Interview potential fits for your job, negotiate rates, and only pay for work you approve.</p>
                        </div>
                    </div>
                    <div className='flex mb-[20px]'>
                        <div>
                            <div className='h-[20px] w-[20px] mr-[15px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path fill-rule="evenodd" d="M14 7A7 7 0 110 7a7 7 0 0114 0zm-7.23 4.275l4.889-7.11-1.65-1.133-3.676 5.35L3.75 6.346l-1.238 1.57 4.257 3.359z"></path></svg>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-2xl mb-2'>Safe and secure</h3>
                            <p className='text-[#5e6d55] text-sm'>Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex relative flex-1 md:rounded-lg text-white bg-[#14a800] mt-[50px] md:mt-0 pt-[30px] pb-[28px]'>
                <div className='pl-[15px] md:pl-[30px]'>
                    <h2 className='text-2xl font-semibold mb-[31px]'>We're <br />the world's work <br />marketplace</h2>
                    <div className='flex mb-[20px]'>
                        <div className='w-[25px] h-[24px]'>
                            <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path d="M10.68 13.928L7 11.83l-3.681 2.098a.542.542 0 01-.803-.553l.668-4.408L.159 5.924a.543.543 0 01.295-.918l4.125-.682L6.512.306a.542.542 0 01.977 0l1.934 4.018 4.123.682a.543.543 0 01.297.918l-3.025 3.042.668 4.408a.545.545 0 01-.806.554"></path></svg>
                        </div>
                        <div className='ml-[15px]'>
                            <h3 className='text-2xl font-semibold mt-1 mb-2'>4.9/5</h3>
                            <p className='max-w-[165px]'>Clients rate professionals on Upwork</p>
                        </div>
                    </div>
                    <div className='flex mb-[20px]'>
                        <div className='w-[25px] h-[24px]'>
                            <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/brontes/why-upwork/group" />
                        </div>
                        <div className='ml-[15px]'>
                            <h3 className='text-2xl font-semibold mt-1 mb-2'>Award winner</h3>
                            <p className='max-w-[165px]'>G2’s 2021 Best Software Awards</p>
                        </div>
                    </div>
                </div>
                <Image
                    className='absolute top-29 md:top-[-20px] md:left-[-300px] md:h-[520px] md:w-[357px] left-auto right-3'
                    width={172}
                    height={335}
                    src={upwork.src}
                />
            </div>
        </div>
        <div className='md:hidden p-5 mt-[20px] mb-[40px]'>
            <h2 className='text-4xl mb-[20px]'>Sign up to hire <br />talent for any job</h2>
            <button className='rounded-full bg-[#108a00] text-white p-3'>Find talent</button>
        </div>
    </div>
  )
}

export default Upwork;