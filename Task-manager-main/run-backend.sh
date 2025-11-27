#!/bin/bash
cd backend
if [ ! -d "venv" ]; then
    python3 -m venv venv
fi
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt --force-reinstall
uvicorn main:app --reload --host 0.0.0.0 --port 8000

