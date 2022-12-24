import React, {Children} from 'react'

type Props = {
  children: React.ReactNode; 
}

const Heading_2 = ({children}: Props) => {
  return (
    <h2 className='font-montserrat text-3xl font-bold uppercase'>
      {children}
    </h2>
  )
}

export default Heading_2
