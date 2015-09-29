# Post Interview Challenge

## Purpose:
Create a single-page webapp that meets all the stated requirements and industry standards of code quality and design patterns. The webapp must be implemented using the AngularJS framework and run on the included webserver (launched using grunt server)

## Required Technologies and Libraries

JavaScript libraries:
- AngularJS
- ui-grid (ng-grid)
- Restangular
- (Optional) lodash.js/undercore.js
- (Optional) momentjs
- (Optional) Bootstrap

Required For Backend:

- NodeJS

### Browsers

The developer should choose at least 2 browsers to developed against. The webapp must work in at least those 2 browsers.

- Any version of IE
- Chrome
- FireFox

### Running Backend

- Run `grunt serve`
- Open browser of choice
- Navigate to `http://localhost:9000`
- The API URL to GET is `http://localhost:3000/stuff`
- The API URL to PATCH is `http://localhost:3000/stuff/123`, where 123 is the ID


## Submission

- The challenge should be finished within 5 business days of the interview (since emailed)
- Minimal requirement is to provide as a ZIP file in an email
- Optionally, can provide as a Github pull request

## Requirements

The following requirements should be meet with the webapp. There will be 2 pages the user can interact with, the "LIST" page and "EDIT" page.

- Provide a README.md file
- README should describe basic instructions and which browsers the webapp is tested against

### List Page
The list page will need to use a GET to fetch the data from the provided backend (using Restangular) and display it in the grid (implemented in ui-grid). Each of the following columns should be shown:

- Name
- Description
- Last Time Edited (Displayed in the following format: "Jan 22, 2015 5:12:11")

Note the edited time will be in a field called "timeStamp" and will be an UNIX format timeStamp.

### Accessing the Edit Page

From the list page, the user must be able to select and deselect each row. When a row is selected, a button located above the grid should be enabled. Once the user presses that button, the user is taken to the "EDIT" page. When navigating to the edit page, the URL should contain the ID of the selected field.

The selected row's data should be preserved and available to the edit page.

### Edit Page

The input fields should be pre-populated with the data from the user's selected field.

The following input fields need to be available for the user to edit:

- Name
- Description

The following buttons should be placed above the input fields:

- OK (Updates backend with changes and returns user to list page)
- Cancel (Cancels all edits and returns user to list page)

When user hits "OK" button, a PATCH request should be sent to the backend with the updated name, description, and timeStamp.

### Returning to List Page

Each time the user returns to the list page, the data must be updated with any changes. Including the onces just made in the edit page.


### Responsiveness

The list and edit pages should be centered and scale well.

## Code Quality Standards

### Expectations

- Use 4 spaces and no tabs
- Follow AngularJS best practices
- Variables/Services/Functions should be named well and meaningful
- Templates should not be done inline, they should be in separate files

### File Layout and Naming

- Code should be organized and follow AngularJs naming conventions
- Use the provided folder structure as your scaffolding
