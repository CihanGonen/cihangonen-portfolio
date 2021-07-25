import './CertCard.css';

const CertCard = ({src,link})=>{
  return(
    <div className="w-11/12 lg:w-96">
      <img width='100%' src={src} alt="cert"></img>
    </div>
  )
}

export default CertCard;