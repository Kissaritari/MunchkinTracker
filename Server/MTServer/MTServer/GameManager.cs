using MTServer.Entity;

namespace MTServer
{
    public class GameManager
    {
        private readonly Dictionary<string, Game> _games = [];

        public Game CreateGame(NewGameDto dto)
        {
            var game = new Game(dto);
        
            _games[game.GameId] = game;
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
        }
        public void RemovePlayer(string gameId, string playerId)
        {

            _games.TryGetValue(gameId, out var game);
            game.RemovePlayer(playerId);
        }
        public void RemoveGame(string gameId)
        {
            _games.Remove(gameId);
        }
    }
}
