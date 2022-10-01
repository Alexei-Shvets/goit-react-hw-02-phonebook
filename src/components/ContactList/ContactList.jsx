import React, { Component, Fragment } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { UlList } from './ContactList.styled';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
static propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
    ).isRequired,
    handleDelete: PropTypes.func.isRequired,
};

render() {
    return (
    <Fragment>
        {this.props.contacts.length > 0 && (
        <UlList>
            {this.props.contacts.map(({ id, name, number }) => (
            <ContactItem
                key={id}
                name={name}
                number={number}
                handleDelete={() => {
                this.props.handleDelete(id);
                }}
            />
            ))}
        </UlList>
        )}
    </Fragment>
    );
}
}