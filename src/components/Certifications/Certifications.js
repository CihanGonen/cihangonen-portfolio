import CertCard from '../CertCard/CertCard';
import './Certifications.css';

const Certifications = ({certs})=>{
  console.log(certs);
  return(
    <div className="">
      <div className="flex flex-col flex-wrap justify-around items-center gap-2 py-5 lg:flex-row">
      {
          certs.map((cert,i) =>{
            return (
                <CertCard 
                key={i} 
                src={cert.src} 
                link={cert.link} />
            );
          })
      }
      </div>
    </div>
  )
}

export default Certifications;