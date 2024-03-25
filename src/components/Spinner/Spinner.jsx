import loader from '../../img/loader.svg';
import './spinner.css'

export const Spinner = () => {
  return (
    <div className='container' >
      <img src={loader} alt="load" className='spinner'/>
    </div>
  );
};
