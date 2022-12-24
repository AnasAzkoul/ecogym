import {SelectedPage} from '@/utils/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  page: string; 
  selectedPage: SelectedPage; 
  setSelectedPage: (value: SelectedPage) => void; 
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; 

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage &&
        'text-primary-500'} hover:text-primary-300 transition-all duration-500 capitalize`
      }
      onClick={() => {
        setSelectedPage(lowerCasePage)
        console.log('click')
      }}
      href={`#${page}`}
    >
      {page}
    </AnchorLink>   
  )
}

export default Link
