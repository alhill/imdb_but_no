import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Container, Logo, Stars } from '../components'
import { useParams } from 'react-router-dom'
import { useFilmStore, useRatingStore } from '../hooks'
import { addRating, editRating, fetchSingleFilm } from '../actions'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { get } from 'lodash'

const SingleFilm = () => {
//
    const { filmId } = useParams()
    const [{ singleFilm }, filmDispatch] = useFilmStore()
    const [ratingStore, ratingDispatch] = useRatingStore()
    const [film, setFilm] = useState()
    const [comRating, setComRating] = useState(undefined)
    const [rating, setRating] = useState()

    useEffect(() => {
        if(filmId){
            filmDispatch(fetchSingleFilm(filmId))
        }
    }, [filmId])

    useEffect(() => {
        if(singleFilm){
            setFilm(singleFilm)
            setComRating(singleFilm?.vote_average)
        }
    }, [singleFilm])

    useEffect(() => {
        const thisRating = get(ratingStore, "userRatings", []).find(r => r.id == filmId)
        setRating(thisRating)
    }, [ratingStore.userRatings])

    const toggleFavourite = () => {
        const thisRating = get(ratingStore, "userRatings", []).find(r => r.id == filmId)
        if(thisRating){
            ratingDispatch(editRating({
                ...thisRating,
                favourite: !thisRating?.favourite
            }))
        } else {
            ratingDispatch(addRating({
                id: filmId,
                title: film?.title,
                poster_path: film?.poster_path,
                vote_average: film?.vote_average,
                favourite: true
            }))
        }
    }

    const changeRating = rating => {
        const thisRating = get(ratingStore, "userRatings", []).find(r => r.id == filmId)
        console.log(thisRating)
        if(thisRating){
            ratingDispatch(editRating({
                ...thisRating,
                rating: rating * 2
            }))
        } else {
            ratingDispatch(addRating({
                id: filmId,
                title: film?.title,
                poster_path: film?.poster_path,
                vote_average: film?.vote_average,
                rating: rating * 2
            }))
        }
    }

    return (
        <Container>
            <Logo />
            <BigCard>
                <img src={film?.poster_path ? `https://image.tmdb.org/t/p/w300/${film.poster_path}` : process.env.REACT_APP_FILM_PLACEHOLDER} />
                <div className="cardContent">
                    <h2>{ film?.title }</h2>
                    <p>{ film?.overview }</p>
                    <br />
                    <strong>Community rating</strong>
                    { comRating && <Stars rating={comRating} edit={false} /> }
                    <br />
                    <strong>Your rating</strong>
                    {/* { rating?.rating ? 
                        <Stars rating={rating?.rating} onChange={changeRating}/> :
                        <span style={{ color: "grey", marginTop: 6 }}>Not rated yet</span>
                    } */}
                    { rating?.rating && <Stars rating={rating?.rating || 0} onChange={changeRating}/> }
                    { !rating?.rating && <Stars onChange={changeRating}/> }
                </div>
                <div className='favourite' onClick={() => toggleFavourite(film?.id)}>
                    { rating?.favourite ? <FaHeart color="crimson" /> : <FaRegHeart color="#ddd" /> }
                </div>
            </BigCard>
        </Container>
    )
}

const BigCard = styled.div`
    min-width: 100%;
    border-radius: 12px;
    overflow: hidden;    
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 6px;
    border: 2px solid black;
    box-shadow: 1px 1px 10px 4px rgba(255, 255, 255, 0.8);
    max-width: 200px;
    background: rgba(255, 255, 255, 0.8);
    @media(max-width: 568px){
        flex-direction: column;
        img{
            width: 100%;
            max-height: 35vh;
            object-fit: cover;
        }
    }

    .cardContent{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        padding: 0 1em 1em 1em;
        max-height: calc(450px - 2em);
    }
    .favourite{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        height: 2em;
        width: 2em;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 0 2px 0 6px;
        transition: all 200ms;
        &:hover{
            background-color: rgba(0, 0, 0, 0.7);
        }
    }
`

export default SingleFilm