export type NavLink = {
  id: number; 
  text: string; 
}

export const navLinks: NavLink[] = [
  {id: 1, text: 'home'},  
  {id: 2, text: 'benefits'},  
  {id: 3, text: 'our classes'},  
  {id: 4, text: 'contact us'},  
]

// --------------------------------------------------------
import image1 from '../assets/image1.png'; 
import image2 from '../assets/image2.png'; 
import image3 from '../assets/image3.png'; 
import image4 from '../assets/image4.png'; 
import image5 from '../assets/image5.png'; 
import image6 from '../assets/image6.png'; 
 
export type CarouselImage = {
  id: number; 
  img: string; 
}


export const carouselImgs: CarouselImage[] = [
  {id: 1, img: image1}, 
  {id: 2, img: image2}, 
  {id: 3, img: image3}, 
  {id: 4, img: image4}, 
  {id: 5, img: image5}, 
  {id: 6, img: image6}, 
]
