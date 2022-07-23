import { useFilter } from 'hooks/contactsHooks';
import { MdSearch } from 'react-icons/md';
import s from './Filter.module.css';

function Filter() {
  const { value, filterContacts } = useFilter();
  return (
    <label className={s.field}>
      <span className={s.inputWrapper}>
        <input
          className={s.input}
          type="text"
          value={value}
          placeholder="Find contacts by name"
          onChange={e => filterContacts(e.currentTarget.value)}
        />
        <MdSearch className={s.formIcon} />
      </span>
    </label>
  );
}

export default Filter;
