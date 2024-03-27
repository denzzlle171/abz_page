import './succesBunner.scss';
import succes from '../../img/success-image.png';

export const SuccesBunner = () => {
  return (
    <div className="success">
      <p className="success__title">User successfully registered</p>
      <img src={succes} alt="success" className="success__img" />
    </div>
  );
};
