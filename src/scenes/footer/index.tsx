import logo from '../../assets/Logo.png'; 
import {navLinks} from '@/utils/constants';
import { motion } from 'framer-motion';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>
      <motion.div
        className="section-container flex flex-col gap-8 md:items-center md:flex-row"
        initial='hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y: -50}, 
          visible: {opacity: 1, y: 0}
        }}
      >
        {/* Logo and copyrights */}
        <div className="flex flex-col gap-4 basis-2/3">
          <figure>
            <img src={logo} alt="" />
          </figure>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea molestiae voluptas exercitationem aliquam porro inventore quia quam nostrum? Rem facilis assumenda nulla blanditiis molestias commodi atque impedit nobis quae odio?
          </p>
          <p>
            &#169; Evogym all rights reserved. 
          </p>
        </div>
        <div className="flex">
          {/* Links */}
          <div className="mr-32 md:mr-16">
            <h6 className='text-md font-bold mb-3 capitalize'>Links</h6>
            <ul>
              {navLinks.map(item => {
                return (
                  <li key={item.id} className='capitalize my-1'>{item.text}</li>  
                )
              })}
            </ul>
          </div>
          
          {/* contact us */}
          <div className="flex flex-col gap-2">
            <h6 className='text-md font-bold mb-3 capitalize'>contact us</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quod.</p>
            <p>(333)425-6825</p>
          </div>
        </div>
        
      </motion.div>
    </footer>
  )
}

export default Footer
