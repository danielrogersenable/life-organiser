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

- [ ] (2, 15 mins) Add ability to remove task type from a task.
- [ ] (3, 2 hours) Add sorting to the task lists
- [ ] (4, 1 hour) Add user id to LifeTask and load only tasks belonging to a specific user.
- [ ] (4, 1 hour) Add validation (front-end)
- [ ] (5, 1 hour) Add validation (back-end)
- [ ] (5, 30 mins) Add "are you sure" warning to task deletion.

## Design and styling

- [ ] (2, 1 hour) Find a better method for the edit link on the list of tasks 
	- Possibly highlighting the selected row and a redirect on click?
	- Also consider hooking up the deletion functionality here.
- [ ] (2, 1 hour) Bootstrap stylings for things like spacing
- [ ] (3, 1 hour) Button styling
- [ ] (3, 1 hour) Loading behaviour
- [ ] (4, 1 hour) Add styling to the header.
	- Add a logo with hyperlink to home

## Technical functionality

- [ ] (1, 4 hours) What happens when this gets deployed to Azure?
- [ ] (1, 2 hours) More sensible CORS setup.
- [ ] (3, 1 hour) Sort out VS code formatting
- [ ] (3, 2 hours) Separate out modules in Angular
- [ ] (4, 1 hour) Update Angular CLI
- [ ] (4, 1 hour) Consider combining task-add, task-edit and task-detail into a single component.
- [ ] (5, 3 hours) Unit testing
- [ ] (5, 1 hour) Resolve ts linting

## Security functionality

- [ ] (2, 1 hour) Add authentication layer to API endpoints.
- [ ] (5, 1 hour) Add the ability to change passwords.

# Feature wishlist

- [ ] Add dashboard-style view for tasks assigned to a particular day.
- [ ] Add notion of a recurring task, which gets rescheduled following completion of the previous task (similar to Toodledo).
- [ ] Background processing to trigger scheduling?
