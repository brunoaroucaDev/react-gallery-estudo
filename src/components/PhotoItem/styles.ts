import styled from 'styled-components';

export const Card = styled.div`
    border: 2px solid #000;
    padding: 20px;
    cursor: pointer;
    margin: 10px;
    display: inline-block;
    text-decoration: none;
    color: #000;
  /* &:not(:last-child){
    margin-bottom: 10px;
  } */
  img{
    display: block;
  }
  &:hover{
    background-color: #eee;
  }
`;
