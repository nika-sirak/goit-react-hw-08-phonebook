import PropTypes from 'prop-types'


function Filter({value, onChangeFilter}) {
  return (
    <label htmlFor="">
      Find contacts by name
      <input type="text" value={value} onChange={onChangeFilter}/>
    </label>
    )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
}

export default Filter