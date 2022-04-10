import React from 'react';
import styled from 'styled-components';

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://4.bp.blogspot.com/-KuWXfA_2zEw/WsPYrBXXXOI/AAAAAAAAVyw/1cMGP21yZcU5Y9uEKNGHuu5LabzGdKGfwCLcBGAs/s1600/Bao-Lead-Image.jpg" />
            </Background>
            <ImgTitle>
                <img src="/images/viewers-disney.png" />
            </ImgTitle>
            <Controls>
                <PlayBtn>
                    <img src = "/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayBtn>
                <TrailerBtn>
                <img src = "/images/play-icon-white.png" />
                <span>TRAILER</span>
                </TrailerBtn>
                <AddBtn>
                    <span>+</span>
                </AddBtn>
                <GroupBtn>
                    <img src="/images/group-icon.png" />
                </GroupBtn>
            </Controls>
        </Container>

    )

};

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc (5vw + 5 px);
    position: relative;
`;

const Background = styled.div`
    // always make parent relative when using fixed/absolute
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
        // z index makes the header show
    z-index: -1;
        // makes image darker
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`;

const ImgTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
`;

const PlayBtn = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    margin-left: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    backgound: rgb (249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`;

const TrailerBtn = styled(PlayBtn)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`;

const AddBtn = styled.button`
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgb(0, 0, 0, 0.6);
    border: 1px solid rgb(249, 249, 249);
    cursor: pointer;
    margin-right: 16px;

    span {
        font-size: 30px;
        color: rgb(249, 249, 249);
    }

    &:hover {
        background: rgb(198, 198, 198);
    }
`;

const GroupBtn = styled(AddBtn)`
    background: rgb(0,0,0);
`;

export default Detail;