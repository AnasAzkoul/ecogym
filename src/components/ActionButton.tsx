import {SelectedPage} from '@/utils/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  children: React.ReactNode; 
  setSelectedPage?: (value: SelectedPage) => void; 
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage?.(SelectedPage.ContactUs)}
      className='
       self-start rounded-md bg-secondary-500 text-white px-4 md:px-8 py-2 hover:bg-primary-500 hover:text-white cursor-pointer transition-all duration-500'
      href={SelectedPage.ContactUs}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton
