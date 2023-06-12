import { useEffect, useState } from 'react';
import '../../styles/App.css';
import io from "socket.io-client"
import Gallery from '../../components/Gallery/Gallery';
const socket = io("http://localhost:3001");

function Home() {
  useEffect(() => {
    socket.on("receiveFile", (msg) => {
      console.log(msg)
    });
  }, []);

  return (
    <div>
      <Gallery/>
    </div>
  );
}

export default Home;
