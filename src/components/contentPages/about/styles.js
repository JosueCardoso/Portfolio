import styled, {keyframes} from 'styled-components';

const keyFrameContainerPhoto = keyframes`    
    0%{
        margin-left:200px;
    }
    100%{
        margin-left:325px
    }
`;

const keyFrameContainerText = keyframes`
    0%{
        margin-right:200px;
    }
    100%{
        margin-right:325px
    }
`;

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    padding-top: 100px;   
    justify-content: space-around;     
`;

export const ContainerPhoto = styled.div`
    width:30%;    
    height:100%;
    transition: all 1s linear;
    opacity: ${({ startEffect }) => (startEffect ? "1" : "0")};
    margin-left: ${({ startEffect }) => (startEffect ? "350px" : "200px")};

    .gatsby-image-wrapper{
        box-shadow: 0px 0px 10px 1px gray;
        width:80%;
    }
`;

export const ContainerText = styled.div`
    width:30%;
    height:100%;      
    transition: all 1s linear;
    opacity: ${({ startEffect }) => (startEffect ? "1" : "0")};
    margin-right: ${({ startEffect }) => (startEffect ? "350px" : "200px")};
`;

export const Title = styled.h1`
    margin-bottom: 50px;
`;

export const Text = styled.p`
    text-align:justify;
    margin-bottom:10px;
`;