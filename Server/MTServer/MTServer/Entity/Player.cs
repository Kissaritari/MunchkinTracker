namespace MTServer.Entity
{
    public class Player
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public int Level { get; set; }
        public int Bonus { get; set; }
        public GenderEnum Gender { get; set; }

        public Player(int id, string name, GenderEnum gender) 
        {
            Id = id;
            Name = name;
            Gender = gender;
            Level = 0;
            Bonus = 0;
        }
        public void Die()
        {
            Level = 0;
            Bonus = 0;
        }
    }
    public enum GenderEnum
    {
        None = 0,
        Male = 1,
        Female = 2,
        Other = 3,
    }
}
