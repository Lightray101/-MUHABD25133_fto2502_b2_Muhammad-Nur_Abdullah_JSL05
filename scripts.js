/**
 * Local Storage Module
 * Handles all operations related to storing and retrieving tasks from local storage
 */
const StorageManager = {
  /**
   * Saves tasks to local storage
   * @param {Array} tasks - Array of task objects to save
   */
  saveTasks: (tasks) => {
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
  },

  /**
   * Retrieves tasks from local storage
   * @returns {Array} Array of task objects
   */
  getTasks: () => {
    const tasks = localStorage.getItem("kanbanTasks");
    return tasks ? JSON.parse(tasks) : [];
  },
};

/**
 * Task Management Module
 * Handles all operations related to task management
 */
const TaskManager = {
  /**
   * Adds a new task to the task list
   * @param {Object} task - The task object to add
   */
  addTask: (task) => {
    userTasks.push(task);
    StorageManager.saveTasks(userTasks);
    refreshTaskDisplay();
  },

  /**
   * Updates an existing task
   * @param {number} taskId - The ID of the task to update
   * @param {Object} newData - The new task data
   */
  updateTask: (taskId, newData) => {
    const taskIndex = userTasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      userTasks[taskIndex] = { ...userTasks[taskIndex], ...newData };
      StorageManager.saveTasks(userTasks);
      refreshTaskDisplay();
    }
  },
};

/**
 * Modal Management Module
 * Handles all operations related to the Add Task modal
 */
const ModalManager = {
  modal: document.getElementById("add-task-modal"),
  form: document.getElementById("add-task-form"),
  addTaskBtn: document.getElementById("add-task-btn"),
  closeBtn: document.querySelector("#add-task-modal .close-modal-button"),
  cancelBtn: document.querySelector("#add-task-modal .close-btn"),

  /**
   * Initializes the modal functionality
   */
  init: function () {
    this.addTaskBtn.addEventListener("click", () => this.openModal());
    this.closeBtn.addEventListener("click", () => this.closeModal());
    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) this.closeModal();
    });
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));

    // Get references to input and message for validation
    this.newTaskTitleInput = document.getElementById("new-task-title");
    this.titleValidationMessage = document.getElementById(
      "title-validation-message"
    );

    // Hide the validation message initially
    this.titleValidationMessage.style.display = "none";

    // Add an input event listener to hide the message when user starts typing
    this.newTaskTitleInput.addEventListener("input", () => {
      if (this.newTaskTitleInput.value.trim() !== "") {
        this.titleValidationMessage.style.display = "none";
      }
    });
  },

  /**
   * Opens the Add Task modal
   */
  openModal: function () {
    this.modal.style.display = "flex";
    document.getElementById("new-task-title").focus();
  },

  /**
   * Closes the Add Task modal
   */
  closeModal: function () {
    this.modal.style.display = "none";
    this.form.reset();
  },

  /**
   * Handles the form submission
   * @param {Event} e - The submit event
   */
  handleSubmit: function (e) {
    e.preventDefault(); // Prevent default form submission to handle validation manually

    const title = this.newTaskTitleInput.value.trim();

    if (title === "") {
      // Show the custom validation message only on submission if title is empty
      this.titleValidationMessage.style.display = "block";
      // Do NOT proceed with task creation
      return;
    } else {
      // Hide the custom validation message if title is not empty
      this.titleValidationMessage.style.display = "none";
    }

    // If we reach here, validation passed, proceed with task creation
    const newTask = {
      id: userTasks.reduce((maxId, task) => Math.max(maxId, task.id), 0) + 1,
      title: title,
      description: document.getElementById("new-task-description").value,
      status: document.getElementById("new-task-status").value,
    };

    TaskManager.addTask(newTask);
    this.closeModal();
  },
};

// Initialize tasks from local storage or use default tasks
let userTasks =
  StorageManager.getTasks().length > 0
    ? StorageManager.getTasks()
    : [
        {
          id: 1,
          title: "Launch Epic Career 🚀",
          description: "Create a killer Resume",
          status: "todo",
        },
        {
          id: 2,
          title: "Conquer React⚛️",
          description: "Learn the basics of React.",
          status: "todo",
        },
        {
          id: 3,
          title: "Understand Databases⚙️",
          description: "Study database concepts.",
          status: "todo",
        },
        {
          id: 4,
          title: "Crush Frameworks🖼️",
          description: "Explore various frameworks.",
          status: "todo",
        },
        {
          id: 5,
          title: "Master JavaScript 💛",
          description: "Get comfortable with the fundamentals.",
          status: "doing",
        },
        {
          id: 6,
          title: "Never Give Up 🏆",
          description: "Keep pushing forward!",
          status: "doing",
        },
        {
          id: 7,
          title: "Explore ES6 Features 🚀",
          description: "Deep dive into ES6.",
          status: "done",
        },
        {
          id: 8,
          title: "Have fun 🥳",
          description: "Enjoy the process!",
          status: "done",
        },
      ];

// Save initial tasks to local storage if none exist
if (StorageManager.getTasks().length === 0) {
  StorageManager.saveTasks(userTasks);
}

// Function to filter completed tasks
function getCompletedTasks(arr) {
  return arr.filter((task) => task.status === "done");
}

// Log all user-created tasks as an array
console.log("All tasks:", userTasks);

// Log only completed tasks as an array
console.log("Completed tasks:", getCompletedTasks(userTasks));

// DOM Elements
const taskColumns = {
  todo: document.querySelector('[data-status="todo"] .tasks-container'),
  doing: document.querySelector('[data-status="doing"] .tasks-container'),
  done: document.querySelector('[data-status="done"] .tasks-container'),
};
/**
 * Creates a task element with the given task data
 * @param {Object} task - The task object containing id, title, description, and status
 * @returns {HTMLElement} The created task element
 */
function createTaskElement(task) {
  const taskElement = document.createElement("div");
  taskElement.className = "task-div";
  taskElement.dataset.taskId = task.id;
  taskElement.textContent = task.title;

  // Add click event to open modal
  taskElement.addEventListener("click", () => openTaskModal(task));

  return taskElement;
}
