import { useEffect, useState } from 'react';
import {CarouselImage} from '@/utils/constants';
import {motion} from 'framer-motion';


type Props = {
  carouselImgs: CarouselImage[]; 
}

const Carousel = ({carouselImgs}: Props) => {
  
  return (
    <motion.div
      className="w-full md:hidden"
      initial='hidden'
      whileInView='visible'
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 0.5}}
      variants={{
        hidden: {opacity: 0, x: 50}, 
        visible: {opacity: 1, x: 0}
      }}
    >
      <div className="carousel w-full">
        {carouselImgs.map((img, index) => {
          return (
            <div key={index + 1} id={`slide${img.id}`} className="carousel-item relative w-full">
              <img src={img.img} className="w-full object-cover" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${index === 0 ? carouselImgs.length - 1 : img.id - 1}`} className="btn btn-circle">❮</a> 
                <a href={`#slide${index === carouselImgs.length - 1 ? '1' : img.id + 1}`} className="btn btn-circle">❯</a>
              </div>
            </div>
          )
        })}
      </div>
  </motion.div>
  )
}

export default Carousel
