import { useState } from 'react';
import skills from '../skills.json';
import SkillItem from './SkillItem';

function Skils() {
  const [selected, setSelected] = useState('top');

  const handleSelect = ({ target: { id } }) => {
    setSelected(id);
  }

  const shownSkills = skills.filter((skill) => skill.title === selected);

  return (
    <div className='grid md:grid-cols-12 pb-[100px]'>
        <div className='mb-[48px] md:col-span-4 overflow-y-hidden overflow-x-scroll whitespace-nowrap md:items-baseline 
            md:overflow-x-hidden md:flex md:flex-col text-[#d5e0d5] md:text-4xl text-2xl scrollbar-hide'
        >
            <button id='top' onClick={handleSelect} className={`mx-[15px] md:mb-[15px] hover:text-[#14a800] md:text-left ${selected === 'top' ? 'active': ''}`}>Top skills</button>
            <button id='trending' onClick={handleSelect} className={`mx-[15px] md:mb-[15px] hover:text-[#14a800] md:text-left  ${selected === 'trending' ? 'active': ''}`}>Trending skills</button>
            <button id='us' onClick={handleSelect} className={`mx-[15px] md:mb-[15px] hover:text-[#14a800] md:text-left ${selected === 'us' ? 'active': ''}`}>Top skills in US</button>
            <button id='catalog' onClick={handleSelect} className={`mx-[15px] hover:text-[#14a800] md:mb-[15px] md:text-left ${selected === 'catalog' ? 'active': ''}`}>Project Catalog<sup>TM</sup></button>
        </div>
        <div className='table md:col-span-8 table-fixed w-full px-[16px]'>
            <div className='table-cell w-[45%]'>
                <ul className='list-none'>
                    {
                        shownSkills[0]?.skills.slice(0, parseInt(shownSkills[0]?.skills.length/2)).map((skill) => {
                            return <li className='mb-[15px] cursor-pointer' key={skill}><SkillItem name={skill} /></li>
                        })
                    }
                </ul>
            </div>
            <div className='table-cell w-[45%]'>
                <ul className='list-none'>
                    {
                        shownSkills[0]?.skills.slice(parseInt(shownSkills[0]?.skills.length/2)).map((skill) => {
                            return <li className='mb-[15px] cursor-pointer' key={skill}><SkillItem name={skill} /></li>
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skils;