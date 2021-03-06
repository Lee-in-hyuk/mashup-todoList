import styled, { css } from "styled-components";
import { MdDone, MdDelete } from 'react-icons/md';
import React from "react";
const CheckCircle = styled.div`
    width:32px;
    height:32px;
    border-radius:50%;
    border: 1px solid #ced4da;
    font-size:24px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    margin-left:20px;
    /* props로 받은 done이 true일 때만 나타내는 css */
    ${props => props.done && css `
        border: 1px solid #38d9a9;
        color: #38d9a9;
    `}
`;

const Text = styled.div`
    flex:1;
    font-size: 22px;
    color: #495057;
`;

const Remove = styled.div`
    opacity:0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor:pointer;
    &:hover {
        color:#ff6b8b;
    }
`;

const TodoItemBlock = styled.div`
    display:flex;
    align-items:center;
    padding: 12px 0;
    &:hover {
        ${Remove} {
            opacity:1;
        }
    }
`;

function TodoItem({text,idDone, onToggle, onRemove, id}){
    
    return(
        <TodoItemBlock>
            <CheckCircle done={idDone} onClick={()=>{onToggle(id)}}>
                {/* done이 true일 때만 아이콘이 나타나게 */}
                {idDone && <MdDone/>} 
            </CheckCircle>
            <Text done={idDone}>{text}</Text>
            <Remove onClick={()=> {onRemove(id)}}>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    );
}
export default React.memo(TodoItem);