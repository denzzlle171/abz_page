import './form.css';
import {Button} from '../Button/Button.jsx'
import { useState } from 'react';

export const Form = () => {

  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [position, setPosition] = useState('');
  const [photo, setPhoto] = useState(null);


  const handleFileChange = (event) => {
    const files = event.target.files;
    setPhoto(files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: text,
      email: email,
      phone: tel,
      position_id: position,
      photo: photo && photo.length ? photo[0] : null,
    };



  }

  return (
    <div className="section-form">
      <h2 className="form-form__title">Working with POST request</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form__input"
          placeholder="Your name"
        />
        <input
          type="email"
          name="email"
          className="form__input"
          placeholder="Email"
        />
        <input
          type="tel"
          name="tel"
          className="form__input"
          placeholder="Phone"
        />
        <p className="prompting-tel">+38 (XXX) XXX - XX - XX</p>

        <h4 className="title-select">Select your position</h4>

        <div className="options">
          <label>
            <input
              type="radio"
              name="option"
              className="real-radio"
              value="Frontend"
            />
            <span className="castom-radio"></span>
            Frontend developer
          </label>

          <label>
            <input
              type="radio"
              name="option"
              value="Backend"
              className="real-radio"
            />
            <span className="castom-radio"></span>
            Backend developer
          </label>

          <label>
            <input
              type="radio"
              name="option"
              value="Designer"
              className="real-radio"
            />
            <span className="castom-radio"></span>
            Designer
          </label>

          <label>
            <input
              type="radio"
              name="option"
              value="QA"
              className="real-radio"
            />
            <span className="castom-radio"></span>
            QA
          </label>
        </div>

        <label htmlFor="photoUpload" className="photo-upload">
          <p className="photo-upload__fild">
            <p className="photo-upload__btn">Upload</p>
            {photo && photo.length ? photo[0].name : 'Upload your photo'}
          </p>
          <input
            id="photoUpload"
            type="file"
            name="file"
            accept="image/*"
            className="photo-upload__real-btn"
            onChange={handleFileChange}
          />
        </label>

        <Button addClassName="form__btn" disabled={true}>
          Sign up
        </Button>
      </form>
    </div>
  );
};
 