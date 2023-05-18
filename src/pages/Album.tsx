import { useState, useEffect } from 'react';
import { PhotosType } from '../types/PhotosType';
import { api } from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import { AlbumsType } from '../types/AlbumsType';
import { PhotoItem } from '../components/PhotoItem';

export const Album = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)
  const [list, setList] = useState<PhotosType[]>([]);
  const [albumInfo, setAlbumInfo] = useState<AlbumsType>({id: 0, title: '', userId: 0})

  useEffect(() => { 
    if (id) {
      loadPhotos(id),
      loadAlbumInfo(id)
    }
  }, []);

  const loadPhotos = async (id: string) => {
    setLoading(true);
    let photos = await api.getPhotosFromAlbum(id);
    setList(photos);
    setLoading(false);

  }

  const loadAlbumInfo = async (id: string) => {
    const albumInfo = await api.getAlbum(id);
    setAlbumInfo(albumInfo);
}

  const handleBackButton = () => {
    navigate(-1)
  }

  return (
    <div>
      <button onClick={handleBackButton} >Voltar</button>
  
        {loading && 'Carregando...'}

        <h1>{albumInfo.title}</h1>

        {list.map((item, index) => (
          <PhotoItem data={item} key={index} />
        ))}

    </div>
  );

}