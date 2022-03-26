import React from 'react'
import styled from 'styled-components'

const Container = ({ children }) => {
    return (
        <Wrapper>
            <div className="inner">
                { children }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-height: calc(100vh - 2em);
    padding: 1em;
    background: #C6FFDD;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    .inner{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 768px;
    }
`

export default Container