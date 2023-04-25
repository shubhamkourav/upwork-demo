import { SocialIcon } from 'react-social-icons';
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';

function SocialIcons() {
  return (
    <div className='mt-[32px] md:mx-32 mb-[16px] border-b-2 border-[#9aaa97]'>
        <div className='md:grid md:mt-[24px] md:grid-cols-2'>
            <div className='md:flex items-center md:space-x-4 md:justify-start'>
                <h3 className='py-[20px] text-white'>Follow Us</h3>
                <ul className='flex items-center list-none mb-[20px] space-x-2'>
                    <li>
                        <div className='footer-icon'>
                            <SocialIcon fgColor='white' bgColor='transparent' url='https://www.facebook.com/' />
                        </div>
                    </li>
                    <li>
                        <div className='footer-icon'>
                            <SocialIcon fgColor='white' bgColor='transparent' url='https://linkedin.com/' />
                        </div>
                    </li>
                    <li>
                        <div className='footer-icon'>
                            <SocialIcon fgColor='white' bgColor='transparent' url='https://twitter.com/' />
                        </div>
                    </li>
                    <li>
                        <div className='footer-icon'>
                            <SocialIcon fgColor='white' bgColor='transparent' url='https://www.youtube.com/' />
                        </div>
                    </li>
                    <li>
                        <div className='footer-icon'>
                            <SocialIcon fgColor='white' bgColor='transparent' url='https://www.instagram.com/' />
                        </div>
                    </li>
                </ul>
            </div>
            <div className='mb-[16px] md:m-0 md:flex items-center md:space-x-4 md:justify-end'>
                <h3 className='py-[20px] text-white'>Mobile app</h3>
                <ul className='flex items-center list-none space-x-2'>
                    <li className='text-white'>
                        <div className='footer-icon'>
                            <AppleIcon />
                        </div>
                    </li>
                    <li className='text-white'>
                        <div className='footer-icon'>
                            <AdbIcon />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SocialIcons;