import { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import socket from "../config/socket";
import moment from "moment";

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      username: "rochafi",
      body: "Hello everyone",
      time: moment().format("LT"),
    },
    {
      username: "jordan",
      body: "Hello guys",
      time: moment().format("LT"),
    },
    {
      username: "james",
      body: "Holla",
      time: moment().format("LT"),
    },
  ]);

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
      <div>
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
    </Box>
  );
}

export default ChatBox;
