import { Checkbox } from 'antd';
import { StarOutlined } from '@ant-design/icons'

import styled from "styled-components"
import Button from '../Button';
import { mobile } from '../../responsive';


const Container = styled.div`
width: 100%;
margin-top: 20px;
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })};
`

const SelectAllContainer = styled.div`
display: flex;
align-items: center;
column-gap: 4px;
color: gray;
font-size: small;
`

const ButtonsContainer = styled.div``
const ButtonsWrapper = styled.div`
display: flex;
column-gap: 10px;
`


const QuestionOptions = () => {
    return (
        <Container>
            <Wrapper>
                <SelectAllContainer>
                    <Checkbox />
                    <span>7 Questions</span>
                </SelectAllContainer>
                <ButtonsContainer>
                    <ButtonsWrapper>
                        <Button text={"Add Custom Question"} type="normal" />
                        <Button text={"Generate Questions"} type="primary" icon={<StarOutlined />} />
                    </ButtonsWrapper>
                </ButtonsContainer>
            </Wrapper>
        </Container>
    )
}

export default QuestionOptions