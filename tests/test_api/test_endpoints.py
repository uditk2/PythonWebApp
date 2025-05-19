from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_endpoint():
    """Test the health check endpoint."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_example_data_endpoint():
    """Test the example data API endpoint."""
    response = client.get("/example/data")
    assert response.status_code == 200
    assert "message" in response.json()