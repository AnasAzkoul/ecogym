import ActionButton from '@/components/ActionButton';
import Sponsors from './Sponsors';
import homePageText from '../../assets/HomePageText.png'; 
import homePageGraphic from '../../assets/HomePageGraphic.png'; 
import {SelectedPage} from '@/utils/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void; 
}

const Home = ({setSelectedPage}: Props) => {
  return (
    <section
      id={SelectedPage.Home}
      className='pt-16 md:evolve-background bg-gray-20'
    >
      <motion.div
        className='section-container py-16 md:py-28 h-full'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div
          className="flex flex-col gap-6 items-start md:flex-row md:items-center md:justify-between md:h-5/6 "
        >
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x: -50}, 
              visible: {opacity: 1, x: 0}
            }}
            className="flex flex-col gap-6 basis-1/3"
          >            
            <figure className='w-5/6'>
              <img src={homePageText} alt="" />
            </figure>
            <p>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.5}}
              transition={{delay: 0.3 ,duration: 0.5}}
              variants={{
                hidden: {opacity: 0, x: -50}, 
                visible: {opacity: 1, x: 0}
              }}
              className="flex gap-8 sm:gap-10  items-center"
            >
              <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              <AnchorLink
                href={SelectedPage.ContactUs}
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                className='pt-3 border-b-2 border-gray-500'
              >
                <p>Learn More</p>
              </AnchorLink>
            </motion.div>
          </motion.div>
          <figure className='h-full'>
            <motion.img
              src={homePageGraphic}
              alt=""
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.5}}
              variants={{
                hidden: {opacity: 0, x: 50}, 
                visible: {opacity: 1, x: 0}
              }}
            />
          </figure>
        </div>
      </motion.div>
      <Sponsors />
    </section>
  )
}

export default Home
