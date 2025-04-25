from typing import Dict, Optional

# Mock user database - in a real application, use a proper database
users_db = {
    "johndoe": {
        "username": "johndoe",
        "email": "johndoe@example.com",
        "hashed_password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW"  # "secret"
    }
}

def get_user(username: str) -> Optional[Dict]:
    if username in users_db:
        return users_db[username]
    return None

def authenticate_user(username: str, password: str) -> Optional[Dict]:
    user = get_user(username)
    if not user:
        return None
    # In a real application, verify the password hash
    return user