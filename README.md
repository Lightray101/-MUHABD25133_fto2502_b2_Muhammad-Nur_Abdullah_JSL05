# Kanban Task Management System

A modern, responsive task management application built with vanilla JavaScript that helps users organize their tasks using the Kanban methodology. The application features a clean, intuitive interface and persistent local storage to ensure your tasks are never lost.

## 🚀 Features

- **Task Management**
  - Create, edit, and organize tasks
  - Categorize tasks into Todo, Doing, and Done columns
  - Persistent local storage for task data

- **User Interface**
  - Responsive design that works on desktop and mobile devices
  - Clean, modern UI with smooth animations
  - Dark/Light theme toggle
  - Collapsible sidebar for better space utilization

- **Task Organization**
  - Visual task status tracking
  - Task count indicators for each column
  - Detailed task descriptions
  - Status-based task filtering

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid layouts)
- Vanilla JavaScript 
- Local Storage API for data persistence
- Google Fonts (Plus Jakarta Sans)

## 📋 Setup Instructions

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd kanban-task-management
   ```

3. Open the project:
   - Double-click `index.html` to open in your browser
   - Or use a local development server of your choice

## 💻 Usage

### Creating a New Task
1. Click the "+ Add New Task" button in the header
2. Fill in the task details:
   - Title (required)
   - Description
   - Status (Todo, Doing, or Done)
3. Click "Create Task" to save

### Editing a Task
1. Click on any task card to open the edit modal
2. Modify the task details as needed
3. Click outside the modal or the close button to save changes

### Managing Tasks
- Tasks are automatically organized into their respective columns based on status
- Each column shows the current number of tasks
- Tasks persist between page refreshes thanks to local storage


### Mobile Usage
- The interface automatically adapts to mobile screens
- Sidebar can be toggled for better space utilization
- Touch-friendly interface for easy task management on the go

## 🔧 Interaction Instructions

### Desktop
- Click task cards to edit their details


### Mobile
- Tap task cards to edit
- Swipe to navigate between columns


## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔒 Data Persistence

All tasks are automatically saved to your browser's local storage, ensuring your data persists between sessions. No server or database setup is required.

## 🎨 Customization

The application uses CSS variables for easy customization:
- Color schemes
- Font sizes
- Spacing
- Layout dimensions

