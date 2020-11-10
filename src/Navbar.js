/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useState} from 'react';
import { Link } from '@reach/router'
import { css, keyframes } from "@emotion/core"
import colors from './colors'

const spin = keyframes`
to {
    transform: rotate(360deg)
}
`

const Navbar = () => {
    const [padding, setPadding] = useState(15)
    return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <header
        css={css`
            background-color: ${colors.primary};
            padding:${padding}px;
        `}
    >
        <Link to="/">Adopt Me!</Link>
        <span role="img" aria-label="logo" 
            css={css`
                font-size: 60px;
                display: 'inline-block';
                animation: 1s ${spin} linear infinite;
                &:hover {
                    animation: 1s ${spin} linear infinite reverse;
                    text-decoration: underline;
                }
            `}
        >🐩</span>
    </header>
)

}



export default Navbar