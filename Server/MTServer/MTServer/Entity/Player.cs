namespace MTServer.Entity
{
    public class Player
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Level { get; set; }
        public int Bonus { get; set; }
        public GenderEnum Gender { get; set; }
        public PlayerClassEnum PlayerClass { get; set;}
        public Player(string id, string name, GenderEnum gender) 
        {
            Id = id;
            Name = name;
            Gender = gender;
            Level = 0;
            Bonus = 0;
            PlayerClass = PlayerClassEnum.None;
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
    public enum PlayerClassEnum
    {
        None,
        Warrior,
        Wizard,
        Thief,
        Cleric
    }
}
