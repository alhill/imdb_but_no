import { get } from 'lodash'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CardWrapper, Container, Logo, FilmCard, WhiteCard } from '../components'
import { useRatingStore } from '../hooks'

const Favourites = () => {

    const [ratingStore] = useRatingStore()

    return (
        <Container>
            <Logo />
            <h2>Rated by me</h2>
            <CardWrapper>
                {get(ratingStore, "userRatings", []).filter(r => r.rating).map(rated => {
                    return <FilmCard key={rated?.id} data={rated} />
                })}
                {get(ratingStore, "userRatings", []).filter(r => r.rating).length === 0 && (
                    <WhiteCard>
                        <p>No opinions? <Link to="/">Go back and rate it all!</Link></p>
                    </WhiteCard>
                )}
            </CardWrapper>
        </Container>
    )
}

export default Favourites