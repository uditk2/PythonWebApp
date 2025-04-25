from fastapi import Request, HTTPException, status
from fastapi.responses import RedirectResponse
from pydantic import BaseModel

from services.auth.oauth import get_oauth_login_url, process_oauth_callback
from services.auth.token import create_access_token

class OAuthResponse(BaseModel):
    login_url: str

async def oauth_login_handler(provider: str):
    login_url = get_oauth_login_url(provider)
    if not login_url:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Unsupported OAuth provider: {provider}"
        )
    return OAuthResponse(login_url=login_url)

async def oauth_callback_handler(provider: str, request: Request):
    code = request.query_params.get("code")
    if not code:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Authorization code not provided"
        )
    user_info = process_oauth_callback(provider, code)
    if not user_info:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Failed to authenticate with OAuth provider"
        )
    access_token = create_access_token(data={"sub": user_info["email"]})
    frontend_url = "http://localhost:3000/auth/callback"
    redirect_url = f"{frontend_url}?token={access_token}"
    return RedirectResponse(url=redirect_url)

oauth_login = {
    "endpoint": oauth_login_handler,
    "response_model": OAuthResponse
}

oauth_callback = {
    "endpoint": oauth_callback_handler
}