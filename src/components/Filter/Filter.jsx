import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onChangeFilter }) {
  return (
    <label className={s.filterField}>
      Find contacts by name
      <input type="text" value={value} onChange={onChangeFilter} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
