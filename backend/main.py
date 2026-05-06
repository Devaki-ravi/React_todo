from fastapi import FastAPI
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Todo, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

# Create database session
def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


# Home route
@app.get("/")
def home():
    return {"message": "Todo API running"}


# Get all todos
@app.get("/todos")
def get_todos():
    db = SessionLocal()

    todos = db.query(Todo).all()

    return todos


# Create todo
@app.post("/todos")
def create_todo(task: str):
    db = SessionLocal()

    new_todo = Todo(
        task=task,
        completed=False
    )

    db.add(new_todo)

    db.commit()

    db.refresh(new_todo)

    return new_todo


# Delete todo
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