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
        private readonly IUserManagerService _userManagerService;

        public TaskTypesController(
            ITaskTypesService taskTypesService,
            IUserManagerService userManagerService)
        {
            _taskTypesService = taskTypesService;
            _userManagerService = userManagerService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var userId = _userManagerService.TryGetUserId(User);

            if (!userId.HasValue)
            {
                return new UnauthorizedResult();
            }

            var results = await _taskTypesService.GetTaskTypes(userId.Value);

            return Ok(results);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] TaskTypeModel model)
        {
            var userId = _userManagerService.TryGetUserId(User);

            if (!userId.HasValue)
            {
                return new UnauthorizedResult();
            }

            await _taskTypesService.AddTaskType(model, userId.Value);

            return new NoContentResult();
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] TaskTypeModel model)
        {
            await _taskTypesService.UpdateTaskType(model);

            return new NoContentResult();
        }

        [HttpDelete]
        [Route("{taskTypeId}")]
        public async Task<IActionResult> Delete(int taskTypeId)
        {
            var messages = await _taskTypesService.GetValidationDeleteMessages(taskTypeId);

            if (messages.Any())
            {
                return BadRequest(messages);
            }

            await _taskTypesService.DeleteTaskType(taskTypeId);

            return new NoContentResult();
        }
    }
}
