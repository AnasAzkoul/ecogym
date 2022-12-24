import {CarouselImage} from '@/utils/constants';
import {motion} from 'framer-motion';


type Props = {
  carouselImgs: CarouselImage[];
}

const Gallery = ({carouselImgs}: Props) => {
  return (
    <motion.div
      className="hidden md:block"
      initial='hidden'
      whileInView='visible'
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 0.5}}
      variants={{
        hidden: {opacity: 0, y: 50}, 
        visible: {opacity: 1, y: 0}
      }}
    >      
      <div className={`grid grid-cols-6 gap-4`}>
        {carouselImgs.map((img, index) => {
          return (
            <figure key={img.id}>
              <img src={img.img} alt="" />
            </figure>  
          )
        })}
      </div>
    </motion.div>
  )
}

export default Gallery
