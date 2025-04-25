from fastapi import APIRouter

from .login import login
from .oauth import oauth_login, oauth_callback
from .logout import logout

router = APIRouter()

# Register route functions
router.post("/login", **login)
router.get("/oauth/{provider}", **oauth_login)
router.get("/oauth/{provider}/callback", **oauth_callback)
router.post("/logout", **logout)