import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/theme';

export const StyledFooter = styled.footer`
    text-align: center;
    position: fixed;
    font-size: 0.8rem;
    margin: auto;
    bottom: 0%;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 60;
        
    a,
    a:visited,
    a:focus {
        color: ${colors.purple};
        text-decoration: none;
        text-align: center;
    }

    a:hover {
        color: ${colors.violet};
    }
        

    /* Media queries */
    @media only screen and (max-width: 1300px) {
        padding: 0 calc((100vw - 1024px) / 2);
    }

    @media only screen and (max-width: 1090px) {
        padding: 0 calc((100vw - 816px) / 2);
    }

    @media only screen and (max-width: 880px) {
        padding: 0 calc((100vw - 608px) / 2);
    }

    @media only screen and (max-width: 650px) {
        padding: 0 calc((100vw - 336px) / 2);
        
        #namesake,
        #logo {
            height: 40px;
        }
    }
`

export const Footer = () => {
    return (
        <StyledFooter>
            <h3>
                <a href="http://getfutureproof.co.uk" target="_blank" rel="noopener">getfutureproof.co.uk</a>
            </h3>
        </StyledFooter>
    )
}