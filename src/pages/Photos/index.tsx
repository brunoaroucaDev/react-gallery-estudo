import { useState, useEffect } from 'react';
import * as C from './styles';
import { PhotosType } from '../../types/PhotosType';
import { api } from '../../api';
import { useNavigate, useParams } from 'react-router-dom';

export const Photos = () => {

  const [photos, setPhotos] = useState<PhotosType[]>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => { loadPhotos(id) })

  const loadPhotos = async (id: string | undefined) => {
    let json = await api.getAlbum(id);
    setPhotos(json);
  }

  const handleBackButton = () => {
    navigate(-1)
  }

  return (
    <>
      <button onClick={handleBackButton} >Voltar</button>
      <C.Container>

        { photos?.map((item) => (
          <C.Card key={item.id}>
            <img src={item.thumbnailUrl} alt="" />
          </C.Card>
        )) }
      </C.Container>
    </>
  );

}