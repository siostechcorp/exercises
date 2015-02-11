## Post Interview Challenge

### Purpose:
Create a single-page webapp that meets all the stated requirements and industry standards of code quality and design patterns. The webapp must be implemented using the Angular JS framework, and be able to run on recent versions of IE, Google Chrome, and Mozilla Firefox. The final app needs to be delivered in an all inclusive package (zip file for example or from a GitHub repo if you want) with all relevant code and scripts.

### Required Libraries

- AngularJS
- ng-grid
- Restangular

### Home Page
When launched the user should be brought to a grid (implemented using the ng-grid directive) with several rows of objects (can be whatever you want, your favorite video game for example). The only required fields are a name and a description.

The data needs to be fetched using a GET request to backend (maybe one of NodeJS's simple backend solutions, or maybe something written in PHP) using Restangular's GET request method . Once fetched the grid should be populated with that data.

The user can select and deselect a row and then can Edit button for details of that object. There should be a button at the top of the home page that launches the "Edit" page defined below.

### Edit Page
This page should have input fields for at least name and description of the row selected by the user. Each input field should be populated with the selected row's data (such as name/description and any other fields you want). The user can then edit an input field, press the "OK" button, and return to the home page. Any changes should be sent to the backend using Restangular's PATCH request.

### Responsiveness requirements for the Edit Page
As the window expands, the input area (input fields and the “OK” button) stays centered horizontally and the top and bottom areas stay proportional at 1-to-1.5 ratio. The minimum margin in the top area is 20px and 30px in the bottom area. If the user resizes the window beyond the minimum size, scrollbars appear.

See redlines below:

(images/login_redline.jpg "Login Redline")

### Back at Home Page
Once an edit has happened the user should see the change in the columns for the row that was edited.


