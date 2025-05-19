import secrets
from typing import Any, Dict, List, Optional

from pydantic import validator
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "FastAPI Web App"
    PROJECT_DESCRIPTION: str = "Modular FastAPI Web Application with Bootstrap and Mermaid"
    PROJECT_VERSION: str = "0.1.0"
    
    API_PREFIX: str = "/api/v1"
    
    SECRET_KEY: str = secrets.token_urlsafe(32)
    
    # CORS settings
    BACKEND_CORS_ORIGINS: List[str] = ["*"]
    
    # Template settings
    DEFAULT_LAYOUT: str = "default"
    DEFAULT_NAVBAR: str = "top_fixed"

    class Config:
        case_sensitive = True
        env_file = ".env"


settings = Settings()