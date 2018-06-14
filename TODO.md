# Life Organiser - to learn/do

## Usability functionality

- [ ] Add user id to LifeTask and load only tasks belonging to a specific user.
- [ ] Add sorting to the task lists
- [ ] Add back buttons to add/edit pages.
- [ ] Add validation (back-end)
- [ ] Add validation (front-end)
- [ ] Add "are you sure" warning to task deletion.


## Design and styling

- [ ] Why do all my components generate with css rather than scss?
- [ ] Make further use of bootstrap styles, including setting a proper style.
- [ ] Produce a proper navigation bar.
- [ ] Remove header from sign-in page
- [ ] Add styling to the header.
- [ ] Button styling
- [ ] Find a better method for the edit link on the list of tasks 
	- Possibly highlighting the selected row and a redirect on click?
	- Also consider hooking up the deletion functionality here.
- [ ] Date formatting in datepickers - currently US formatting.
- [ ] Find/create a favicon.


## Technical functionality

- [ ] What happens when this gets deployed to Azure?
- [ ] More sensible CORS setup.
- [ ] Update Angular CLI
- [ ] Make use of services, query classes etc.
- [ ] Unit testing
- [ ] Resolve ts linting
- [ ] Sort out VS code formatting
- [X] Write PS script for startup.

## Security functionality

- [X] Add the ability to sign-in as a user.
- [ ] Add auth guards to routes
- [ ] Permit users to sign out
- [ ] Add the ability to change passwords.
- [ ] Add authentication layer to API endpoints.
- [ ] Sort out token refresh
	- This may be because the token isn't being added to the header for the request.
	- Now it is - I suspect this will help with adding authorisation to API endpoints.
	- The issue remains that the user is not being detected by the controller, and I've yet to work out exactly how that happens.

# Feature wishlist

- [ ] Add dashboard-style view for tasks assigned to a particular day.
- [ ] Task type - perhaps including colour picker to be used when rendering tasks of that type.
- [ ] Add notion of a recurring task, which gets rescheduled following completion of the previous task (similar to Toodledo).
- [ ] Background processing to trigger scheduling?
