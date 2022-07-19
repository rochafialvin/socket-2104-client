import { useEffect, useState } from "react";
import socket from "./config/socket";
import { Box, Button, TextField } from "@mui/material";
import ChatBox from "./components/ChatBox";

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [isJoinedRoom, setIsJoinedRoom] = useState(false);

  const onJoinRoom = () => {
    setIsJoinedRoom(true);
    socket.emit("join-room", { username, room });
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <h1 style={{ width: "50%", margin: "7px auto" }}>SOCKET.IO</h1>
      {isJoinedRoom ? (
        <ChatBox username={username} room={room} />
      ) : (
        <Box>
          <TextField
            value={username}
            variant="outlined"
            label="username"
            sx={{ mr: 2 }}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            value={room}
            variant="outlined"
            label="room"
            sx={{ mr: 2 }}
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          <Button
            onClick={onJoinRoom}
            variant="outlined"
            sx={{ width: "25%", mt: 2, height: 50 }}
          >
            Join Room
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default App;
