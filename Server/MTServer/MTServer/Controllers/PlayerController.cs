using System.Numerics;
using Microsoft.AspNetCore.Mvc;
using MTServer.Dto;
using MTServer.Entity;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MTServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private readonly GameManager _gameManager;

        public PlayerController(GameManager gameManager)
        {
            _gameManager = gameManager;
        }
        // GET: api/<PlayerController>
        [HttpGet]
        public ActionResult<List<Player>> Get(string gameId)
        {
            return _gameManager.GetGame(gameId).Players.ToList();
        }

        // GET api/<PlayerController>/5
        [HttpGet("{id}")]
        public ActionResult<Player> Get(string gameId, string playerId)
        {
            var player = _gameManager.GetGame(gameId).Players.FirstOrDefault(p => p.Id == playerId);
            if (player == null)
            {
                return NotFound();
            }
            return Ok(player);
        }

        // POST api/<PlayerController>
        [HttpPost]
        public void Post([FromBody] PlayerDto PlayerDto)
        {
            Enum.TryParse<GenderEnum>(PlayerDto.Gender, out var playerGender);
            Player newPlayer = new(PlayerDto.PlayerId, PlayerDto.PlayerName, playerGender);

            _gameManager.AddPlayer(PlayerDto.GameId, newPlayer);
        }


        // DELETE api/<PlayerController>/5
        [HttpDelete("{gameId}/{id}")]
        public ActionResult<Player> Delete(string gameId, string id)
        {
            try
            {
                _gameManager.RemovePlayer(gameId, id);
                return NoContent();
            }

        }
    }
}
