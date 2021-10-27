// import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { getFilter } from '../../redux/selectors';
// import contactsActions from '../../redux/actions';
import { useState } from 'react';
import { Label } from './Filter.styled';

const Filter = () => {
  const [filter, setFilter] = useState('');
  const changeFilter = e => {
    setFilter(e.target.value);
  };

  // const value = useSelector(getFilter);
  // const dispatch = useDispatch();

  return (
    <Label>
      <p> Find contact by name</p>
      <input
        type="text"
        // name="filter"
        value={filter}
        onChange={changeFilter}
      />
    </Label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   // onChange: PropTypes.func.isRequired,
// };

export default Filter;
