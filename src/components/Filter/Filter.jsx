import PropTypes from 'prop-types';
// import { useState } from 'react';
import { Label } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  //   const [filter, setFilter] = useState('');
  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };

  return (
    <Label>
      <p> Find contact by name</p>
      <input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
