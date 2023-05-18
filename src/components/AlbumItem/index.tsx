import * as C from './styles';
import { Link } from 'react-router-dom';

type Props = {
  id: number,
  title: string
}

export const AlbumItem = ({id, title}: Props) => {
  return(
    <Link to={`album/${id}`}>
      <C.Card >
        <p> {title} </p>
      </C.Card>
    </Link>
  );
}