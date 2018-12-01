# Life Organiser - to learn/do

Format 
- [ ] (Priority, time)
	- Priority is from 1 to 5, 1 being the most important
		- 1 is crucial functionality to development that impacts a lot of other areas
		- 2 is important and/or very useful aspects of the system
		- 3 is non-essential functionality, but that would serve some useful purpose
		- 4 is a nice-to-have which may have some other benefits
		- 5 is isolated low-impact functionality
	- Time is an estimate in hours

## Usability functionality

- [ ] (2, 4 hours) Add a "schedule" view
	- Groups tasks by date scheduled (today, this week, future perhaps?)
	- Similar to dashboard view - only list name, duration, date scheduled (perhaps date due by?)
	- Shared component
	- Consider adding a right panel on click instead of edit page, to view some details about the task.
		- Perhaps this panel could long-term include a 'reschedule' button to remove it from the schedule.
		- It should also contain a link to the edit page.
		- Or a delete button to delete the task permanently.
		- This panel could also display the description for the task
- [ ] (3, 1 hour) Move "add task" button to listing?
- [ ] (3, 1 hour) Include positive messages in error component (perhaps in green).
- [ ] (4, 2 hours) Consider paging on task list?
- [ ] (4, 2 hours) Add sorting to the task lists
	- Perhaps look at service monitoring
- [X] (4, 1 hour) Add user id to LifeTask and load only tasks belonging to a specific user.
- [ ] (4, 1 hour) Add validation (front-end)
- [ ] (5, 1 hour) Add validation (back-end)
- [ ] (5, 30 mins) Add "are you sure" warning to task deletion.

## Design and styling

- [ ] (3, 1 hour) Button styling
- [ ] (3, 1 hour) Loading behaviour
- [ ] (4, 1 hour) Add styling to the header.
	- Add a logo with hyperlink to home

## Technical functionality

- [ ] (1, 2 hours) More sensible CORS setup.
- [X] (2, 2 hours) Improve Git branching strategy to have a "live" branch and a "dev" branch. Dev merges to live, live auto deploys.
- [X] (3, 0.5 hours) Remove migrate build step from YAML
- [ ] (3, 2 hours) Clean up variables in code, use other variables instead.
- [ ] (3, 3 hours) Use ARM templates for deploying Azure resources
- [ ] (3, 2 hours) Separate out modules in Angular
- [ ] (4, 1 hour) Consider combining task-add, task-edit and task-detail into a single component.
- [ ] (5, 4 hours) Unit testing (including incorporation in CI build)

## Security functionality

- [ ] (4, 2 hours) Add claims to users, and use these claims to determine whether users can add/remove data belonging to other users.
- [ ] (5, 1 hour) Add the ability to change passwords.

# Feature wishlist

- [ ] Add dashboard-style view for tasks assigned to a particular day.
- [ ] Set availability per day
	- [ ] Potential long-term goal - set availability per day for different tasks.
	- [ ] Add recurring availability (e.g. 4 hours free every Saturday).
- [ ] Add notion of a recurring task, which gets rescheduled following completion of the previous task (similar to Toodledo).
- [ ] Background processing to trigger scheduling?
- [ ] Scoring tasks
	- Some method of providing a task with a score (perhaps at least partially auto generated with some manual input, based on complexity, time taken, date due etc.), and schedule based on score.
- [ ] Overview
	- Provide an overview of how I have scored in various categories over a given period. 
	- Perhaps combined with the option to set a baseline score expectation (e.g. a certain score attained per week worth of household chores), or score against a specified set of targets (e.g. for recurring tasks, overview score is based on how many regularly scheduled tasks have been completed recently).
- [ ] Daily checklist
	- Perhaps tying in to the overview, a list of small repeating daily activities to keep track of (e.g. 5 a day, prayer time, CBT stuff, etc) - these could also tie into task categories.
