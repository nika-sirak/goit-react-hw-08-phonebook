export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const contacts = getItems(state);
  const filtered = getFilter(state);
  const normalizedFilter = filtered.toLocaleLowerCase();

  return contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedFilter)
  );
};
