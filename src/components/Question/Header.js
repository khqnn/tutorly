import { Checkbox } from 'antd';
import { EditFilled, DragOutlined } from '@ant-design/icons'

import styled from "styled-components"
import Button from '../Button';


const Container = styled.div`
background-color: #f1f5f8;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
`
const QuestionNumber = styled.div`
display: flex;
align-items: center;
column-gap: 4px;
font-size: small;
`

const QuestionOptions = styled.div``
const EditButtonContainer = styled.div`
display: flex;
column-gap: 10px;
`


const Header = ({ index, preview, isDragging, handleDragStart }) => {
    return (
        <Container
            ref={preview}
            style={{ opacity: isDragging ? 0 : 1 }}
            onDragStart={handleDragStart}
        >
            <QuestionNumber>
                <Checkbox />
                <span>Question {index + 1}</span>
            </QuestionNumber>
            <QuestionOptions>
                <EditButtonContainer>
                    <Button text="Edit" type="small" icon={<EditFilled />} />
                    <Button type="small" icon={<DragOutlined />} />
                </EditButtonContainer>
            </QuestionOptions>
        </Container>
    )
}

export default Header