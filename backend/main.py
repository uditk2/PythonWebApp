from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.auth import router as auth_router
from routes.welcome import router as welcome_router

app = FastAPI(title="Python Web Application API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Include routers
app.include_router(auth_router, prefix="/api/auth", tags=["Authentication"])
app.include_router(welcome_router, prefix="/api/welcome", tags=["Welcome"])

@app.get("/api/health")
def health_check():
    return {"status": "healthy"}