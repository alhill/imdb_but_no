import React from 'react'
import styled from 'styled-components'

const WhiteCard = ({ children }) => {
    return (
        <Wrapper>
            { children }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    padding: 1em 2em;
    margin-top: 1em;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 1px 1px 6px 2px rgba(255, 255, 255, 0.8);
    border-radius: 6px;
`

export default WhiteCard