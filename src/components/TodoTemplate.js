import styled from "styled-components";
// 스타일이 적용된 컴포넌트 만들기
const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;
    position:relative;
    background:#fff;
    border-radius: 16px;
    margin: 96px auto 32px;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    display:flex;
    flex-direction:column;
`;
export default function TodoTemplate({children}){
    
    return(
        <TodoTemplateBlock>{children}</TodoTemplateBlock>
    );
}