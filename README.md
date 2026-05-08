# 🚀 TaskFlow — Advanced Full-Stack Todo Application

TaskFlow is a modern full-stack Todo application built using React, FastAPI, and PostgreSQL.
It helps users manage tasks efficiently with categories, priorities, search, and task tracking features.

---

# ✨ Features

## 🎯 Task Management

* Add tasks
* Delete tasks
* Mark tasks as completed
* Search tasks instantly

---

## 📂 Categories

Organize tasks into categories such as:

* Personal
* Study
* Work
* Health

---

## 🔥 Priority System

Tasks are color-coded based on priority:

* 🔴 High
* 🟠 Medium
* 🟢 Low

---

## 📊 Dashboard Stats

Track:

* Total tasks
* Completed tasks
* Pending tasks

---

## 🎨 Modern UI

* Responsive layout
* Clean design
* Gradient background
* Interactive task cards

---

# 🛠️ Tech Stack

## Frontend

* React
* CSS
* React Icons

## Backend

* FastAPI
* SQLAlchemy
* Uvicorn

## Database

* PostgreSQL

---

# 📁 Project Structure

```text
my-react-app/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── backend/
    ├── main.py
    ├── models.py
    ├── database.py
    ├── .env
    └── requirements.txt
```

---

# ⚙️ Backend Setup

## 1️⃣ Navigate to Backend

```bash
cd backend
```

---

## 2️⃣ Create Virtual Environment

```bash
python -m venv venv
```

---

## 3️⃣ Activate Virtual Environment

### Windows

```bash
venv\Scripts\Activate
```

---

## 4️⃣ Install Dependencies

```bash
pip install fastapi uvicorn sqlalchemy psycopg2-binary python-dotenv
```

---

## 5️⃣ Configure Environment Variables

Create a `.env` file inside `backend/`

```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432
```

---

## 6️⃣ Run Backend Server

```bash
uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

# 💻 Frontend Setup

## 1️⃣ Navigate to Frontend

```bash
cd frontend
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Install React Icons

```bash
npm install react-icons
```

---

## 4️⃣ Start Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 🗄️ PostgreSQL Setup

1. Install PostgreSQL
2. Open pgAdmin
3. Create a database named:

```text
todo_db
```

4. Update your `.env` file with PostgreSQL credentials

---

# 🔗 API Endpoints

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| GET    | `/todos`      | Fetch all tasks   |
| POST   | `/todos`      | Create a task     |
| PUT    | `/todos/{id}` | Toggle completion |
| DELETE | `/todos/{id}` | Delete task       |

---

# 🧠 Concepts Learned

This project covers:

* Full-stack development
* REST APIs
* Database integration
* React state management
* API integration with fetch
* SQLAlchemy ORM
* Backend architecture
* CRUD operations

---

# 🚀 Future Improvements

* Edit tasks
* Authentication
* JWT login
* Dark mode
* Due dates
* Drag & drop tasks
* Notifications
* Docker support
* Deployment

---

# 📸 Preview

<img width="1816" height="1028" alt="image" src="https://github.com/user-attachments/assets/744454bf-ca0d-42b8-8401-614f74d977cf" />


---

# 👩‍💻 Author

Developed by Devaki R

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
