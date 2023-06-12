import { useEffect, useState } from 'react';
import '../../styles/App.css';
import io from "socket.io-client"
const socket = io("http://localhost:3001");

function Home() {
  useEffect(() => {
    socket.on("receiveFile", (msg) => {
      console.log(msg)
    });
  }, []);

  return (
    <div>
      Page d'accueil 
    </div>
  );
}

export default Home;
