import { useEffect } from "react";
import socket from "./config/socket";

function App() {
  const kirimPesan = () => {
    socket.emit("kirimpesan", { pesan: "hello" });
  };

  return (
    <div className="App">
      <h1>App Component</h1>
      <button onClick={kirimPesan}>Kirim pesan</button>
    </div>
  );
}

export default App;
