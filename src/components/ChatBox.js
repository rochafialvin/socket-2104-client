import { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import socket from "../config/socket";
import moment from "moment";

function ChatBox({ username, room }) {
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState("");

  useEffect(() => {
    socket.on("recieve-message", (message) => {
      // data lama : messages,
      // data baru : message
      setMessages((oldMessages) => [...oldMessages, message]);
    });
  }, []);

  const onSendMessage = () => {
    const message = {
      body: messageBody,
      room,
      username,
      time: moment().format("LT"),
    };
    socket.emit("send-message", message);
  };

  return (
    <Box
      sx={{
        width: "60%",
        margin: "50px auto",
        border: "1px solid gray",
        borderRadius: 4,
        padding: "20px 5px",
        height: 500,
      }}
    >
      {/* Menampilkan pesan */}
      <div style={{ height: 420, overflow: "scroll" }}>
        {messages.map((message) => (
          <Box
            sx={{
              border: 1,
              margin: 2,
              borderRadius: 1,
              textAlign: "left",
              paddingBlock: 1,
              paddingInline: 2,
              backgroundColor: "#222426",
            }}
          >
            <p
              style={{
                marginBlock: 3,
                fontWeight: "bold",
                color: "white",
                fontSize: "1.5em",
              }}
            >
              {message.username}
            </p>
            <p
              style={{
                marginTop: 1,
                fontSize: "1.2em",
                color: "white",
              }}
            >
              {message.body}
            </p>
            <p
              style={{
                fontSize: "0.8em",
                textAlign: "right",
                color: "#cecece",
              }}
            >
              {message.time}
            </p>
          </Box>
        ))}
      </div>

      {/* Input pesan */}
      <div style={{ width: "97%", display: "flex", margin: "10px auto" }}>
        <TextField
          value={messageBody}
          sx={{ width: "80%" }}
          variant="outlined"
          onChange={(e) => setMessageBody(e.target.value)}
        />
        <Button
          onClick={onSendMessage}
          sx={{ width: "20%", height: 56 }}
          variant="outlined"
        >
          Send
        </Button>
      </div>
    </Box>
  );
}

export default ChatBox;
