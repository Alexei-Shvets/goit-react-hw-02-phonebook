import styled from '@emotion/styled';

export const LiItem = styled.li`
text-align: center;
margin-bottom: 0px;
font-weight: 600;
`
export const PItem = styled.p`
margin-top: 10px;
margin-bottom: 10px;
`

export const Button = styled.button`
border: none;
background-color: transparent;
transition: transform;
transition-duration: 250ms;
transition - timing - function: cubic- bezier(0.4, 0, 0.2, 1);

svg {
height: 1.4em;
width: 1.4em;
}

&:hover {
transform: scale(1.3);
}`