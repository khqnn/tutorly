import { FastForwardOutlined, BulbOutlined, StarOutlined } from '@ant-design/icons'
import styled from "styled-components"
import QuestionSettingItem from './QuestionSettingItem';
import QuizSettingDate from './QuizSettingDate';
import QuizSettingPassword from './QuizSettingPassword';
import { mobile } from '../../responsive';


const Container = styled.div`
border: 0.05em solid gray;
border-radius: 6px;
`
const Wrapper = styled.div`
width: 100%;
`

const QuizSettingContainer = styled.div`
width: 100%;

display: flex;
flex-direction: row;

${mobile({ flexDirection: "column" })};

`
const QuizSettingWrapper = styled.div`
flex: 4;
padding: 20px;
display: flex;
flex-direction: column;
row-gap: 10px;
`

const DatesContainer = styled.div`
display: flex;
column-gap: 20px;
`

const QuestionSettingWrapper = styled.div`
flex: 1;
background-color: #f1f5f8;
padding: 20px;
border-radius: 0px 6px 6px 0px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const QuizSetting = () => {
    return (
        <Container>
            <Wrapper>
                <QuizSettingContainer>
                    <QuizSettingWrapper>
                        <DatesContainer>
                            <QuizSettingDate text={"Available From"} />
                            <QuizSettingDate text={"Available Until"} />
                        </DatesContainer>
                        <QuizSettingPassword />
                    </QuizSettingWrapper>
                    <QuestionSettingWrapper>
                        <QuestionSettingItem text={"Skip Question"} icon={<FastForwardOutlined />} />
                        <QuestionSettingItem text={"Show Hint"} icon={<BulbOutlined />} />
                        <QuestionSettingItem text={"Explain Answer"} icon={<StarOutlined />} />
                    </QuestionSettingWrapper>
                </QuizSettingContainer>
            </Wrapper>
        </Container>
    )
}

export default QuizSetting