import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1260px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`; 
export const Logo = styled.div`

  img{
    height: 40px;
  }
`;
export const Menu = styled.ul`
  display: flex;
  gap: 32px;

  li{
    list-style: none;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all ease .3s;
    font-weight: 600;

    &:hover{
      color: coral;
      font-weight: 600;
    }
  }
`;
