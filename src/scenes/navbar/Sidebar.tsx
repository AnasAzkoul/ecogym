import Link from './Link'; 
import { navLinks } from '@/utils/constants';
import {SelectedPage} from '@/utils/types';
import {XMarkIcon} from '@heroicons/react/24/solid'


type Props = {
  isSidebarOpen: boolean; 
  setIsSidebarOpen: (value: boolean) => void; 
  selectedPage: SelectedPage; 
  setSelectedPage: (value: SelectedPage) => void; 
}

const Sidebar = ({setIsSidebarOpen, selectedPage, setSelectedPage, isSidebarOpen}: Props) => {
  return (
    <div
      className={`h-full w-[300px] bg-primary-100 drop-shadow-xl 
      fixed right-0 bottom-0 z-40 transition-all duration-500 ease-in ${isSidebarOpen ? 'show-sidebar' : 'hide-sidebar'}`}
    >
      
      {/* Close Icon */}
      <div className="flex justify-end p-6">
        <button onClick={() => setIsSidebarOpen(false)}>
          <XMarkIcon className='h-6 w-6 text-gray-400'/>
        </button>
      </div>
      
      {/* Links */}
      <ul className='flex flex-col gap-6 items-start py-10 ml-[33%] text-xl'>
        {navLinks.map(link => {
          return (
            <Link
              key={link.id}
              page={link.text}
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />    
          )
        })}
      </ul>
      
    </div>
  )
}

export default Sidebar
