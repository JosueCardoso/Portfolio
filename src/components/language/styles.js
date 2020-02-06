import styled from 'styled-components';

export const SwitchLanguage = styled.a`
    color: ${props => props.currentLanguage ? "#fff" : "#808080"};
    margin: 5px;    
    cursor: pointer;
    font-size:16px;
`;

export const Container = styled.div`    
    margin:10px;
`;