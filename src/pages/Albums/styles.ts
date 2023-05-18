import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1260px;
  padding: 0 15px;
`; 
export const Card = styled.div`
  border: 2px solid #000;
  padding: 20px;
  cursor: pointer;
  transition: all ease .3s;
  &:not(:last-child){
    margin-bottom: 10px;
  }

  &:hover{
    background-color: #eee;
  }
`;
