import styled from "styled-components"


const HeadingContainer = styled.div`
display: flex;
flex-direction: row;
`
const HeadingWrapper = styled.div`
flex: 1;
display: flex;
flex-direction: column;
row-gap: 4px;
`
const HeadingText = styled.span``
const SubHeadingText = styled.span`
color: gray;
font-size: small;
`

const LogoWrapper = styled.div`
flex: 1;
display: flex;
justify-content: end;
column-gap: 4px;
`

const Logo = styled.div`
background: #ef6c4d;
display: flex;
align-items: center;
border-radius: 4px;
height: fit-content;
padding: 2px;
`
const LogoImg = styled.img`
width: 14px;
height: 14px;
`
const LogoText = styled.span`
font-size: medium;
color: gray;
`


const QuizMetaHeading = ({ heading, subheading }) => {
    return (
        <HeadingContainer>
            <HeadingWrapper>
                <HeadingText>{heading}</HeadingText>
                <SubHeadingText>{subheading}</SubHeadingText>
            </HeadingWrapper>
            <LogoWrapper>
                <Logo><LogoImg src={require("../../assets/databaseicon.svg").default} /></Logo>
                <LogoText>Tutorly.ai</LogoText>
            </LogoWrapper>
        </HeadingContainer>
    )
}

export default QuizMetaHeading