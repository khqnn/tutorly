
import styled from "styled-components"
import { RightCircleFilled } from '@ant-design/icons'


const OptionWrapper = styled.div`
display: flex;
column-gap: 4px;
`
const OptionIcon = styled.div`
color: ${props => props.isCorrect ? '#ace2a7' : '#f38970'};
`
const OptionText = styled.div`
color: gray;
font-size: small;
`

const Option = ({ isCorrect, text }) => {

    return (
        <OptionWrapper>
            <OptionIcon isCorrect={isCorrect}><RightCircleFilled /></OptionIcon>
            <OptionText>{text}</OptionText>
        </OptionWrapper>
    )
}

export default Option