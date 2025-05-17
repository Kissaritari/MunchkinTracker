// hooks/useSignalR.js
import { useEffect } from "react";
import * as signalR from "@microsoft/signalr";
import { queryClient } from "../queryClient";

// Get the SignalR hub URL from Vite env
const HUB_URL = import.meta.env.VITE_HUB_URL;

export const useSignalR = () => {
  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(HUB_URL)
      .withAutomaticReconnect()
      .build();

    connection.on("GameCreated", (game) => {
      console.log("New game created:", game);
      queryClient.invalidateQueries({ queryKey: ["games"] });
    });

    connection.on("PlayerAdded", (gameId, player) => {
      console.log(`Player added to game ${gameId}:`, player);
      queryClient.invalidateQueries({ queryKey: ["players",gameId] });
    });

    connection.on("PlayerRemoved", (gameId, playerId) => {
      console.log(`Player removed from game ${gameId}:`, playerId);
      queryClient.invalidateQueries({ queryKey: ["players"] });
    });

    connection.on("GameRemoved", (gameId) => {
      console.log("Game removed:", gameId);
      queryClient.invalidateQueries({ queryKey: ["games"] });
    });

    connection
      .start()
      .then(() => console.log("SignalR connected"))
      .catch((err) => console.error("SignalR error:", err));

    return () => {
      connection.stop();
    };
  }, []);
};
