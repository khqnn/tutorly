import { DatePicker, Space } from 'antd';
import styled from "styled-components"

const DateWrapper = styled.div`
display: flex;
flex-direction: column;
row-gap: 6px;
`

const DateHeading = styled.span`
font-size: medium;
`
const Date = styled.div``

const QuizSettingDate = ({text}) => {
    return (
        <DateWrapper>
            <DateHeading>{text}</DateHeading>
            <Date>
                <Space direction="vertical">
                    <DatePicker />
                </Space>
            </Date>
        </DateWrapper>

    )
}

export default QuizSettingDate