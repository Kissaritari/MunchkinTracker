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
        public Game GetGame(string gameId)
        {
            _games.TryGetValue(gameId, out var game);
            return game;
        }
        public void UpdateGame(Game game)
        {
            _games[game.GameId] = game;
        }

        public void RemoveGame(string gameId)
        {
            _games.Remove(gameId);
        }
    }
}
