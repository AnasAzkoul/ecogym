import sponsorRedBull from '../../assets/SponsorRedBull.png';
import sponsorForbes from '../../assets/SponsorForbes.png';
import sponsorFortune from '../../assets/SponsorFortune.png';

type Props = {}

const Sponsors = (props: Props) => {
  return (
    <div className="bg-primary-100">
    <div
      className="section-container gap-4 grid items-center grid-cols-3 py-6">
      <figure>
        <img src={sponsorRedBull} alt="" />
      </figure>
      <figure>
        <img src={sponsorForbes} alt="" />
      </figure>
      <figure>
        <img src={sponsorFortune} alt="" />
      </figure>
    </div>        
  </div>
  )
}

export default Sponsors
