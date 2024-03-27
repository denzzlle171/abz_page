import './button.scss'

export const Button = ({ children, addClassName, disabled, onClick }) => {
  const combineClassName = `button ${addClassName}`;

  return (
    <button className={combineClassName} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
