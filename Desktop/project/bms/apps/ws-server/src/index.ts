import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({ port: 3001 });

server.on("connection", async (socket) => {
  console.log("Client connected");
  const res = await client.user.create({
    data: {
      username: Math.random().toString(36),
      password: Math.random().toString(36),
    },
  });
  console.log(res);
  socket.send("Welcome to the WebSocket server!");
});
