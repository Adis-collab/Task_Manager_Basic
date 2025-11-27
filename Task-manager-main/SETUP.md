# Setup and Run Commands

## Quick Start Commands

### 1. Start Backend Server

Open Terminal 1:
```bash
cd /Users/adi/Desktop/Task-manager-main
./run-backend.sh
```

Or manually:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Backend will run on: `http://localhost:8000`
API Docs: `http://localhost:8000/docs`

### 2. Start Frontend Server

Open Terminal 2:
```bash
cd /Users/adi/Desktop/Task-manager-main
./run-frontend.sh
```

Or manually:
```bash
cd frontend
npm install
npm start
```

Frontend will run on: `http://localhost:3000`

## What Was Fixed

1. **Backend Import Issues**: Fixed relative imports (`.models`, `.database`) to absolute imports
2. **Missing API Endpoint**: Added `GET /tasks/{task_id}` endpoint for editing tasks
3. **Login Bug**: Fixed Login.js to use `username` instead of `email` (matching backend)
4. **Frontend Structure**: Created proper React app structure with package.json and index.html
5. **Import Paths**: Fixed all import paths in frontend components
6. **File Organization**: Reorganized all files into `frontend/` and `backend/` folders
7. **Error Handling**: Added error handling in TaskForm component
8. **Dependencies**: Added useEffect dependency array fix

## Project Structure

```
Task-manager-main/
├── backend/
│   ├── main.py          # FastAPI app
│   ├── models.py        # Database models
│   ├── schemas.py       # Pydantic schemas
│   ├── crud.py          # Database operations
│   ├── auth.py          # Authentication
│   ├── database.py      # DB config
│   ├── dependencies.py  # FastAPI dependencies
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── api.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Navbar.js
│   │   ├── Taskform.js
│   │   └── Tasklist.js
│   ├── public/
│   │   └── index.html
│   └── package.json
├── run-backend.sh
├── run-frontend.sh
└── README.md
```

## Testing the Application

1. Start both servers (backend and frontend)
2. Open browser to `http://localhost:3000`
3. Register a new user
4. Login with your credentials
5. Create, edit, and delete tasks

## Troubleshooting

- **Backend won't start**: Make sure you're in the backend directory and virtual environment is activated
- **Frontend won't start**: Run `npm install` in the frontend directory first
- **CORS errors**: Make sure backend is running on port 8000
- **Database errors**: The SQLite database will be created automatically in the backend directory

