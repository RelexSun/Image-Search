import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

export default function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result)
    console.log(result)
  }
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <hr />
      <ImageList images={images}/>
    </div>
  );
}
