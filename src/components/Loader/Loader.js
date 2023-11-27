import useScrollToTop from '../../utils/hooks/useScrollToTop';
import './Loader.css';

const Loader=()=>{

useScrollToTop();

    return(
        <div className="loader">
            <span></span>
        </div>
    );
}
export default Loader;