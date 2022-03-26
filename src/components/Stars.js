import React from 'react'
import styled from 'styled-components'
import ReactStars from 'react-rating-stars-component'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const Stars = ({ rating, edit, onChange, showValue = true }) => {

    const nStars = rating/2

    return (
        <Wrapper>
            <ReactStars
                count={5}
                onChange={onChange}
                size={24}
                isHalf={true}
                emptyIcon={<FaRegStar />}
                halfIcon={<FaStarHalfAlt />}
                fullIcon={<FaStar />}
                activeColor="#ffd700"
                value={Number.isNaN(nStars) ? 0 : nStars}
                edit={edit}
            />
            { showValue && <span className="number">{ Number.isNaN(nStars) ? "Not yet rated" : nStars }</span> }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    .number{
        margin-top: 4px;
        margin-left: 0.5em;
        font-size: 0.8em;
        color: rgba(0, 0, 0, .5);
    }
`

export default Stars