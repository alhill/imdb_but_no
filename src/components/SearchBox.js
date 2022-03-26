import React from 'react'
import styled from 'styled-components'
import { IoFilmOutline } from 'react-icons/io5'

const SearchBox = ({ value, onChange, onSearch, style }) => {
    return <Wrapper style={style}>
        <input value={value} onChange={evt => onChange(evt.target.value)} placeholder="Search films" />
        <div className='btn' onClick={onSearch}>
            <IoFilmOutline size={20} />
        </div>
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    border: 2px solid #000066;
    box-shadow: 1px 1px 10px 4px rgba(255, 255, 255, 0.8);
    border-radius: 6px;
    width: 100%;
    overflow: hidden;
    position: sticky;
    top: 2em;
    z-index: 10;
    input{
        padding: 1em;
        color: #000066;
        border: none;
        flex: 1;
        font-size: 1em;
        background-color: rgba(255, 255, 255, 0.9);
    }
    .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 3em;
        background-color: #000066;
        cursor: pointer;
        transition: all 200ms;
        &:hover{
           opacity: 0.7;
        }
    }
`

export default SearchBox