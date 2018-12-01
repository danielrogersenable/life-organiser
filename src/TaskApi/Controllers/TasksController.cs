using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskApi.Extensions;
using TaskApi.Models;
using TaskApi.Services.Interfaces;

namespace TaskApi.Controllers
{
    [Route("api/[controller]")]
    public class TasksController : Controller
    {
        private readonly ITasksService _tasksService;
        private readonly IUserManagerService _userManagerService;

        public TasksController(
            ITasksService tasksService,
            IUserManagerService userManagerService)
        {
            _tasksService = tasksService;
            _userManagerService = userManagerService;
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetTasks()
        {
            var userId = _userManagerService.TryGetUserId(User);

            if (!userId.HasValue)
            {
                return new UnauthorizedResult();
            }

            var results = await _tasksService.GetProjectedTasks(userId.Value);

            return Ok(results);
        }

        [HttpGet]
        [Route("complete-tasks")]
        public async Task<IActionResult> GetCompleteTasks()
        {
            var userId = _userManagerService.TryGetUserId(User);

            if (!userId.HasValue)
            {
                return new UnauthorizedResult();
            }

            var results = await _tasksService.GetCompleteProjectedTasks(userId.Value);

            return Ok(results);
        }

        [HttpPost]
        [Route("scheduled-tasks")]
        public async Task<IActionResult> GetScheduledTasks([FromBody]ScheduledTasksQueryModel model)
        {
            var userId = _userManagerService.TryGetUserId(User);

            if (!userId.HasValue)
            {
                return new UnauthorizedResult();
            }

            var results = await _tasksService.GetScheduledTasks(model, userId.Value);

            return Ok(results);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetTask(int id)
        {
            var result = await _tasksService.GetProjectedTask(id);

            return Ok(result);
        }

        [HttpPut]
        [Route("")]
        public async Task<IActionResult> Put([FromBody] TaskModel model)
        {
            // TODO - add validation
            await _tasksService.UpdateTask(model);

            return new NoContentResult();
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> Post([FromBody] TaskModel model)
        {
            var userId = _userManagerService.TryGetUserId(User);

            if (!userId.HasValue)
            {
                return new UnauthorizedResult();
            }

            // TODO - add validation
            await _tasksService.AddTask(model, userId.Value);

            return new NoContentResult();
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _tasksService.DeleteTask(id);

            return new NoContentResult();
        }
    }
}
