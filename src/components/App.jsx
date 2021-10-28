import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contactsSlice';
import { useState } from 'react';
import ContactForm from './СontactForm/СontactForm';
import ContactList from './СontactList/СontactList';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';
import { PhonebookTitle, ContactTitle } from './App.styled';

const App = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const [filter, setFilter] = useState('');
  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };
  const visibleContacts = getVisibleContacts();

  // const [createContact] = useCreateContactMutation();
  return (
    <div>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter value={filter} onChange={changeFilter} />
      {isFetching && <Loader />}
      {contacts && (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
          deleting={isDeleting}
        />
      )}
    </div>
  );
};

export default App;
