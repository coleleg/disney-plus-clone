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
    
`;

export default Detail;