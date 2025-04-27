namespace MTServer.Entity
{
    public class Game
    {
        public string GameId { get; set; }
        public string GameName { get; set; }
        public List<Player> Players { get; set; } = new List<Player>();
        public int CurrentPlayerIndex { get; set; } = 0;
        public bool IsGameStarted { get; set; } = false;
        public Game(NewGameDto newGame)
        {
            GameId = newGame.gameId;
            GameName = newGame.gameName;
            Players = newGame.players;
        }
        public void AddPlayer(Player player)
        {
            Players.Add(player);
        }
        public void RemovePlayer(Player player)
        {
            Players.Remove(player);
        }
        public void StartGame()
        {
            IsGameStarted = true;
            CurrentPlayerIndex = 0;
        }
        public void StopGame()
        {
            IsGameStarted = false;
        }
    }
}
