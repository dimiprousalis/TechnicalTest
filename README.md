# Technical Test

Angular application designed for managing pavilions, sectors, stands, and merchandise categories with login and CRUD functionalities.

## Getting Started

-  Navigate to the project directory:
   - `cd hidonix-project`
-   Install dependencies
    - `npm install`
-   Start the development server
    - `npm run server` to start the json-server and `ng serve`
-   Navigate to `http://localhost:4200/`
    - json server will be running on `http://localhost:5000/`

## Technologies Used
-  **Angular**: Front-end framework for building single-page applications.
-  **JSON Server**: Mock server used for simulating backend functionality.
-  **FontAwesome**: Library for including icons in the application.
-  **Ngx-Toastr**: Library for displaying toast notifications.

## Features
-  Authentication: User authentication is implemented using username and password.
   - Only users with an Admin role can delete elements
-  CRUD Operations: CRUD operations are available for managing pavilions, sectors, stands, and merchandise categories.

## Usage
1. **Login**: Use the login form on route /login
     -   Login Credentials for test supervisor:
         -  Username: supervisor1
         -  Password: 12345
   -   Login Credentials for test admin:
         -  Username: admin1
         -  Password: 12345        
2. **Register**: You can also register for an account and select either Supervisor or Admin role at registration.
3. **Navigation**: Once logged in, navigate through different sections using the menu.
     -  Navigation is limited only to the tabs for "Pavilions", "Sectors", "Stand, and "Merchandise Categories"
4. **Manage Data**: Perform CRUD operations on pavilions, sectors, stands, and merchandise categories.
     - To **create** a new item, click on the "Add New" icon at the top left of the screen
     - To **update** an existing item, click on the pencil icon for the element
     - To **delete** an existing item, click on the trash can icon for the element
         -  Note: Only users with admin access can delete items
5. **Display View**: Toggle between the two "Visualization" icons to change the view of the elements
     -  Note: The Visualization icons are the only functional items in the display bar 
6. **Logout**: Click on "Logout" on the top right of the screen when done.

