using Microsoft.AspNetCore.SignalR;
using MTServer.Entity;

namespace MTServer.Services
{
    public class GameManager
    {
        private readonly Dictionary<string, Game> _games = [];
        private readonly IHubContext<GameHub> _hubContext;
        public GameManager(IHubContext<GameHub> hubContext)
        {
            _hubContext = hubContext;
        }
        public Game CreateGame(string name)
        {
            var game = new Game(name);
        
            _games[game.GameId] = game;
            _hubContext.Clients.All.SendAsync("GameCreated", game);

            return game;
        }
        public Game CreateGame(string name, int? maxLevel)
        {
            var game = new Game(name,maxLevel);

            _games[game.GameId] = game;
            _hubContext.Clients.All.SendAsync("GameCreated", game);

            return game;
        }
        public List<Game> GetAllGames()
        {
            return _games.Values.ToList();
        }
        public Game GetGame(string gameId)
        {
            _games.TryGetValue(gameId, out var game);
            return game;
        }
        public void AddPlayer(string gameId, Player player)
        {
            _games.TryGetValue(gameId, out var game);
            game.AddPlayer(player);
            _hubContext.Clients.All.SendAsync("PlayerAdded", gameId, player);
        }
        public void RemovePlayer(string gameId, string playerId)
        {

            _games.TryGetValue(gameId, out var game);
            game.RemovePlayer(playerId);
            _hubContext.Clients.All.SendAsync("PlayerRemoved", gameId, playerId);
        }
        public void RemoveGame(string gameId)
        {
            _games.Remove(gameId);
            _hubContext.Clients.All.SendAsync("GameRemoved", gameId);
        }
    }
}
