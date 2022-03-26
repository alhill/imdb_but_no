import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { fetchFilms } from '../actions'
import { SearchBox, Container, FilmCard, CardWrapper, FancyButton, Logo } from '../components'
import { useFilmStore } from '../hooks'
import { get } from 'lodash'
import { FaStar, FaHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const [search, setSearch] = useState("")
    const [searched, setSearched] = useState()
    const [filmStore, filmDispatch] = useFilmStore()

    useEffect(() => {
      filmDispatch(fetchFilms())
    }, [])

    const resetSearch = () => {
        setSearched(false)
        filmDispatch(fetchFilms())
    }

    return (
        <Container>
            <Logo />
            <SearchBox 
                value={search} 
                onChange={setSearch} 
                onSearch={() => {
                    filmDispatch(fetchFilms(search))
                    setSearched(search)
                }}
            />
            <br />
            <ButtonWrapper>
                <FancyButton icon={<FaStar color="#000066" />} label="Favourites" action={() => navigate("/favourites")} />
                <FancyButton icon={<FaHeart color="#000066" />} label="Rated" action={() => navigate("/rated")} />
            </ButtonWrapper>
            <br />
            <div>
                { searched ? (
                    <h2>Search: {searched} <Cross onClick={resetSearch}>&times;</Cross></h2>
                ) : (
                    <h2>Popular films</h2>
                )}
                <CardWrapper>
                    { get(filmStore, "films.results", []).map(film => <FilmCard key={film?.id} data={film} />)}
                </CardWrapper>
            </div>
        </Container>
    )
}

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`

const Cross = styled.span`
    font-weight: normal;
    cursor: pointer;
`

export default Home