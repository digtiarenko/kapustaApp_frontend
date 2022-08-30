import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Products', label: 'Products' },
  { value: 'Alcohol', label: 'Alcohol' },
  { value: 'Entertainment', label: 'Entertainment' },
];
const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    // width: state.selectProps.width,
    borderBottom: '1px dotted pink',
    color: state.selectProps.menuColor,
    padding: 20,
  }),

  //   placeholder: ()=> {'Product category'},

  // control: () => ({
  //     // none of react-select's styles are passed to <Control />
  //     width: 200,
  //   }),

  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = 'opacity 300ms';

  //     return { ...provided, opacity, transition };
  //   }
};
export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <Select
        width="200px"
        placeholder="Product category"
        styles={customStyles}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}
