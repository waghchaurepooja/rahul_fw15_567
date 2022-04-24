
import styled from "styled-components"


export const Button = styled.button`
    
    border: ${(props) => (props.theme === "Primary" ? "1px solid rgb(36,144,254)" : props.theme === "Default" ? "1px solid" : props.theme === "Dashed" ? "1px dashed" : props.theme === "Text" ? "0px" : "0px")};
    outline: none;
    cursor: pointer;
    padding: 1vw;
    font-size: 2vw;
    margin-bottom: .4vw;
    background-color: ${(props) => (props.theme === "Primary" ? "rgb(36,144,254)" : "white")};
    border-radius: .4vw;
    color: ${(props) => (props.theme === "Primary" ? "white" : props.theme === "Link" ? "blue" : "black")};
`