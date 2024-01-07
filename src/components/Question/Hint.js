import { BulbFilled } from '@ant-design/icons'

import styled from "styled-components"
const HintContainer = styled.div`
display: flex;
column-gap: 10px;
align-items: center;
font-size: small;
color: gray;
`
const HintIconContainer = styled.div`
background-color: #fce2db;
padding: 4px;
color: #f38970;
font-size: 0.8em;
`
const HintText = styled.div``

const Hint = ({ hint }) => {
    return (
        <HintContainer>
            <HintIconContainer>
                <BulbFilled />
            </HintIconContainer>
            <HintText>{hint}</HintText>
        </HintContainer>
    )
}

export default Hint