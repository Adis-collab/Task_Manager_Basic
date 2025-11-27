from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db
from auth import get_current_user

def get_db_session():
    db = next(get_db())
    try:
        return db
    finally:
        db.close()

def require_admin(current_user=Depends(get_current_user)):
    if current_user.role != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admins only: You do not have permission to perform this action."
        )
    return current_user
