import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
    FilterWrapper,
    Label,
    Input
} from './Filter.styled';
import PropTypes from 'prop-types';

export default class Filter extends Component {
static propTypes = {
    value: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
};

render() {
    const { value, handleFilter } = this.props;

    return (
    <FilterWrapper>
        <Label>
        <BsSearch /> Search
        <Input            
            value={value}
            name="filter"
            type="text"
            onChange={handleFilter}
            placeholder="Find contact by name"
        />
        </Label>
    </FilterWrapper>
    );
}
}