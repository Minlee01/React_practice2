import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`; //버튼 태그에 스타일 입힌 styledbutton

function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>
} //props로 받은 title이 버튼 목록에 표시, props로 받은 onClick이 styledbutton의 onClic에 넣어서 클릭이벤트를 상위 컴포넌트에서 받을 수 있도록해줌

export default Button;