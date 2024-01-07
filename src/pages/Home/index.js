import styled from "styled-components"
import TopMessage from "../../components/TopMessage"
import QuizMeta from "../../components/QuizMeta"
import QuizSetting from "../../components/QuizSetting"
import QuestionOptions from "../../components/QuestionOptions"
import Questions from "../../components/Questions"
import { medium, mobile } from "../../responsive"
import Button from "../../components/Button"
import { SaveOutlined, ArrowRightOutlined } from '@ant-design/icons'



const Container = styled.div`
width: 100%;
`
const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const HeaderContainer = styled.div`
width: 100%;
height: 80px;
background: #ffffff;
border-bottom: 0.05em solid gray;
position: fixed;
`

const HeaderWrapper = styled.div`
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 20px;
`

const HeaderTextContainer = styled.div`
font-size: large;
`
const HeaderButtonContainer = styled.div`
display: flex;
column-gap: 10px;
`

const ContentContainer = styled.div`
max-width: 1024px;
width: 100%;
display: flex;
flex-direction: column;
margin-top: 100px;
row-gap: 10px;

${mobile({ width: "calc(100% - 20px)", marginLeft: "10px", marginRight: "10px" })};
${medium({ width: "calc(100% - 40px)", marginLeft: "20px", marginRight: "20px" })};

`

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <HeaderContainer>
                    <HeaderWrapper>
                        <HeaderTextContainer>Test Quiz</HeaderTextContainer>
                        <HeaderButtonContainer>
                            <Button size="large" text="Save Draft" icon={<SaveOutlined />} />
                            <Button type="primary" size="large" text="Asign Quiz" icon={<ArrowRightOutlined />} />
                        </HeaderButtonContainer>
                    </HeaderWrapper>
                </HeaderContainer>
                <ContentContainer>
                    <TopMessage text={"This quiz is unassigned. Only you will see the quiz until it is assigned."} />
                    <QuizMeta />
                    <QuizSetting />
                    <QuestionOptions />
                    <Questions />
                </ContentContainer>
            </Wrapper>
        </Container>
    )
}

export default Home