import s from '../Button/button.module.css';

export const Button = ({ text, theme }) => {
  if (theme === 'orangeTheme') {
    return (
      <button
        className={s.button}
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
