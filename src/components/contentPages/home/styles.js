import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: flex-start;
  justify-content: center;
  padding-right: 50px;
`

const keyFrameLeft = keyframes`
    0%{
      margin-top: 150px;
    }
    50%{
      margin-top:80px;
    }
    100%{
      margin-top:100px;
    }
`

export const ContainerTextLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 350px;
  margin-right: -2px;
  animation-name: ${keyFrameLeft};
  animation-duration:2s;
  animation-fill-mode:forwards;
`

const keyFrameRight = keyframes`
    0%{
      margin-top: 150px;
    }
    50%{
      margin-top:210px;
    }
    100%{
      margin-top:170px;
    }
`

export const ContainerTextRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 350px;
  animation-name: ${keyFrameRight};
  animation-duration:2s;
  animation-fill-mode:forwards;
`

export const BarVerticalLeft = styled.div`
  width: 2px;
  height: 70px;
  background-color: gray;
  box-shadow: 0px 0px 10px white;
`

export const BarVerticalRight = styled.div`
  width: 2px;
  height: 70px;
  background-color: gray;
  box-shadow: 0px 0px 10px white;
`

export const LeftText = styled.h1`
  justify-content: flex-end;
  transition: all 3s linear;
  opacity: ${({ startEffect }) => (startEffect ? "1" : "0")};  
  font-size: 36px;
  font-family: Arial, Helvetica, sans-serif;
`

export const RightText = styled.h1`
  justify-content: flex-start;
  transition: all 3s linear;
  opacity: ${({ startEffect }) => (startEffect ? "1" : "0")};
  font-size: 36px;
  font-family: Arial, Helvetica, sans-serif;
`
