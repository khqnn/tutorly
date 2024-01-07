import styled from "styled-components"


const Container = styled.div``

const Wrapper = styled.div`
display: flex;
flex-direction: column;
row-gap: 10px;
`

const HeadingWrapper = styled.div`
flex: 1;
display: flex;
flex-direction: row;
column-gap: 4px;
`
const HeadingText = styled.span``
const SubHeadingText = styled.span`
color: gray;
font-size: small;
display: flex;
align-items: center;
`

const InstructionContainer = styled.div`
width: 100%;
`

const InstructionTextarea = styled.textarea`
width: calc(100% - 20px);
background-color: #f9f9f9;
border: none;
border-bottom: 0.05em solid gray;
height: 40px;
padding: 10px;
border-radius: 4px;
`

const Instructions = () => {
    return (
        <Container>
            <Wrapper>
                <HeadingWrapper>
                    <HeadingText>Quiz Instructions</HeadingText>
                    <SubHeadingText>(Optional)</SubHeadingText>
                </HeadingWrapper>
                <InstructionContainer>
                    <InstructionTextarea type="textarea" placeholder="Enter instructions for your student." />
                </InstructionContainer>
            </Wrapper>
        </Container>
    )
}

export default Instructions