import Sidebar from './Sidebar';
import DesktopNav from './DesktopNav';
import {Bars3Icon} from '@heroicons/react/24/solid'; 
import Logo from '@/assets/Logo.png'; 

import {SelectedPage} from '@/utils/types';
import {useState} from 'react';

type Props = {
  selectedPage: SelectedPage; 
  setSelectedPage: (value: SelectedPage) => void; 
  topOfPage: boolean
}

const Navbar = ({selectedPage, setSelectedPage, topOfPage}: Props) => {
  const flexBetween = 'flex items-center justify-between'; 
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); 
  const navbarBackground = topOfPage ? '' : 'bg-primary-100 drop-shadow'
      
  return (
    <nav>
      <div className={`header ${navbarBackground} bg-primary-100`}>
        <div className={`header-container`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side */}
            <img src={Logo} alt="Logo" />
            {/* Right side */}
            <DesktopNav selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <button
              className='md:hidden  text-white bg-secondary-500 rounded-full p-2 cursor-pointer hover:bg-primary-500 hover:text-white'
              onClick={() => {
                setIsSidebarOpen(!isSidebarOpen)

              }}
            >
              <Bars3Icon className='h-6 w-6'/>
            </button>
          </div>
        </div>
      </div>
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isSidebarOpen={isSidebarOpen}
      />
    </nav>
  )
}

export default Navbar
