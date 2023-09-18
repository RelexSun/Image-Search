import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

export default function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (term) => {
    setIsLoading(true)
    const result = await searchImages(term);
    setImages(result)
    console.log(result)
    setIsLoading(false)
  }
  return (
    <div>
      {!isLoading ?
        <>
          <SearchBar onSubmit={handleSubmit} />
          <hr />
          <ImageList images={images} />
        </> :
        <p>Loading...</p>
      }
    </div>
  );
}
