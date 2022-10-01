import styled from '@emotion/styled';

export const FilterWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;

svg {
height: 0.8em;
width: 0.8em;
margin-right: 8px;
}`;

export const Label = styled.label`
font-size: 20px;
padding-bottom: 10px;
justify-content: center;
text-align: center;
`;

export const Input = styled.input`
margin-top: 10px;
margin-bottom: 20px;
width: 220px;
display: flex;
padding: 10px;
border-radius: 5px;
`;
