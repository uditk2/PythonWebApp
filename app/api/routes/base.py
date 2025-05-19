from fastapi import APIRouter, Request, Depends
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from pathlib import Path

from app.core.config import settings

router = APIRouter()
templates = Jinja2Templates(directory=Path(__file__).parent.parent.parent / "templates")

@router.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse(
        "pages/index.html", 
        {
            "request": request, 
            "layout": settings.DEFAULT_LAYOUT,
            "navbar": settings.DEFAULT_NAVBAR,
            "title": "Home",
            "settings": settings
        }
    )

@router.get("/health", tags=["health"])
async def health_check():
    return {"status": "ok"}