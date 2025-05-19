from fastapi import APIRouter, Request, Depends
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from pathlib import Path
from app.core.config import settings

router = APIRouter(tags=["example"])
templates = Jinja2Templates(directory=Path(__file__).parent.parent.parent / "templates")

@router.get("/", response_class=HTMLResponse)
async def example_page(request: Request):
    return templates.TemplateResponse(
        "pages/example.html", 
        {
            "request": request, 
            "layout": "dashboard",
            "navbar": "side_fixed",
            "title": "Example Page",
            "settings": settings
        }
    )

@router.get("/data")
async def example_data():
    return {"message": "This is example data from the API"}