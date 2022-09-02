import { useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/auth/authSlice';
import { useSearchParams } from 'react-router-dom';

import style from './Spinner.module.css';

const Spinner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const token = params.get('token');
  console.log(token);

  useEffect(() => {
    dispatch(setToken({ token }));
    setTimeout(() => {
      navigate('/home', { replace: true });
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.container}>
      <Oval
        ariaLabel="loading-indicator"
        height={50}
        width={50}
        strokeWidth={5}
        color="#FF6B08"
        secondaryColor="#6D7A8D"
      />
    </div>
  );
};

export default Spinner;
