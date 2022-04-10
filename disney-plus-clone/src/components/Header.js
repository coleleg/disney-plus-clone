import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://lh3.googleusercontent.com/a-/AOh14GhvXI5hbukrQGgBnVmETGqghd1FxTVshDsilLXc5w=s288-p-rw-no" />
        </Nav>
    )
};

const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    // gets rid of side-scroll bar
    overflow-x: hidden;
`;

const Logo = styled.img`
    width: 80px;
    cursor: pointer;
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) .1s;
                transform: scaleX(0);
            }
        }
        
        &:hover {
            span: after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

`;

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`;

export default Header;