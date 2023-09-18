import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID LUOjQLY3Ej6M3zap8M9LTvzEubE43AiWMKdoDhI-qkQ',
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
