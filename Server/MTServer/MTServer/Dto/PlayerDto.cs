namespace MTServer.Dto
{
    public record PlayerDto
    {
        public string GameId { get; set; }
        public string PlayerId { get; set; }
        public string PlayerName { get; set; }
        public string Gender { get; set; }
        public int Level { get; set; }
        public int Bonus { get; set; }
    }
}
