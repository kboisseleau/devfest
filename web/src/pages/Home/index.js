import { useEffect, useState } from 'react';
import '../../styles/App.css';
import io from "socket.io-client"
const socket = io("http://localhost:3001");

function Home() {
  const [file, setFile] = useState()
  useEffect(() => {
    socket.on("receiveFile", (file) => {
      console.log(file)
      setFile(file)
    });
  }, []);

  return (
    <div>
      Page d'accueil
      <img src={file} />
    </div>
  );
}

export default Home;
