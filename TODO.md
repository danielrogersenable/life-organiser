# Life Organiser - to learn/do

## Usability functionality

- [ ] Add user id to LifeTask and load only tasks belonging to a specific user.
- [ ] Add sorting to the task lists
- [ ] Add back buttons to add/edit pages.
- [ ] Add validation (back-end)
- [ ] Add validation (front-end)
- [ ] Add "are you sure" warning to task deletion.
- [ ] Add ability to remove task type from a task.
- [ ] Complete task types functionality
	- [ ] End-to-end for creating a task type
	- [ ] End-to-end for deleting a task type
		- Add validation to ensure that no tasks currently use that task type, else reject.
	- [X] Add color picker to detail page
	- [ ] Once task has been saved, emit up to parent, reload task types, destroy component.


## Design and styling

- [ ] Add styling to the header.
	- Add a logo with hyperlink to home
- [ ] Button styling
- [ ] Find a better method for the edit link on the list of tasks 
	- Possibly highlighting the selected row and a redirect on click?
	- Also consider hooking up the deletion functionality here.
- [ ] Bootstrap stylings for things like spacing
- [ ] Loading behaviour


## Technical functionality

- [ ] What happens when this gets deployed to Azure?
- [ ] More sensible CORS setup.
- [ ] Update Angular CLI
- [ ] Unit testing
- [ ] Resolve ts linting
- [ ] Sort out VS code formatting
- [ ] Separate out modules in Angular

## Security functionality

- [ ] Add the ability to change passwords.
- [ ] Add authentication layer to API endpoints.

# Feature wishlist

- [ ] Add dashboard-style view for tasks assigned to a particular day.
- [ ] Task type - perhaps including colour picker to be used when rendering tasks of that type.
- [ ] Add notion of a recurring task, which gets rescheduled following completion of the previous task (similar to Toodledo).
- [ ] Background processing to trigger scheduling?
