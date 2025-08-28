# AI Business Analyst Portfolio

A modern portfolio website showcasing business analysis expertise with AI integration. Built with React, FastAPI, and PostgreSQL.

## Features

- Interactive AI Assistant (Buddy) for website navigation
- Timeline-based experience visualization
- Project showcase with categorization
- Professional certifications display
- Freelancing services section
- Contact form with PostgreSQL integration
- Responsive modern design

## Tech Stack

### Frontend
- React.js with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation

### Backend
- FastAPI (Python)
- PostgreSQL database
- SQLAlchemy ORM
- Pydantic for data validation

## Setup Instructions

### Prerequisites
- Node.js
- Python 3.8+
- PostgreSQL

### Database Setup
1. Create a PostgreSQL database named `portfolio_db`
2. Update the `.env` file in the backend directory with your database credentials

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Deployment

The website is deployed using GitHub Pages for the frontend and a separate server for the backend API.

### Frontend Deployment
```bash
npm run deploy
```

### Backend Deployment
1. Set up your server (e.g., AWS, Heroku, DigitalOcean)
2. Configure environment variables
3. Set up PostgreSQL database
4. Deploy the FastAPI application

## Contact

- LinkedIn: [Sangeth Roshan J](www.linkedin.com/in/sangeth-roshan-j-11070418a)
