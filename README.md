# Python Web Application

A modular web application with a FastAPI backend and Next.js frontend.

## Features

- Modular API structure (functions -> files, files -> folders)
- Next.js frontend with Tailwind CSS
- OAuth authentication
- GrapeJS compatible pages
- Docker and Docker Compose support

## Project Structure

### Backend

The backend follows a functional programming approach with a modular structure:

- Each API endpoint resides in its own file
- Route types are organized in separate folders
- Services are separated by domain

### Frontend

The frontend is built with Next.js and follows a modular structure:

- Pages for different routes
- Components organized by feature
- Services for API communication
- Context for state management

## GrapeJS Compatibility

The pages are designed to be compatible with GrapeJS for visual editing:

- HTML elements have `data-gjs-editable="true"` attributes
- CSS classes are used for styling instead of inline styles
- Components are modular and can be easily replaced

## Getting Started

### Prerequisites

- Docker and Docker Compose

### Running the Application

1. Clone the repository
2. Run the application with Docker Compose:
