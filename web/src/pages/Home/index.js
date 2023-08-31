import { useEffect, useState } from 'react';
import '../../styles/App.css';
import io from "socket.io-client"
import Gallery from '../../components/Gallery/Gallery';
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
      <Gallery/>
    </div>
  );
}

export default Home;
