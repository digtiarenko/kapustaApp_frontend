import s from './Summary.module.css';

function Summary() {
  return (
    <div className={s.container}>
      <p className={s.title}> Summary</p>
      <ul className={s.list}>
        <li className={s.item}>
          <p>month</p>
          <p>value</p>
        </li>
      </ul>
    </div>
  );
}

export default Summary;
