import { get } from 'lodash'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CardWrapper, Container, Logo, FilmCard, WhiteCard } from '../components'
import { useRatingStore } from '../hooks'

const Favourites = () => {

    const [ratingStore] = useRatingStore()

    return (
        <Container>
            <Logo />
            <h2>My favourites</h2>
            <CardWrapper>
                {get(ratingStore, "userRatings", []).filter(r => r.favourite).map(rated => {
                    return <FilmCard key={rated?.id} data={rated} />
                })}
                {get(ratingStore, "userRatings", []).filter(r => r.favourite).length === 0 && (
                    <WhiteCard>
                        <p>Don't you have any favourite movie? <Link to="/">Go back and pick your best!</Link></p>
                    </WhiteCard>
                )}
            </CardWrapper>
        </Container>
    )
}

export default Favourites