@echo off
cd backend
if not exist "venv" (
    python -m venv venv
)
call venv\Scripts\activate.bat
pip install --upgrade pip
pip install -r requirements.txt --force-reinstall
uvicorn main:app --reload --host 0.0.0.0 --port 8000

