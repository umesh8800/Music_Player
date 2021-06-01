
import { useState, useEffect } from "react";
import Player from "./Components/Player";

function App() {
  const [songs]=useState([
    {
      title:"Photo",
      artist: "Singga",
      img_src:"./images/singga.png",
      src:"./songs/Photo.mp3"
    },
    {
      title:"Titaliyaan",
      artist: "Hardy Sandhu",
      img_src:"./images/titlian.jpg",
      src:"./songs/Titliyan.mp3"
    },
    {
      title:"Ho Koi Gulam",
      artist: "Mohd. Aziz",
      img_src:"./images/khuda.jpg",
      src:"./songs/Ho koi gulam.mp3"
    },
    {
      title:"O Tere Galiyan",
      artist: "B Praak",
      img_src:"./images/pagal.jpg",
      src:"./songs/Pagal.mp3"
    },
    {
      title:"Goriyan Goriyan",
      artist: "Romaana",
      img_src:"./images/romana.png", 
      src:"./songs/Goriyaan.mp3"
    },
    {
      title:"Na Na Na",
      artist: "Karan Aujla",
      img_src:"./images/Na.jpeg", 
      src:"./songs/Na.mp3"
    },
    {
      title:"Narazgi",
      artist: "Aarsh Benipal",
      img_src:"./images/narazgi.jpeg", 
      src:"./songs/Narazg.mp3"
    },
    {
      title:"Wallian",
      artist: "Harnoor",
      img_src:"./images/walian.jpg", 
      src:"./songs/walian.mp3"
    }

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
