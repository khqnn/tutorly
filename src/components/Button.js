
import styled from 'styled-components'

const ButtonContainer = styled.div`
`

const Btn = styled.button`
background-color: ${props => props.type === 'primary' ? '#ef6c4d' : '#f9f9f9'};
color: ${props => props.type === 'primary' ? 'white' : 'black'};
border: ${props => props.type === 'primary' ? 'none' : '0.05em solid gray'};

border-radius: 4px;

padding: ${props => props.type === 'small' ? '6px' : props.size === 'large' ? '15px 10px' : '10px 6px'};
display: flex;
column-gap: 4px;
font-size: 0.8em;

&:hover {
    cursor: pointer;
}

`


const Button = ({ text, type, icon, size }) => {
    return (
        <ButtonContainer>
            <Btn type={type} size={size}>{icon}{text}</Btn>
        </ButtonContainer>
    )
}

export default Button