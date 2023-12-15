import React, { useState } from 'react';

const ContactApp = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ]);

  const [newContact, setNewContact] = useState({ id: '', name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleAddContact = () => {
    setContacts([...contacts, newContact]);
    setNewContact({ id: '', name: '', email: '' });
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Add New Contact</h2>
      <label>ID:</label>
      <input
        type="text"
        name="id"
        value={newContact.id}
        onChange={handleInputChange}
      />
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={newContact.name}
        onChange={handleInputChange}
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={newContact.email}
        onChange={handleInputChange}
      />
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

export default ContactApp;
