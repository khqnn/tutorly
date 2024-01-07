import styled from "styled-components"
import QuizMetaHeading from "./Heading"
import Instructions from "./Instructions"


const Container = styled.div`
border: 0.05em solid gray;
border-radius: 6px;
padding: 20px;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
row-gap: 20px;
`


const QuizMeta = () => {
    return (
        <Container>
            <Wrapper>
                <QuizMetaHeading heading={"Test Quiz"} subheading={"7 Questions"} />
                <Instructions />
            </Wrapper>
        </Container>
    )
}

export default QuizMeta