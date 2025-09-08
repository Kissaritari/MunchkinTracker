namespace MTServer.Entity
{
    public class Game
    {
        public string GameId { get; set; }
        public string GameName { get; set; }
        public List<Player> Players { get; set; } = new List<Player>();
        public int CurrentPlayerIndex { get; set; } = 0;
        public bool IsGameStarted { get; set; } = false;
        public int MaxLevel { get; set; }
        public Game(string newGameName, int? maxLevel = 10)
        {
            GameId = Guid.NewGuid().ToString();
            GameName = newGameName;
            IsGameStarted = true;
            if (maxLevel != null)
            {
                MaxLevel = (int)maxLevel;
            }
        }
        public void AddPlayer(Player player)
        {
            Players.Add(player);
        }
        public void RemovePlayer(string playerId)
        {
            var player = Players.Find(player => player.Id == playerId);
            Players.Remove(player);
        }
        public void StartGame()
        {
            IsGameStarted = true;
            CurrentPlayerIndex = 0;
        }
        public void EndGame()
        {
            IsGameStarted = false;
        }
    }
}
