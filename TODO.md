# Life Organiser - to learn/do

## Usability functionality

- [X] Add the ability to delete a task.
- [ ] Add "are you sure" warning to task deletion.
- [ ] Add sorting to the task lists
- [ ] Enhance the form for adding/editing tasks to include additional fields.
- [ ] Add back buttons to add/edit pages.
- [ ] Add validation (back-end)

## Design and styling

- [ ] Make further use of bootstrap styles, including setting a proper style.
- [ ] Produce a proper navigation bar.
- [ ] Add styling to the header.
- [ ] Button styling
- [ ] Find a better method for the edit link on the list of tasks 
	- Possibly highlighting the selected row and a redirect on click?
	- Also consider hooking up the deletion functionality here.
- [ ] Date formatting in datepickers - currently US formatting.

## Technical functionality

- [X] Fix web host to set url on `dotnet watch`.
- [ ] What happens when this gets deployed to Azure?
- [ ] More sensible CORS setup.
- [ ] Make use of services, query classes etc.


# Feature wishlist

- [ ] Add dashboard-style view for tasks assigned to a particular day.
- [ ] Consider expanding schema - expected duration of task in hours, etc.
- [ ] Add notion of a recurring task, which gets rescheduled following completion of the previous task (similar to Toodledo).
- [ ] Background processing to trigger scheduling?
