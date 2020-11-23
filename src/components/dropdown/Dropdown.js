import React, {useState, useEffect} from 'react';

const Dropdown = ({handleSelectedOption, shift, day}) => {
  const [state, setState] = useState({
    selectedValue: '',
    shift: shift,
    day: day
  });

  useEffect(() => {
    //pass state to parent
    handleSelectedOption(state);
  }, [state]);

  const allStaffs = ["X1", "X2", "X3", "X4", "X5", "X6", "x7"]

  const handleChange = (event) => {
    var val = event.target.value;
    setState((prev) => ({...prev, selectedValue: val}));
  }

  return (
    <select
      name="staff"
      id="staff"
      value={state.selectedValue} 
      onChange={handleChange} 
    >
      <option value={null}>...</option>
      {allStaffs.map((staff, i) => <option key={i} value={staff}>{ staff}</option>)}
    </select>
  );
}

export default Dropdown;