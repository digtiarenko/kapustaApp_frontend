import React, { useState, useEffect } from 'react';
import styles from './Dropdown.module.css';
import { ReactComponent as Arrowdown } from '../../images/icons/arrow-bottom.svg';
// import axios from 'axios';

const categories = [
  { _id: '630d4b6b1a5a5fef811d9a80', name: 'Alcohol' },
  { _id: '630d23089692d4e9360ec34d', name: 'Products' },
  { _id: '630d4d6b78f7810c7f73a07b', name: 'Entertainment' },
  { _id: '630d5145c0670a69b1b72a7f', name: 'Transport' },
];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setCategory(value);
    setIsOpen(false);
  };
  // const categories = async () => {
  //   const data = await axios.get(
  //     'https://kapustaapplication.herokuapp.com/api/categories'
  //   );
  //   console.log('categories:', data);
  // };

  useEffect(() => {
    console.log(category);
  }, [category]);

  useEffect(() => {
    const handleKeydown = event => {
      if (event.target === event.currentTarget) {
        console.log(event.target);
        console.log(event.currentTarget);
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleKeydown);

    return () => {
      window.removeEventListener('click', handleKeydown);
    };
  });

  return (
    categories && (
      <>
        <div className={styles.dropdown}>
          <button onClick={toggling} className={styles.dropbtn}>
            {category || 'Product category'}
            <Arrowdown />
          </button>
          {isOpen && (
            <ul className={styles.dropdownContent}>
              {categories.map(item => (
                <li
                  key={Math.random()}
                  onClick={onOptionClicked(item.name)}
                  className={styles.dropdownItem}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    )
  );
}
