import client1 from '../../../assets/client1.png';
import client2 from '../../../assets/client2.png';
import client3 from '../../../assets/client3.png';
import client4 from '../../../assets/client4.png';
import client5 from '../../../assets/client5.png';
import client6 from '../../../assets/client6.png';
import client7 from '../../../assets/client7.png';
import client8 from '../../../assets/client8.png';
import ScrollEffect from '../../../components/ScrollEffect/ScrollEffect';
import './OurClients.css';

const OurClients = () => {

    return (
        <ScrollEffect className="our-clients" classNameInner='our-clients-wrapper'>
            <p>Our Clients</p>
            <div className="clients">
                <div className='client-cards'>
                    <img src={client1} alt='brand' style={{ backgroundColor: 'white' }} />
                    <img src={client2} alt='brand' />
            {/* <img src={client3} alt='brand' />
            <img src={client4} alt='brand' /> 
                    <img src={client7} alt='brand' style={{ backgroundColor: 'white' }} />
                    <img src={client5} alt='brand' />
                    */}
                    <img src={client6} alt='brand' />
                    <img src={client8} alt='brand' />
                </div>
                <div className='client-cards'>
                    <img src={client1} alt='brand' style={{ backgroundColor: 'white' }} />
                    <img src={client2} alt='brand' />
                    {/* <img src={client3} alt='brand' />
                    <img src={client4} alt='brand' />
                    <img src={client7} alt='brand' style={{ backgroundColor: 'white' }} />
                    <img src={client5} alt='brand' />
                    */}
                    <img src={client6} alt='brand' /> 
                    <img src={client8} alt='brand' />
                </div>
            </div>
        </ScrollEffect>
    );
}
export default OurClients;