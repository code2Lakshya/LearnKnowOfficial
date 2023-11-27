import { useNavigate } from 'react-router-dom';
import './WrongPage.css';

const WrongPage = () => {

const navigate=useNavigate();

    return (
        <div className="wrong-page">
            <h3>Error : <span>404</span> </h3>
            <p>Oh No !! No such page exists.</p>
            <button onClick={()=>navigate(-1)}>Return Back</button>
        </div>
    );
}
export default WrongPage;