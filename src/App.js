import { createGlobalStyle } from 'styled-components'; //전체를 감싸는 스타일을 사용할 때 쓰는거
import TodoTemplate from './components/TodoTemplate';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import { useState, useRef } from 'react';
import './App.css';

function App() {
  //항목들 상태관리
  const [ todoList, setTodoList ] = useState([
    {
      id:1,
      text : "프로젝트관리하기",
      idDone : false
    },
    {
      id:2,
      text : "컴포넌트 스타일링하기",
      idDone : false
    },
    {
      id:3,
      text : "Context 만들기",
      idDone : false
    },
    {
      id:4,
      text : "기능 구현하기",
      idDone : false
    },
  ]);
    
  //인풋입력값 상태관리
  const [ desc, setDesc ] = useState("");
  //항목 id 관리
  const idNum = useRef(5);

  function onChange(e){
    const inputValue = e.target.value;
    setDesc(inputValue);
  }

  function onCreatelist(e){
    e.preventDefault();
    //새로운 객체 만들기
    const list = {
      id:idNum.current,
      text:desc,
      idDone: false
    }
    //todoList배열 업데이트(새로운 객체 추가하기)
    setTodoList([
      ...todoList,list
    ])
    //idNum값을 1씩 추가하기
    idNum.current = idNum.current+1;
  }

  //해당 id항목 삭제하기
  function onRemove(id){
    setTodoList(todoList.filter(todo => todo.id !== id));
  }

  //해당 id항목 idDone반전
  function onToggle(id){
    //삼항연산자 todo.id가 id면 {}안에 있는거 실행, 다르면 그대로 todo
    setTodoList(todoList.map(todo=>todo.id === id ? { ...todo, idDone: !todo.idDone } : todo));
  }

  const GlobalStyle = createGlobalStyle`
    body {
      background: #e9ecef;
    }
  `;

  return (
    <div className="App">
      <div><h1>수정한거</h1></div>
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHeader todoList={todoList}/>
        <TodoList todoList={todoList} onRemove={onRemove} onToggle={onToggle}/>
        <TodoInsert onChange={onChange} onCreatelist={onCreatelist} desc={desc}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
