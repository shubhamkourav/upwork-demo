import EnterPriseMobile from '../assets/images/enterprise.png';
import EnterPrise from '../assets/images/enterprise-desktop.png';
import Image from 'next/image';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

function Enterprise() {
  return (
    <div className='grid grid-cols-12'>
        <Image
            src={EnterPriseMobile.src}
            className='md:hidden col-span-12 w-full h-full'
            width={100}
            height={100}
        />
        <div className='w-full h-full col-span-12 md:col-span-8 bg-[#13544e] p-4 md:rounded-l-lg'>
            <p className='text-white text-2xl mb-[16px] font-bold'>Enterprise Suite</p>
            <h1 className='text-4xl tracking-wider mb-[20px]'>
                <span className='text-white'>This is how</span><br />
                <span className='text-[#91e6b3]'>good companies <br />find good company.</span>
            </h1>
            <span className='text-white text-lg md:text-xl tracking-wider'>
                Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools. This is how innovation works now.
            </span>
            <div className='mt-[20px]'>
                <div>
                    <div className='flex items-center mb-[10px]'>
                        <HandymanOutlinedIcon className='text-[#91e6b3]' />
                        <p className='ml-2 text-white text-lg md:text-xl tracking-wider'>Access expert talent to fill your skill gaps</p>
                    </div>
                    <div className='flex mb-[10px]'>
                        <BusinessCenterOutlinedIcon className='text-[#91e6b3]' />
                        <p className='ml-2 text-white text-lg md:text-xl tracking-wider'>Control your workflow: hire, classify and pay your talent</p>
                    </div>
                    <div className='flex mb-[10px]'>
                        <SupportAgentOutlinedIcon className='text-[#91e6b3]' />
                        <p className='ml-2 text-white text-lg md:text-xl tracking-wider'>Partner with Upwork for end-to-end support</p>
                    </div>
                </div>
                <button className='bg-white rounded-full text-[#13544e] mt-[25px] p-3'>Learn more</button>
            </div>
        </div>
        <Image
            src={EnterPrise.src}
            className='hidden md:inline-block col-span-4 w-full h-full md:rounded-r-lg'
            width={100}
            height={100}
        />
    </div>
  )
}

export default Enterprise;