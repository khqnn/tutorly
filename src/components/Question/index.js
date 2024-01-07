
import styled from "styled-components"
import { useDrag, useDrop } from 'react-dnd';
import Header from './Header';
import Hint from './Hint';

import Option from "./Option";

const Container = styled.div`
width: 100%;
border: 0.05em solid gray;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
`

const Body = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
row-gap: 10px;
`

const QuestionTitle = styled.div``
const OptionsContainer = styled.div`
display: flex;
flex-direction: column;
`
const Question = ({ id, index, moveRow, question, hint, options }) => {
    const [{ isDragging }, ref, preview] = useDrag({
        type: 'ROW',
        item: { id, index },
    });

    const [, drop] = useDrop({
        accept: 'ROW',
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveRow(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    const handleDragStart = (e) => {
        e.stopPropagation();
        e.preventDefault();
    };

    return (
        <Container ref={(node) => ref(drop(node))}>
            <Wrapper>
                <Header index={index} preview={preview} isDragging={isDragging} handleDragStart={handleDragStart} />
                <Body>
                    <QuestionTitle>{question}</QuestionTitle>
                    <OptionsContainer>
                        {options && options.map((option, index) => (
                            <Option isCorrect={option.isCorrect} text={option.text} />

                        ))}
                    </OptionsContainer>
                    <Hint hint={hint} />
                </Body>
            </Wrapper>
        </Container>
    )
}

export default Question