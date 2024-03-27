import './photoUpload.scss';

export const PhotoUpload = ({ photo, photoError, handleFileChange }) => {
  return (
    <>
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
    </>
  );
};
