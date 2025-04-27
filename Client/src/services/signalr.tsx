import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
    .withUrl("/hub")
    .build();

export const startSignalR = async () => {
    try {
        await connection.start();
        console.log("SignalR connection started");
    } catch (err) {
        console.error("Error starting SignalR connection: ", err);
    }
}