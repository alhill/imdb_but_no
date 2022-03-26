import React from 'react'
import styled from 'styled-components'

const CardWrapper = ({ children }) => {
    return (
        <Wrapper>
            { children }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + 2em);
    justify-content: center;
    margin-right: -1em;
    @media(max-width: 568px){
        margin-left: -0.5em;
    }
`

export default CardWrapper