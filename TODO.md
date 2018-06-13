# Life Organiser - to learn/do

## Usability functionality

- [ ] Add a "authorization" layer (currently just username and password, no reset password functionality).
	- [X] Back-end - user managers etc.
	- [ ] Back-end - token refresh and correct AuthPrincipal.
	- [ ] Front-end - token refresh, auth manager etc.
	- [ ] Front-end - restrict access to pages to authenticated users, redirect to sign-in page if unauthenticated
	- [X] Front-end - build sign-in page
- [ ] Add user id to Task and load
- [ ] Add "are you sure" warning to task deletion.
- [ ] Add sorting to the task lists
- [ ] Enhance the form for adding/editing tasks to include additional fields.
	- [ ] Task duration
	- [ ] Date scheduled
- [ ] Add back buttons to add/edit pages.
- [ ] Add validation (back-end)
- [ ] Add validation (front-end)

## Design and styling

- [ ] Make further use of bootstrap styles, including setting a proper style.
- [ ] Produce a proper navigation bar.
- [ ] Remove header from sign-in page
- [ ] Add styling to the header.
- [ ] Button styling
- [ ] Find a better method for the edit link on the list of tasks 
	- Possibly highlighting the selected row and a redirect on click?
	- Also consider hooking up the deletion functionality here.
- [ ] Date formatting in datepickers - currently US formatting.
- [ ] Resolve ts linting
- [ ] Sort out VS code formatting

## Technical functionality

- [ ] What happens when this gets deployed to Azure?
- [ ] More sensible CORS setup.
- [ ] Make use of services, query classes etc.


# Feature wishlist

- [ ] Add the ability to sign-in as a user.
- [ ] Add the ability to change passwords.
- [ ] Add dashboard-style view for tasks assigned to a particular day.
- [ ] Consider expanding schema - expected duration of task in hours, etc.
- [ ] Add notion of a recurring task, which gets rescheduled following completion of the previous task (similar to Toodledo).
- [ ] Task type - perhaps including colour picker to be used when rendering tasks of that type.
- [ ] Background processing to trigger scheduling?
