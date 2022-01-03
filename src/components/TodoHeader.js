import React, { useMemo } from "react";
import styled from "styled-components";
const TodoHeaderBlock = styled.div`
    padding:48px 32px 24px;
    border-bottom: 1px solid #efecef;
    h1 {
        margin:0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top : 4px;
        color: #868e96;
        font-size: 22px;
    }
    .tasks-left {
        color:#20c997;
        font-size:18px;
        margin-top:40px;
        font-weight:bold;
    }
`;
function TodoHeader({todoList}){
    //할 일 몇개 남았는지 체크해주는 함수
    function countTodo(todoList){
        console.log('할 일을 세는 중....');
        return todoList.filter(todo => !todo.idDone );
    }
    const undoneTasks = useMemo(()=>(countTodo(todoList)),[todoList]);
    
    // const undoneTasks = todoList.filter(todo => !todo.idDone );
    
    //날짜 구현
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR',{
        year: 'numeric',
        month:'long',
        day: 'numeric'
    })
    const dayname = today.toLocaleDateString('ko-KR',{
        weekday:'long'
    })
    return(
        <TodoHeaderBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayname}</div>
            <div className="tasks-left">할일 : {undoneTasks.length}개 남음</div>
        </TodoHeaderBlock>
    );
}
export default React.memo(TodoHeader);