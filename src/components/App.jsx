//импорты библиотек
import React, { Component, Fragment } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

//куски секций и компонентов
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

//стилистика общего контейнера и заголовков
import { Container, Title, SecondTitle } from './App.styled';

class App extends Component {
state = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
};

onAddContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    if (
    this.state.contacts.some(
        contact => contact.name.toLowerCase() === normalizedName
    )
    ) {
    Notify.failure(`${name} is already in contacts`);
    return;
    }

    this.setState(prevState => ({
    contacts: [
        ...prevState.contacts,
        {
        id: nanoid(),
        name,
        number,
        },
    ],
    }));
};

handleDelete = id => {
    this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
};

handleFilter = e => {
    this.setState({ filter: e.target.value });
};

render() {
    const { contacts, filter } = this.state;    

    let renderContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.trim())
    );

    return (
        <Fragment>
            <Container>
                <Title>Phonebook</Title>                
                    <ContactForm onSubmit={this.onAddContact} />                
                <SecondTitle>Contacts</SecondTitle>                                   
                    <Filter handleFilter={this.handleFilter}
                    value={filter} />
                    <ContactList contacts={renderContacts}
                    handleDelete={this.handleDelete}/>                
            </Container>
        </Fragment>
    );
}
}

export default App;