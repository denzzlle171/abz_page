import './form.css';
import { Button } from '../Button/Button.jsx';
import { useState, useEffect } from 'react';
import { PositionList } from '../PositionList/PositionList.jsx';
import succes from '../../img/success-image.png';

export const Form = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [position, setPosition] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [token, setToken] = useState('');

  const [showSuccess, setShowSuccess] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [photoError, setPhotoError] = useState('');

  useEffect(() => {
    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })

      .then((responseData) => {
        setToken(responseData.token);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files;

    if (!file) {
      setPhotoError('Photo is required');
      return;
    }

    if (file?.[0]?.size > 5242880) {
      setPhotoError('Photo size must not exceed 5MB');
      return;
    } else {
      setPhotoError('');
    }

    setPhoto(file);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  //Error
  const handleNameChange = (e) => {
    const { value } = e.target;
    setText(value);

    if (value.length < 2 || value.length > 60) {
      setNameError('Username should contain 2-60 characters');
    } else {
      setNameError('');
    }
  };
  //
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    const emailRegex =
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    if (value.length < 2 || value.length > 100 || !emailRegex.test(value)) {
      setEmailError('email not valid. according to RFC2822');
    } else {
      setEmailError('');
    }
  };
  //
  const handlePhoneChange = (e) => {
    const { value } = e.target;
    setTel(value);

    const phoneRegex = /^[\+]{0,1}380([0-9]{9})$/;

    if (!phoneRegex.test(value)) {
      setPhoneError('number should start with +380');
    } else {
      setPhoneError('');
    }
  };

  //🎈
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', text);
    formData.append('email', email);
    formData.append('phone', tel);
    formData.append('position_id', position);
    if (photo && photo.length) {
      formData.append('photo', photo[0]);
    }

    // formData.forEach((value, key) => {
    //   console.log(`${key}: ${value}`);
    // });

    try {
      const response = await fetch(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users',
        {
          method: 'POST',
          headers: {
            Token: token,
          },
          body: formData,
        }
      );

      if (response.ok) {
        console.log('Data submitted successfully');
        setText('');
        setEmail('');
        setTel('');
        setPosition('');
        setPhoto(null);

        setShowSuccess(true)
        
      } else {
        console.error('Failed to submit data:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  let disable =
    !text ||
    !email ||
    !tel ||
    !position ||
    !photo ||
    nameError ||
    emailError ||
    phoneError ||
    photoError;

  return (
    <div className="section-form" id="singUp">
      <h2 className="form-form__title">Working with POST request</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input--wrapper">
          <input
            type="text"
            name="name"
            // className={`form__input ${nameError ? 'error' : ''}`}
            className={`${nameError ? 'error' : ''}`}
            placeholder="Your name"
            value={text}
            onChange={handleNameChange}
          />
          <label htmlFor="" className={`${nameError ? 'error' : ''}`}>
            Your name
          </label>
          {nameError && <p className="error-message">{nameError}</p>}
        </div>
        <div className="input--wrapper">
          <input
            type="email"
            name="email"
            className={`${emailError ? 'error' : ''}`}
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="" className={`${emailError ? 'error' : ''}`}>
            Email
          </label>
          {emailError && <p className="error-message">{emailError}</p>}
        </div>

        <div className="input--wrapper">
          <input
            type="tel"
            name="tel"
            className={`${phoneError ? 'error' : ''}`}
            placeholder="Phone"
            value={tel}
            onChange={handlePhoneChange}
          />
          <label htmlFor="" className={`${phoneError ? 'error' : ''}`}>
            Phone
          </label>
        </div>
        {phoneError ? (
          <p className="error-message">{phoneError}</p>
        ) : (
          <p className="prompting-tel">+38 (XXX) XXX - XX - XX</p>
        )}

        <h4 className="title-select">Select your position</h4>
        <PositionList handlePositionChange={handlePositionChange} />
        <label htmlFor="photoUpload" className="photo-upload">
          <div className={`photo-upload__fild ${photoError ? 'error' : ''}`}>
            <p className={`photo-upload__btn ${photoError ? 'error' : ''}`}>
              Upload
            </p>
            {photo && photo.length ? photo[0].name : 'Upload your photo'}
          </div>
          <input
            id="photoUpload"
            type="file"
            name="file"
            accept="image/jpeg, image/jpg"
            className="photo-upload__real-btn"
            onChange={handleFileChange}
          />
        </label>
        {photoError && <p className="error-message">{photoError}</p>}
        <Button addClassName="form__btn" disabled={disable}>
          Sign up
        </Button>
      </form>

      {showSuccess && (
        <div>
          <p className="success__title">User successfully registered</p>
          <img src={succes} alt="success" className="success__img" />
        </div>
      )}
    </div>
  );
};
