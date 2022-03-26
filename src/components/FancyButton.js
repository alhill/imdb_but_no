import React from 'react'
import styled from 'styled-components'

const FancyButton = ({ label, icon, action }) => {
    return (
        <Wrapper onClick={action}>
            { icon }
            <span className="btnTxt">{ label }</span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.6);
    border: 0px solid black;
    border-radius: 6px;
    font-size: 1.2em;
    padding: 0.5em 1em;
    transition: all 200ms;
    cursor: pointer;
    .btnTxt{
        margin-left: 0.5em;
        color: #000066;
    }
    &:hover{
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0px 0px 10px 2px rgba(255, 255, 255, 0.8);
    }
`

export default FancyButton