# Task Manager Application

A full-stack task management application built with FastAPI (backend) and React (frontend).

## Project Structure

```
Task-manager-main/
├── backend/          # FastAPI backend
│   ├── main.py      # FastAPI application
│   ├── models.py    # SQLAlchemy models
│   ├── schemas.py   # Pydantic schemas
│   ├── crud.py      # Database operations
│   ├── auth.py      # Authentication logic
│   ├── database.py  # Database configuration
│   └── requirements.txt
├── frontend/        # React frontend
│   ├── src/         # React source files
│   ├── public/      # Public assets
│   └── package.json
└── README.md
```

## Prerequisites

- Python 3.8+
- Node.js 14+
- npm or yarn

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (recommended):
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the backend server:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend API will be available at `http://localhost:8000`
API documentation will be available at `http://localhost:8000/docs`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`

## Running the Project

### Quick Start (Using Scripts)

**Terminal 1 - Backend:**
```bash
./run-backend.sh
```

**Terminal 2 - Frontend:**
```bash
./run-frontend.sh
```

### Manual Setup

**Terminal 1 - Backend:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm start
```

## API Endpoints

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and get access token
- `GET /tasks` - Get all tasks for the current user
- `POST /tasks` - Create a new task
- `GET /tasks/{task_id}` - Get a specific task
- `PUT /tasks/{task_id}` - Update a task
- `DELETE /tasks/{task_id}` - Delete a task

## Features

- User authentication (register/login)
- JWT token-based authentication
- Create, read, update, and delete tasks
- User-specific task management
- Responsive React frontend

## Database

The application uses SQLite by default. The database file (`tasks.db`) will be created automatically in the backend directory when you first run the application.

## Notes

- Make sure the backend is running before starting the frontend
- The frontend expects the backend to be running on `http://localhost:8000`
- Authentication tokens are stored in localStorage
