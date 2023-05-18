import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filter, onChange }) => ( 
    <FilterLabel>Find contacts by name:<br/>
        <FilterInput
            type="text"
            value={filter}
            onChange={onChange}
        >        
        </FilterInput>
    </FilterLabel>    
);

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func.isRequired
}