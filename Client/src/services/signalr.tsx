import * as signalR from "@microsoft/signalr";
import { queryClient } from "../queryClient";

const connection = new signalR.HubConnectionBuilder()
    .withUrl("/gamehub")
    .build();

connection.on("GameCreated", (game) => {
    console.log("New game created:", game);
    queryClient.invalidateQueries({ queryKey: ["games"] });
});

connection.on("PlayerAdded", (gameId, player) => {
    console.log(`Player added to game ${gameId}:`, player);
    queryClient.invalidateQueries({ queryKey: ["players"] });
});

connection.on("PlayerRemoved", (gameId, playerId) => {
    console.log(`Player removed from game ${gameId}:`, playerId);
    queryClient.invalidateQueries({ queryKey: ["players"] });
});

connection.on("GameRemoved", (gameId) => {
    console.log("Game removed:", gameId);
    queryClient.invalidateQueries({ queryKey: ["games"] });
});

connection.start().catch(err => console.error(err));
