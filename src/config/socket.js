import io from "socket.io-client";
const socket = io.connect("http://localhost:2104");

export default socket;
