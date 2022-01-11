import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DEVICE, LOGO } from '../consts';


export interface HeaderProps {
    /** Path to image*/
    imgUrl?: string;
    /** Image alt text*/
    altText?: string;
}

export const StyledHeader = styled.header`
        display: flex !important;
        margin-top: 20px;
        margin-bottom: 5px;
        width: 100vw;
        padding: 0 calc((100vw - 1232px) / 2);
        position: relative;
        justify-content: space-between;
        align-content: center;
        
        #avatar {
            height: 80px;
            border: 1px solid var(--fp-opacity);
            box-shadow: -1px 1px 5px 1px var(--fp-grey-medium);
            cursor: pointer;
        }
        
        #logo {
            justify-self: right;
            align-self: center;
            cursor: pointer;
            margin-right: -20px;
            height: 60px;
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

export const Header = ({ imgUrl, altText }: HeaderProps) => {
    const [ img, setImg ] = useState<string>();
    const navigate = useNavigate();

    useEffect(() => {
        imgUrl ? setImg(imgUrl) : setImg(DEVICE)
    }, [imgUrl])

    return (
        <StyledHeader>
            { img && (
                <img
                    id="avatar" src={img}
                    alt={altText || "futureproof"}
                    onError={() => setImg(DEVICE)}
                    onClick={() => navigate('/')}/>
            )}

            <a href='https://www.getfutureproof.co.uk/' target="_blank" rel="noopener">
                <img id="logo" src={LOGO} alt="futureproof logo" />
            </a>
        </StyledHeader>
    )
}
