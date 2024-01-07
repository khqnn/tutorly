import { Checkbox } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons'
import styled from "styled-components"


const QuestionSetting = styled.div`
display: flex;
column-gap: 4px;
align-items: center;
color: gray;
font-size: small;
`

const QuestionSettingCheckbox = styled.div``
const QuestionSettingIcon = styled.div`
font-size: medium;
`
const QuestionsSettingText = styled.div``
const QuestionSettingInfo = styled.div``

const QuestionSettingItem = ({text, icon}) => {
    return (
        <QuestionSetting>
            <QuestionSettingCheckbox>
                <Checkbox />
            </QuestionSettingCheckbox>
            <QuestionSettingIcon>
                {icon}
            </QuestionSettingIcon>
            <QuestionsSettingText>{text}</QuestionsSettingText>
            <QuestionSettingInfo>
                <InfoCircleOutlined />
            </QuestionSettingInfo>
        </QuestionSetting>
    )
}

export default QuestionSettingItem