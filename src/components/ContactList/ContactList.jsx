import PropType from 'prop-types';
import React from 'react';
import { Button, List, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getIsLoading, getStatusFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { CircularProgress } from '@mui/material';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const handleDeleteContact = id => dispatch(deleteContact(id));

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filterContact.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            {name} || {number}
            <Button
              type="button"
              title="Delete contact"
              onClick={() => handleDeleteContact(id)}
            ></Button>
            {isLoading && <CircularProgress />}
          </ListItem>
        );
      })}
    </List>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropType.arrayOf(
    PropType.shape({
      id: PropType.string.isRequired,
      name: PropType.string.isRequired,
      number: PropType.string.isRequired,
    })
  ),
  handleDeleteContact: PropType.func,
};
