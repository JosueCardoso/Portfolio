import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  width:150px;
  position:relative;
  justify-content:flex-end;
`;

export const CurrentSection = styled.h1`
    color:white;
    font-size: 18px;
`;

export const Burguer = styled.div`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin:10px;

  &:focus {
    outline: none;
  }

    div{
      width: 2rem;
      height: 0.25rem;
      background-color:white;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }

      :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
      }

      :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
`;

