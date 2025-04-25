from fastapi import APIRouter

from .get_welcome import get_welcome

router = APIRouter()

# Register route functions
router.get("", **get_welcome)