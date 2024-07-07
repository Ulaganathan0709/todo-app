# TODO Application

## Live Demo
Access the live demo of the TODO Application here: https://usktodo.netlify.app/

## Introduction
The TODO application is a simple yet powerful tool designed to help users manage their daily tasks efficiently. With an intuitive interface, users can add, edit, delete, and filter tasks based on their completion status.

## Features
- **Add Tasks**: Users can add new tasks with a description.
- **Edit Tasks**: Each task can be edited after creation to update both the task name and description.
- **Delete Tasks**: Tasks can be deleted individually.
- **Filter Tasks**: Users can filter tasks to show all, completed, or not completed tasks.
- **Responsive Design**: The application is fully responsive and can be used on various devices.

## Technologies Used
- **React.js**: A JavaScript library for building user interfaces.
- **Prop-Types**: Runtime type checking for React props and similar objects.
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine (for development server).
- **Vite**: A modern frontend build tool that significantly improves the frontend development experience.
- **CSS3**: For styling the application.

## Project Structure
TODO-APP/
│
├── public/ # Contains the HTML file and icons
│ ├── index.html # Main HTML file
│ └── favicon.ico # Favicon icon
│
├── src/ # Source files
│ ├── components/ # All React components
│ │ ├── AddTodoForm.jsx # Component to add new tasks
│ │ ├── FilterTodos.jsx # Component to filter tasks based on status
│ │ ├── TodoItem.jsx # Component to display a single task
│ │ └── TodoList.jsx # Component to display the list of tasks
│ ├── App.jsx # Main React component that includes all other components
│ ├── index.css # Global styles
│ └── main.jsx # Entry point for React application
│
├── .gitignore # Specifies intentionally untracked files to ignore
├── index.html # Main HTML for the project
├── package.json # Node.js manifest file
├── README.md # The file that you are currently reading
└── vite.config.js # Configuration for Vite


## Setup and Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ulaganathan0709/todo-app
cd todo-app
npm install
npm run dev

## Contributing
Contributions to the TODO application are welcome! Please feel free to fork the repository, make changes, and submit pull requests.