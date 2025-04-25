from fastapi import Depends, status
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/login")

class LogoutResponse(BaseModel):
    message: str

async def logout_handler(token: str = Depends(oauth2_scheme)):
    return LogoutResponse(message="Successfully logged out")

logout = {
    "endpoint": logout_handler,
    "response_model": LogoutResponse
}