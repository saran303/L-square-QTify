import { useEffect, useState } from 'react';
import Hero from './Components/Hero/Hero';
import Nav from './Components/Navbar/Nav';
import { fetchTopAlbums } from './api/api';
// import { Card } from './Components/Card';
// import Section from './Components/Section/Section';

function App() {
const [topAlbumsData, setTopAlbumsData] = useState([]);

const generateTopAlbums = async () => {
  try{
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
  }catch(err){
    console.error(err);
  }
};

useEffect(() => {
    generateTopAlbums();
},[])
  return (
    <div>
      <Nav />
      <Hero />
      {/* {
        topAlbumsData.map((topAlbum) => 
        <Card data={topAlbum} type='album' key={topAlbum.id}/>
        )
      } */}
      {/* <Section data={topAlbumsData} title="Top Albums" type="album"/> */}
    </div>
  );
}

export default App;
