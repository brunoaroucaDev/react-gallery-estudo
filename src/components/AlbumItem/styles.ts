import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1260px;
  padding: 0 15px;
`; 
export const Card = styled.div`
  border: 2px solid #000;
    padding: 20px;
    margin: 10px;
    cursor: pointer;
    display: block;
    text-decoration: none;
    color: #000;

  &:hover{
    background-color: #eee;
  }
`;
