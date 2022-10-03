import React, { Component } from 'react';
import {
    Form,
    Label,
    Input,
    Button
} from './ContactForm.styled';


export default class ContactForm extends Component {
//в этот инпут записываются новые значения, которые в дальнейшем рендерятся в лишках(секция контактов)
state = {
    name: '',
    number: '',
};

//при собмите формы, функция собирает значения со всех полей инпута 
//привент дефолт внутри для предотвращения перезагрузки страницы, после чего вызов ресетФорм очищает поля инпутов.
handleSubmit = e => {
    e.preventDefault();
    
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.resetForm();
};

//функция по очистке стейта(формы), которая вызывается по результату работы handleSubmit
resetForm = () => {
    this.setState(() => ({
    name: '',
    number: '',
    }));
};
    //данный метод обновляет стейт при каждом onChange(при каждом вводе текста), 
    //при этом идет обновление значения, а не создание нового и сохранение предыдущего ввода(это заслуга { [name]: value } в сэтСтейте)
    handleChange = e => {    
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
};
//как только сетСтейт изменился - вызывается рэндер и наш инпут перерисовывается
render() {
    return (
    <Form onSubmit={this.handleSubmit}>
        <Label>
            Name
        <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            //на 52 строке ссылка на стейт
            value={this.state.name}
            onChange={this.handleChange}
            required />
        </Label>

        <Label>
            Number
        <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            //на 65 строке ссылка на стейт
            value={this.state.number}
            onChange={this.handleChange}
            required />
        </Label>
        <Button type="submit">
            Add contact
        </Button>
    </Form>
    );
}
}