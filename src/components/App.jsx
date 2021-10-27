import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contactsSlice';
import ContactForm from './СontactForm/СontactForm';
import ContactList from './СontactList/СontactList';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';
import { PhonebookTitle, ContactTitle } from './App.styled';

const App = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const visibleContacts = filter => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };
  // const [createContact] = useCreateContactMutation();
  return (
    <div>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter filter={visibleContacts} />
      {isFetching && <Loader />}
      {contacts && (
        <ContactList contacts={contacts} onDeleteContact={deleteContact} deleting={isDeleting} />
      )}
    </div>
  );
};

export default App;
