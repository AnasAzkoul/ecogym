import Heading_2 from '@/components/Heading_2';
import {SelectedPage} from '@/utils/types';
import {motion} from 'framer-motion';
import { carouselImgs } from '@/utils/constants';
import Gallery from './Gallery';
import Carousel from './Carousel';
import useMediaQuery from '@/hooks/useMediaQuery';


type Props = {
  setSelectedPage: (value: SelectedPage) => void; 
}

const OurClasses = ({setSelectedPage}: Props) => {
  const isScreenSizeMedium = useMediaQuery("1060px"); 
    
  return (
    <section
      id={SelectedPage.OurClasses}
      className='bg-primary-100 py-32'
    >
      <motion.div
        className="section-container"
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        
        {/* Header and description */}
        <motion.div
          className="md:w-1/2 mb-8"
          initial='hidden'
          whileInView='visible'
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50}, 
            visible: {opacity: 1, x: 0}
          }}
        >
          <Heading_2>our classes</Heading_2>
          <p className="py-5">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
            enim mattis odio in risus nunc.
          </p>
        </motion.div>
        

        <Carousel carouselImgs={carouselImgs}/> 
        <Gallery carouselImgs={carouselImgs} />        
        
      </motion.div>
      
    </section>
  )
}

export default OurClasses; 
