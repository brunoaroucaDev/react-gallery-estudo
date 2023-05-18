import { useState, useEffect } from 'react';
import { AlbumsType } from '../types/AlbumsType';
import { api } from '../api';
import { AlbumItem } from '../components/AlbumItem';


export const Home = () => {
  const [list, setList] = useState<AlbumsType[]>([]);
  const [loading, setLoading] = useState(false)

  useEffect( () => { loadAlbums() }, [] );

  const loadAlbums = async () => {
    setLoading(true)
    const albums = await api.getAllAlbums()
    setList(albums);
    setLoading(false)
  }

  return (
    <>
      {loading && 'Carregando...'}

      { list.map((item, index) => (

       <AlbumItem 
        id={item.id} 
        title={item.title} 
        key={index} />
      
      )) }
    </>
  );
}