# Mini Task Tracker

## Overview

A simple **Task Tracker** built with **React Hooks** to manage tasks efficiently.
Users can **add, edit, delete, search, filter, and sort tasks**. Tasks persist using a **mock API (localStorage)**.

---

## Features

* Display a list of tasks (title, due date, status).
* Add new tasks with title and due date.
* Edit task status (Pending / Done) and delete tasks.
* Filter tasks by status (All, Pending, Done).
* Search tasks by title with **debounced input**.
* Sort tasks by **date** or **name**.
* Responsive and clean design using **plain CSS** (or Tailwind).
* Built using **React Hooks** (no class components).

---

## Tech Stack

* **React** (functional components & hooks)
* **JavaScript (ES6+)**
* **CSS / Tailwind**
* **LocalStorage** for task persistence (mock API)

---

## Project Structure

```
src/
 ├─ components/
 │   ├─ TaskForm.jsx      # Form to add new tasks
 │   ├─ TaskList.jsx      # List of tasks
 │   ├─ TaskItem.jsx      # Single task row
 │   ├─ FilterBar.jsx     # Filter, search & sort controls
 │
 ├─ hooks/
 │   └─ useDebounce.js    # Custom debounce hook
 │
 ├─ services/
 │   └─ taskApi.js        # Mock API using localStorage
 │
 ├─ App.jsx               # Main component
 └─ index.css             # Styling
```

---

## Installation

1. Clone the repository:

```
git clone <repo-url>
cd task-tracker
```

2. Install dependencies:

```
npm install
```

3. Run the project:

```
npm start
```

4. Open in browser:

```
http://localhost:3000
```

---

## Usage

1. Use the **form** to add a new task.
2. Use **filter dropdown** to view tasks by status.
3. **Search** tasks by title (debounced).
4. **Sort** tasks by date or name.
5. Toggle task **status** or delete tasks directly.

---

## Future Improvements

* Add **inline edit or modal edit** for tasks.
* Integrate with a **real backend API**.
* Add **priority levels** for tasks.
* Add **unit tests** for components.

---
