using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
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
        private readonly IAppDbContextFactory _dbContextFactory;
        private readonly ITasksService _tasksService;

        public TasksController(
            ITasksService tasksService)
        {
            _tasksService = tasksService;
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetTasks()
        {
            var results = await _tasksService.GetProjectedTasks();

            return Ok(results);
        }

        [HttpGet]
        [Route("complete-tasks")]
        public async Task<IActionResult> GetCompleteTasks()
        {
            var results = await _tasksService.GetCompleteProjectedTasks();

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
            // TODO - add validation
            await _tasksService.AddTask(model);

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
