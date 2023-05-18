import * as C from './styles';

type Props = {
  logo: string
}

export const Header = ({logo}: Props) => {
  return (
    <C.Header>
      <C.Container>
        <C.Logo>
          <img src={logo} alt="" />
        </C.Logo>
        <C.Menu>
          <li>Inicio</li>
          <li>Sobre Nós</li>
          <li>Serviços</li>
          <li>Portfólio</li>
          <li>Contato</li>
        </C.Menu>
      </C.Container>
    </C.Header>
  );
}