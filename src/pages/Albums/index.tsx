import * as C from './styles';
import { useState, useEffect } from 'react';
import { AlbumsType } from '../../types/AlbumsType';
import { api } from '../../api';
import { Link } from 'react-router-dom';

export const Albums = () => {
  const [albums, setAlbums] = useState<AlbumsType[]>([]);

  useEffect( () => { loadAlbums() }, [] );

  const loadAlbums = async () => {
    const json = await api.getAllAlbums()
    setAlbums(json);
  }

  return (
    <C.Container>
      { albums.map((item) => (
        <Link to={`album/${item.id}/photos`} key={item.id}>
          <C.Card >
            <p> {item.title} </p>
          </C.Card>
        </Link>
      )) }
    </C.Container>
  );
}