from pydantic import BaseModel
from typing import List

class WelcomeContent(BaseModel):
    title: str
    message: str
    features: List[str]

async def get_welcome_handler():
    return WelcomeContent(
        title="Welcome to Python Web Application",
        message="This is a modular FastAPI and Next.js application",
        features=[
            "Modular API structure",
            "Next.js frontend",
            "OAuth authentication",
            "GrapeJS compatible pages"
        ]
    )

get_welcome = {
    "endpoint": get_welcome_handler,
    "response_model": WelcomeContent
}