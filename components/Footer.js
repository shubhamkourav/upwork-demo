import { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SocialIcons from "./SocialIcons";

function Footer() {
  const [isOpen, setIsOpen] = useState({
    clients: false,
    talent: false,
    resources: false,
    company: false
  });

  return (
    <footer className='bg-[#001e00] rounded-lg w-full pb-[32px] md:py-[96px] md:mx-auto mb-[24px] px-[20px]'>
        <div className='grid md:grid-cols-4 gap-y-[16px] text-white md:px-32 md:pt-14'>
            <div className={`flex flex-col md:space-y-4 ${isOpen.clients && 'up-is-open'}`}>
                <h5 className='hidden md:inline-block font-bold uppercase'>For Clients</h5>
                <button className={`flex md:hidden justify-between items-center w-full py-[24px] ${isOpen.clients ? '' : 'border-b-2 border-[#9aaa97]'}`} onClick={() => {
                    setIsOpen({
                        ...isOpen,
                        clients: !isOpen.clients
                    })
                }}>
                    For Clients
                    <div className='w-[14px] h-[14px]'>
                        { isOpen.clients ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
                    </div>
                </button>
                <div className={`md:inline-block ${isOpen.clients ? '' : 'hidden'}`}>
                    <ul className='list'>
                        <li className='list-item'>How to Hire</li>
                        <li className='list-item'>Talent Marketplace</li>
                        <li className='list-item'>Project Catalog</li>
                        <li className='list-item'>Talent Scout</li>
                        <li className='list-item'>Hire an Agency</li>
                        <li className='list-item'>Enterprise</li>
                        <li className='list-item'>Payroll Services</li>
                        <li className='list-item'>Direct Contracts</li>
                        <li className='list-item'>Hire Worldwide</li>
                        <li className='list-item'>Hire in the USA</li>
                    </ul>
                </div>
            </div>
            <div className={`flex flex-col md:space-y-4 ${isOpen.talent && 'up-is-open'}`}>
                <h5 className='hidden md:inline-block font-bold uppercase'>For Talent</h5>
                <button className={`flex md:hidden justify-between items-center w-full py-[24px] ${isOpen.talent ? '' : 'border-b-2 border-[#9aaa97]'}`} onClick={() => {
                    setIsOpen({
                        ...isOpen,
                        talent: !isOpen.talent
                    })
                }}>
                    For Talent
                    <div className='w-[14px] h-[14px]'>
                        { isOpen.talent ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }    
                    </div>
                </button>
                <div className={`md:inline-block ${isOpen.talent ? '' : 'hidden'}`}>
                    <ul className='list'>
                        <li className='list-item'>How to Find Work</li>
                        <li className='list-item'>Direct Contracts</li>
                        <li className='list-item'>Find Freelance Jobs Worldwide</li>
                        <li className='list-item'>Find Freelance Jobs in the USA</li>
                    </ul>
                </div>
            </div>
            <div className={`flex flex-col md:space-y-4 ${isOpen.resources && 'up-is-open'}`}>
                <h5 className='hidden md:inline-block font-bold uppercase'>Resources</h5>
                <button className={`flex md:hidden justify-between items-center w-full py-[24px] ${isOpen.resources ? '' : 'border-b-2 border-[#9aaa97]'}`} onClick={() => {
                    setIsOpen({
                        ...isOpen,
                        resources: !isOpen.resources
                    })
                }}>
                    Resources
                    <div className='w-[14px] h-[14px]'>
                        { isOpen.resources ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }    
                    </div>
                </button>
                <div className={`md:inline-block ${isOpen.resources ? '' : 'hidden'}`}>
                    <ul className='list'>
                        <li className='list-item'>Help & Support</li>
                        <li className='list-item'>Success Stories</li>
                        <li className='list-item'>Upwork Reviews</li>
                        <li className='list-item'>Resources</li>
                        <li className='list-item'>Enterprise</li>
                        <li className='list-item'>Blog</li>
                        <li className='list-item'>Community</li>
                        <li className='list-item'>Affiliate Program</li>
                        <li className='list-item'>Free Business tools</li>
                    </ul>
                </div>
            </div>
            <div className={`flex flex-col md:space-y-4 ${isOpen.company && 'up-is-open'}`}>
                <h5 className='hidden md:inline-block font-bold uppercase'>Company</h5>
                <button className={`flex md:hidden justify-between items-center w-full py-[24px] ${isOpen.company ? '' : 'border-b-2 border-[#9aaa97]'}`} onClick={() => {
                    setIsOpen({
                        ...isOpen,
                        company: !isOpen.company
                    })
                }}>
                    Company
                    <div className='w-[14px] h-[14px]'>
                        { isOpen.company ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }    
                    </div>
                </button>
                <div className={`md:inline-block ${isOpen.company ? '' : 'hidden'}`}>
                    <ul className='list'>
                        <li className='list-item'>About Us</li>
                        <li className='list-item'>Leadership</li>
                        <li className='list-item'>Investor Relations</li>
                        <li className='list-item'>Careers</li>
                        <li className='list-item'>Our Impact</li>
                        <li className='list-item'>Press</li>
                        <li className='list-item'>Contact Us</li>
                        <li className='list-item'>Trust, Safety & Security</li>
                        <li className='list-item'>Modern Slavery Statement</li>
                    </ul>
                </div>
            </div>
        </div>
        <>
            <SocialIcons />
        </>
        <div className='flex flex-col md:flex-row md:space-y-0 space-y-3 text-white md:px-32 text-sm'>
            <p className='mr-[24px] pr-[24px]'>© 2015 - 2023 Upwork® Global Inc.</p>
            <ul className='flex flex-col space-y-4 md:space-y-0 md:flex-row flex-wrap md:space-x-5'>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>CA Notice at Collection</li>
                <li>Cookie Settings</li>
                <li>Accessibility</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer;