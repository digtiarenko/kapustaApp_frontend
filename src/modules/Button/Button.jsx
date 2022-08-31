import s from '../Button/button.module.css';

export const Button = ({ text, theme, type, disabled, onClicked }) => {
  if (theme === 'orangeTheme') {
    return (
      <button
        className={s.button}
        type={type}
        disabled={disabled}
        onClick={onClicked}
        style={{
          background: '#FF751D',
          color: 'white',
          border: 'none',
        }}
      >
        {text}
      </button>
    );
  }
  if (theme === 'whiteTheme') {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClicked}
        className={s.button}
        style={{
          background: '#FFFFFF',
          color: '#52555F',
          border: '2px solid #F6F7FC',
        }}
      >
        {text}
      </button>
    );
  }
};
