import styled from '@emotion/styled';

export const Form = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap: 15px;
`;

export const FormLabel = styled.label`
font-weight:600;
color:#6495ED;`;

export const FormInput = styled.input``;

export const FormBtn = styled.button`
color: #FFFFFF;
border:none;
border-radius:45px;
height: 40px;
width: 100px;
background-color: #6495ED;
cursor: pointer;

&:hover {
    background-color: #4682B4;
  }
`;