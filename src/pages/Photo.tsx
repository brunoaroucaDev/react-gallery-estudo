import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PhotosType } from '../types/PhotosType';
import { api } from '../api';

export const Photo = () => {
  const [loading, setLoading] = useState(false);
  const [photoInfo, setPhotoInfo] = useState<PhotosType>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(id) {
      loadPhoto(id)
    }
  }, []);

  const loadPhoto = async (id: string) => {
    setLoading(true);
    const photoInfo = await api.getPhoto(id);
    setPhotoInfo(photoInfo);
    setLoading(false);
  }
  const handleBackButton = () => {
    navigate(-1)
  }

  return (
    <div>
      <button onClick={handleBackButton} >Voltar</button>
      { loading && 'Carregando...'}

      {photoInfo &&
        <div>
          <h1> {photoInfo.title} </h1>
          <img src={photoInfo.url} alt={photoInfo.title} />
        </div>
      }

    </div>
  );
}