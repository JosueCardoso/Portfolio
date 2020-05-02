import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  align-items: flex-start;
  justify-content: center;
  padding-right: 50px;
  margin-top:100px;
`

export const ContainerSocial = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  margin-top: 150px;
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
  width: 450px;
  margin-right: -2px;
  animation-name: ${keyFrameLeft};
  animation-duration: 2s;
  animation-fill-mode: forwards;
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
  width: 450px;
  animation-name: ${keyFrameRight};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`

export const BarVertical = styled.div`
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
  text-shadow: 0px 0px 5px gray;
  margin-right: 5px;
`

export const RightText = styled.h1`
  justify-content: flex-start;
  transition: all 3s linear;
  opacity: ${({ startEffect }) => (startEffect ? "1" : "0")};
  font-size: 36px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
  text-shadow: 0px 0px 5px gray;
  margin-left: 5px;
`

export const SvgIcon = styled.svg`
  fill: white;
  width: 50px;
  height: 50px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 50px;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    width: 60px;
    height: 60px;
    margin-left: 35px;
    margin-right: 35px;
    transition: all 0.3s linear;
  }
`
