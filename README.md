# ✅ Task Manager (Angular)

## 📌 Overview

**Task Manager** is an Angular-based Kanban-style application that lets you:

* View multiple boards (Work, Personal, Learning)
* Add tasks to a board
* Move tasks between **Todo → In Progress → Done**
* Delete tasks
* See tasks grouped visually in three columns

### Tech Stack

* **Angular (v16+ / standalone-friendly)**
* **Signals**
* **Reactive Forms**
* **Angular Router**
* **HttpClient**
* **JSON Server (mock backend)**

---

## 📦 Prerequisites

Make sure you have installed:

### **Node.js (v16+ recommended)**

[https://nodejs.org/](https://nodejs.org/)

### **Angular CLI**

```sh
npm install -g @angular/cli
```

### **JSON Server (mock backend)**

```sh
npm install -g json-server
```

---

## 📁 Project Structure

```
TASK-MANAGER/
│
├── .angular/
├── .vscode/
├── node_modules/
├── public/
│
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── models/
│   │   │   │   ├── board.model.ts
│   │   │   │   ├── task.model.ts
│   │   │   │   └── task-status.enum.ts
│   │   │   └── services/
│   │   │       ├── board.service.ts
│   │   │       └── task.service.ts
│   │   │
│   │   ├── features/
│   │   │   ├── Boards/
│   │   │   │   ├── board-list/
│   │   │   │   └── boards-module.ts
│   │   │   │
│   │   │   └── Tasks/
│   │   │       ├── task-board/
│   │   │       ├── task-card/
│   │   │       ├── task-form/
│   │   │       └── tasks-module.ts
│   │   │
│   │   ├── shared/
│   │   │   └── pipes/
│   │   │       └── status-color-pipe.ts
│   │   │
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── app.ts
│   │
│   ├── environments/
│   │   └── environment.ts
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.css
```

---

## ⚙️ Step 1 — Configure Environment

Open:

```
src/environments/environment.ts
```

Ensure it looks like this:

```ts
export const environment = {
  apiUrl: 'http://localhost:3000'
};
```

---

## 🗄️ Step 2 — Start JSON Server (Mock Backend)

From the **project root (`TASK-MANAGER/`)**, run:

```sh
json-server --watch db.json --port 3000
```

Verify in your browser:

* Boards → [http://localhost:3000/boards](http://localhost:3000/boards)
* Tasks  → [http://localhost:3000/tasks](http://localhost:3000/tasks)

---

## ▶️ Step 3 — Install Dependencies

In the project root:

```sh
npm install
```

---

## ▶️ Step 4 — Run the Angular App

```sh
ng serve
```

Then open:

👉 [http://localhost:4200](http://localhost:4200)

---

