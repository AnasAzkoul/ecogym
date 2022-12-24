import React from 'react'; 
import Link from './Link';
import ActionButton from '@/components/ActionButton';
import { navLinks } from '@/utils/constants';
import {SelectedPage} from '@/utils/types';

type Props = {
  selectedPage: SelectedPage; 
  setSelectedPage: (value: SelectedPage) => void; 
}

const DesktopNav = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = 'flex items-center justify-between'; 
  return (
    <div className={`${flexBetween} w-full hidden md:flex`}>
      <ul className={`${flexBetween} gap-6 text-sm`}>
        {navLinks.map(link => {
          return (
            <Link
              key={link.id}
              page={link.text}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )
        })}
      </ul>
      <div className={`${flexBetween} gap-8`}>
        <p className='cursor-pointer'>Sign in</p>
        <ActionButton
          setSelectedPage={setSelectedPage}
        >
          Become a Member
        </ActionButton>
      </div>
  </div>
  )
}

export default DesktopNav
