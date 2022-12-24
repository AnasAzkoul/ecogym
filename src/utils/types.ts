export enum SelectedPage {
  Home = 'home', 
  Benefits = 'benefits', 
  OurClasses = 'ourclasses', 
  ContactUs = 'contactus'
}


export type BenefitType = {
  id: number; 
  icon: JSX.Element; 
  title: string; 
  description: string
}
