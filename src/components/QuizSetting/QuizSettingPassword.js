import { Space, Switch, Input } from 'antd';
import styled from "styled-components"

const PasswordContainer = styled.div`
display: flex;
flex-direction: row;
column-gap: 10px;
align-items: center;
width: 100%;
`

const PasswordBtnContainer = styled.div`
width: fit-content;
`
const PasswordTextContainer = styled.div`
color: gray;
width: 200px;
`
const PasswordInputContainer = styled.div`
width: 100%;
`
const QuizSettingPassword = () => {
    return (
        <PasswordContainer>
            <PasswordBtnContainer>
                <Space direction="vertical">
                    <Switch style={{ backgroundColor: '#ef6c4d' }} />
                </Space>
            </PasswordBtnContainer>
            <PasswordTextContainer>Password Protected</PasswordTextContainer>
            <PasswordInputContainer>
                <Space style={{ width: '100%' }} direction="vertical">
                    <Input style={{ borderRadius: '2px', backgroundColor: '#f9f9f9', paddingLeft: '10px' }} />
                </Space>
            </PasswordInputContainer>
        </PasswordContainer>

    )
}

export default QuizSettingPassword