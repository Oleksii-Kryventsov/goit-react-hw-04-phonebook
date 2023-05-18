import PropTypes from 'prop-types';
import { Btn, Item, List, Text } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
        <List>
            {contacts.map((el) =>
            <Item key={el.id}>
                <Text>{el.name} {el.number}</Text><br/>
                <Btn onClick={() => onDeleteContact(el.id)}>Delete</Btn>
            </Item>)}
        </List>
);

ContactList.propTypes = {
        contacts: PropTypes.arrayOf(Object).isRequired,
        onDeleteContact: PropTypes.func.isRequired
}