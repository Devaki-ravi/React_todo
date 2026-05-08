from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import SessionLocal, engine
from models import Todo, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Todo API running"}


@app.get("/todos")
def get_todos():

    db = SessionLocal()

    todos = db.query(Todo).all()

    return todos


@app.post("/todos")
def create_todo(todo: dict):

    db = SessionLocal()

    new_todo = Todo(
        title=todo["title"],
        category=todo["category"],
        priority=todo["priority"],
        completed=False
    )

    db.add(new_todo)

    db.commit()

    db.refresh(new_todo)

    return new_todo


@app.delete("/todos/{todo_id}")
def delete_todo(todo_id: int):

    db = SessionLocal()

    todo = db.query(Todo).filter(
        Todo.id == todo_id
    ).first()

    if todo:
        db.delete(todo)
        db.commit()

        return {"message": "Todo deleted"}

    return {"error": "Todo not found"}


@app.put("/todos/{todo_id}")
def toggle_todo(todo_id: int):

    db = SessionLocal()

    todo = db.query(Todo).filter(
        Todo.id == todo_id
    ).first()

    if todo:
        todo.completed = not todo.completed

        db.commit()

        return todo

    return {"error": "Todo not found"}