import React from 'react'
import styled from 'styled-components'
import { Stars } from '../components'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useRatingStore } from '../hooks'

const FilmCard = ({ data }) => {

    const navigate = useNavigate()
    const { title, poster_path, vote_average, id } = data

    return (
        <Wrapper onClick={() => navigate("/film/" + id)}>
            <div className="image">
                <img src={poster_path ? `https://image.tmdb.org/t/p/w200/${poster_path}` : process.env.REACT_APP_FILM_PLACEHOLDER} />
            </div>
            <div className="bottom">
                <div className="title">
                    <p>{ title }</p>
                </div>
                <Stars rating={vote_average} edit={false} />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;
    border: 3px solid #000066;
    box-shadow: 1px 1px 10px 4px rgba(255, 255, 255, 0.8);
    width: calc(50% - 2em);
    max-width: 200px;
    background: rgba(255, 255, 255, 0.8);
    margin-right: 1em;
    margin-bottom: 1em;
    transition: all 300ms;
    cursor: pointer;
    .bottom{
        min-height: 125px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 1em;
    }
    .image{
        width: 100%;
        img{
            width: 100%;
            border-radius: 2px 2px 0 0;
        }
    }
    .title{
        font-weight: bolder;
        text-align: center;
        font-size: 1.2em;
        p{
            margin: 0.5em;
        }
    }
    .rating{

    }
    &:hover{
        transform: scale(1.03);
        opacity: 0.9;
    }
`

export default FilmCard