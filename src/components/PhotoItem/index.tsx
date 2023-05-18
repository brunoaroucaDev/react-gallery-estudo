import * as C from './styles';
import { PhotosType } from '../../types/PhotosType';
import { Link } from 'react-router-dom';

type Props = {
  data: PhotosType
}

export const PhotoItem = ({data}: Props) => {
  return (
    <Link to={`/photo/${data.id}`}>
      <C.Card>
        <img src={data.thumbnailUrl} alt={data.title} />
      </C.Card>
    </Link>
  )
};