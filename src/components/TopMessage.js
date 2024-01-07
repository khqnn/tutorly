import styled from "styled-components"

const MessageContainer = styled.div`
background-color: #f1f5f8;
width: 100%;
height: 40px;

display: flex;
justify-content: center;
align-items: center;
border-radius: 6px;
font-size: small;
olor: #494949;
`

const MessageText = styled.p`
text-align: center;
`

const TopMessage = ({text}) => {
    return (
        <>
            <MessageContainer>
                <MessageText>
                    {text}
                </MessageText>
            </MessageContainer>
        </>
    )
}

export default TopMessage