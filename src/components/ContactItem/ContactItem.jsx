import React, { Component } from 'react';
import { BsTrash } from 'react-icons/bs';
import { LiItem, PItem, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

export default class ContactItem extends Component {
static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

render() {
    return (
    <LiItem>
        <PItem>{this.props.name}</PItem>
        <PItem>{this.props.number}</PItem>
        <Button onClick={this.props.handleDelete}>
        <BsTrash />
        </Button>
    </LiItem>
    );
}
}