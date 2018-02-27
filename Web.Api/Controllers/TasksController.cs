using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Web.Api.Controllers
{
  [Route("tasks")]
  public class TasksController : Controller
  {
    private readonly IAppDbContextFactory _dbContextFactory;

    public TasksController(IAppDbContextFactory dbContextFactory)
    {
      _dbContextFactory = dbContextFactory;
    }

    [HttpGet]
    [Route("")]
    public async Task<IActionResult> GetTasks()
    {
      IList<LifeTask> results;

      using (var dbContext = _dbContextFactory.Create())
      {
        results = await dbContext.LifeTasks
            .ToListAsync();
      }

      return Ok(results);
    }
  }
}
