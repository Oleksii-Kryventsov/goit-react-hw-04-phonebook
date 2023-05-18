import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Form, FormInput, FormLabel, FormBtn } from "./ContactForm.styled";

export class ContactForm extends Component {

        state = {
            name: '',
            number: '',
    }

    handleInputChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value } )
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '',})
    }
    
    render() {
        return (
        <Form onSubmit={this.handleSubmit}>
        <FormLabel>Name:<br/> 
            <FormInput
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleInputChange}        
                    />
        </FormLabel>
        <FormLabel>Number:<br/> 
            <FormInput
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleInputChange}        
                    />
        </FormLabel>
        <FormBtn type="submit">Add contact</FormBtn>        
        </Form>    
        )
    }
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
