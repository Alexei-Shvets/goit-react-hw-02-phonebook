import styled from '@emotion/styled';

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
`;

export const Label = styled.label`
font-size: 14px;
padding-bottom: 10px;
text-align: center;
font-weight: 600;
`;

export const Input = styled.input`
width: 220px;
display: flex;
padding: 10px;
border-radius: 5px;
`;

export const Button = styled.button`
background-color: transparent;
width: 100px;
height: 40px;
padding: 10px;
font-weight: 500;
font-size: 14px;
border: 1px solid #000;
border-radius: 5px;

transition: color, background-color, box-shadow, transform;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

&:hover {    
    background-color: rgb(0, 255, 255);  
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
&:active {
    background-color: rgb(0, 150, 255); 
    color: rgb(240, 255, 255); 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`;
