import React, { useEffect, useState } from 'react';
import styles from './Dropdown.module.css';
import { ReactComponent as Arrowdown } from '../../images/icons/arrow-bottom.svg';
import { useDispatch, useSelector } from 'react-redux';
import categoriesOperations from 'redux/categories/categoriesOperations';
import { getCategoriesList } from '../../redux/categories/categoriesSelectors';
// import axios from 'axios';

export default function Dropdown({ type, onCategorySet, categoryName }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const categoriesList = useSelector(getCategoriesList);

  useEffect(() => {
    dispatch(categoriesOperations.getCategoriesList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggling = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const onOptionClicked = value => () => {
    onCategorySet(value);
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.dropdown}>
        <button onClick={toggling} className={styles.dropbtn}>
          {categoryName || 'Product category'}
          <Arrowdown />
        </button>
        {isOpen && (
          <ul className={styles.dropdownContent}>
            {categoriesList &&
              categoriesList.map(item => (
                <li
                  key={item._id}
                  onClick={onOptionClicked(item)}
                  className={styles.dropdownItem}
                >
                  {item.name}
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
}

// const categories = async () => {
//   const data = await axios.get(
//     'https://kapustaapplication.herokuapp.com/api/categories'
//   );
//   console.log('categories:', data);
// };

// useEffect(() => {
//   console.log(category);
// }, [category]);

// useEffect(() => {
//   const handleKeydown = event => {
//     if (event.target !== event.currentTarget) {
//       console.log(event.target);
//       console.log(event.currentTarget);
//       setIsOpen(false);
//     }
//   };
//   window.addEventListener('click', handleKeydown);

//   return () => {
//     window.removeEventListener('click', handleKeydown);
//   };
// });
