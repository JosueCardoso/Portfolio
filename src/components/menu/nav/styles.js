import styled from 'styled-components';

export const Container = styled.div`
  display:${props => props.IsVisible ? "block" : "none"};
  color:white;
  position:absolute;
  margin-top:130px;
  margin-right:10px;
  text-align: right;  
`;

export const List = styled.ul`
  list-style:none;
`;

export const ItemList = styled.li`
cursor:pointer;
margin:15px;
font-size:24px;
color:#808080;

&:hover{
  color:#fff;

  &:after{
    margin-left:5px;
    position:absolute;
    float:left;
    content: " |";
  }
}
`;
