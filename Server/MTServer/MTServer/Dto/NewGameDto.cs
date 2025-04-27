using MTServer.Entity;

namespace MTServer
{
    public record NewGameDto
    {
        public List<Player> players {  get; set; }
        public string gameId { get; set; }
        public string gameName { get; set; }
      
    }
}
