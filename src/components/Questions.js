import styled from "styled-components"
import Question from "./Question"
import { useCallback, useState } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const Questions = () => {
    const [rows, setRows] = useState([
        { id: 1, question: "Who is Changaiz Khan?", hint: "He was the King of kings!" },
        {
            id: 2, question: "What is my name?", hint: "My name is King!", options: [
                {
                    id: 1,
                    text: "Changaiz Khan",
                    isCorrect: false
                },
                {
                    id: 2,
                    text: "King",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "Changaiz",
                    isCorrect: false
                },
                {
                    id: 4,
                    text: "Khan",
                    isCorrect: false
                },
            ]
        },
        { id: 3, question: "What is my teritory?", hint: "I am the king of the world!" },

    ]);

    const moveRow = useCallback((fromIndex, toIndex) => {
        const newRows = [...rows];
        const [movedRow] = newRows.splice(fromIndex, 1);
        newRows.splice(toIndex, 0, movedRow);
        setRows(newRows);
    }, [rows]);

    return (
        <Container>
            <DndProvider backend={HTML5Backend}>
                <Wrapper>
                    {rows.map((row, index) => (
                        <Question key={row.id} id={row.id} index={index} moveRow={moveRow} question={row.question} hint={row.hint} options={row.options} />
                    ))}
                </Wrapper>
            </DndProvider>
        </Container>
    );
};

export default Questions;
