import {useEffect, useState} from 'react';
import Navbar from '@/scenes/navbar'; 
import Home from './scenes/home'; 
import Benefits from './scenes/benefits';
import OurClasses from './scenes/ourclasses';
import ContactUs from './scenes/contactUs';
import Footer from './scenes/footer';
import { SelectedPage } from './utils/types';




function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home); 
  const [topOfPage, setTopOfPage] = useState<boolean>(true); 
  
  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true); 
        setSelectedPage(SelectedPage.Home)
      } 
      if (window.scrollY !== 0) {
        setTopOfPage(false)
      }
      
      console.log('scrolling')
    }
    
    window.addEventListener('scroll', handleScrollEvent); 
    return window.removeEventListener('scroll', handleScrollEvent)
  }, [])
  
  
  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        topOfPage={topOfPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
