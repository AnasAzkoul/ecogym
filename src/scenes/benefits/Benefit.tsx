import { BenefitType, SelectedPage } from '@/utils/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  benefit: BenefitType; 
  setSelectedPage: (value: SelectedPage) => void; 
}

const Benefit = ({benefit, setSelectedPage}: Props) => {
  return (
    <div className='flex flex-col items-center p-10 border-2 border-gray-500 gap-4'>
      <div className="flex justify-center">
        <div className="bg-primary-100 p-4 rounded-full">
          {benefit.icon}
        </div>
      </div>
      <h4 className='font-bold'>{benefit.title}</h4>
      <p className='my-4 text-center'>{benefit.description}</p>
      <AnchorLink
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        className='text-primary-500 pb-1 border-b-2 border-primary-500'
      >
        Learn More
      </AnchorLink>
    </div>
  )
}

export default Benefit
