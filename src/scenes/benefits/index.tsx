import {BenefitType, SelectedPage} from '@/utils/types';
import {motion} from 'framer-motion';
import Heading_2 from '@/components/Heading_2';
import Benefit from './Benefit';
import benefitsGraphic from '../../assets/BenefitsPageGraphic.png'; 
import ActionButton from '@/components/ActionButton';
import {AcademicCapIcon, HomeModernIcon, UserGroupIcon} from '@heroicons/react/24/solid';

const benefits: BenefitType[]= [
  {
    id: 1, 
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    id: 2, 
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    id: 3, 
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void; 
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
      id={SelectedPage.Benefits}
      className='bg-white'
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        className='section-container min-h-full py-20 text-start'
      >
        {/* Heading Text */}
        <motion.div
          className='md:w-1/3'
          initial='hidden'
          whileInView='visible'
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50}, 
            visible: {opacity: 1, x: 0}
          }}
        >
          <Heading_2>more than just a gym</Heading_2>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        
        {/* Benefits */}
        <div
          className="mt-8 flex flex-col gap-8 md:flex-row"
        >
          {benefits.map(benefit => {
            return <Benefit
              key={benefit.id}
              benefit={benefit}
              setSelectedPage={setSelectedPage}
            />
          })}
        </div>
        
        <div className="flex flex-col gap-4 mt-8 md:flex-row justify-between md:items-center">
          
          {/* Graphic */}
          <div className="">
            <motion.img src={benefitsGraphic} alt=""
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.5}}
              variants={{
                hidden: {opacity: 0, x: -50}, 
                visible: {opacity: 1, x: 0}
              }}
            />
          </div>
          
          {/* Description */}
          <div className='basis-1/2'>
            {/* Title */}
            <motion.div
              className="relative"
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.5}}
              variants={{
                hidden: {opacity: 0, x: 50}, 
                visible: {opacity: 1, x: 0}
              }}
            >
              <div className="before:absolute before:content-abstractwaves before:-top-16 before:-left-16">
                <Heading_2>millions of happy members getting{' '}<span className='text-primary-500'>fit</span></Heading_2>
              </div>
            </motion.div>
            
            {/* Description */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.5, delay: 0.2}}
              variants={{
                hidden: {opacity: 0, x: 50}, 
                visible: {opacity: 1, x: 0}
              }}
            >
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div>
            
            {/* Button */}
            <motion.div
              className='mt-10 relative'
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.5, delay: 0.3}}
              variants={{
                hidden: {opacity: 0, x: 50}, 
                visible: {opacity: 1, x: 0}
              }}
            >
              <div className='before:absolute before:content-sparkles before:left-32'>
                <ActionButton setSelectedPage={setSelectedPage}>join now</ActionButton>
              </div>
            </motion.div>
            
          </div>
          
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
