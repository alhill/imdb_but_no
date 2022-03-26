import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
    const navigate = useNavigate()
    return (
        <Wrapper onClick={() => navigate("/")}>
            <h1 className="logo">movieDatabase</h1>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
    .logo{
        color: #000066;
    }
`

export default Logo