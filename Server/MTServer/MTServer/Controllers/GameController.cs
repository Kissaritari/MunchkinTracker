using Microsoft.AspNetCore.Mvc;
using MTServer.Entity;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MTServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly GameManager _gameManager;

        public GameController(GameManager gameManager)
        {
            _gameManager = gameManager;
        }

        // GET api/game/
        [HttpGet]
        public ActionResult<IEnumerable<Game>> Get()
        {
            return _gameManager.GetAllGames();
        }

        // GET api/game/{id}
        [HttpGet("{id}")]
        public IActionResult GetGame(string id)
        {
            var game = _gameManager.GetGame(id);
            if (game == null)
            {
                return NotFound();
            }
            return Ok(game);
        }

        // POST api/game
        [HttpPost]
        public void CreateGame([FromBody] NewGameDto newGameDto)
        {
            _gameManager.CreateGame(newGameDto);
        }

        // PUT api/game/{id}
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/game/{id}
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
