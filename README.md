# FastAPI Web Application

A modular Python-based web application using FastAPI with Uvicorn integration, Bootstrap, and Mermaid.js for diagrams.

## Features

- **FastAPI Backend**: High-performance REST API framework
- **Uvicorn Integration**: ASGI server for running the application
- **Bootstrap Frontend**: Responsive UI components and layout
- **Mermaid.js**: JavaScript-based diagramming and charting tool
- **Docker & Docker Compose**: Containerization for easy deployment
- **Modular Architecture**: Organized codebase with separation of concerns
- **Flexible Layout System**: Multiple navigation options (top fixed, top scroll, side fixed, side reveal, etc.)

## Project Structure

```
webapp/
├── app/
│   ├── main.py                 # FastAPI application entry point
│   ├── core/                   # Core application modules
│   │   └── config.py           # Application configuration
│   ├── api/                    # API endpoints
│   │   └── routes/             # API route modules
│   │       ├── base.py         # Base routes
│   │       └── example.py      # Example routes
│   ├── middleware/             # Middleware components
│   │   ├── logging_middleware.py  # Logging middleware
│   │   └── auth_middleware.py  # Authentication middleware
│   ├── static/                 # Static files
│   │   ├── css/                # CSS stylesheets
│   │   │   └── custom.css      # Custom CSS
│   │   └── js/                 # JavaScript files
│   │       └── custom.js       # Custom JS
│   └── templates/              # Jinja2 templates
│       ├── base.html           # Base template
│       ├── components/         # Reusable components
│       │   ├── navbar_*.html   # Different navbar implementations
│       │   ├── sidebar_*.html  # Sidebar components
│       │   └── footer.html     # Footer component
│       ├── layouts/            # Different page layouts
│       │   ├── default.html    # Default layout
│       │   └── dashboard.html  # Dashboard layout
│       └── pages/              # Page templates
│           ├── index.html      # Home page
│           └── example.html    # Example page
├── tests/                      # Test directory
│   └── test_api/              # API tests
│       └── test_endpoints.py   # Endpoint tests
├── .env                        # Environment variables
├── Dockerfile                  # Docker container definition
├── docker-compose.yml          # Docker Compose configuration
└── requirements.txt            # Python dependencies
```

## Getting Started

### Running with Docker

The easiest way to run the application is using Docker Compose:

```bash
docker-compose up
```

Then access the application at http://localhost:8000

### Running Locally

1. Create a virtual environment and activate it:
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

2. Install the dependencies:
```bash
pip install -r requirements.txt
```

3. Run the application:
```bash
uvicorn app.main:app --reload
```

4. Access the application at http://localhost:8000

## Layout Options

The application supports various layout options that can be configured:

### Navigation Types:

- **Top Fixed**: Fixed navbar at the top of the page
- **Top Scroll**: Scrollable navbar at the top
- **Side Fixed**: Fixed sidebar navigation
- **Side Reveal**: Collapsible sidebar navigation

Change the layout by modifying the `layout` and `navbar` parameters when rendering templates.

## API Documentation

When the application is running, you can access the automatic API documentation at:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Development

### Adding a New Page

1. Create a new template in `app/templates/pages/`
2. Add a new route in `app/api/routes/`
3. Register the route in `app/main.py`

### Adding a New Layout

1. Create a new layout file in `app/templates/layouts/`
2. Use it in your routes by specifying the layout name

## Testing

Run tests using pytest:

```bash
pytest
```