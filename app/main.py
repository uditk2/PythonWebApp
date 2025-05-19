from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn
from pathlib import Path

from app.core.config import settings
from app.api.routes import base, example
from app.middleware import logging_middleware, auth_middleware

app = FastAPI(
    title=settings.PROJECT_NAME,
    description=settings.PROJECT_DESCRIPTION,
    version=settings.PROJECT_VERSION
)

# Mount static files
app.mount("/static", StaticFiles(directory=Path(__file__).parent / "static"), name="static")

# Configure templates
templates = Jinja2Templates(directory=Path(__file__).parent / "templates")

# Add middleware
app.add_middleware(logging_middleware.LoggingMiddleware)
app.add_middleware(auth_middleware.AuthMiddleware)

# Include routers
app.include_router(base.router)
app.include_router(example.router, prefix="/example")

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)