using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TaskApi.Models;
using TaskApi.Services.Interfaces;

namespace TaskApi.Controllers
{
    [Route("api/[controller]")]
    public class RecurringTasksController : Controller
    {
        private readonly IRecurringTasksService _recurringTasksService;
        private readonly IUserManagerService _userManagerService;

        public RecurringTasksController(
            IRecurringTasksService recurringTasksService,
            IUserManagerService userManagerService)
        {
            _recurringTasksService = recurringTasksService;
            _userManagerService = userManagerService;
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetRecurringTasks()
        {
            var userId = _userManagerService.TryGetUserId(User);

            if (!userId.HasValue)
            {
                return new UnauthorizedResult();
            }

            var results = await _recurringTasksService.GetProjectedRecurringTasks(userId.Value);

            return Ok(results);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetRecurringTasks(int id)
        {
            var results = await _recurringTasksService.GetProjectedRecurringTask(id);

            return Ok(results);
        }

        [HttpPut]
        [Route("")]
        public async Task<IActionResult> Put([FromBody] RecurringTaskModel model)
        {
            // TODO - add validation
            ////await _recurringTasksService.UpdateTask(model);

            return new NoContentResult();
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> Post([FromBody] RecurringTaskModel model)
        {
            var userId = _userManagerService.TryGetUserId(User);

            if (!userId.HasValue)
            {
                return new UnauthorizedResult();
            }

            // TODO - add validation
            await _recurringTasksService.AddRecurringTask(model, userId.Value);

            return new NoContentResult();
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            ////await _recurringTasksService.DeleteTask(id);

            return new NoContentResult();
        }
    }
}
