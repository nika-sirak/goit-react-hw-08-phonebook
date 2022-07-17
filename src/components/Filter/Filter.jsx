import { useFilter } from 'hooks/contactsHooks';
import s from './Filter.module.css';

function Filter() {
  const { value, filterContacts } = useFilter();
  return (
    <label className={s.filterField}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => filterContacts(e.currentTarget.value)}
      />
    </label>
  );
}

export default Filter;
