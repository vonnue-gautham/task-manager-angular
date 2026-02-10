# ✅ Task Manager (Angular + NgRx)

## 📌 Overview

**Task Manager** is an Angular-based Kanban-style application that lets you:

* View multiple boards (Work, Personal, Learning)
* Add tasks to a board
* Move tasks between **Todo → In Progress → Done**
* Delete tasks
* See tasks grouped visually in three columns
* Manage application state using **NgRx (Redux pattern for Angular)**

This project is designed as a **learning-friendly but production-style Angular application**, demonstrating modern Angular patterns along with centralized state management.

---

## 🛠️ Tech Stack

* **Angular 21 (Standalone-first architecture)**
* **NgRx (Store, Effects, Selectors)**
* **Signals (where appropriate)**
* **Reactive Forms**
* **Angular Router**
* **HttpClient**
* **RxJS**
* **JSON Server (mock backend)**

### Why NgRx in this project?

NgRx is used to:

* Maintain a **single source of truth** for tasks
* Handle side effects (API calls) via **NgRx Effects**
* Make state predictable and debuggable
* Keep components clean by moving data logic to the store

The core data flow used in this app:

```
Component → Dispatch Action → Effect (API call) → Reducer → Store → Selector → UI
```

---

## 📦 Prerequisites

### **Node.js (v18+ recommended)**

[https://nodejs.org/](https://nodejs.org/)

### **Angular CLI (v21)**

```sh
npm install -g @angular/cli@21
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
│   │   ├── store/
│   │   │   ├── actions/
│   │   │   │   └── task.actions.ts
│   │   │   ├── reducers/
│   │   │   │   └── task.reducer.ts
│   │   │   ├── effects/
│   │   │   │   └── task.effects.ts
│   │   │   ├── selectors/
│   │   │   │   └── task.selectors.ts
│   │   │   └── app.state.ts
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

This installs:

* `@ngrx/store`
* `@ngrx/effects`
* `@ngrx/store-devtools` (optional but recommended for debugging)

---

## ▶️ Step 4 — Run the Angular App

```sh
ng serve
```

Then open:

👉 [http://localhost:4200](http://localhost:4200)

---