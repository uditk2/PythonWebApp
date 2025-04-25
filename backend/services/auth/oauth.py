import httpx
from typing import Dict, Optional

# OAuth configuration - should be stored in environment variables in production
OAUTH_CONFIGS = {
    "google": {
        "client_id": "your-google-client-id",
        "client_secret": "your-google-client-secret",
        "authorize_url": "https://accounts.google.com/o/oauth2/auth",
        "token_url": "https://oauth2.googleapis.com/token",
        "userinfo_url": "https://www.googleapis.com/oauth2/v3/userinfo",
        "redirect_uri": "http://localhost:8000/api/auth/oauth/google/callback",
        "scope": "openid email profile"
    }
}

def get_oauth_login_url(provider: str) -> Optional[str]:
    if provider not in OAUTH_CONFIGS:
        return None
    config = OAUTH_CONFIGS[provider]
    params = {
        "client_id": config["client_id"],
        "redirect_uri": config["redirect_uri"],
        "response_type": "code",
        "scope": config["scope"]
    }
    query_string = "&".join([f"{k}={v}" for k, v in params.items()])
    return f"{config['authorize_url']}?{query_string}"

def process_oauth_callback(provider: str, code: str) -> Optional[Dict]:
    if provider not in OAUTH_CONFIGS:
        return None
    config = OAUTH_CONFIGS[provider]
    # Exchange code for token (mocked for simplicity)
    # In production, an HTTP request should be made to the token_url
    user_info = {
        "email": "oauth_user@example.com",
        "name": "OAuth User"
    }
    return user_info