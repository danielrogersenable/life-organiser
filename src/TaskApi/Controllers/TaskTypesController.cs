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
    [Route("api/task-types")]
    public class TaskTypesController : Controller
    {
        private readonly ITaskTypesService _taskTypesService;

        public TaskTypesController(ITaskTypesService taskTypesService)
        {
            _taskTypesService = taskTypesService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var results = await _taskTypesService.GetTaskTypes();

            return Ok(results);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] TaskTypeModel model)
        {
            await _taskTypesService.AddTaskType(model);

            return new NoContentResult();
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] TaskTypeModel model)
        {
            await _taskTypesService.UpdateTaskType(model);

            return new NoContentResult();
        }
    }
}
