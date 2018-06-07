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
            IAppDbContextFactory dbContextFactory,
            ITasksService tasksService)
        {
            _dbContextFactory = dbContextFactory;
            _tasksService = tasksService;
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetTasks()
        {
            IList<TaskModel> results;

            using (var dbContext = _dbContextFactory.Create())
            {
                results = await dbContext.LifeTasks
                  .Select(t => new TaskModel
                  {
                      Id = t.Id,
                      Name = t.Name,
                      DateDue = t.DateDue.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz"),
                      Completed = t.Completed
                  })
                    .ToListAsync();
            }

            return Ok(results);
        }

        [HttpGet]
        [Route("completetasks")]
        public async Task<IActionResult> GetCompleteTasks()
        {
            IList<LifeTask> results;

            using (var dbContext = _dbContextFactory.Create())
            {
                results = await dbContext.LifeTasks
                  .Where(t => t.Completed)
                    .ToListAsync();
            }

            return Ok(results);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetTask(int id)
        {
            LifeTask result;

            using (var dbContext = _dbContextFactory.Create())
            {
                result = await dbContext.LifeTasks.FindAsync(id);
            }

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
