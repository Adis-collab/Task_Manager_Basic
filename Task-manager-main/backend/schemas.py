from pydantic import BaseModel
from typing import Optional


class TaskBase(BaseModel):
    title: str
    description: Optional[str] = None
    completed: Optional[bool] = False


class TaskCreate(TaskBase):
    pass


class Task(TaskBase):
    id: int
    owner_id: int

    class Config:
        from_attributes = True



class UserBase(BaseModel):
    username: str
    email: str


class UserCreate(UserBase):
    password: str  
class UserLogin(BaseModel):
    username: str
    password: str

class User(UserBase):
    id: int
    role: str      

    class Config:
        from_attributes = True

      
