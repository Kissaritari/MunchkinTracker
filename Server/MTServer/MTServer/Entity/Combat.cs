namespace MTServer.Entity
{
    public class Combat
    {
        public required Player Player;
        public Player? Assistant;
        public int PlayerTotal;
        public required int EnemyBase;
        public int? EnemyBonus;
        public int EnemyTotal;

        public Combat(Player player, int enemyBase) 
        {
            Player = player;
            EnemyBase = enemyBase;
            EnemyTotal = enemyBase;
        }
        

    }
}
