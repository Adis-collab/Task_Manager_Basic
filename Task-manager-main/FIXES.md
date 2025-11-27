# Fixes Applied

## Backend Fix: Bcrypt Compatibility Issue

**Problem**: The newer version of bcrypt (5.0.0) is incompatible with passlib, causing errors during password hashing.

**Solution**: Pinned bcrypt to version 4.0.1 in `requirements.txt` which is compatible with passlib.

**Action Required**: 
1. Stop the backend server (Ctrl+C)
2. Reinstall dependencies:
```bash
cd backend
source venv/bin/activate
pip install -r requirements.txt --force-reinstall
```
3. Restart the backend server

## Frontend Fix: React Hook Warnings

**Problem**: Missing dependencies in useEffect hooks causing ESLint warnings.

**Solution**: 
- Used `useCallback` to memoize functions
- Added all required dependencies to useEffect dependency arrays

**Files Fixed**:
- `frontend/src/Taskform.js`
- `frontend/src/Tasklist.js`

The warnings should now be resolved.

