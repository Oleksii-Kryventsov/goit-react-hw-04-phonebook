import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Form, FormInput, FormLabel, FormBtn } from "./ContactForm.styled";

export const ContactForm = ({ onSubmit }) => {

    const [state, setState] = useState({
        name: '',
        number: '',
    })
    

    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget;
        setState(state => ({ ...state, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(state);

        reset();
    }

    const reset = () => {
        setState({ name: '', number: '' })
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <FormLabel>Name:<br />
                <FormInput
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={state.name}
                    onChange={handleInputChange}
                />
            </FormLabel>
            <FormLabel>Number:<br />
                <FormInput
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={state.number}
                    onChange={handleInputChange}
                />
            </FormLabel>
            <FormBtn type="submit">Add contact</FormBtn>
        </Form>
    )
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
